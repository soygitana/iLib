/**
 * ilibdata-webpack-loader.js - A Webpack loader to process js files and insert
 * requires for all of the data that is needed for all the locales
 *
 * @license
 * Copyright © 2018, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const getOptions = require('loader-utils').getOptions;
// import validateOptions from 'schema-utils';

var path = require('path');
var fs = require('fs');
var Locale = require('./Locale.js');
var Utils = require('./Utils.js');
var LocaleMatcher = require('./LocaleMatcher.js');

/*
const schema = {
    type: 'object',
    properties: {
        locales: {
            type: 'array'
        }
    }
};
*/

function makeDirs(path) {
    var parts = path.split(/[\\\/]/);

    for (var i = 1; i <= parts.length; i++) {
        var p = parts.slice(0, i).join("/");
        if (p && p.length > 0 && !fs.existsSync(p)) {
            fs.mkdirSync(p);
        }
    }
}

function toIlibDataName(str) {
    return (!str || str === "root" || str === "*") ? "" : str.replace(/[\.:\(\)\/\\\+\-]/g, "_");
}

let dataPatternSlashStar = /\/\*\s*!data\s*([^\*]+)\*\//g;
let dataPatternSlashSlash = /\/\/\s*!data\s*([^\n]+)/g;

let macroPatternSlashSlash = /\/\/\s*!macro\s*(\S*)/g;
let macroPatternQuoted = /["']!macro\s*(\S*)["']/g;

let loadLocaleDataPattern = /\/\/\s*!loadLocaleData/g;
let defineLocaleDataPattern = /\/\/\s*!defineLocaleData/g;

let normPattern = /(nfc|nfd|nfkc|nfkd)(\/(\w+))?/g;

function emitLocaleData(compilation, options) {
    var localeData = compilation.localeDataSet;
    var outputFileName, output;
    var scripts = new Set();
    var normalizations = {};

    if (localeData) {
        var charsets = new Set();
        var charmaps = {};
        var lang2charset;
        var outputSet = {};
        var match;

        var locales = options.locales;
        locales.forEach(function(locale) {
            var lm = new LocaleMatcher({locale: locale});
            var full = lm.getLikelyLocale();
            if (full.getScript()) {
                scripts.add(full.getScript());
            }
        });
        
        locales.forEach(function(locale) {
            localeData.forEach(function(filename) {
                normPattern.lastIndex = 0;
                if (filename === "charset" || filename === "charmaps") {
                    // charmaps and charset info are special cases because they are non-locale data.
                    // If they just use the generic "charset" or "charmaps" data, then
                    // we figure out which charsets are appropriate for the locale
                    if (!lang2charset) {
                        lang2charset = require("../data/locale/lang2charset.json");
                    }

                    var l = new Locale(locale);
                    var spec = l.getLanguage() + (l.getScript() ? ("-" + l.getScript()) : ""); // TODO: should use l.getLangScript()
                    if (lang2charset[spec]) {
                        // always add the charset, even when charmaps are requested, because the
                        // charmaps need the charset for the charmap
                        lang2charset[spec].forEach(function(charsetName) {
                            charsets.add(charsetName);
                        });

                        if (filename === "charmaps") {
                            if (!charmaps[spec]) {
                                charmaps[spec] = new Set();
                            }
                            lang2charset[spec].forEach(function(charsetName) {
                                charmaps[spec].add(charsetName);
                            });
                        }
                    }
                } else if ((match = normPattern.exec(filename)) !== null) {
                    var form = match[1];
                    if (!normalizations[form]) {
                        normalizations[form] = new Set();
                    }
                    if (match.length > 3) {
                        normalizations[form].add(match[3] || "");
                    }
                } else if (filename === "zoneinfo") {
                    // time zone data in the zoneinfo files are a special case because they are non-locale data
                    // console.log(">>>>>>>>>>>>> processing zoneinfo. cwd is " + process.cwd());
                    var cwdToData = "./data/locale/zoneinfo/zonetab.json";
                    var data = fs.readFileSync(cwdToData, "utf-8");
                    var zonetab = JSON.parse(data);
                    // console.log(">>>>>>>>>>>>> got zone tab.");
                    var line = 'ilib.data.zoneinfo.zonetab = ' + data + ';\n';
                    if (!outputSet.root) {
                        outputSet.root = {};
                    }
                    outputSet.root.zonetab = line;

                    var regionSet = new Set();
                    locales.forEach(function(locale) {
                        regionSet.add(new Locale(locale).region);
                    });
                    var zoneSet = new Set();
                    regionSet.forEach(function(region) {
                        if (zonetab[region]) {
                            zonetab[region].forEach(function(zone) {
                                zoneSet.add(zone);
                            });
                        }
                    });
                    zoneSet.forEach(function(zone) {
                        try {
                            var cwdToData = path.join("data/locale/zoneinfo", zone + ".json");
                            if (fs.existsSync(cwdToData)) {
                                data = fs.readFileSync(cwdToData, "utf-8");
                                var line = 'ilib.data.zoneinfo["' + zone.replace(/-/g, "m").replace(/\+/g, "p") + '"] = ' + data + ';\n';
                                // console.log(">>>>>>>>>>>>> Adding zone: " + line);
                                outputSet.root[zone] = line;
                            }
                        } catch (e) {
                            console.log("Error: " + e);
                        }
                    }.bind(this));

                    // now add the generic zones
                    var list = fs.readdirSync("data/locale/zoneinfo");
                    list = list.concat(fs.readdirSync("data/locale/zoneinfo/Etc").map(function(zone) {
                        return "Etc/" + zone;
                    }));

                    list.filter(function(pathname) {
                        return pathname.endsWith(".json") && pathname !== "zonetab.json";
                    }).forEach(function (file) {
                        var zone = path.basename(file, ".json");
                        var cwdToData = path.join("data/locale/zoneinfo", file);
                        data = fs.readFileSync(cwdToData, "utf-8");
                        var line = 'ilib.data.zoneinfo["' + zone.replace(/-/g, "m").replace(/\+/g, "p") + '"] = ' + data + ';\n';
                        // console.log(">>>>>>>>>>>>> Adding generic zone: " + line);
                        // compiler.addDependency(cwdToData);
                        outputSet.root[zone] = line;
                    }.bind(this));
                } else {
                    var l = new Locale(locale);

                    var parts = [
                        ".",
                        l.language
                    ];

                    if (l.script) {
                        parts.push(l.language + "/" + l.script);
                        if (l.region) {
                            parts.push(l.language + "/" + l.script + "/" + l.region);
                        }
                    }
                    if (l.region) {
                        parts.push(l.language + "/" + l.region);
                        parts.push("und/" + l.region);
                    }

                    parts.forEach(function(localeDir) {
                        try {
                            var cwdToData = path.join("data/locale", localeDir, filename + ".json");
                            if (fs.existsSync(cwdToData)) {
                                var part = localeDir === "." ? "root" : localeDir;
                                part = part.replace(/\//g, "-");

                                if (!outputSet[part]) {
                                    outputSet[part] = {};
                                }
                                if (!outputSet[part][filename]) {
                                    var line = "ilib.data." + toIlibDataName(filename);
                                    if (part !== "root") {
                                        line += "_" + toIlibDataName(part);
                                    }
                                    data = fs.readFileSync(cwdToData, "utf-8");
                                    line += " = " + data + ";\n";
                                    // console.log(">>>>>>>>>>>>> Adding line: " + line);

                                    outputSet[part][filename] = line;
                                }
                            }
                        } catch (e) {
                            console.log("Error: " + e);
                        }
                    }.bind(this));
                }
            });
        }.bind(this));

        if (charsets.size > 0) {
            var optional = new Set();

            if (!outputSet.root) {
                outputSet.root = {};
            }
            var data, cwdToData ="data/locale/charsetaliases.json";
            if (!outputSet.root.charsetaliases && fs.existsSync(cwdToData)) {
                data = fs.readFileSync(cwdToData, "utf-8");
                var line = "ilib.data.charsetaliases = " + data + ";\n";
                outputSet.root.charsetaliases = line;
            }

            charsets.forEach(function(charset) {
                var data, cwdToData = path.join("data/locale/charset", charset + ".json");
                if (!outputSet.root[filename] && fs.existsSync(cwdToData)) {
                    data = fs.readFileSync(cwdToData, "utf-8");
                    var line = "ilib.data.charset_" + toIlibDataName(charset) + " = " + data + ";\n";
                    outputSet.root[charset] = line;

                    var cs = JSON.parse(data);
                    if (typeof(cs.optional) === "boolean" && cs.optional) {
                        optional.add(charset);
                    }
                }
            });

            for (var locale in charmaps) {
                var loc = (locale === "*" ? "root" : locale);
                if (!outputSet[loc]) {
                    outputSet[loc] = {};
                }
                charmaps[locale].forEach(function(charset) {
                    var data, cwdToData = path.join("data/locale/charmaps", charset + ".json");
                    if (!optional.has(charset) && !outputSet[loc][charset] && fs.existsSync(cwdToData)) {
                        data = fs.readFileSync(cwdToData, "utf-8");
                        var line = "ilib.data.charmaps_" + toIlibDataName(charset) + " = " + data + ";\n";
                        outputSet[loc][charset] = line;
                    }
                });
            }
        }
        
        function addForm(form, script) {
            if (script) {
                try {
                    var cwdToData = path.join("data/locale", form, script + ".json");
                    if (fs.existsSync(cwdToData)) {
                        data = fs.readFileSync(cwdToData, "utf-8");
                        var line = '// form ' + form + ' script ' + script + '\nilib.extend(ilib.data.norm.' + form + ', ' + data + ');\n';
                        // console.log(">>>>>>>>>>>>> Adding form: " + form);
                        outputSet.root[form + "/" + script] = line;
                    }
                } catch (e) {
                    console.log("Error: " + e);
                }
            }
        }
        
        for (var form in normalizations) {
            if (normalizations[form].has("all")) {
                // if "all" is there, then we don't need to add each script individually
                // because they are all in the all.json already
                addForm(form, "all");
            } else {
                var set = (normalizations.size === 0 || (normalizations[form].has("") && normalizations.size === 1)) ? scripts : normalizations[form]; 
                set.forEach(function(script) {
                    console.log("Inluding " + form + " for script " + script);
                    addForm(form, script);
                });
            }
        }

        for (var filename in outputSet) {
            var outputFileName = filename + ".js";
            var dataFiles = outputSet[filename];

            var output =
                "/*\n" +
                " * WARNING: this is a file generated by ilib-webpack-plugin.js.\n" +
                " * Do not hand edit or else your changes may be overwritten and lost.\n" +
                " */\n"
            output += (options.assembly === "dynamic") ?
                "module.exports.installLocale = function(ilib) {\n" :
                "var ilib = require('../../../../../lib/ilib.js');\n";

            for (var dataFile in dataFiles) {
                output += dataFiles[dataFile];
            }

            output += (options.assembly === "dynamic") ?
                "};\n" :
                "module.exports = ilib;\n";

            console.log("Emitting " + outputFileName + " size " + output.length);

            /*
            if (options.compilationType === "compiled") {
                try {
                    var result = UglifyJS.minify(output, {fromString: true});
                    if (!result.error) {
                        output = result.code;
                        //console.log("After compression: " + output.length);
                    //} else {
                        //console.log("Error compressing " + outputFileName + ": " + result.error);
                    }
                } catch (e) {
                    console.log("Error while parsing " + filename);
                    console.log(e);
                }
            }
            */

            var outputPath = path.join("./output/js", options.size, options.assembly, "locales", outputFileName);
            makeDirs(path.dirname(outputPath));
            fs.writeFileSync(outputPath, output, "utf-8");
        }

        // console.log("Done emitting locale data.");
        return Object.keys(outputSet);
    } else {
        console.log("No data to include");
        return [];
    }
}

var ilibDataLoader = function(source) {
    const options = getOptions(this);
    var match;
    var partial = source;
    var output = "";

    // validateOptions(schema, options, 'Ilib data loader');

    // console.log("ilibdata-loader: processing file ");

    // first find all the locale parts we need to search
    var locales = options.locales;

    // mix all of the locale data we find in all of the js file together so that
    // we can emit one file for each locale with all the locale data that are
    // needed
    if (!this._compilation.localeDataSet) {
        this._compilation.localeDataSet = new Set();
    }
    var dataSet = this._compilation.localeDataSet;

    var searchFile = function (re, text) {
        var output = "";

        re.lastIndex = 0;
        while ((match = re.exec(text)) !== null) {
            // console.log(">>>>>>>>>> found a match");
            var datafiles = match[1].split(/\s+/g);

            datafiles.forEach(function(filename) {
                dataSet.add(filename);
            });
        }
    };

    var processMacros = function (re, text) {
        var partial = text;
        var output = "";

        re.lastIndex = 0;
        while ((match = re.exec(partial)) !== null) {
            // console.log(">>>>>>>>>> found a match");
            var macroName = match[1];
            output += partial.substring(0, match.index);

            if (macroName) {
                if (macroName.toLowerCase() === "localelist") {
                    output += locales.map(function(locale) {
                        return '"' + locale + '"';
                    }).join(", ");
                } else if (macroName.toLowerCase() === "ilibversion") {
                    // the DefinePlugin in the config will replace this with the
                    // actual version number from the project.json file
                    output += "__VERSION__";
                }
            }

            partial = partial.substring(match.index + match[0].length);
            re.lastIndex = 0;
        }

        return output + partial;
    }.bind(this);

    searchFile(dataPatternSlashStar, partial);
    searchFile(dataPatternSlashSlash, partial);

    partial = processMacros(macroPatternSlashSlash, partial);
    partial = processMacros(macroPatternQuoted, partial);

    var processDefineLocaleData = function (text) {
        var partial = text;
        var output = "";

        defineLocaleDataPattern.lastIndex = 0;
        if ((match = defineLocaleDataPattern.exec(partial)) !== null) {
            // console.log(">>>>>>>>>> found a match");
            output += partial.substring(0, match.index);
            if (options.assembly === "dynamic") {
                output +=
                    "ilib.WebpackLoader = require('./WebpackLoader.js');\n" +
                    "ilib.setLoaderCallback(ilib.WebpackLoader(ilib));\n" +
                    "ilib._dyncode = false;\n" +
                    "ilib._dyndata = true;\n";
            } else {
                var files = emitLocaleData(this._compilation, options);
                var outputPath = path.join("../output/js", options.size, options.assembly, "locales");
                files.forEach(function(locale) {
                    output += "require('" + path.join(outputPath, locale + ".js") + "');\n";
                });
                output +=
                    "ilib._dyncode = false;\n" +
                    "ilib._dyndata = false;\n";
            }

            partial = partial.substring(match.index + match[0].length);
            defineLocaleDataPattern.lastIndex = 0;
        }

        return output + partial;
    }.bind(this);

    partial = processDefineLocaleData(partial);

    var processLoadLocaleData = function (text) {
        var partial = text;
        var output = "";

        loadLocaleDataPattern.lastIndex = 0;
        if ((match = loadLocaleDataPattern.exec(partial)) !== null) {
            var files = emitLocaleData(this._compilation, options);
            
            // console.log(">>>>>>>>>> found a match");
            output += partial.substring(0, match.index);
            var outputPath = path.join("../output/js", options.size, options.assembly, "locales");
            files.forEach(function(locale) {
                output +=
                    "        case '" + locale + "':\n" +
                    "            System.import(/* webpackChunkName: '" + locale + "' */ '" + path.join(outputPath, locale + ".js") + "').then(function(module) {\n" +
                    "                module.installLocale(ilib);\n" +
                    "                callback();\n" +
                    "            });\n" +
                    "            break;\n";
            });

            partial = partial.substring(match.index + match[0].length);
            loadLocaleDataPattern.lastIndex = 0;
        }

        return output + partial;
    }.bind(this);

    output = processLoadLocaleData(partial);

    // console.log("****************************************\nTransformed file to:\n" + output);
    return output;
};

module.exports = ilibDataLoader;
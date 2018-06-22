/*
 * genbreak.js - ilib tool to generate the ilib format break iteration
 * locale data and testing dadta
 *
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

/*
 * This code is intended to be run under node.js
 */

var fs = require('fs');
var util = require('util');
var path = require("path");
var common = require('./common.js')
var UnicodeFile = require('./unifile.js');
var coelesce = common.coelesce;
var Locale = common.Locale;
var charIterator = common.charIterator;
var isMember = common.isMember;

// var cldr = require("cldr-data");

function usage() {
    console.log("Usage: genbreak [-h] unicodeCharacterDataDir\n" +
            "Generate the break iteration data and tests.\n\n" +
            "-h or --help\n" +
            "  this help\n" +
            "unicodeCharacterDataDir\n" +
            "  path to the directory containing the Unicode Character Database\n");
    process.exit(1);
}

var toDir = "output";
var unicodeCharacterDataDir;

process.argv.forEach(function (val, index, array) {
    if (val === "-h" || val === "--help") {
        usage();
    }
});

if (process.argv.length > 2) {
    unicodeCharacterDataDir = process.argv[2];
} else {
    usage();
}

console.log("genbreak - generate break iteration data and tests.\n" +
        "Copyright (c) 2018 JEDLSoft\n");

console.log("UCD dir: " + unicodeCharacterDataDir);
console.log("output dir: " + toDir);

if (!fs.existsSync(unicodeCharacterDataDir)) {
    console.error("The Unicode Character Data directory " + unicodeCharacterDataDir + " does not exist.");
    process.exit(2);
}

if (!fs.existsSync(toDir)) {
    common.makeDirs(toDir);
}

/*
// first generate the tests
var wbt = new UnicodeFile({
    path: path.join(unicodeCharacterDataDir, "auxiliary/WordBreakTest.txt")
});

var re = /[0-9A-F][0-9A-F][0-9A-F][0-9A-F]/g;
var len = wbt.length();
var row, match;
var tests = {};

for (var i = 0; i < len; i++ ) {
    row = wbt.get(i);

    var str = row[0].trim();
    str = str.substring(2, str.length - 2)

    str = str.replace(re, function(match) {
       return String.fromCharCode(parseInt(match, 16));
    });

    var segments = str.split(/ ÷ /g).map(function(segment) {
        return segment.replace(/ × /g, "");
    });

    tests[segments.join("")] = segments;
}

// console.log("tests are:");
// console.log(JSON.stringify(tests, undefined, 4));

var testDir = path.join(toDir, "js/test/strings-ext/nodeunit");
common.makeDirs(testDir);
var testFile =
    "/*\n" +
    " * wordBreakTestData.js - word break test data\n" +
    " * \n" +
    " * Copyright © 2018, JEDLSoft\n" +
    " *\n" +
    " * Licensed under the Apache License, Version 2.0 (the \"License\");\n" +
    " * you may not use this file except in compliance with the License.\n" +
    " * You may obtain a copy of the License at\n" +
    " *\n" +
    " *     http://www.apache.org/licenses/LICENSE-2.0\n" +
    " *\n" +
    " * Unless required by applicable law or agreed to in writing, software\n" +
    " * distributed under the License is distributed on an \"AS IS\" BASIS,\n" +
    " * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n" +
    " *\n" +
    " * See the License for the specific language governing permissions and\n" +
    " * limitations under the License.\n" +
    " * /\n" +
    "/* WARNING: THIS IS A FILE GENERATED BY genbreak.js. DO NOT EDIT BY HAND. Rerun genbreak.js instead. * /\n" +
    "var wordBreakTestData = " +
    JSON.stringify(tests, undefined, 4) +
    ";\nmodule.exports = wordBreakTestData;\n";

fs.writeFileSync(path.join(testDir, "wordBreakTestData.js"), testFile, "utf-8");
console.log("Wrote " + path.join(testDir, "wordBreakTestData.js"));
*/

var range, rangeStart, rangeEnd, rangeName;

var wbp = new UnicodeFile({
    path: path.join(unicodeCharacterDataDir, "auxiliary/WordBreakProperty.txt")
});

len = wbp.length();

var propMap = {}
for (var i = 0; i < len; i++ ) {
    row = wbp.get(i);

    rangeName = row[1].trim();

    rangeStart = parseInt(row[0].match(/^[A-F0-9]+/)[0],16);
    rangeEnd = row[0].match(/\.\.[A-F0-9]+/);

    if (rangeEnd && rangeEnd.length > 0) {
        rangeEnd = parseInt(rangeEnd[0].substring(2), 16);
        range = [rangeStart, rangeEnd];
    } else {
        range = [rangeStart];
    }

    if (!propMap[rangeName]) {
        propMap[rangeName] = [range];
    } else {
        propMap[rangeName].push(range);
    }
}

// coelesce neighbouring ranges to minimize the work
for (rangeName in propMap) {
    if (rangeName && propMap[rangeName]) {
        propMap[rangeName] = coelesce(propMap[rangeName], 0);
    }
}

// now reverse the properties map from property name -> character range
// to character -> property name since that is what a break iterator has to do
var reversePropMap = [];
for (rangeName in propMap) {
    for (var i = 0; i < propMap[rangeName].length; i++) {
        range = propMap[rangeName][i];
        if (range.length === 1) {
            reversePropMap.push({
                s: range[0],
                t: rangeName
            });
        } else {
            reversePropMap.push({
                s: range[0],
                e: range[1],
                t: rangeName
            });
        }
    }
}

reversePropMap.sort(function(left, right) {
    return left.s - right.s;
});

var wordBreakRules = {
    "sot": {
        "Any": 0
    },
    "Any": {
        "Format": 1,
        "Extend": 1,
        "ZWJ": 1,
        "Newline": 0,
        "CR": 0,
        "LF": 0
    },
    "CR": {
        "LF": 1,
        "Any": 0
    },
    "LF": {
        "Any": 0
    },
    "ZWJ": {
        "Glue_After_Zwj": 1,
        "EBG": 1,
        "WSegSpace": 1
    },
    "Katakana": {
        "Katakana": 1,
        "ExtendNumLet": 1
    },
    "ALetter": {
        "ALetter": 1,
        "Hebrew_Letter": 1,
        "MidLetter": {
            "ALetter": 1,
            "Hebrew_Letter": 1
        },
        "MidNumLet": {
            "ALetter": 1,
            "Hebrew_Letter": 1
        },
        "Single_Quote": {
            "ALetter": 1,
            "Hebrew_Letter": 1
        },
        "Numeric": 1,
        "ExtendNumLet": 1
    },
    "Numeric": {
        "Numeric": 1,
        "ALetter": 1,
        "Hebrew_Letter": 1,
        "MidNum": {
            "Numeric": 1
        },
        "MidNumLet": {
            "Numeric": 1
        },
        "Single_Quote": {
            "Numeric": 1
        },
        "ExtendNumLet": 1
    },
    "ExtendNumLet": {
        "ExtendNumLet": 1,
        "ALetter": 1,
        "Hebrew_Letter": 1,
        "Numeric": 1,
        "Katakana": 1
    },
    "Hebrew_Letter": {
        "ALetter": 1,
        "Hebrew_Letter": 1,
        "MidLetter": {
            "ALetter": 1,
            "Hebrew_Letter": 1
        },
        "MidNumLet": {
            "ALetter": 1,
            "Hebrew_Letter": 1
        },
        "Single_Quote": {
            "ALetter": 1,
            "Hebrew_Letter": 1
        },
        "Double_Quote": {
            "Hebrew_Letter": 1
        },
        "Numeric": 1,
        "ExtendNumLet": 1
    },
    "E_Base": {
        "E_Modifier": 1
    },
    "EBG": {
        "E_Modifier": 1
    },
    "ZWJ_FE": {
        "Glue_After_Zwj": 1,
        "EBG": 1,
        "Format_FE": 1,
        "Extend_FE": 1,
        "ZWJ_FE": 1,
        "WSegSpace": 1
    },
    "Newline": {
        "Any": 0
    },
    "sot": {
        "Any": 0
    },
    "WSegSpace": {
        "WSegSpace": 1
    }
};

var wordbreak = {
    "properties": reversePropMap,
    "rules": wordBreakRules
};

var p = path.join(toDir, "wordbreak.json");
fs.writeFileSync(p, JSON.stringify(wordbreak, undefined, 4), "utf-8");
console.log("Wrote " + p);

console.log("Done.");
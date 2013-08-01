/* 
 * jsoncompress.js - ilib tool to remove the whitespace from json files
 *
 * Copyright © 2013, JEDLSoft
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
var common = require('../cldr/common');
var path = require('path');

function usage() {
	util.print("Usage: jsoncompress.js [-h] [source_dir [target_dir]]\n" +
		"Find all json files and compress all the whitespace out of them.\n\n" +
		"-h or --help\n" +
		"  this help\n" +
		"source_dir\n" +
		'  Where to put the results. Default "."\n' +
		"target_dir\n" +
		'  Where to put the results. Default "compressed"\n');
	process.exit(1);
}


var sourcedir = ".", 
	targetdir = "compressed";

if (process.argv.length > 2) {
	if (process.argv[2] == '-h' || process.argv[2] == '-H' || process.argv[2] == '--help') {
		usage();
	}
	sourcedir = process.argv[2] || ".";
	if (process.argv.length > 3) {
		targetdir = process.argv[3];
	}
}

fs.exists(sourcedir, function (exists) {
	if (!exists) {
		util.print("Could not access source directory " + sourcedir + "\n");
		usage();
	}
});

fs.exists(targetdir, function (exists) {
	if (!exists) {
		try {
			common.makeDirs(targetdir);
		} catch (e) {
			util.print("Could not access or create target directory " + targetdir + "\nError: " + e + "\n");
			usage();
		}
	}
});

util.print("source dir: " + sourcedir + "\n");
util.print("target dir: " + targetdir + "\n");

function walk(root, dir) {
	var results = [];
	var list = fs.readdirSync(path.join(root, dir));
	list.forEach(function (file) {
		var sourcePathRelative = path.join(dir, file);
		var sourcePath = path.join(root, sourcePathRelative);
		var stat = fs.statSync(sourcePath);
		if (stat && stat.isDirectory()) {
			walk(root, sourcePathRelative);
		} else {
			var obj;
			if (file.match(/\.json$/)) {
				try {
					var data = fs.readFileSync(sourcePath, 'utf8');
					if (data.length > 0) {
						obj = JSON.parse(data);
						var targetPath = path.join(targetdir, sourcePathRelative);
						
						util.print(sourcePath + " -> " + targetPath + "\n");
						
						var targetDir = path.dirname(targetPath);
						common.makeDirs(targetDir);
						
						fs.writeFileSync(targetPath, JSON.stringify(obj), 'utf8');
					}
				} catch (err) {
					util.print("File " + sourcePath + " is not readable or does not contain valid JSON.\n");
					util.print(err + "\n");
				}
			}
		}
	});

	return results;
}

walk(sourcedir, "");

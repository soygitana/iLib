/*
 * benresbundle_initial_assembled.js - benchmark the initial ResBundle object with assembled resources
 *
 * Copyright © 2014-2015, JEDLSoft
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

var ilib = require("../lib/ilib.js");
var ResBundle = require("../lib/ResBundle.js");
ilib.data.strings = {
    "first string": "first",
    "second string": "second",
    "third string": "third"
};

ilib.data.strings_de = {
    "first string": "erste String",
    "second string": "zweite String",
    "third string": "dritte String"
};

ilib.data.strings_fr = {
    "first string": "première chaîne",
    "second string": "deuxième chaîne",
    "third string": "troisième chaîne"
};

// yes, we know these are not accurate translations -- they are just for testing!
ilib.data.strings_fr_CA = {
    "first string": "première collier",
    "second string": "deuxième collier"
};

ilib.data.strings_fr_CA_govt = {
    "first string": "première corde",
    "third string": "troisième corde"
};

ilib.data.tester_es = {
    "Hello from {country}": "Saludos desde {country}",
    "Hello from {city}": "Saludos desde {city}",
    "Greetings from {city} in {country}": "Saludos desde {city} en {country}",
    "key1": "Saludos desde {user}."
};

ilib.data.tester_es_MX = {
    "Hello from {country}": "Hola de {country}",
    "Greetings from {city} in {country}": "Hola de {city} en {country}"
};

ilib.data.tester_es_MX_slang = {
    "Hello from {country}": "Que tal de {country}",
    "Hello from {city}": "Que tal de {city}",
    "key1": "Buenas desde {user}."
};

ilib.data.tester_de = {
    "Hello from {country}": "Hallo aus {country}",
    "Hello from {city}": "Hallo aus {city}",
    "Greetings from {city} in {country}": "Grüße aus {city} in {country}",
    "key1": "Grüße vom {user}"
};

ilib.data.tester_zh = {
    "empty": "",
    "space": " ",
    "comma": ","
};

ilib.data.tester2 = {
	" This is a test. ": "test1",
	"This is a test. ": "test2",
	" This is a test.": "test3"
};

ilib.data.tester2_de = {
	" This is a test. ": "detest1",
	"This is a test. ": "detest2",
	" This is a test.": "detest3"
};

ilib.data.mock_foobar = ilib.data.strings;
ilib.data.mock_foobar_de = ilib.data.strings_de;

ilib.data.plurals_en={one:{is:["n",1]}};
ilib.data.plurals_de={one:{is:["n",1]}};
ilib.data.plurals_fr={one:{and:[{within:["n",[[0,2]]]},{isnot:["n",2]}]}};

ilib.data.pseudomap = {"a":"à","c":"ç","d":"ð","e":"ë","g":"ğ","h":"ĥ","i":"í","j":"ĵ","k":"ķ","l":"ľ","n":"ñ","o":"õ","p":"þ","r":"ŕ","s":"š","t":"ţ","u":"ü","w":"ŵ","y":"ÿ","z":"ž","A":"Ã","B":"ß","C":"Ç","D":"Ð","E":"Ë","G":"Ĝ","H":"Ħ","I":"Ï","J":"Ĵ","K":"ĸ","L":"Ľ","N":"Ň","O":"Ø","R":"Ŗ","S":"Š","T":"Ť","U":"Ú","W":"Ŵ","Y":"Ŷ","Z":"Ż"};

function testResBundleConstructorEmptyInitial(results) {
	var tt = new TimedTest({
		name: "ResBundle-assembled-empty-initial",
		fn: function () {
			var rb = new ResBundle();
		    assertNotNull(rb);
		}
	});

	tt.run(results);
}

function testResBundleConstructorRealInitial(results) {
	var tt = new TimedTest({
		name: "ResBundle-assembled-normal-initial",
		fn: function () {
			var rb = new ResBundle({
				locale: "de-DE"
			});
		    assertNotNull(rb);
		}
	});

	tt.run(results);
}

function testResBundleConstructorNonexistentInitial(results) {
	var tt = new TimedTest({
		name: "ResBundle-assembled-nonexistent-initial",
		fn: function () {
			var rb = new ResBundle({
				locale: "ja-JP"
			});
		    assertNotNull(rb);
		}
	});

	tt.run(results);
}

function testResBundleConstructorOtherFileInitial(results) {
	var tt = new TimedTest({
		name: "ResBundle-assembled-otherfile-initial",
		fn: function () {
			var rb = new ResBundle({
				name: "tester"
			});
		    assertNotNull(rb);
		}
	});

	tt.run(results);
}

function testResBundleConstructorOtherComplexInitial(results) {
	var tt = new TimedTest({
		name: "ResBundle-assembled-otherfile-complex-initial",
		fn: function () {
			var rb = new ResBundle({
				name: "tester",
				locale: "es-MX-slang"
			});
		    assertNotNull(rb);
		}
	});

	tt.run(results);
}


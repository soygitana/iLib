/*
 * benlocinfo_subsequent_dynamic.js - benchmark the LocaleInfo object with subsequent dynamic formats
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

var LocaleInfo = require("../lib/LocaleInfo.js");
function testLocaleInfoConstructorEmptySubsequent(results) {
    new LocaleInfo();	    

    var tt = new TimedTest({
		name: "LocaleInfo-dynamic-empty-subsequent",
		iterations: 1000,
		fn: function () {
		    var fmt = new LocaleInfo();
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testLocaleInfoConstructorRealSubsequent(results) {
	new LocaleInfo("de-DE");
	
	var tt = new TimedTest({
		name: "LocaleInfo-dynamic-normal-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new LocaleInfo("de-DE");
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testLocaleInfoConstructorNonexistentSubsequent(results) {
	new LocaleInfo("xx-YY");
	
	var tt = new TimedTest({
		name: "LocaleInfo-dynamic-nonexistent-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new LocaleInfo("xx-YY");
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}

function testLocaleInfoConstructorOtherComplexSubsequent(results) {
	new LocaleInfo("zh-Hant-TW");
	
	var tt = new TimedTest({
		name: "LocaleInfo-dynamic-otherfile-complex-subsequent",
		iterations: 1000,
		fn: function () {
			var fmt = new LocaleInfo("zh-Hant-TW");
		    assertNotNull(fmt);
		}
	});
	
	tt.run(results);
}


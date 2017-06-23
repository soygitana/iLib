/*
 * testlocalematch.js - test the locale matcher object
 *
 * Copyright © 2012-2015,2017, JEDLSoft
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

if (typeof(LocaleMatcher) === "undefined") {
    var LocaleMatcher = require("../.././../lib/LocaleMatcher.js");
}

if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testlocalematch = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testLocaleMatcherConstructor: function(test) {
        var loc = new LocaleMatcher();
    
        test.expect(1);
        test.ok(loc !== null);
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLanguage1: function(test) {
        var lm = new LocaleMatcher({
            locale: "uz"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "uz-Latn-UZ");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLanguage2: function(test) {
        var lm = new LocaleMatcher({
            locale: "alt"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "alt-Cyrl-RU");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLanguage3: function(test) {
        var lm = new LocaleMatcher({
            locale: "gv"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "gv-Latn-IM");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLanguage4: function(test) {
        var lm = new LocaleMatcher({
            locale: "ia"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ia-Latn-FR");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLanguage5: function(test) {
        var lm = new LocaleMatcher({
            locale: "sd"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "sd-Arab-PK");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByRegion: function(test) {
        var lm = new LocaleMatcher({
            locale: "UZ"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "uz-Latn-UZ");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByScript: function(test) {
        var lm = new LocaleMatcher({
            locale: "Arab"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ar-Arab-EG");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLanguageAndScript1: function(test) {
        var lm = new LocaleMatcher({
            locale: "pa-Arab"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "pa-Arab-PK");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLanguageAndScript2: function(test) {
        var lm = new LocaleMatcher({
            locale: "Cyrl-PL"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "be-Cyrl-PL");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLanguageAndScriptOriya: function(test) {
        var lm = new LocaleMatcher({
            locale: "or-Orya"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "or-Orya-IN");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByScriptOriya: function(test) {
        var lm = new LocaleMatcher({
            locale: "or"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "or-Orya-IN");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLanguageOriya: function(test) {
        var lm = new LocaleMatcher({
            locale: "Orya"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "or-Orya-IN");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLanguageAndRegion: function(test) {
        var lm = new LocaleMatcher({
            locale: "uz-AF"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "uz-Arab-AF");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByRegionAndScript: function(test) {
        var lm = new LocaleMatcher({
            locale: "MA-Latn"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "fr-Latn-MA");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleAlreadySpecified: function(test) {
        var lm = new LocaleMatcher({
            locale: "en-CA-Latn"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-Latn-CA");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLanguageMissing: function(test) {
        var lm = new LocaleMatcher({
            locale: "zxx"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "zxx");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLanguageAndRegionMissing: function(test) {
        var lm = new LocaleMatcher({
            locale: "en-GB"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "en-GB");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLocaleRegionCodeAF: function(test) {
        var lm = new LocaleMatcher({
            locale: "af-ZA"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "af-ZA");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLocaleCodeAF: function(test) {
        var lm = new LocaleMatcher({
            locale: "af"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "af-Latn-ZA");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLocaleRegionCodeAF: function(test) {
        var lm = new LocaleMatcher({
            locale: "af-NA"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "af-NA");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLocaleRegionCodeET: function(test) {
        var lm = new LocaleMatcher({
            locale: "am-ET"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "am-ET");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLocaleCodeET: function(test) {
        var lm = new LocaleMatcher({
            locale: "am"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "am-Ethi-ET");
        test.done();
    },
    /*Hausa */
    testLocaleMatcherGetLikelyLocaleByLocaleRegionCodeHANG: function(test) {
        var lm = new LocaleMatcher({
            locale: "ha"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ha-Latn-NG");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLocaleCodeHANG: function(test) {
        var lm = new LocaleMatcher({
            locale: "ha-NG"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ha-NG");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLocaleCodeHANE: function(test) {
        var lm = new LocaleMatcher({
            locale: "ha-NE"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ha-NE");
        test.done();
    },
    
    testLocaleMatcherGetLikelyLocaleByLocaleCodeGH: function(test) {
        var lm = new LocaleMatcher({
            locale: "ha-GH"
        });
        test.expect(3);
        test.ok(typeof(lm) !== "undefined");
        var locale = lm.getLikelyLocale();
        test.ok(typeof(locale) !== "undefined");
        test.equal(locale.getSpec(), "ha-GH");
        test.done();
    }
    
};
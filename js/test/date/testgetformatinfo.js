/*
 * testgetformatinfo.js - test the date formatter object's 
 * getFormatInfo call
 *
 * Copyright © 2019 JEDLSoft
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

if (typeof(ilib) === "undefined") {
    var ilib = require("../../lib/ilib.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../../lib/DateFmt.js");
}

module.exports.testdategetformatinfo = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtGetFormatInfoUSShort: function(test) {
        test.expect(16);

        var fmt = new DateFmt({
            locale: "en-US",
            type: "date",
            date: "short"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 2019, // non leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 5);

                test.equal(info[0].component, "month");
                test.equal(info[0].label, "Month");
                test.deepEqual(info[0].constraint, [1, 12]);

                test.ok(!info[1].component);
                test.equal(info[1].label, "/");

                test.equal(info[2].component, "day");
                test.equal(info[2].label, "Date");
                test.deepEqual(info[2].constraint, {
                    "1": [1, 31],
                    "2": [1, 28],
                    "3": [1, 31],
                    "4": [1, 30],
                    "5": [1, 31],
                    "6": [1, 30],
                    "7": [1, 31],
                    "8": [1, 31],
                    "9": [1, 30],
                    "10": [1, 31],
                    "11": [1, 30],
                    "12": [1, 31]
                });

                test.ok(!info[3].component);
                test.equal(info[3].label, "/");

                test.equal(info[4].component, "year");
                test.equal(info[4].label, "Year");
                test.equal(info[4].constraint, "[0-9]{2}");
            }
        });

        test.done();
    },

    testDateFmtGetFormatInfoUSShortLeapYear: function(test) {
        test.expect(16);

        var fmt = new DateFmt({
            locale: "en-US",
            type: "date",
            date: "short"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 2020, // leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 5);

                test.equal(info[0].component, "month");
                test.equal(info[0].label, "Month");
                test.deepEqual(info[0].constraint, [1, 12]);

                test.ok(!info[1].component);
                test.equal(info[1].label, "/");

                test.equal(info[2].component, "day");
                test.equal(info[2].label, "Date");
                test.deepEqual(info[2].constraint, {
                    "1": [1, 31],
                    "2": [1, 29],
                    "3": [1, 31],
                    "4": [1, 30],
                    "5": [1, 31],
                    "6": [1, 30],
                    "7": [1, 31],
                    "8": [1, 31],
                    "9": [1, 30],
                    "10": [1, 31],
                    "11": [1, 30],
                    "12": [1, 31]
                });

                test.ok(!info[3].component);
                test.equal(info[3].label, "/");

                test.equal(info[4].component, "year");
                test.equal(info[4].label, "Year");
                test.equal(info[4].constraint, "[0-9]{2}");
            }
        });

        test.done();
    },

    testDateFmtGetFormatInfoUSFull: function(test) {
        test.expect(16);

        var fmt = new DateFmt({
            locale: "en-US",
            type: "date",
            date: "full"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 2019,
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 5);

                test.equal(info[0].component, "month");
                test.equal(info[0].label, "Month");
                test.deepEqual(info[0].constraint, [
                    {label: "January", value: 1},
                    {label: "February", value: 2},
                    {label: "March", value: 3},
                    {label: "April", value: 4},
                    {label: "May", value: 5},
                    {label: "June", value: 6},
                    {label: "July", value: 7},
                    {label: "August", value: 8},
                    {label: "September", value: 9},
                    {label: "October", value: 10},
                    {label: "November", value: 11},
                    {label: "December", value: 12},
                ]);

                test.ok(!info[1].component);
                test.equal(info[1].label, " ");

                test.equal(info[2].component, "day");
                test.equal(info[2].label, "Date");
                test.deepEqual(info[2].constraint, {
                    "1": [1, 31],
                    "2": [1, 28],
                    "3": [1, 31],
                    "4": [1, 30],
                    "5": [1, 31],
                    "6": [1, 30],
                    "7": [1, 31],
                    "8": [1, 31],
                    "9": [1, 30],
                    "10": [1, 31],
                    "11": [1, 30],
                    "12": [1, 31]
                });

                test.ok(!info[3].component);
                test.equal(info[3].label, ", ");

                test.equal(info[4].component, "year");
                test.equal(info[4].label, "Year");
                test.equal(info[4].constraint, "[0-9]+");
            }
        });

        test.done();
    },

    testDateFmtGetFormatInfoGregorianTranslated: function(test) {
        test.expect(16);

        var fmt = new DateFmt({
            locale: "en-US",
            type: "date",
            date: "full"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            locale: "de-DE",
            year: 2019,
            sync: true,
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 5);

                test.equal(info[0].component, "month");
                test.equal(info[0].label, "Monat");
                test.deepEqual(info[0].constraint, [
                    {label: "Januar", value: 1},
                    {label: "Februar", value: 2},
                    {label: "März", value: 3},
                    {label: "April", value: 4},
                    {label: "Mai", value: 5},
                    {label: "Juni", value: 6},
                    {label: "Juli", value: 7},
                    {label: "August", value: 8},
                    {label: "September", value: 9},
                    {label: "Oktober", value: 10},
                    {label: "November", value: 11},
                    {label: "Dezember", value: 12},
                ]);

                test.ok(!info[1].component);
                test.equal(info[1].label, " ");

                test.equal(info[2].component, "day");
                test.equal(info[2].label, "Tag");
                test.deepEqual(info[2].constraint, {
                    "1": [1, 31],
                    "2": [1, 28],
                    "3": [1, 31],
                    "4": [1, 30],
                    "5": [1, 31],
                    "6": [1, 30],
                    "7": [1, 31],
                    "8": [1, 31],
                    "9": [1, 30],
                    "10": [1, 31],
                    "11": [1, 30],
                    "12": [1, 31]
                });

                test.ok(!info[3].component);
                test.equal(info[3].label, ", ");

                test.equal(info[4].component, "year");
                test.equal(info[4].label, "Jahr");
                test.equal(info[4].constraint, "[0-9]+");
            }
        });

        test.done();
    },
    
    testDateFmtGetFormatInfoUSShortAllFields: function(test) {
        test.expect(16);

        var fmt = new DateFmt({
            locale: "en-US",
            type: "datetime",
            date: "short",
            date: "wmdy",
            time: "ahmsz"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 2019, // non leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 15);

                test.equal(info[0].label, "Day of Week"),
                test.equal(typeof(info[0].value), "function");

                test.ok(!info[1].component);
                test.equal(info[1].label, " ");

                test.equal(info[2].component, "month");
                test.equal(info[2].label, "Month");
                test.deepEqual(info[2].constraint, [1, 12]);

                test.ok(!info[3].component);
                test.equal(info[3].label, "/");

                test.equal(info[4].component, "day");
                test.equal(info[4].label, "Date");
                test.deepEqual(info[4].constraint, {
                    "1": [1, 31],
                    "2": [1, 28],
                    "3": [1, 31],
                    "4": [1, 30],
                    "5": [1, 31],
                    "6": [1, 30],
                    "7": [1, 31],
                    "8": [1, 31],
                    "9": [1, 30],
                    "10": [1, 31],
                    "11": [1, 30],
                    "12": [1, 31]
                });

                test.ok(!info[5].component);
                test.equal(info[5].label, "/");

                test.equal(info[6].component, "year");
                test.equal(info[6].label, "Year");
                test.equal(info[6].constraint, "[0-9]{2}");

                test.ok(!info[7].component);
                test.equal(info[7].label, " at ");

                test.equal(info[8].component, "hour");
                test.equal(info[8].label, "Hour");
                test.equal(info[8].placeholder, "H");
                test.deepEqual(info[8].constraint, [1, 12]);
                test.equal(info[8].validation, "\\d{1,2}");

                test.ok(!info[9].component);
                test.equal(info[9].label, ":");

                test.equal(info[10].component, "minute");
                test.equal(info[10].label, "Minute");
                test.equal(info[10].placeholder, "mm");
                for (var i = 0; i < 60; i++) {
                    test.equal(Number(info[10].constraint[i]), i);
                }
                test.equal(info[10].validation, "\\d{2}");

                test.ok(!info[11].component);
                test.equal(info[11].label, ":");

                test.equal(info[12].component, "second");
                test.equal(info[12].label, "Second");
                test.equal(info[12].placeholder, "ss");
                for (var i = 0; i < 60; i++) {
                    test.equal(Number(info[12].constraint[i]), i);
                }
                test.equal(info[12].validation, "\\d{2}");

                test.ok(!info[13].component);
                test.equal(info[13].label, " ");

                test.equal(info[14].component, "meridiem");
                test.equal(info[14].label, "AM/PM");
                test.equal(info[14].placeholder, "AM/PM");
                test.deepEqual(info[14].constraint, ["AM", "PM"]);
            }
        });

        test.done();
    },

    testDateFmtGetFormatInfoDayOfWeekCalculator: function(test) {
        test.expect(16);

        var fmt = new DateFmt({
            locale: "en-US",
            type: "datetime",
            date: "short",
            date: "wmdy",
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 2019, // non leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info[0].label, "Day of Week"),
                test.equal(typeof(info[0].value), "function");

                test.equal(info[0].value(new Date(2019, 5, 3)), "Monday");
                test.equal(info[0].value(new Date(2019, 7, 23)), "Friday");
            }
        });

        test.done();
    },


    testDateFmtGetFormatInfoHebrewCalendarNonLeap: function(test) {
        test.expect(16);

        var fmt = new DateFmt({
            locale: "en-US",
            type: "date",
            date: "full",
            calendar: "hebrew"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 5780, // non leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 5);

                test.equal(info[0].component, "month");
                test.equal(info[0].label, "Month");
                test.deepEqual(info[0].constraint, [
                    {label: "Nisan", value: 1},
                    {label: "Iyyar", value: 2},
                    {label: "Sivan", value: 3},
                    {label: "Tammuz", value: 4},
                    {label: "Av", value: 5},
                    {label: "Elul", value: 6},
                    {label: "Tishri", value: 7},
                    {label: "Ḥeshvan", value: 8},
                    {label: "Kislev", value: 9},
                    {label: "Teveth", value: 10},
                    {label: "Shevat", value: 11},
                    {label: "Adar", value: 12},
                ]);

                test.ok(!info[1].component);
                test.equal(info[1].label, " ");

                test.equal(info[2].component, "day");
                test.equal(info[2].label, "Date");
                test.deepEqual(info[2].constraint, {
                    "1": [1, 30],
                    "2": [1, 29],
                    "3": [1, 30],
                    "4": [1, 29],
                    "5": [1, 30],
                    "6": [1, 29],
                    "7": [1, 30],
                    "8": [1, 30],
                    "9": [1, 30],
                    "10": [1, 29],
                    "11": [1, 30],
                    "12": [1, 30]
                });

                test.ok(!info[3].component);
                test.equal(info[3].label, ", ");

                test.equal(info[4].component, "year");
                test.equal(info[4].label, "Year");
                test.equal(info[4].constraint, "[0-9]+");
            }
        });

        test.done();
    },

    testDateFmtGetFormatInfoHebrewCalendarLeap: function(test) {
        test.expect(16);

        var fmt = new DateFmt({
            locale: "en-US",
            type: "date",
            date: "full",
            calendar: "hebrew"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 5779, // leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 5);

                test.equal(info[0].component, "month");
                test.equal(info[0].label, "Month");
                test.deepEqual(info[0].constraint, [
                    {label: "Nisan", value: 1},
                    {label: "Iyyar", value: 2},
                    {label: "Sivan", value: 3},
                    {label: "Tammuz", value: 4},
                    {label: "Av", value: 5},
                    {label: "Elul", value: 6},
                    {label: "Tishri", value: 7},
                    {label: "Ḥeshvan", value: 8},
                    {label: "Kislev", value: 9},
                    {label: "Teveth", value: 10},
                    {label: "Shevat", value: 11},
                    {label: "Adar I", value: 12},
                    {label: "Adar II", value: 13},
                ]);

                test.ok(!info[1].component);
                test.equal(info[1].label, " ");

                test.equal(info[2].component, "day");
                test.equal(info[2].label, "Date");
                test.deepEqual(info[2].constraint, {
                    "1": [1, 30],
                    "2": [1, 29],
                    "3": [1, 30],
                    "4": [1, 29],
                    "5": [1, 30],
                    "6": [1, 29],
                    "7": [1, 30],
                    "8": [1, 30],
                    "9": [1, 30],
                    "10": [1, 29],
                    "11": [1, 30],
                    "12": [1, 30],
                    "13": [1, 29]
                });

                test.ok(!info[3].component);
                test.equal(info[3].label, ", ");

                test.equal(info[4].component, "year");
                test.equal(info[4].label, "Year");
                test.equal(info[4].constraint, "[0-9]+");
            }
        });

        test.done();
    },
    
    testDateFmtGetFormatInfoHebrewCalendarInHebrew: function(test) {
        test.expect(16);

        var fmt = new DateFmt({
            locale: "he-IL",
            type: "date",
            date: "full",
            calendar: "hebrew"
        });
        test.ok(fmt !== null);

        fmt.getFormatInfo({
            sync: true,
            year: 5780, // non leap year
            onLoad: function(info) {
                test.ok(info);

                test.equal(info.length, 5);

                test.equal(info[0].component, "month");
                test.equal(info[0].label, "חודש");
                test.deepEqual(info[0].constraint, [
                    {label: "Nisan", value: 1},
                    {label: "Iyyar", value: 2},
                    {label: "Sivan", value: 3},
                    {label: "Tammuz", value: 4},
                    {label: "Av", value: 5},
                    {label: "Elul", value: 6},
                    {label: "Tishri", value: 7},
                    {label: "Ḥeshvan", value: 8},
                    {label: "Kislev", value: 9},
                    {label: "Teveth", value: 10},
                    {label: "Shevat", value: 11},
                    {label: "Adar", value: 12},
                ]);

                test.ok(!info[1].component);
                test.equal(info[1].label, " ");

                test.equal(info[2].component, "day");
                test.equal(info[2].label, "אשר");
                test.deepEqual(info[2].constraint, {
                    "1": [1, 30],
                    "2": [1, 29],
                    "3": [1, 30],
                    "4": [1, 29],
                    "5": [1, 30],
                    "6": [1, 29],
                    "7": [1, 30],
                    "8": [1, 30],
                    "9": [1, 30],
                    "10": [1, 29],
                    "11": [1, 30],
                    "12": [1, 30]
                });

                test.ok(!info[3].component);
                test.equal(info[3].label, ", ");

                test.equal(info[4].component, "year");
                test.equal(info[4].label, "שנה");
                test.equal(info[4].constraint, "[0-9]+");
            }
        });

        test.done();
    }
};

/*
 * testdatefmt_tr_TR.js - test the date formatter object in Turkey
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


if (typeof(JulianDate) === "undefined") {
    var JulianDate = require("../.././../lib/JulianDate.js");
}
if (typeof(GregorianDate) === "undefined") {
    var GregorianDate = require("../.././../lib/GregorianDate.js");
}
if (typeof(DateFmt) === "undefined") {
    var DateFmt = require("../.././../lib/DateFmt.js");
}
if (typeof(ilib) === "undefined") {
    var ilib = require("../../..");
}

module.exports.testdatefmt_tr_TR = {
    setUp: function(callback) {
        ilib.clearCache();
        callback();
    },

    testDateFmtConstructorEmpty_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR"});
        
        test.expect(1);
        test.ok(fmt !== null);
        test.done();
    },
    
    
    testDateFmtSimpleShort_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "short"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011");
        test.done();
    },
    
    testDateFmtSimpleMedium_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "medium"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Eyl 2011");
        test.done();
    },
    
    testDateFmtSimpleLong_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "long"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Eylül 2011");
        test.done();
    },
    
    testDateFmtSimpleFull_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "full"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Eylül 2011");
        test.done();
    },
    
    testDateFmtSimpleTimeShort_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "short", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtSimpleTimeMedium_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "medium", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtSimpleTimeLong_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", timelength: "long", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtSimpleTimeFull_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "full", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleShort_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "short", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleMedium_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "medium", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Eyl 2011 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleLong_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "long", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Eylül 2011 13:45");
        test.done();
    },
    
    testDateFmtDateTimeSimpleFull_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "full", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Eylül 2011 13:45");
        test.done();
    },
    
    
    testDateFmtTemplateCalendar_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", calendar: "julian", template: "yyyy-MM-dd"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new JulianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011-09-29");
        test.done();
    },
    
    
    testDateFmtTemplateClock12SwitchHH_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", clock: "12", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtTemplateClock12Switchkk_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", clock: "12", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtTemplateClock24Switchhh_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", clock: "24", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtTemplateClock24SwitchKK_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", clock: "24", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12hh_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", template: "hh:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault12KK_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", template: "KK:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "01:45");
        test.done();
    },
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24HH_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", template: "HH:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtTemplateNoClockDoNotFollowLocaleDefault24kk_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", template: "kk:mm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    
    testDateFmtTypeDate_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "date"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011");
        test.done();
    },
    
    testDateFmtTypeTime_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtTypeDateTime_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "datetime"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011 13:45");
        test.done();
    },
    
    
    testDateFmtShortDateComponentsY_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011");
        test.done();
    },
    
    testDateFmtShortDateComponentsM_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09");
        test.done();
    },
    
    testDateFmtShortDateComponentsN_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", date: "n"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "E");
        test.done();
    },
    
    testDateFmtShortDateComponentsD_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29");
        test.done();
    },
    
    testDateFmtShortDateComponentsDM_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09");
        test.done();
    },
    
    testDateFmtShortDateComponentsMY_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "09.2011");
        test.done();
    },
    
    testDateFmtShortDateComponentsDMY_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011");
        test.done();
    },
    
    testDateFmtShortDateComponentsWDM_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09 P");
        test.done();
    },
    
    testDateFmtShortDateComponentsWDMY_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29.09.2011 P");
        test.done();
    },
    
    
    testDateFmtFullDateComponentsY_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "y"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "2011");
        test.done();
    },
    
    testDateFmtFullDateComponentsM_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Eylül");
        test.done();
    },
    
    testDateFmtFullDateComponentsD_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "d"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29");
        test.done();
    },
    
    testDateFmtFullDateComponentsDM_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "dm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Eylül");
        test.done();
    },
    
    testDateFmtFullDateComponentsMY_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "my"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "Eylül 2011");
        test.done();
    },
    
    testDateFmtFullDateComponentsDMY_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "dmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Eylül 2011");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDM_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "wdm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Eylül Perşembe");
        test.done();
    },
    
    testDateFmtFullDateComponentsWDMY_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", length: "full", date: "wdmy"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 0,
            millisecond: 0
        });
        test.equal(fmt.format(date), "29 Eylül 2011 Perşembe");
        test.done();
    },
    
    
    testDateFmtShortTimeComponentsS_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "37");
        test.done();
    },
    
    testDateFmtShortTimeComponentsM_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45");
        test.done();
    },
    
    testDateFmtShortTimeComponentsH_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13");
        test.done();
    },
    
    testDateFmtShortTimeComponentsMS_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45:37");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHM_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMS_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMA_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMZ_tr_TR: function(test) {
        var fmt = new DateFmt({
            locale: "tr-TR", 
            type: "time", 
            time: "hmz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +03");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMAZ_tr_TR: function(test) {
        var fmt = new DateFmt({
            locale: "tr-TR", 
            type: "time", 
            time: "hmaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +03");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSA_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSZ_tr_TR: function(test) {
        var fmt = new DateFmt({
            locale: "tr-TR", 
            type: "time", 
            time: "hmsz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +03");
        test.done();
    },
    
    testDateFmtShortTimeComponentsHMSAZ_tr_TR: function(test) {
        var fmt = new DateFmt({
            locale: "tr-TR", 
            type: "time", 
            time: "hmsaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37 +03");
        test.done();
    },
    
    
    testDateFmtFullTimeComponentsS_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "s"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "37");
        test.done();
    },
    
    testDateFmtFullTimeComponentsM_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "m"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45");
        test.done();
    },
    
    testDateFmtFullTimeComponentsH_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "h"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13");
        test.done();
    },
    
    testDateFmtFullTimeComponentsMS_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "ms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "45:37");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHM_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "hm"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMS_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "hms"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMA_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "hma"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMZ_tr_TR: function(test) {
        var fmt = new DateFmt({
            locale: "tr-TR", 
            type: "time", 
            length: "full", 
            time: "hmz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +03");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMAZ_tr_TR: function(test) {
        var fmt = new DateFmt({
            locale: "tr-TR", 
            type: "time", 
            length: "full", 
            time: "hmaz"
        });
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45 +03");
        test.done();
    },
    
    testDateFmtFullTimeComponentsHMSA_tr_TR: function(test) {
        var fmt = new DateFmt({locale: "tr-TR", type: "time", length: "full", time: "hmsa"});
        test.expect(2);
        test.ok(fmt !== null);
        
        var date = new GregorianDate({
            locale: "tr-TR",
            year: 2011,
            month: 9,
            day: 29,
            hour: 13,
            minute: 45,
            second: 37,
            millisecond: 0
        });
        test.equal(fmt.format(date), "13:45:37");
        test.done();
    }
    
    
};
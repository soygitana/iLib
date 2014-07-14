/*
 * testpersian.js - test the persian calendar
 * 
 * Copyright © 2014, JEDLSoft
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

function testPersianGetNumMonths() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(12, cal.getNumMonths(1389));
}

function testPersianGetMonLengthJan() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(1, 1389));
}

function testPersianGetMonLengthFeb() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(2, 1389));
}

function testPersianGetMonLengthFebLeapYear() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(2, 1390));
}

function testPersianGetMonLengthMar() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(3, 1389));
}

function testPersianGetMonLengthApr() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(4, 1389));
}

function testPersianGetMonLengthMay() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(31, cal.getMonLength(5, 1389));
}

function testPersianGetMonLengthJun() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(30, cal.getMonLength(6, 1389));
}

function testPersianGetMonLengthJul() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(30, cal.getMonLength(7, 1389));
}

function testPersianGetMonLengthAug() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(30, cal.getMonLength(8, 1389));
}

function testPersianGetMonLengthSep() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(30, cal.getMonLength(9, 1389));
}

function testPersianGetMonLengthOct() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(30, cal.getMonLength(10, 1389));
}

function testPersianGetMonLengthNov() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(30, cal.getMonLength(11, 1389));
}

function testPersianGetMonLengthDec() {
    var cal = new ilib.Cal.Persian();
    
    assertEquals(29, cal.getMonLength(12, 1389));
}

function testPersianIsLeapYear() {
    var cal = new ilib.Cal.Persian();
    
    assertTrue(cal.isLeapYear(1390));
}

function testPersianIsLeapYearNot() {
    var cal = new ilib.Cal.Persian();
    
    assertFalse(cal.isLeapYear(1389));
}

function testPersianIsLeapYear1() {
    var cal = new ilib.Cal.Persian();
    
    assertFalse(cal.isLeapYear(1700));
}

function testPersianIsLeapYear2() {
    var cal = new ilib.Cal.Persian();
    
    assertFalse(cal.isLeapYear(1800));
}

function testPersianIsLeapYearNotOnCentury3() {
    var cal = new ilib.Cal.Persian();
    
    assertFalse(cal.isLeapYear(1900));
}

function testPersianIsLeapYearOnQuadCentennial() {
    var cal = new ilib.Cal.Persian();
    
    assertTrue(cal.isLeapYear(2000));
}

function testPersianNewDateInstance() {
    var cal = new ilib.Cal.Persian();
    var d = cal.newDateInstance({
    	year: 1390,
    	month: 6,
    	day: 1
    });
    
    assertNotUndefined(d);
    assertTrue(d instanceof ilib.Date.PersDate);
}

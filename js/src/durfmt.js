/*
 * durfmt.js - Date formatter definition
 * 
 * Copyright © 2012, JEDLSoft
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
!depends 
ilibglobal.js 
locale.js 
date.js 
strings.js 
resources.js 
localeinfo.js
*/

// !data dateformats sysres
// !resbundle sysres

/**
 * @class
 * 
 * Create a new duration formatter instance. The duration formatter is immutable once
 * it is created, but can format as many different durations as needed with the same
 * options. Create different duration formatter instances for different purposes
 * and then keep them cached for use later if you have more than one duration to
 * format.<p>
 * 
 * Duration formatters format lengths of time. The duration formatter is meant to format 
 * durations of such things as the length of a song or a movie or a meeting, or the 
 * current position in that song or movie while playing it. If you wish to format a 
 * period of time that has a specific start and end date/time, then use a
 * [ilib.DateRngFmt] instance instead and call its format method.<p>
 *  
 * The options may contain any of the following properties:
 * 
 * <ul>
 * <li><i>locale</i> - locale to use when formatting the duration. If the locale is
 * not specified, then the default locale of the app or web page will be used.
 * 
 * <li><i>length</i> - Specify the length of the format to use. The length is the approximate size of the 
 * formatted string.
 * 
 * <ul>
 * <li><i>short</i> - use a short representation of the duration. This is the most compact format possible for the locale. eg. 1y 1m 1w 1d 1:01:01
 * <li><i>medium</i> - use a medium length representation of the duration. This is a slightly longer format. eg. 1 yr 1 mo 1 wk 1 dy 1 hr 1 mi 1 se
 * <li><i>long</i> - use a long representation of the duration. This is a fully specified format, but some of the textual 
 * parts may still be abbreviated. eg. 1 yr 1 mo 1 wk 1 day 1 hr 1 min 1 sec
 * <li><i>full</i> - use a full representation of the duration. This is a fully specified format where all the textual 
 * parts are spelled out completely. eg. 1 year, 1 month, 1 week, 1 day, 1 hour, 1 minute and 1 second
 * </ul>
 * 
 * <li><i>style<i> - whether hours, minutes, and seconds should be formatted as a text string
 * or as a regular time as on a clock. eg. text is "1 hour, 15 minutes", whereas clock is "1:15:00". Valid
 * values for this property are "text" or "clock". Default if this property is not specified
 * is "text".
 * </ul>
 * <p>
 * 
 * Depends directive: !depends duration.js
 * 
 * @constructor
 * @param {?Object} options options governing the way this date formatter instance works
 */
ilib.DurFmt = function(options) {
	this.locale = new ilib.Locale();
	this.length = "short";
	this.style = "text";
	
	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new ilib.Locale(options.locale) : options.locale;
		}
		
		if (options.length) {
			if (options.length === 'short' ||
				options.length === 'medium' ||
				options.length === 'long' ||
				options.length === 'full') {
				this.length = options.length;
			}
		}
		
		if (options.style) {
			if (options.style === 'text' || options.style === 'clock') {
				this.style = options.style;
			}
		}
	}
	
	this.locinfo = new ilib.LocaleInfo(this.locale);
	var sysres = new ilib.ResBundle({
		locale: this.locale,
		name: "sysres"
	});
	
	switch (this.length) {
		case 'short':
			this.components = {
				year: sysres.getString("#{num}y"),
				month: sysres.getString("#{num}m", "durationShortMonths"),
				week: sysres.getString("#{num}w"),
				day: sysres.getString("#{num}d"),
				hour: sysres.getString("#{num}h"),
				minute: sysres.getString("#{num}m", "durationShortMinutes"),
				second: sysres.getString("#{num}s"),
				millisecond: sysres.getString("#{num}m", "durationShortMillis"),
				separator: sysres.getString(" ", "separatorShort"),
				finalSeparator: "" // not used at this length
			};
			break;
			
		case 'medium':
			this.components = {
				year: sysres.getString("1#1 yr|#{num} yrs", "durationMediumYears"),
				month: sysres.getString("1#1 mo|#{num} mos"),
				week: sysres.getString("1#1 wk|#{num} wks", "durationMediumWeeks"),
				day: sysres.getString("1#1 dy|#{num} dys"),
				hour: sysres.getString("1#1 hr|#{num} hrs", "durationMediumHours"),
				minute: sysres.getString("1#1 mi|#{num} min"),
				second: sysres.getString("1#1 se|#{num} sec"),
				millisecond: sysres.getString("#{num} ms"),
				separator: sysres.getString(" ", "separatorMedium"),
				finalSeparator: "" // not used at this length
			};
			break;
			
		case 'long':
			this.components = {
				year: sysres.getString("1#1 yr|#{num} yrs"),
				month: sysres.getString("1#1 mon|#{num} mons"),
				week: sysres.getString("1#1 wk|#{num} wks"),
				day: sysres.getString("1#1 day|#{num} days", "durationLongDays"),
				hour: sysres.getString("1#1 hr|#{num} hrs"),
				minute: sysres.getString("1#1 min|#{num} min"),
				second: sysres.getString("1#1 sec|#{num} sec"),
				millisecond: sysres.getString("#{num} ms"),
				separator: sysres.getString(", ", "separatorLong"),
				finalSeparator: "" // not used at this length
			};
			break;
			
		case 'full':
			this.components = {
				year: sysres.getString("1#1 year|#{num} years"),
				month: sysres.getString("1#1 month|#{num} months"),
				week: sysres.getString("1#1 week|#{num} weeks"),
				day: sysres.getString("1#1 day|#{num} days"),
				hour: sysres.getString("1#1 hour|#{num} hours"),
				minute: sysres.getString("1#1 minute|#{num} minutes"),
				second: sysres.getString("1#1 second|#{num} seconds"),
				millisecond: sysres.getString("1#1 millisecond|#{num} milliseconds"),
				separator: sysres.getString(", ", "separatorFull"),
				finalSeparator: sysres.getString(" and ", "finalSeparatorFull")
			};
			break;
	}
	
	if (this.style === 'clock') {
		this.timeFmtMS = new ilib.DateFmt({
			locale: this.locale,
			type: "time",
			time: "ms"
		});
		this.timeFmtHM = new ilib.DateFmt({
			locale: this.locale,
			type: "time",
			time: "hm"
		});
		this.timeFmtHMS = new ilib.DateFmt({
			locale: this.locale,
			type: "time",
			time: "hms"
		});
		// munge with the template to make sure that the hours are not formatted mod 12
		this.timeFmtHM.template = this.timeFmtHM.template.replace(/hh?/, 'H');
		this.timeFmtHM.templateArr = this.timeFmtHM._tokenize(this.timeFmtHM.template);
		this.timeFmtHMS.template = this.timeFmtHMS.template.replace(/hh?/, 'H');
		this.timeFmtHMS.templateArr = this.timeFmtHMS._tokenize(this.timeFmtHMS.template);
	}
};

/**
 * @private
 * @static
 */
ilib.DurFmt.complist = {
	"text": ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"],
	"clock": ["year", "month", "week", "day"]
};

/**
 * Format a duration according to the format template of this formatter instance.<p>
 * 
 * The components parameter should be an object that contains any or all of these 
 * numeric properties:
 * 
 * <ul>
 * <li>year
 * <li>month
 * <li>week
 * <li>day
 * <li>hour
 * <li>minute
 * <li>second
 * </ul>
 * <p>
 *
 * When a property is left out of the components parameter or has a value of 0, it will not
 * be formatted into the output string, except for times that include 0 minutes and 0 seconds.
 * 
 * This formatter will not ensure that numbers for each component property is within the
 * valid range for that component. This allows you to format durations that are longer
 * than normal range. For example, you could format a duration has being "33 hours" rather
 * than "1 day, 9 hours".
 * 
 * @param {Object} components date/time components to be formatted into a duration string
 * @returns {ilib.String} a string with the duration formatted according to the style and 
 * locale set up for this formatter instance. If the components parameter is empty or 
 * undefined, an empty string is returned.
 */
ilib.DurFmt.prototype.format = function (components) {
	var i, list, temp, fmt, secondlast = true, str = "";
	
	list = ilib.DurFmt.complist[this.style];
	//for (i = 0; i < list.length; i++) {
	for (i = list.length-1; i >= 0; i--) {
		//console.log("Now dealing with " + list[i]);
		if (typeof(components[list[i]]) !== 'undefined' && components[list[i]] != 0) {
			if (str.length > 0) {
				str = ((this.length === 'full' && secondlast) ? this.components.finalSeparator : this.components.separator) + str;
				secondlast = false;
			}
			str = this.components[list[i]].formatChoice(components[list[i]], {num: components[list[i]]}) + str;
		}
	}

	if (this.style === 'clock') {
		if (typeof(components.hour) !== 'undefined') {
			fmt = (typeof(components.second) !== 'undefined') ? this.timeFmtHMS : this.timeFmtHM;
		} else {
			fmt = this.timeFmtMS;
		}
				
		if (str.length > 0) {
			str += this.components.separator;
		}
		str += fmt._formatTemplate(components, fmt.templateArr);
	}
	
	return new ilib.String(str);
};

/**
 * Return the locale that was used to construct this duration formatter object. If the
 * locale was not given as parameter to the constructor, this method returns the default
 * locale of the system.
 * 
 * @returns {ilib.Locale} locale that this duration formatter was constructed with
 */
ilib.DurFmt.prototype.getLocale = function () {
	return this.locale;
};

/**
 * Return the length that was used to construct this duration formatter object. If the
 * length was not given as parameter to the constructor, this method returns the default
 * length. Valid values are "short", "medium", "long", and "full".
 * 
 * @returns {string} length that this duration formatter was constructed with
 */
ilib.DurFmt.prototype.getLength = function () {
	return this.length;
};

/**
 * Return the style that was used to construct this duration formatter object. Returns
 * one of "text" or "clock".
 * 
 * @returns {string} style that this duration formatter was constructed with
 */
ilib.DurFmt.prototype.getStyle = function () {
	return this.style;
};
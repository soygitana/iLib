/*
 * AlphabeticIndex.js - Represent an alphabetic index
 *
 * Copyright © 2017, JEDLSoft
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

/*globals console RegExp */

/* !depends
ilib.js
Locale.js
IString.js
LocaleInfo.js
Collator.js
*/

// !data collation

var ilib = require("./ilib.js");
var Utils = require("./Utils.js");
//var JSUtils = require("./JSUtils.js");
var Locale = require("./Locale.js");
// var CType = require("./CType.js");
var IString = require("./IString.js");
var LocaleInfo = require("./LocaleInfo.js");

// index uses the same data as the collator
var Collator = require("./Collator.js");

/**
 * @class Create a new alphabetic index instance.
 *
 * This class handles alphabetic indexes which are collated sequences of
 * buckets into which elements are placed, sorted appropriate to the given
 * language. An example would be an index of person names in a contact
 * list, organized by the first letter of the family name.<p>
 *
 * Example in English:
 * Buckets: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z #<p>
 *
 * <code>
 * A
 *    Adams
 *    Albers
 *    Alvarez
 * B
 *    Baker
 *    Banerjee
 *    Brunshteyn
 * ...
 * </code>
 *
 * This class can give you the sorted list of labels to show in the UI. It can
 * also organize a list of string elements into buckets for each
 * label so that you can display the correctly sorted elements. This depends
 * on the {@link Collator} class to perform the sorting/collation.<p>
 *
 * The class also supports having buckets for strings before the first (underflow),
 * after the last (overflow), and between scripts (inflow). For example, if the
 * index is constructed with labels for Russian and English, Greek characters
 * would fall into an inflow bucket between the other two scripts. <p>
 *
 * The buckets can be case-sensitive or insensitive, and accent-insensitive or
 * sensitive. The default is to be case- and accent-insensitive. For example
 * in English, both "a" and "A" will be put into the same "A" bucket. If
 * the options are given to be case-sensitive, then the list of bucket labels
 * will include both "A" and "a".<p>
 *
 * If you have a lot of characters that are not commonly used in the current
 * locale, you can add more labels for those characters as well. Elements will
 * match those buckets only if they have the same first character as the
 * bucket label.<p>
 *
 * The options object may contain any (or none) of the following properties:
 *
 * <ul>
 * <li><i>locale</i> - locale or localeSpec to use to parse the address. If not
 * specified, this function will use the current ilib locale
 *
 * <li><i>sensitivity</i> - String. Sensitivity or strength of collator. This is one of 
 * "primary", "base", "secondary", "accent", "tertiary", "case", "quaternary", or 
 * "variant". Default: "primary"
 * <ol>
 * <li>base or primary - Only the primary distinctions between characters are significant.
 * Another way of saying that is that the collator will be case-, accent-, and 
 * variation-insensitive, and only distinguish between the base characters
 * <li>case or secondary - Both the primary and secondary distinctions between characters
 * are significant. That is, the collator will be accent- and variation-insensitive
 * and will distinguish between base characters and character case.
 * <li>accent or tertiary - The prispmary, secondary, and tertiary distinctions between
 * characters are all significant. That is, the collator will be 
 * variation-insensitive, but accent-, case-, and base-character-sensitive. 
 * <li>variant or quaternary - All distinctions between characters are significant. That is,
 * the algorithm is base character-, case-, accent-, and variation-sensitive.
 * </ol>
 *
 * <i><i>style</i> - the style of collation to use for this index.
 * For some locales, there are different styles of collating strings depending
 * on what kind of strings are being collated or what the preference of the user
 * is. For example, in German, there is a phonebook order and a dictionary ordering
 * that sort the same array of strings slightly differently. The static method
 * {@link Collator#getAvailableStyles} will return a list of collation styles that ilib
 * currently knows about for any given locale. If the value of the style option is
 * not recognized for a locale, it will be ignored. Default style is "standard".
 *
 * <li><i>overflowLabel</i> - the label to use for the overflow bucket.
 * Default: "#"
 *
 * <li><i>inflowLabel</i> - the label to use for the inflow bucket.
 * Default: "-"
 *
 * <li><i>underflowLabel</i> - the label to use for the underflow bucket.
 * Default: "*"
 *
 * <li><i>onLoad</i> - a callback function to call when the address info for the
 * locale is fully loaded and the address has been parsed. When the onLoad
 * option is given, the address object
 * will attempt to load any missing locale data using the ilib loader callback.
 * When the constructor is done (even if the data is already preassembled), the
 * onLoad function is called with the current instance as a parameter, so this
 * callback can be used with preassembled or dynamic loading or a mix of the two.
 *
 * <li><i>sync</i> - tell whether to load any missing locale data synchronously or
 * asynchronously. If this option is given as "false", then the "onLoad"
 * callback must be given, as the instance returned from this constructor will
 * not be usable for a while.
 *
 * <li><i>loadParams</i> - an object containing parameters to pass to the
 * loader callback function when locale data is missing. The parameters are not
 * interpretted or modified in any way. They are simply passed along. The object
 * may contain any property/value pairs as long as the calling code is in
 * agreement with the loader callback function as to what those parameters mean.
 * </ul>
 *
 * @constructor
 * @param {Object} options options to the parser
 */
var AlphabeticIndex = function (options) {
	this.sync = true;
	this.loadParams = {};
	this.caseSensitive = false;
	this.accentSensitive = false;
	this.overflowLabel = "#";
	this.inflowLabel = "-";
	this.underflowLabel = "*";
	this.style = "standard";
	this.sensitivity = 'base';

	this.index = {};

	if (options) {
		if (options.locale) {
			this.locale = (typeof(options.locale) === 'string') ? new Locale(options.locale) : options.locale;
		}
		/*
		if (options.sensitivity) {
			switch (options.sensitivity) {
				case 'primary':
				case 'base':
					this.sensitivity = "base";
					this.level = 1;
					break;
				case 'secondary':
				case 'accent':
					this.sensitivity = "accent";
					this.level = 2;
					break;
				case 'tertiary':
				case 'case':
					this.sensitivity = "case";
					this.level = 3;
					break;
				case 'quaternary':
				case 'variant':
					this.sensitivity = "variant";
					this.level = 4;
					break;
			}
		}
		*/

		if (typeof(options.style) !== 'undefined') {
			this.style = options.style;
		}

		if (typeof(options.overflowLabel) !== 'undefined') {
			this.overflowLabel = options.overflowLabel;
		}

		if (typeof(options.inflowLabel) !== 'undefined') {
			this.inflowLabel = options.inflowLabel;
		}

		if (typeof(options.underflowLabel) !== 'undefined') {
			this.underflowLabel = options.underflowLabel;
		}
		
		if (typeof(options.sync) !== 'undefined') {
			this.sync = (options.sync == true);
		}

		if (options.loadParams) {
			this.loadParams = options.loadParams;
		}
	}

	this.locale = this.locale || new Locale();

	//console.log("implemented in pure JS");
	if (!Collator.cache) {
		Collator.cache = {};
	}

	Utils.loadData({
		object: Collator,
		locale: this.locale,
		name: "collation.json",
		sync: this.sync,
		loadParams: this.loadParams, 
		callback: ilib.bind(this, function (collation) {
			if (!collation) {
				collation = ilib.data.collation;
				var spec = this.locale.getSpec().replace(/-/g, '_');
				Collator.cache[spec] = collation;
			}
			this.collation = collation;
			this._init(collation);

			new LocaleInfo(this.locale, {
				sync: this.sync,
				loadParams: this.loadParams,
				onLoad: ilib.bind(this, function(li) {
					this.li = li;
					if (this.ignorePunctuation) {
		    			isPunct._init(this.sync, this.loadParams, ilib.bind(this, function() {
							if (options && typeof(options.onLoad) === 'function') {
								options.onLoad(this);
							}
		    			}));
	    			} else {
						if (options && typeof(options.onLoad) === 'function') {
							options.onLoad(this);
						}
	    			}
	    		})
			});
		})
	});
};


/**
 * 
 * 
 *
 */
AlphabeticIndex.prototype._init = function(collation) {
	this.flowBoundaries = new Array();
	
	if (this.style === 'standard') {
		this.style = this.collation["default"];
	}
	
	this.collationMap = collation[this.style].map;
	this.flowBoundaries = this.collation[this.style].flowBoundaries;

	if (this.collationMap === undefined && 
		typeof(collation[this.style]) === 'string') {

		this.style = collation[this.style];
		this.collation = collation[this.style];
		this.collationMap = collation[this.style].map;
		this.flowBoundaries = this.collation.flowBoundaries;
	}	
}

/**
 * 
 * 
 *
 */
AlphabeticIndex.prototype._isEquivalent = function(a,b) {
	var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
};

/**
 * 
 * 
 */
AlphabeticIndex.prototype._getKeyByValue = function(value) {

	for (var prop in this.collationMap) {
		if (this.collationMap.hasOwnProperty(prop)) {
			if (this._isEquivalent(this.collationMap[prop], value)) {
				return prop;
			}
		}
	}
};

/**
 * Return the locale used with this instance.
 * @return {Locale} the Locale instance for this index
 */
AlphabeticIndex.prototype.getLocale = function() {
	return this.locale;
};

/**
 * Add an element to the index. The element is added to the
 * appropriate bucket and sorted within that bucket according
 * to the collation for the locale set up within this index.
 *
 * @param {String} element the element to add
 * @returns {String} the label of the bucket into which
 * this element was added
 */
AlphabeticIndex.prototype.addElement = function(element) {
	
	var label = this.getBucket(element);
	if (this.index[label] == undefined) {
		this.index[label] = [element];
	} else {
		if (this.index[label].indexOf(element) == -1 ) {
			this.index[label].push(element);
		}
		this.index[label].sort();
	}
	return label;
};

/**
 * Add labels to this index for characters that are not
 * commonly used in the current locale. These are added
 * into the list of bucket labels at the given start
 * index. If start is not given, or is not within the
 * range of 0 (the overflow bucket) to N (the underflow
 * bucket), then the default position is at the end of
 * the list right before the underflow bucket.
 *
 * @param {Array.<String>} labels array of labels to add
 * in the order you would like to see them returned
 * @param {number=} start the position in the bucket
 * labels list to add these new labels
 */
AlphabeticIndex.prototype.addLabels = function(labels, start) {
	this.getAllBucketLabels();

	if (start === undefined ||
		start < this.flowBoundaries[0] ||
		start > this.flowBoundaries[1] ) {

		for (var i=0; i < labels.length; i++) {
		   this.allBucketLabels.push(labels[i]);
		}

	} else {

	}
};

/**
 * Clear all elements from the buckets. This index can be
 * reused for a new batch of elements by clearing it
 * first.
 */
AlphabeticIndex.prototype.clear = function() {
	for (var prop in this.index) {
		if (this.index.hasOwnProperty(prop)){
			this.index[prop] = "";
		}
	}
};

/**
 * Return a javascript hash containing all elements in
 * the index. The hash has a property for each bucket,
 * and the value of the property is an array of elements.
 * Example:
 *
 * <code>
 * {
 *   "A": ["Adams", "Albers", "Alvarez],
 *   "B": ["Baker", "Banerjee", "Brunshteyn"],
 *   ...
 *   "#": ["3par.com", "@handle"]
 * }
 * </code>
 *
 * All elements within a bucket are sorted per the collation
 * for the locale of this index.
 *
 * @returns {Object} a hash of all buckets and elements
 * as per the description above.
 */
AlphabeticIndex.prototype.getAllBuckets = function() {
	return this.index;
};

/**
 * Return the label of the bucket for a given element. This
 * follows the rules set up when the index was instantiated to
 * find the bucket into which the element would go if it
 * were added to this index. The element is not added to
 * the index, however. (See addElement for that.)
 *
 * @param {String} element the element to check
 * @returns {String} the label for the bucket for this element
 */
AlphabeticIndex.prototype.getBucket = function(element) {
	var label;
	var firstChar;
	var collationValue;
	var baseValue = [];
	
	if (element == undefined ) {
		return;
	}

	firstChar = element.charAt(0);
	collationValue = this.collationMap[firstChar];
	
	if (typeof collationValue[0] === 'number') {
		baseValue[0] = collationValue[0];
		if (baseValue[0] < this.flowBoundaries[0]) {
			label = this.underflowLabel;
		} else if (baseValue[0] > this.flowBoundaries[1]){
			label = this.overflowLabel;
		} else {
			label = this._getKeyByValue(baseValue);	
		}	
	} else if (typeof collationValue[0] === 'object') {
		baseValue[0] = collationValue[0][0];
		label = this._getKeyByValue(baseValue);
	}
	return label;	
};


/**
 * 
 * 
 */
AlphabeticIndex.prototype.getDefaultIndexStyle = function() {
	return this.collation["default"];
};

/**
 * Return the total number of buckets in this index.
 *
 * @returns {number} the number of buckets in this index
 */
AlphabeticIndex.prototype.getBucketCount = function() {
	var count = Object.keys(this.index).length;
	return count;
};

/**
 * Return the bucket labels for this index in order. This
 * method only returns the index labels for buckets that
 * actually contain elements. This
 * will include the under-, in-, and overflow labels if
 * they are used in this index.
 *
 * @returns {Array.<String>} the array of bucket labels
 * for this index in collation order
 */
AlphabeticIndex.prototype.getBucketLabels = function() {
	var buckets = this.index;
	var label = new Array();

	for (var prop in buckets) {
		if (buckets.hasOwnProperty(prop)) {
			label.push(prop);
		}
	}
	label.sort();
	return label;
};

/**
 * Return the all the bucket labels typically used in the
 * locale. This includes all bucket labels, even if those
 * buckets do not contain any elements.
 *
 * @returns {Array.<String>} the array of bucket labels
 * for this index in collation order
 */
AlphabeticIndex.prototype.getAllBucketLabels = function() {
	var label, i;

	if (this.allBucketLabels) {
		return this.allBucketLabels;
	}

	this.allBucketLabels = new Array();	
	this.allBucketLabels.push(this.underflowLabel);

	for (i = this.flowBoundaries[0]; i <= this.flowBoundaries[1]; i++) {
		label = this._getKeyByValue([i]);
		this.allBucketLabels.push(label);
	}

	this.allBucketLabels.push(this.overflowLabel);

	return this.allBucketLabels;
};

/**
 * Return the collator used to sort elements in this
 * index.
 *
 * @return {Collator} the ilib Collator instance used
 * in this index
 */
AlphabeticIndex.prototype.getCollator = function() {
	return this.collation;
};

/**
 * Get the default label used for abbreviated buckets
 * between other labels.
 *
 * @returns {String} the label for the inflow buckets
 */
AlphabeticIndex.prototype.getInflowLabel = function() {
	return this.inflowLabel;
};

/**
 * Get the default label used in the for overflow bucket.
 * This is the first item in a list. eg. ... A B C
 *
 * @return {String} the overflow bucket label
 */
AlphabeticIndex.prototype.getOverflowLabel = function() {
	return this.overflowLabel;
};


/**
 * Return the total number of elements in the index. This includes
 * all elements across all buckets.
 *
 * @returns {number} The number of elements in the index
 */
AlphabeticIndex.prototype.getElementCount = function() {
	var buckets = this.index;
	var count = 0;

	for (var prop in buckets) {
		if (buckets.hasOwnProperty(prop)) {
			count += buckets[prop].length;
		}
	}
	return count;
};

/**
 * Get the default label used in underflow,
 * This is the last item in a list. eg. the last
 * item in: X Y Z #
 *
 * @returns {String} the label used for underflow elements
 */
AlphabeticIndex.prototype.getUnderflowLabel = function() {
	return this.underflowLabel;
};

/**
 * Set the inflow bucket label.
 *
 * @param {String} inflowLabel the label to use for the inflow buckets
 */
AlphabeticIndex.prototype.setInflowLabel = function(inflowLabel) {
	this.inflowLabel = inflowLabel;
};


/**
 * Set the overflow bucket label.
 *
 * @param {String} overflowLabel the label to use for the overflow buckets
 */
AlphabeticIndex.prototype.setOverflowLabel = function(overflowLabel) {
	this.overflowLabel = overflowLabel;
};


/**
 * Set the underflow bucket label.
 *
 * @param {String} underflowLabel the label to use for the underflow buckets
 */
AlphabeticIndex.prototype.setUnderflowLabel = function(underflowLabel) {
	this.underflowLabel = underflowLabel;
};

module.exports = AlphabeticIndex;

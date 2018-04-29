/*
 * EnergyUnit.js - Unit conversions for energy measurements
 *
 * Copyright © 2014-2015, 2018 JEDLSoft
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
Measurement.js
*/

var Measurement = require("./Measurement.js");

/**
 * @class
 * Create a new energy measurement instance.
 *
 * @constructor
 * @extends Measurement
 * @param options {{unit:string,amount:number|string|undefined}} Options controlling
 * the construction of this instance
 */
var EnergyUnit = function (options) {
	this.unit = "joule";
	this.amount = 0;

	if (options) {
		if (typeof(options.unit) !== 'undefined') {
			this.originalUnit = options.unit;
			this.unit = this.normalizeUnits(options.unit);
		}

		if (typeof(options.amount) === 'object') {
			if (options.amount.getMeasure() === "energy") {
				this.amount = EnergyUnit.convert(this.unit, options.amount.getUnit(), options.amount.getAmount());
			} else {
				throw "Cannot convert units " + options.amount.unit + " to a energy";
			}
		} else if (typeof(options.amount) !== 'undefined') {
			this.amount = parseFloat(options.amount);
		}
	}

	if (typeof(EnergyUnit.ratios[this.unit]) === 'undefined') {
		throw "Unknown unit: " + options.unit;
	}
};

EnergyUnit.prototype = new Measurement();
EnergyUnit.prototype.parent = Measurement;
EnergyUnit.prototype.constructor = EnergyUnit;

EnergyUnit.ratios = {
   /*                index mJ          J           BTU               kJ          Wh                Cal               MJ             kWh                gJ             MWh                 GWh         */
    "millijoule":   [ 1,   1,          0.001,      9.4781707775e-7,  1e-6,       2.7777777778e-7,  2.3884589663e-7,  1.0e-9,        2.7777777778e-10,  1.0e-12,       2.7777777778e-13,   2.7777777778e-16  ],
    "joule":        [ 2,   1000,       1,          9.4781707775e-4,  0.001,      2.7777777778e-4,  2.3884589663e-4,  1.0e-6,        2.7777777778e-7,   1.0e-9,        2.7777777778e-10,   2.7777777778e-13  ],
    "BTU":          [ 3,   1055055.9,  1055.0559,  1,                1.0550559,  0.29307108333,    0.25199577243,    1.0550559e-3,  2.9307108333e-4,   1.0550559e-6,  2.9307108333e-7,    2.9307108333e-10  ],
    "kilojoule":    [ 4,   1000000,    1000,       0.94781707775,    1,          0.27777777778,    0.23884589663,    0.001,         2.7777777778e-4,   1.0e-6,        2.7777777778e-7,    2.7777777778e-10  ],
    "watt-hour":    [ 5,   3.6e+6,     3600,       3.4121414799,     3.6,        1,                0.85984522786,    0.0036,        0.001,             3.6e-6,        1.0e-6,             1.0e-9            ],
    "foodcalorie":  [ 6,   4.868e+5,   4186.8,     3.9683205411,     4.1868,     1.163,            1,                4.1868e-3,     1.163e-3,          4.1868e-6,     1.163e-6,           1.163e-9          ],
    "megajoule":    [ 7,   1e+9,       1e+6,       947.81707775,     1000,       277.77777778,     238.84589663,     1,             0.27777777778,     0.001,         2.7777777778e-4,    2.7777777778e-7   ],
    "kilowatt-hour":[ 8,   3.6e+9,     3.6e+6,     3412.1414799,     3600,       1000,             859.84522786,     3.6,           1,                 3.6e-3,        0.001,              1e-6              ],
    "gigajoule":    [ 9,   1e+12,      1e+9,       947817.07775,     1e+6,       277777.77778,     238845.89663,     1000,          277.77777778,      1,             0.27777777778,      2.7777777778e-4   ],
    "megawatt-hour":[ 10,  3.6e+12,    3.6e+9,     3412141.4799,     3.6e+6,     1e+6,             859845.22786,     3600,          1000,              3.6,           1,                  0.001             ],
    "gigawatt-hour":[ 11,  3.6e+15,    3.6e+12,    3412141479.9,     3.6e+9,     1e+9,             859845227.86,     3.6e+6,        1e+6,              3600,          1000,               1                 ]
};

/**
 * Return the type of this measurement. Examples are "mass",
 * "length", "speed", etc. Measurements can only be converted
 * to measurements of the same type.<p>
 *
 * The type of the units is determined automatically from the
 * units. For example, the unit "grams" is type "mass". Use the
 * static call {@link Measurement.getAvailableUnits}
 * to find out what units this version of ilib supports.
 *
 * @return {string} the name of the type of this measurement
 */
EnergyUnit.prototype.getMeasure = function() {
	return "energy";
};

/**
 * Return a new measurement instance that is converted to a new
 * measurement unit. Measurements can only be converted
 * to measurements of the same type.<p>
 *
 * @param {string} to The name of the units to convert to
 * @return {Measurement|undefined} the converted measurement
 * or undefined if the requested units are for a different
 * measurement type
 */
EnergyUnit.prototype.convert = function(to) {
    if (!to || typeof(EnergyUnit.ratios[this.normalizeUnits(to)]) === 'undefined') {
        return undefined;
    }
    return new EnergyUnit({
        unit: to,
        amount: this
    });
};

EnergyUnit.aliases = {
    "milli joule": "millijoule",
    "millijoule": "millijoule",
    "milliJ": "millijoule",
    "mJ": "millijoule",
    "joule": "joule",
    "joules": "joule",
    "J": "joule",
    "BTU": "BTU",
    "British Thermal Unit": "BTU",
    "British Thermal Units": "BTU",
    "kilo joule": "kilojoule",
    "kilojoule": "kilojoule",
    "kilojoules": "kilojoule",
    "kjoule": "kilojoule",
    "kJ": "kilojoule",
    "watt hour": "watt-hour",
    "watt hours": "watt-hour",
    "Wh": "watt-hour",
    "food calorie": "foodcalorie",
    "food calories": "foodcalorie",
    "calorie": "foodcalorie",
    "calories": "foodcalorie",
    "Cal": "foodcalorie",
    "mega joule": "megajoule",
    "mega joules": "megajoule",
    "megajoule": "megajoule",
    "megajoules": "megajoule",
    "MJ": "megajoule",
    "kilo watt hour": "kilowatt-hour",
    "kilo watt hours": "kilowatt-hour",
    "kiloWh": "kilowatt-hour",
    "kilowatt hour": "kilowatt-hour",
    "kilowatt hours": "kilowatt-hour",
    "kilowatt-hour": "kilowatt-hour",
    "kilowatt-hours": "kilowatt-hour",
    "kilowatthour": "kilowatt-hour",
    "kilowatthours": "kilowatt-hour",
    "kW hour": "kilowatt-hour",
    "kW hours": "kilowatt-hour",
    "kW-hour": "kilowatt-hour",
    "kW-hours": "kilowatt-hour",
    "kiloWh": "kilowatt-hour",
    "kWh": "kilowatt-hour",
    "giga joule": "gigajoule",
    "Gj": "gigajoule",
    "gigajoule": "gigajoule",
    "gigajoules": "gigajoule",
    "mega watt hour": "megawatt-hour",
    "mega watt hours": "megawatt-hour",
    "megawatt hour": "megawatt-hour",
    "megawatt hours": "megawatt-hour",
    "megawatt-hour": "megawatt-hour",
    "megawatt-hours": "megawatt-hour",
    "MW hour": "megawatt-hour",
    "MW hours": "megawatt-hour",
    "MW-hour": "megawatt-hour",
    "MW-hours": "megawatt-hour",
    "megaWh": "megawatt-hour",
    "MWh": "megawatt-hour",
    "giga watt hour": "gigawatt-hour",
    "giga watt hour": "gigawatt-hour",
    "giga watt hours": "gigawatt-hour",
    "gigawatt hour": "gigawatt-hour",
    "gigawatt hours": "gigawatt-hour",
    "gigawatt-hours": "gigawatt-hour",
    "gigawatthour": "gigawatt-hour",
    "GW hour": "gigawatt-hour",
    "GW hours": "gigawatt-hour",
    "GW-hour": "gigawatt-hour",
    "GW-hours": "gigawatt-hour",
    "gigaWh": "gigawatt-hour",
    "GWh": "gigawatt-hour"
};

/**
 * Convert a energy to another measure.
 * @static
 * @param to {string} unit to convert to
 * @param from {string} unit to convert from
 * @param energy {number} amount to be convert
 * @returns {number|undefined} the converted amount
 */
EnergyUnit.convert = function(to, from, energy) {
    from = Measurement.getUnitIdCaseInsensitive(EnergyUnit, from) || from;
    to = Measurement.getUnitIdCaseInsensitive(EnergyUnit, to) || to;
    var fromRow = EnergyUnit.ratios[from];
    var toRow = EnergyUnit.ratios[to];
    if (typeof(from) === 'undefined' || typeof(to) === 'undefined') {
        return undefined;
    }
    return energy * fromRow[toRow[0]];
};

/**
 * @private
 * @static
 */
EnergyUnit.getMeasures = function () {
    return Object.keys(EnergyUnit.ratios);
};

EnergyUnit.metricJouleSystem = {
    "millijoule": 1,
    "joule": 2,
    "kilojoule": 4,
    "megajoule": 7,
    "gigajoule": 9
};
EnergyUnit.metricWattHourSystem = {
    "watt-hour": 5,
    "kilowatt-hour": 8,
    "megawatt-hour": 10,
    "gigawatt-hour": 11
};

EnergyUnit.imperialSystem = {
    "BTU": 3
};
EnergyUnit.uscustomarySystem = {
    "foodcalorie": 6
};

EnergyUnit.metricToImperial = {
    "millijoule": "BTU",
    "joule": "BTU",
    "kilojoule": "BTU",
    "megajoule": "BTU",
    "gigajoule": "BTU"
};
EnergyUnit.imperialToMetric = {
    "BTU": "joule"
};

/**
 * Localize the measurement to the commonly used measurement in that locale. For example
 * If a user's locale is "en-US" and the measurement is given as "60 kmh",
 * the formatted number should be automatically converted to the most appropriate
 * measure in the other system, in this case, mph. The formatted result should
 * appear as "37.3 mph".
 *
 * @param {string} locale current locale string
 * @returns {Measurement} a new instance that is converted to locale
 */
EnergyUnit.prototype.localize = function(locale) {
	var to;
	if (locale === "en-GB") {
		to = EnergyUnit.metricToImperial[this.unit] || this.unit;
	} else {
		to = EnergyUnit.imperialToMetric[this.unit] || this.unit;
	}

	return new EnergyUnit({
	    unit: to,
	    amount: this
	});
};

/**
 * Scale the measurement unit to an acceptable level. The scaling
 * happens so that the integer part of the amount is as small as
 * possible without being below zero. This will result in the
 * largest units that can represent this measurement without
 * fractions. Measurements can only be scaled to other measurements
 * of the same type.
 *
 * @param {string=} measurementsystem system to use (uscustomary|imperial|metric),
 * or undefined if the system can be inferred from the current measure
 * @return {Measurement} a new instance that is scaled to the
 * right level
 */
EnergyUnit.prototype.scale = function(measurementsystem) {
    var fromRow = EnergyUnit.ratios[this.unit];
    var mSystem;

    if ((measurementsystem === "metric" && typeof(EnergyUnit.metricJouleSystem[this.unit]) !== 'undefined')|| (typeof(measurementsystem) === 'undefined'
        && typeof(EnergyUnit.metricJouleSystem[this.unit]) !== 'undefined')) {
        mSystem = EnergyUnit.metricJouleSystem;
    }
    else if ((measurementsystem === "metric" && typeof(EnergyUnit.metricWattHourSystem[this.unit]) !== 'undefined')|| (typeof(measurementsystem) === 'undefined'
        && typeof(EnergyUnit.metricWattHourSystem[this.unit]) !== 'undefined')) {
        mSystem = EnergyUnit.metricWattHourSystem;
    }

    else  if (measurementsystem === "uscustomary" || (typeof(measurementsystem) === 'undefined'
        && typeof(EnergyUnit.uscustomarySystem[this.unit]) !== 'undefined')) {
        mSystem = EnergyUnit.uscustomarySystem;
    }
    else if (measurementsystem === "imperial"|| (typeof(measurementsystem) === 'undefined'
        && typeof(EnergyUnit.imperialSystem[this.unit]) !== 'undefined')) {
        mSystem = EnergyUnit.imperialSystem;
    }

    var energy = this.amount;
    var munit = this.unit;

    energy = 18446744073709551999;

    for (var m in mSystem) {
        var tmp = this.amount * fromRow[mSystem[m]];
        if (tmp >= 1 && tmp < energy) {
	        energy = tmp;
	        munit = m;
        }
    }

    return new EnergyUnit({
        unit: munit,
        amount: energy
    });
};

/**
 * Expand the current measurement such that any fractions of the current unit
 * are represented in terms of smaller units in the same system instead of fractions
 * of the current unit. For example, "6.25 feet" may be represented as
 * "6 feet 4 inches" instead. The return value is an array of measurements which
 * are progressively smaller until the smallest unit in the system is reached
 * or until there is a whole number of any unit along the way.
 *
 * @param {string=} measurementsystem system to use (uscustomary|imperial|metric),
 * or undefined if the system can be inferred from the current measure
 * @return {Array.<Measurement>} an array of new measurements in order from
 * the current units to the smallest units in the system which together are the
 * same measurement as this one
 */
EnergyUnit.prototype.expand = function(measurementsystem) {
    var mSystem;
    if ((measurementsystem === "metric" && typeof(EnergyUnit.metricJouleSystem[this.unit]) !== 'undefined')|| (typeof(measurementsystem) === 'undefined'
        && typeof(EnergyUnit.metricJouleSystem[this.unit]) !== 'undefined')) {
        mSystem = EnergyUnit.metricJouleSystem;
    }
    else if ((measurementsystem === "metric" && typeof(EnergyUnit.metricWattHourSystem[this.unit]) !== 'undefined')|| (typeof(measurementsystem) === 'undefined'
        && typeof(EnergyUnit.metricWattHourSystem[this.unit]) !== 'undefined')) {
        mSystem = EnergyUnit.metricWattHourSystem;
    }

    else  if (measurementsystem === "uscustomary" || (typeof(measurementsystem) === 'undefined'
        && typeof(EnergyUnit.uscustomarySystem[this.unit]) !== 'undefined')) {
        mSystem = EnergyUnit.uscustomarySystem;
    }
    else if (measurementsystem === "imperial"|| (typeof(measurementsystem) === 'undefined'
        && typeof(EnergyUnit.imperialSystem[this.unit]) !== 'undefined')) {
        mSystem = EnergyUnit.imperialSystem;
    } else {
        mSystem = EnergyUnit.metricJouleSystem;
    }

    return this.list(Object.keys(mSystem), EnergyUnit.ratios).map(function(item) {
        return new EnergyUnit(item);
    });
};

//register with the factory method
Measurement._constructors["energy"] = EnergyUnit;

module.exports = EnergyUnit;
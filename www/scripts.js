(function () {
	var $D = Date,
		$P = $D.prototype,
		p = function (s, l) {
			if (!l) {
				l = 2;
			}
			return ("000" + s).slice(l * -1);
		};
	
	if (typeof window !== "undefined" && typeof window.console !== "undefined" && typeof window.console.log !== "undefined") {
		$D.console = console; // used only to raise non-critical errors if available
	} else {
		// set mock so we don't give errors.
		$D.console = {
			log: function(){},
			error: function(){}
		};
	}
	$D.Config = $D.Config || {};

	$D.initOverloads = function() {
		/** 
		 * Overload of Date.now. Allows an alternate call for Date.now where it returns the 
		 * current Date as an object rather than just milliseconds since the Unix Epoch.
		 *
		 * Also provides an implementation of now() for browsers (IE<9) that don't have it.
		 * 
		 * Backwards compatible so with work with either:
		 *  Date.now() [returns ms]
		 * or
		 *  Date.now(true) [returns Date]
		 */
		if (!$D.now) {
			$D._now = function now() {
				return new Date().getTime();
			};
		} else if (!$D._now) {
			$D._now = $D.now;
		}

		$D.now = function (returnObj) {
			if (returnObj) {
				return $D.present();
			} else {
				return $D._now();
			}
		};

		if ( !$P.toISOString ) {
			$P.toISOString = function() {
				return this.getUTCFullYear() +
				"-" + p(this.getUTCMonth() + 1) +
				"-" + p(this.getUTCDate()) +
				"T" + p(this.getUTCHours()) +
				":" + p(this.getUTCMinutes()) +
				":" + p(this.getUTCSeconds()) +
				"." + String( (this.getUTCMilliseconds()/1000).toFixed(3)).slice(2, 5) +
				"Z";
			};
		}
		
		// private
		if ( $P._toString === undefined ){
			$P._toString = $P.toString;
		}

	};
	$D.initOverloads();


	/** 
	 * Gets a date that is set to the current date. The time is set to the start of the day (00:00 or 12:00 AM).
	 * @return {Date}    The current date.
	 */
	$D.today = function () {
		return new Date().clearTime();
	};

	/** 
	 * Gets a date that is set to the current date and time (same as new Date, but chainable)
	 * @return {Date}    The current date.
	 */
	$D.present = function () {
		return new Date();
	};

	/**
	 * Compares the first date to the second date and returns an number indication of their relative values.  
	 * @param {Date}     First Date object to compare [Required].
	 * @param {Date}     Second Date object to compare to [Required].
	 * @return {Number}  -1 = date1 is lessthan date2. 0 = values are equal. 1 = date1 is greaterthan date2.
	 */
	$D.compare = function (date1, date2) {
		if (isNaN(date1) || isNaN(date2)) {
			throw new Error(date1 + " - " + date2);
		} else if (date1 instanceof Date && date2 instanceof Date) {
			return (date1 < date2) ? -1 : (date1 > date2) ? 1 : 0;
		} else {
			throw new TypeError(date1 + " - " + date2);
		}
	};
	
	/**
	 * Compares the first Date object to the second Date object and returns true if they are equal.  
	 * @param {Date}     First Date object to compare [Required]
	 * @param {Date}     Second Date object to compare to [Required]
	 * @return {Boolean} true if dates are equal. false if they are not equal.
	 */
	$D.equals = function (date1, date2) {
		return (date1.compareTo(date2) === 0);
	};

	/**
	 * Gets the language appropriate day name when given the day number(0-6)
	 * eg - 0 == Sunday
	 * @return {String}  The day name
	 */
	$D.getDayName = function (n) {
		return Date.CultureInfo.dayNames[n];
	};

	/**
	 * Gets the day number (0-6) if given a CultureInfo specific string which is a valid dayName, abbreviatedDayName or shortestDayName (two char).
	 * @param {String}   The name of the day (eg. "Monday, "Mon", "tuesday", "tue", "We", "we").
	 * @return {Number}  The day number
	 */
	$D.getDayNumberFromName = function (name) {
		var n = Date.CultureInfo.dayNames, m = Date.CultureInfo.abbreviatedDayNames, o = Date.CultureInfo.shortestDayNames, s = name.toLowerCase();
		for (var i = 0; i < n.length; i++) {
			if (n[i].toLowerCase() === s || m[i].toLowerCase() === s || o[i].toLowerCase() === s) {
				return i;
			}
		}
		return -1;
	};
	
	/**
	 * Gets the month number (0-11) if given a Culture Info specific string which is a valid monthName or abbreviatedMonthName.
	 * @param {String}   The name of the month (eg. "February, "Feb", "october", "oct").
	 * @return {Number}  The day number
	 */
	$D.getMonthNumberFromName = function (name) {
		var n = Date.CultureInfo.monthNames, m = Date.CultureInfo.abbreviatedMonthNames, s = name.toLowerCase();
		for (var i = 0; i < n.length; i++) {
			if (n[i].toLowerCase() === s || m[i].toLowerCase() === s) {
				return i;
			}
		}
		return -1;
	};

	/**
	 * Gets the language appropriate month name when given the month number(0-11)
	 * eg - 0 == January
	 * @return {String}  The month name
	 */
	$D.getMonthName = function (n) {
		return Date.CultureInfo.monthNames[n];
	};

	/**
	 * Determines if the current date instance is within a LeapYear.
	 * @param {Number}   The year.
	 * @return {Boolean} true if date is within a LeapYear, otherwise false.
	 */
	$D.isLeapYear = function (year) {
		return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
	};

	/**
	 * Gets the number of days in the month, given a year and month value. Automatically corrects for LeapYear.
	 * @param {Number}   The year.
	 * @param {Number}   The month (0-11).
	 * @return {Number}  The number of days in the month.
	 */
	$D.getDaysInMonth = function (year, month) {
		if (!month && $D.validateMonth(year)) {
				month = year;
				year = Date.today().getFullYear();
		}
		return [31, ($D.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
	};

	$P.getDaysInMonth = function () {
		return $D.getDaysInMonth(this.getFullYear(), this.getMonth());
	};
 
	$D.getTimezoneAbbreviation = function (offset, dst) {
		var p, n = (dst || false) ? Date.CultureInfo.abbreviatedTimeZoneDST : Date.CultureInfo.abbreviatedTimeZoneStandard;
		for (p in n) {
			if (n.hasOwnProperty(p)) {
				if (n[p] === offset) {
					return p;
				}
			}
		}
		return null;
	};
	
	$D.getTimezoneOffset = function (name, dst) {
		var i, a =[], z = Date.CultureInfo.timezones;
		if (!name) { name = (new Date()).getTimezone();}
		for (i = 0; i < z.length; i++) {
			if (z[i].name === name.toUpperCase()) {
				a.push(i);
			}
		}
		if (!z[a[0]]) {
			return null;
		}
		if (a.length === 1 || !dst) {
			return z[a[0]].offset;
		} else {
			for (i=0; i < a.length; i++) {
				if (z[a[i]].dst) {
					return z[a[i]].offset;
				}
			}
		}
	};

	$D.getQuarter = function (d) {
		d = d || new Date(); // If no date supplied, use today
		var q = [1,2,3,4];
		return q[Math.floor(d.getMonth() / 3)]; // ~~~ is a bitwise op. Faster than Math.floor
	};

	$D.getDaysLeftInQuarter = function (d) {
		d = d || new Date();
		var qEnd = new Date(d);
		qEnd.setMonth(qEnd.getMonth() + 3 - qEnd.getMonth() % 3, 0);
		return Math.floor((qEnd - d) / 8.64e7);
	};

	// private
	var validate = function (n, min, max, name) {
		name = name ? name : "Object";
		if (typeof n === "undefined") {
			return false;
		} else if (typeof n !== "number") {
			throw new TypeError(n + " is not a Number.");
		} else if (n < min || n > max) {
			// As failing validation is *not* an exceptional circumstance 
			// lets not throw a RangeError Exception here. 
			// It's semantically correct but it's not sensible.
			return false;
		}
		return true;
	};

	/**
	 * Validates the number is within an acceptable range for milliseconds [0-999].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateMillisecond = function (value) {
		return validate(value, 0, 999, "millisecond");
	};

	/**
	 * Validates the number is within an acceptable range for seconds [0-59].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateSecond = function (value) {
		return validate(value, 0, 59, "second");
	};

	/**
	 * Validates the number is within an acceptable range for minutes [0-59].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateMinute = function (value) {
		return validate(value, 0, 59, "minute");
	};

	/**
	 * Validates the number is within an acceptable range for hours [0-23].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateHour = function (value) {
		return validate(value, 0, 23, "hour");
	};

	/**
	 * Validates the number is within an acceptable range for the days in a month [0-MaxDaysInMonth].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateDay = function (value, year, month) {
		if (year === undefined || year === null || month === undefined || month === null) { return false;}
		return validate(value, 1, $D.getDaysInMonth(year, month), "day");
	};

	/**
	 * Validates the number is within an acceptable range for months [0-11].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateWeek = function (value) {
		return validate(value, 0, 53, "week");
	};

	/**
	 * Validates the number is within an acceptable range for months [0-11].
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateMonth = function (value) {
		return validate(value, 0, 11, "month");
	};

	/**
	 * Validates the number is within an acceptable range for years.
	 * @param {Number}   The number to check if within range.
	 * @return {Boolean} true if within range, otherwise false.
	 */
	$D.validateYear = function (value) {
		/**
		 * Per ECMAScript spec the range of times supported by Date objects is 
		 * exactly -100,000,000 days to +100,000,000 days measured relative to 
		 * midnight at the beginning of 01 January, 1970 UTC. 
		 * This gives a range of 8,640,000,000,000,000 milliseconds to either 
		 * side of 01 January, 1970 UTC.
		 *
		 * Earliest possible date: Tue, 20 Apr 271,822 B.C. 00:00:00 UTC
		 * Latest possible date: Sat, 13 Sep 275,760 00:00:00 UTC
		 */
		return validate(value, -271822, 275760, "year");
	};
	$D.validateTimezone = function(value) {
		var timezones = {"ACDT":1,"ACST":1,"ACT":1,"ADT":1,"AEDT":1,"AEST":1,"AFT":1,"AKDT":1,"AKST":1,"AMST":1,"AMT":1,"ART":1,"AST":1,"AWDT":1,"AWST":1,"AZOST":1,"AZT":1,"BDT":1,"BIOT":1,"BIT":1,"BOT":1,"BRT":1,"BST":1,"BTT":1,"CAT":1,"CCT":1,"CDT":1,"CEDT":1,"CEST":1,"CET":1,"CHADT":1,"CHAST":1,"CHOT":1,"ChST":1,"CHUT":1,"CIST":1,"CIT":1,"CKT":1,"CLST":1,"CLT":1,"COST":1,"COT":1,"CST":1,"CT":1,"CVT":1,"CWST":1,"CXT":1,"DAVT":1,"DDUT":1,"DFT":1,"EASST":1,"EAST":1,"EAT":1,"ECT":1,"EDT":1,"EEDT":1,"EEST":1,"EET":1,"EGST":1,"EGT":1,"EIT":1,"EST":1,"FET":1,"FJT":1,"FKST":1,"FKT":1,"FNT":1,"GALT":1,"GAMT":1,"GET":1,"GFT":1,"GILT":1,"GIT":1,"GMT":1,"GST":1,"GYT":1,"HADT":1,"HAEC":1,"HAST":1,"HKT":1,"HMT":1,"HOVT":1,"HST":1,"ICT":1,"IDT":1,"IOT":1,"IRDT":1,"IRKT":1,"IRST":1,"IST":1,"JST":1,"KGT":1,"KOST":1,"KRAT":1,"KST":1,"LHST":1,"LINT":1,"MAGT":1,"MART":1,"MAWT":1,"MDT":1,"MET":1,"MEST":1,"MHT":1,"MIST":1,"MIT":1,"MMT":1,"MSK":1,"MST":1,"MUT":1,"MVT":1,"MYT":1,"NCT":1,"NDT":1,"NFT":1,"NPT":1,"NST":1,"NT":1,"NUT":1,"NZDT":1,"NZST":1,"OMST":1,"ORAT":1,"PDT":1,"PET":1,"PETT":1,"PGT":1,"PHOT":1,"PHT":1,"PKT":1,"PMDT":1,"PMST":1,"PONT":1,"PST":1,"PYST":1,"PYT":1,"RET":1,"ROTT":1,"SAKT":1,"SAMT":1,"SAST":1,"SBT":1,"SCT":1,"SGT":1,"SLST":1,"SRT":1,"SST":1,"SYOT":1,"TAHT":1,"THA":1,"TFT":1,"TJT":1,"TKT":1,"TLT":1,"TMT":1,"TOT":1,"TVT":1,"UCT":1,"ULAT":1,"UTC":1,"UYST":1,"UYT":1,"UZT":1,"VET":1,"VLAT":1,"VOLT":1,"VOST":1,"VUT":1,"WAKT":1,"WAST":1,"WAT":1,"WEDT":1,"WEST":1,"WET":1,"WST":1,"YAKT":1,"YEKT":1,"Z":1};
		return (timezones[value] === 1);
	};
	$D.validateTimezoneOffset= function(value) {
		// timezones go from +14hrs to -12hrs, the +X hours are negative offsets.
		return (value > -841 && value < 721);
	};

}());

;(function () {
	var $D = Date;

	/**
	 * @desc Converts the specified string value into its JavaScript Date equivalent using CultureInfo specific format information.
	 * 
	 * Example
	<pre><code>
	///////////
	// Dates //
	///////////

	// 15-Oct-2004
	var d1 = Date.parse("10/15/2004");

	// 15-Oct-2004
	var d1 = Date.parse("15-Oct-2004");

	// 15-Oct-2004
	var d1 = Date.parse("2004.10.15");

	//Fri Oct 15, 2004
	var d1 = Date.parse("Fri Oct 15, 2004");

	///////////
	// Times //
	///////////

	// Today at 10 PM.
	var d1 = Date.parse("10 PM");

	// Today at 10:30 PM.
	var d1 = Date.parse("10:30 P.M.");

	// Today at 6 AM.
	var d1 = Date.parse("06am");

	/////////////////////
	// Dates and Times //
	/////////////////////

	// 8-July-2004 @ 10:30 PM
	var d1 = Date.parse("July 8th, 2004, 10:30 PM");

	// 1-July-2004 @ 10:30 PM
	var d1 = Date.parse("2004-07-01T22:30:00");

	////////////////////
	// Relative Dates //
	////////////////////

	// Returns today's date. The string "today" is culture specific.
	var d1 = Date.parse("today");

	// Returns yesterday's date. The string "yesterday" is culture specific.
	var d1 = Date.parse("yesterday");

	// Returns the date of the next thursday.
	var d1 = Date.parse("Next thursday");

	// Returns the date of the most previous monday.
	var d1 = Date.parse("last monday");

	// Returns today's day + one year.
	var d1 = Date.parse("next year");

	///////////////
	// Date Math //
	///////////////

	// Today + 2 days
	var d1 = Date.parse("t+2");

	// Today + 2 days
	var d1 = Date.parse("today + 2 days");

	// Today + 3 months
	var d1 = Date.parse("t+3m");

	// Today - 1 year
	var d1 = Date.parse("today - 1 year");

	// Today - 1 year
	var d1 = Date.parse("t-1y"); 


	/////////////////////////////
	// Partial Dates and Times //
	/////////////////////////////

	// July 15th of this year.
	var d1 = Date.parse("July 15");

	// 15th day of current day and year.
	var d1 = Date.parse("15");

	// July 1st of current year at 10pm.
	var d1 = Date.parse("7/1 10pm");
	</code></pre>
	 *
	 * @param {String}   The string value to convert into a Date object [Required]
	 * @return {Date}    A Date object or null if the string cannot be converted into a Date.
	 */
	var parseUtils = {
		removeOrds: function (s) {
			ords = s.match(/\b(\d+)(?:st|nd|rd|th)\b/); // find ordinal matches
			s = ((ords && ords.length === 2) ? s.replace(ords[0], ords[1]) : s);
			return s;
		},
		grammarParser: function (s) {
			var r = null;
			try {
				r = $D.Grammar.start.call({}, s.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"));
			} catch (e) {
				return null;
			}
			
			return ((r[1].length === 0) ? r[0] : null);
		},
		nativeFallback: function(s) {
			var t;
			try {
				// ok we haven't parsed it, last ditch attempt with the built-in parser.
				t = Date._parse(s);
				return (t || t === 0) ? new Date(t) : null;
			} catch (e) {
				return null;
			}
		}
	};
	function parse (s) {
		var d;
		if (!s) {
			return null;
		}
		if (s instanceof Date) {
			return s.clone();
		}
		if (s.length >= 4 && s.charAt(0) !== "0" && s.charAt(0) !== "+"&& s.charAt(0) !== "-") { // ie: 2004 will pass, 0800 won't.
			//  Start with specific formats
			d = $D.Parsing.ISO.parse(s) || $D.Parsing.Numeric.parse(s);
		}
		if (d instanceof Date && !isNaN(d.getTime())) {
			return d;
		} else {
			// find ordinal dates (1st, 3rd, 8th, etc and remove them as they cause parsing issues)
			s = $D.Parsing.Normalizer.parse(parseUtils.removeOrds(s));
			d = parseUtils.grammarParser(s);
			if (d !== null) {
				return d;
			} else {
				return parseUtils.nativeFallback(s);
			}
		}
	}

	if (!$D._parse) {
		$D._parse = $D.parse;
	}
	$D.parse = parse;

	Date.getParseFunction = function (fx) {
		var fns = Date.Grammar.allformats(fx);
		return function (s) {
			var r = null;
			for (var i = 0; i < fns.length; i++) {
				try {
					r = fns[i].call({}, s);
				} catch (e) {
					continue;
				}
				if (r[1].length === 0) {
					return r[0];
				}
			}
			return null;
		};
	};
	
	/**
	 * Converts the specified string value into its JavaScript Date equivalent using the specified format {String} or formats {Array} and the CultureInfo specific format information.
	 * The format of the string value must match one of the supplied formats exactly.
	 * 
	 * Example
	<pre><code>
	// 15-Oct-2004
	var d1 = Date.parseExact("10/15/2004", "M/d/yyyy");

	// 15-Oct-2004
	var d1 = Date.parse("15-Oct-2004", "M-ddd-yyyy");

	// 15-Oct-2004
	var d1 = Date.parse("2004.10.15", "yyyy.MM.dd");

	// Multiple formats
	var d1 = Date.parseExact("10/15/2004", ["M/d/yyyy", "MMMM d, yyyy"]);
	</code></pre>
	 *
	 * @param {String}   The string value to convert into a Date object [Required].
	 * @param {Object}   The expected format {String} or an array of expected formats {Array} of the date string [Required].
	 * @return {Date}    A Date object or null if the string cannot be converted into a Date.
	 */
	$D.parseExact = function (s, fx) {
		return $D.getParseFunction(fx)(s);
	};
}());

;/*************************************************************
 * SugarPak - Domain Specific Language -  Syntactical Sugar  *
 *************************************************************/
 
(function () {
	var $D = Date, $P = $D.prototype, $N = Number.prototype;

	// private
	$P._orient = +1;

	// private
	$P._nth = null;

	// private
	$P._is = false;

	// private
	$P._same = false;
	
	// private
	$P._isSecond = false;

	// private
	$N._dateElement = "days";

	/** 
	 * Moves the date to the next instance of a date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.today().next().friday();
	Date.today().next().fri();
	Date.today().next().march();
	Date.today().next().mar();
	Date.today().next().week();
	</code></pre>
	 * 
	 * @return {Date}    date
	 */
	$P.next = function () {
		this._move = true;
		this._orient = +1;
		return this;
	};

	/** 
	 * Creates a new Date (Date.today()) and moves the date to the next instance of the date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.next().friday();
	Date.next().fri();
	Date.next().march();
	Date.next().mar();
	Date.next().week();
	</code></pre>
	 * 
	 * @return {Date}    date
	 */
	$D.next = function () {
		return $D.today().next();
	};

	/** 
	 * Moves the date to the previous instance of a date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.today().last().friday();
	Date.today().last().fri();
	Date.today().last().march();
	Date.today().last().mar();
	Date.today().last().week();
	</code></pre>
	 *  
	 * @return {Date}    date
	 */
	$P.last = $P.prev = $P.previous = function () {
		this._move = true;
		this._orient = -1;
		return this;
	};

	/** 
	 * Creates a new Date (Date.today()) and moves the date to the previous instance of the date as specified by the subsequent date element function (eg. .day(), .month()), month name function (eg. .january(), .jan()) or day name function (eg. .friday(), fri()).
	 * Example
	<pre><code>
	Date.last().friday();
	Date.last().fri();
	Date.previous().march();
	Date.prev().mar();
	Date.last().week();
	</code></pre>
	 *  
	 * @return {Date}    date
	 */
	$D.last = $D.prev = $D.previous = function () {
		return $D.today().last();
	};

	/** 
	 * Performs a equality check when followed by either a month name, day name or .weekday() function.
	 * Example
	<pre><code>
	Date.today().is().friday(); // true|false
	Date.today().is().fri();
	Date.today().is().march();
	Date.today().is().mar();
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.is = function () {
		this._is = true;
		return this;
	};

	/** 
	 * Determines if two date objects occur on/in exactly the same instance of the subsequent date part function.
	 * The function .same() must be followed by a date part function (example: .day(), .month(), .year(), etc).
	 *
	 * An optional Date can be passed in the date part function. If now date is passed as a parameter, 'Now' is used. 
	 *
	 * The following example demonstrates how to determine if two dates fall on the exact same day.
	 *
	 * Example
	<pre><code>
	var d1 = Date.today(); // today at 00:00
	var d2 = new Date();   // exactly now.

	// Do they occur on the same day?
	d1.same().day(d2); // true
	
	// Do they occur on the same hour?
	d1.same().hour(d2); // false, unless d2 hour is '00' (midnight).
	
	// What if it's the same day, but one year apart?
	var nextYear = Date.today().add(1).year();

	d1.same().day(nextYear); // false, because the dates must occur on the exact same day. 
	</code></pre>
	 *
	 * Scenario: Determine if a given date occurs during some week period 2 months from now. 
	 *
	 * Example
	<pre><code>
	var future = Date.today().add(2).months();
	return someDate.same().week(future); // true|false;
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.same = function () {
		this._same = true;
		this._isSecond = false;
		return this;
	};

	/** 
	 * Determines if the current date/time occurs during Today. Must be preceded by the .is() function.
	 * Example
	<pre><code>
	someDate.is().today();    // true|false
	new Date().is().today();  // true
	Date.today().is().today();// true
	Date.today().add(-1).day().is().today(); // false
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.today = function () {
		return this.same().day();
	};

	/** 
	 * Determines if the current date is a weekday. This function must be preceded by the .is() function.
	 * Example
	<pre><code>
	Date.today().is().weekday(); // true|false
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.weekday = function () {
		if (this._nth) {
			return df("Weekday").call(this);
		}
		if (this._move) {
			return this.addWeekdays(this._orient);
		}
		if (this._is) {
			this._is = false;
			return (!this.is().sat() && !this.is().sun());
		}
		return false;
	};
	/** 
	 * Determines if the current date is on the weekend. This function must be preceded by the .is() function.
	 * Example
	<pre><code>
	Date.today().is().weekend(); // true|false
	</code></pre>
	 *  
	 * @return {Boolean}    true|false
	 */
	$P.weekend = function () {
		if (this._is) {
			this._is = false;
			return (this.is().sat() || this.is().sun());
		}
		return false;
	};

	/** 
	 * Sets the Time of the current Date instance. A string "6:15 pm" or config object {hour:18, minute:15} are accepted.
	 * Example
	<pre><code>
	// Set time to 6:15pm with a String
	Date.today().at("6:15pm");

	// Set time to 6:15pm with a config object
	Date.today().at({hour:18, minute:15});
	</code></pre>
	 *  
	 * @return {Date}    date
	 */
	$P.at = function (time) {
		return (typeof time === "string") ? $D.parse(this.toString("d") + " " + time) : this.set(time);
	};
		
	/** 
	 * Creates a new Date() and adds this (Number) to the date based on the preceding date element function (eg. second|minute|hour|day|month|year).
	 * Example
	<pre><code>
	// Undeclared Numbers must be wrapped with parentheses. Requirment of JavaScript.
	(3).days().fromNow();
	(6).months().fromNow();

	// Declared Number variables do not require parentheses. 
	var n = 6;
	n.months().fromNow();
	</code></pre>
	 *  
	 * @return {Date}    A new Date instance
	 */
	$N.fromNow = $N.after = function (date) {
		var c = {};
		c[this._dateElement] = this;
		return ((!date) ? new Date() : date.clone()).add(c);
	};

	/** 
	 * Creates a new Date() and subtract this (Number) from the date based on the preceding date element function (eg. second|minute|hour|day|month|year).
	 * Example
	<pre><code>
	// Undeclared Numbers must be wrapped with parentheses. Requirment of JavaScript.
	(3).days().ago();
	(6).months().ago();

	// Declared Number variables do not require parentheses. 
	var n = 6;
	n.months().ago();
	</code></pre>
	 *  
	 * @return {Date}    A new Date instance
	 */
	$N.ago = $N.before = function (date) {
		var c = {},
		s = (this._dateElement[this._dateElement.length-1] !== "s") ? this._dateElement + "s" : this._dateElement;
		c[s] = this * -1;
		return ((!date) ? new Date() : date.clone()).add(c);
	};

	// Do NOT modify the following string tokens. These tokens are used to build dynamic functions.
	// All culture-specific strings can be found in the CultureInfo files.
	var dx = ("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),
		mx = ("january february march april may june july august september october november december").split(/\s/),
		px = ("Millisecond Second Minute Hour Day Week Month Year Quarter Weekday").split(/\s/),
		pxf = ("Milliseconds Seconds Minutes Hours Date Week Month FullYear Quarter").split(/\s/),
		nth = ("final first second third fourth fifth").split(/\s/),
		de;

   /** 
	 * Returns an object literal of all the date parts.
	 * Example
	<pre><code>
	var o = new Date().toObject();
	
	// { year: 2008, month: 4, week: 20, day: 13, hour: 18, minute: 9, second: 32, millisecond: 812 }
	
	// The object properties can be referenced directly from the object.
	
	alert(o.day);  // alerts "13"
	alert(o.year); // alerts "2008"
	</code></pre>
	 *  
	 * @return {Date}    An object literal representing the original date object.
	 */
	$P.toObject = function () {
		var o = {};
		for (var i = 0; i < px.length; i++) {
			if (this["get" + pxf[i]]) {
				o[px[i].toLowerCase()] = this["get" + pxf[i]]();
			}
		}
		return o;
	};
   
   /** 
	 * Returns a date created from an object literal. Ignores the .week property if set in the config. 
	 * Example
	<pre><code>
	var o = new Date().toObject();
	
	return Date.fromObject(o); // will return the same date. 

	var o2 = {month: 1, day: 20, hour: 18}; // birthday party!
	Date.fromObject(o2);
	</code></pre>
	 *  
	 * @return {Date}    An object literal representing the original date object.
	 */
	$D.fromObject = function(config) {
		config.week = null;
		return Date.today().set(config);
	};
		
	// Create day name functions and abbreviated day name functions (eg. monday(), friday(), fri()).
	
	var df = function (n) {
		return function () {
			if (this._is) {
				this._is = false;
				return this.getDay() === n;
			}
			if (this._move) { this._move = null; }
			if (this._nth !== null) {
				// If the .second() function was called earlier, remove the _orient 
				// from the date, and then continue.
				// This is required because 'second' can be used in two different context.
				// 
				// Example
				//
				//   Date.today().add(1).second();
				//   Date.march().second().monday();
				// 
				// Things get crazy with the following...
				//   Date.march().add(1).second().second().monday(); // but it works!!
				//  
				if (this._isSecond) {
					this.addSeconds(this._orient * -1);
				}
				// make sure we reset _isSecond
				this._isSecond = false;

				var ntemp = this._nth;
				this._nth = null;
				var temp = this.clone().moveToLastDayOfMonth();
				this.moveToNthOccurrence(n, ntemp);
				if (this > temp) {
					throw new RangeError($D.getDayName(n) + " does not occur " + ntemp + " times in the month of " + $D.getMonthName(temp.getMonth()) + " " + temp.getFullYear() + ".");
				}
				return this;
			}
			return this.moveToDayOfWeek(n, this._orient);
		};
	};
	
	var sdf = function (n) {
		return function () {
			var t = $D.today(), shift = n - t.getDay();
			if (n === 0 && Date.CultureInfo.firstDayOfWeek === 1 && t.getDay() !== 0) {
				shift = shift + 7;
			}
			return t.addDays(shift);
		};
	};
	

	
	// Create month name functions and abbreviated month name functions (eg. january(), march(), mar()).
	var month_instance_functions = function (n) {
		return function () {
			if (this._is) {
				this._is = false;
				return this.getMonth() === n;
			}
			return this.moveToMonth(n, this._orient);
		};
	};
	
	var month_static_functions = function (n) {
		return function () {
			return $D.today().set({ month: n, day: 1 });
		};
	};
	
	var processTerms = function (names, staticFunc, instanceFunc) {
		for (var i = 0; i < names.length; i++) {
			// Create constant static Name variables.
			$D[names[i].toUpperCase()] = $D[names[i].toUpperCase().substring(0, 3)] = i;
			// Create Name functions.
			$D[names[i]] = $D[names[i].substring(0, 3)] = staticFunc(i);
			// Create Name instance functions.
			$P[names[i]] = $P[names[i].substring(0, 3)] = instanceFunc(i);
		}

	};

	processTerms(dx, sdf, df);
	processTerms(mx, month_static_functions, month_instance_functions);
	
	// Create date element functions and plural date element functions used with Date (eg. day(), days(), months()).
	var ef = function (j) {
		return function () {
			// if the .second() function was called earlier, the _orient 
			// has alread been added. Just return this and reset _isSecond.
			if (this._isSecond) {
				this._isSecond = false;
				return this;
			}

			if (this._same) {
				this._same = this._is = false;
				var o1 = this.toObject(),
					o2 = (arguments[0] || new Date()).toObject(),
					v = "",
					k = j.toLowerCase();

				// the substr trick with -1 doesn't work in IE8 or less
				k = (k[k.length-1] === "s") ? k.substring(0,k.length-1) : k;
					
				for (var m = (px.length - 1); m > -1; m--) {
					v = px[m].toLowerCase();
					if (o1[v] !== o2[v]) {
						return false;
					}
					if (k === v) {
						break;
					}
				}
				return true;
			}
			
			if (j.substring(j.length - 1) !== "s") {
				j += "s";
			}
			if (this._move) { this._move = null; }
			return this["add" + j](this._orient);
		};
	};
	
	
	var nf = function (n) {
		return function () {
			this._dateElement = n;
			return this;
		};
	};
   
	for (var k = 0; k < px.length; k++) {
		de = px[k].toLowerCase();
		if(de !== "weekday") {
			// Create date element functions and plural date element functions used with Date (eg. day(), days(), months()).
			$P[de] = $P[de + "s"] = ef(px[k]);
			
			// Create date element functions and plural date element functions used with Number (eg. day(), days(), months()).
			$N[de] = $N[de + "s"] = nf(de + "s");
		}
	}
	
	$P._ss = ef("Second");
	
	var nthfn = function (n) {
		return function (dayOfWeek) {
			if (this._same) {
				return this._ss(arguments[0]);
			}
			if (dayOfWeek || dayOfWeek === 0) {
				return this.moveToNthOccurrence(dayOfWeek, n);
			}
			this._nth = n;

			// if the operator is 'second' add the _orient, then deal with it later...
			if (n === 2 && (dayOfWeek === undefined || dayOfWeek === null)) {
				this._isSecond = true;
				return this.addSeconds(this._orient);
			}
			return this;
		};
	};

	for (var l = 0; l < nth.length; l++) {
		$P[nth[l]] = (l === 0) ? nthfn(-1) : nthfn(l);
	}
}());

;(function () {
	"use strict";
	var gFn = function (attr) {
		return function () {
			return this[attr];
		};
	};
	
	var sFn = function (attr) {
		return function (val) {
			this[attr] = val;
			return this;
		};
	};
	var attrs = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];
	var addSetFuncs = function (context, attrs) {
		for (var i = 0; i < attrs.length ; i++) {
			var $a = attrs[i], $b = $a.slice(0, 1).toUpperCase() + $a.slice(1);
			context.prototype[$a] = 0;
			context.prototype["get" + $b] = gFn($a);
			context.prototype["set" + $b] = sFn($a);
		}
	};
	/**
	 * new TimeSpan(milliseconds);
	 * new TimeSpan(days, hours, minutes, seconds);
	 * new TimeSpan(days, hours, minutes, seconds, milliseconds);
	 */
	var TimeSpan = function (days, hours, minutes, seconds, milliseconds) {
		if (arguments.length === 1 && typeof days === "number") {
			var orient = (days < 0) ? -1 : +1;
			var millsLeft = Math.abs(days);
			this.setDays(Math.floor(millsLeft / 86400000) * orient);
			millsLeft = millsLeft % 86400000;
			this.setHours(Math.floor(millsLeft / 3600000) * orient);
			millsLeft = millsLeft % 3600000;
			this.setMinutes(Math.floor(millsLeft / 60000) * orient);
			millsLeft = millsLeft % 60000;
			this.setSeconds(Math.floor(millsLeft / 1000) * orient);
			millsLeft = millsLeft % 1000;
			this.setMilliseconds(millsLeft * orient);
		} else {
			this.set(days, hours, minutes, seconds, milliseconds);
		}

		this.getTotalMilliseconds = function () {
			return	(this.getDays() * 86400000) +
					(this.getHours() * 3600000) +
					(this.getMinutes() * 60000) +
					(this.getSeconds() * 1000);
		};
		
		this.compareTo = function (time) {
			var t1 = new Date(1970, 1, 1, this.getHours(), this.getMinutes(), this.getSeconds()), t2;
			if (time === null) {
				t2 = new Date(1970, 1, 1, 0, 0, 0);
			}
			else {
				t2 = new Date(1970, 1, 1, time.getHours(), time.getMinutes(), time.getSeconds());
			}
			return (t1 < t2) ? -1 : (t1 > t2) ? 1 : 0;
		};

		this.equals = function (time) {
			return (this.compareTo(time) === 0);
		};

		this.add = function (time) {
			return (time === null) ? this : this.addSeconds(time.getTotalMilliseconds() / 1000);
		};

		this.subtract = function (time) {
			return (time === null) ? this : this.addSeconds(-time.getTotalMilliseconds() / 1000);
		};

		this.addDays = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 86400000));
		};

		this.addHours = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 3600000));
		};

		this.addMinutes = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 60000));
		};

		this.addSeconds = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + (n * 1000));
		};

		this.addMilliseconds = function (n) {
			return new TimeSpan(this.getTotalMilliseconds() + n);
		};

		this.get12HourHour = function () {
			return (this.getHours() > 12) ? this.getHours() - 12 : (this.getHours() === 0) ? 12 : this.getHours();
		};

		this.getDesignator = function () {
			return (this.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
		};

		this.toString = function (format) {
			this._toString = function () {
				if (this.getDays() !== null && this.getDays() > 0) {
					return this.getDays() + "." + this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds());
				} else {
					return this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds());
				}
			};
			
			this.p = function (s) {
				return (s.toString().length < 2) ? "0" + s : s;
			};
			
			var me = this;
			
			return format ? format.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g,
			function (format) {
				switch (format) {
				case "d":
					return me.getDays();
				case "dd":
					return me.p(me.getDays());
				case "H":
					return me.getHours();
				case "HH":
					return me.p(me.getHours());
				case "h":
					return me.get12HourHour();
				case "hh":
					return me.p(me.get12HourHour());
				case "m":
					return me.getMinutes();
				case "mm":
					return me.p(me.getMinutes());
				case "s":
					return me.getSeconds();
				case "ss":
					return me.p(me.getSeconds());
				case "t":
					return ((me.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator).substring(0, 1);
				case "tt":
					return (me.getHours() < 12) ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
				}
			}
			) : this._toString();
		};
		return this;
	};
	addSetFuncs(TimeSpan, attrs.slice(2));
	TimeSpan.prototype.set = function (days, hours, minutes, seconds, milliseconds){
		this.setDays(days || this.getDays());
		this.setHours(hours || this.getHours());
		this.setMinutes(minutes || this.getMinutes());
		this.setSeconds(seconds || this.getSeconds());
		this.setMilliseconds(milliseconds || this.getMilliseconds());
	};


	/**
	 * Gets the time of day for this date instances. 
	 * @return {TimeSpan} TimeSpan
	 */
	Date.prototype.getTimeOfDay = function () {
		return new TimeSpan(0, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
	};

	Date.TimeSpan = TimeSpan;

	if (typeof window !== "undefined" ) {
		// keeping API compatible for v1.x 
		window.TimeSpan = TimeSpan;
	}
}());
;(function () {
	"use strict";
	var attrs = ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"];
	var gFn = function (attr) {
		return function () {
			return this[attr];
		};
	};
	
	var sFn = function (attr) {
		return function (val) {
			this[attr] = val;
			return this;
		};
	};
	var addSetFuncs = function (context, attrs) {
		for (var i = 0; i < attrs.length ; i++) {
			var $a = attrs[i], $b = $a.slice(0, 1).toUpperCase() + $a.slice(1);
			context.prototype[$a] = 0;
			context.prototype["get" + $b] = gFn($a);
			context.prototype["set" + $b] = sFn($a);
		}
	};

	var setMonthsAndYears = function (orient, d1, d2, context) {
		function inc() {
			d1.addMonths(-orient);
			context.months++;
			if (context.months === 12) {
				context.years++;
				context.months = 0;
			}
		}
		if (orient === +1) {
			while (d1 > d2) {
				inc();
			}
		} else {
			while (d1 < d2) {
				inc();
			}
		}
		context.months--;
		context.months *= orient;
		context.years *= orient;
	};

	var adjustForDST = function(orient, startDate, endDate) {
		var hasDSTMismatch = (false === (startDate.isDaylightSavingTime() === endDate.isDaylightSavingTime()));
		if (hasDSTMismatch && orient === 1) {
			startDate.addHours(-1);
		} else if (hasDSTMismatch) {
			startDate.addHours(1);
		}
	};
	/**
	 * TimePeriod(startDate, endDate);
	 * TimePeriod(years, months, days, hours, minutes, seconds, milliseconds);
	 */
	var TimePeriod = function (years, months, days, hours, minutes, seconds, milliseconds) {
		if (arguments.length === 7) {
			this.set(years, months, days, hours, minutes, seconds, milliseconds);
		} else if (arguments.length === 2 && arguments[0] instanceof Date && arguments[1] instanceof Date) {
			var startDate = arguments[0].clone();
			var endDate = arguments[1].clone();
			var orient = (startDate > endDate) ? +1 : -1;
			this.dates = {
				start: arguments[0].clone(),
				end: arguments[1].clone()
			};

			setMonthsAndYears(orient, startDate, endDate, this);
			adjustForDST(orient, startDate, endDate);
			// // TODO - adjust for DST
			var diff = endDate - startDate;
			if (diff !== 0) {
				var ts = new TimeSpan(diff);
				this.set(this.years, this.months, ts.getDays(), ts.getHours(), ts.getMinutes(), ts.getSeconds(), ts.getMilliseconds());
			}
		}
		return this;
	};
	// create all the set functions.
	addSetFuncs(TimePeriod, attrs);
	TimePeriod.prototype.set = function (years, months, days, hours, minutes, seconds, milliseconds){
		this.setYears(years || this.getYears());
		this.setMonths(months || this.getMonths());
		this.setDays(days || this.getDays());
		this.setHours(hours || this.getHours());
		this.setMinutes(minutes || this.getMinutes());
		this.setSeconds(seconds || this.getSeconds());
		this.setMilliseconds(milliseconds || this.getMilliseconds());
	};

	Date.TimePeriod = TimePeriod;

	if (typeof window !== "undefined") {
		// keeping API compatible for v1.x 
		window.TimePeriod = TimePeriod;
	}
}());
;(function () {
	var $D = Date,
		$P = $D.prototype,
		// $C = $D.CultureInfo, // not used atm
		p = function (s, l) {
			if (!l) {
				l = 2;
			}
			return ("000" + s).slice(l * -1);
		};
	/**
	 * Converts a PHP format string to Java/.NET format string.
	 * A PHP format string can be used with ._format or .format.
	 * A Java/.NET format string can be used with .toString().
	 * The .parseExact function will only accept a Java/.NET format string
	 *
	 * Example
	 * var f1 = "%m/%d/%y"
	 * var f2 = Date.normalizeFormat(f1);	// "MM/dd/yy"
	 *
	 * new Date().format(f1);	// "04/13/08"
	 * new Date()._format(f1);	// "04/13/08"
	 * new Date().toString(f2);	// "04/13/08"
	 *
	 * var date = Date.parseExact("04/13/08", f2); // Sun Apr 13 2008
	 *
	 * @param {String}   A PHP format string consisting of one or more format spcifiers.
	 * @return {String}  The PHP format converted to a Java/.NET format string.
	 */
	 var normalizerSubstitutions = {
		"d" : "dd",
		"%d": "dd",
		"D" : "ddd",
		"%a": "ddd",
		"j" : "dddd",
		"l" : "dddd",
		"%A": "dddd",
		"S" : "S",
		"F" : "MMMM",
		"%B": "MMMM",
		"m" : "MM",
		"%m": "MM",
		"M" : "MMM",
		"%b": "MMM",
		"%h": "MMM",
		"n" : "M",
		"Y" : "yyyy",
		"%Y": "yyyy",
		"y" : "yy",
		"%y": "yy",
		"g" : "h",
		"%I": "h",
		"G" : "H",
		"h" : "hh",
		"H" : "HH",
		"%H": "HH",
		"i" : "mm",
		"%M": "mm",
		"s" : "ss",
		"%S": "ss",
		"%r": "hh:mm tt",
		"%R": "H:mm",
		"%T": "H:mm:ss",
		"%X": "t",
		"%x": "d",
		"%e": "d",
		"%D": "MM/dd/yy",
		"%n": "\\n",
		"%t": "\\t",
		"e" : "z",
		"T" : "z",
		"%z": "z",
		"%Z": "z",
		"Z" : "ZZ",
		"N" : "u",
		"w" : "u",
		"%w": "u",
		"W" : "W",
		"%V": "W"
	};
	var normalizer = {
		substitutes: function (m) {
			return normalizerSubstitutions[m];
		},
		interpreted: function (m, x) {
			var y;
			switch (m) {
				case "%u":
					return x.getDay() + 1;
				case "z":
					return x.getOrdinalNumber();
				case "%j":
					return p(x.getOrdinalNumber(), 3);
				case "%U":
					var d1 = x.clone().set({month: 0, day: 1}).addDays(-1).moveToDayOfWeek(0),
						d2 = x.clone().addDays(1).moveToDayOfWeek(0, -1);
					return (d2 < d1) ? "00" : p((d2.getOrdinalNumber() - d1.getOrdinalNumber()) / 7 + 1);

				case "%W":
					return p(x.getWeek());
				case "t":
					return $D.getDaysInMonth(x.getFullYear(), x.getMonth());
				case "o":
				case "%G":
					return x.setWeek(x.getISOWeek()).toString("yyyy");
				case "%g":
					return x._format("%G").slice(-2);
				case "a":
				case "%p":
					return t("tt").toLowerCase();
				case "A":
					return t("tt").toUpperCase();
				case "u":
					return p(x.getMilliseconds(), 3);
				case "I":
					return (x.isDaylightSavingTime()) ? 1 : 0;
				case "O":
					return x.getUTCOffset();
				case "P":
					y = x.getUTCOffset();
					return y.substring(0, y.length - 2) + ":" + y.substring(y.length - 2);
				case "B":
					var now = new Date();
					return Math.floor(((now.getHours() * 3600) + (now.getMinutes() * 60) + now.getSeconds() + (now.getTimezoneOffset() + 60) * 60) / 86.4);
				case "c":
					return x.toISOString().replace(/\"/g, "");
				case "U":
					return $D.strtotime("now");
				case "%c":
					return t("d") + " " + t("t");
				case "%C":
					return Math.floor(x.getFullYear() / 100 + 1);
			}
		},
		shouldOverrideDefaults: function (m) {
			switch (m) {
				case "%e":
					return true;
				default:
					return false;
			}
		},
		parse: function (m, context) {
			var formatString, c = context || new Date();
			formatString = normalizer.substitutes(m);
			if (formatString) {
				return formatString;
			}
			formatString = normalizer.interpreted(m, c);

			if (formatString) {
				return formatString;
			} else {
				return m;
			}
		}
	};

	$D.normalizeFormat = function (format, context) {
		return format.replace(/(%|\\)?.|%%/g, function(t){
				return normalizer.parse(t, context);
		});
	};
	/**
	 * Format a local Unix timestamp according to locale settings
	 *
	 * Example:
	 * Date.strftime("%m/%d/%y", new Date());		// "04/13/08"
	 * Date.strftime("c", "2008-04-13T17:52:03Z");	// "04/13/08"
	 *
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @param {Number|String}   The number representing the number of seconds that have elapsed since January 1, 1970 (local time).
	 * @return {String}  A string representation of the current Date object.
	 */
	$D.strftime = function (format, time) {
		var d = Date.parse(time);
		return d._format(format);
	};
	/**
	 * Parse any textual datetime description into a Unix timestamp.
	 * A Unix timestamp is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
	 *
	 * Example:
	 * Date.strtotime("04/13/08");				// 1208044800
	 * Date.strtotime("1970-01-01T00:00:00Z");	// 0
	 *
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @param {Object}   A string or date object.
	 * @return {String}  A string representation of the current Date object.
	 */
	$D.strtotime = function (time) {
		var d = $D.parse(time);
		return Math.round($D.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds()) / 1000);
	};
	/**
	 * Converts the value of the current Date object to its equivalent string representation using a PHP/Unix style of date format specifiers.
	 * Format Specifiers
	 * Format  Description																	Example
	 * ------  ---------------------------------------------------------------------------	-----------------------
	 * %a		abbreviated weekday name according to the current localed					"Mon" through "Sun"
	 * %A		full weekday name according to the current localed							"Sunday" through "Saturday"
	 * %b		abbreviated month name according to the current localed						"Jan" through "Dec"
	 * %B		full month name according to the current locale								"January" through "December"
	 * %c		preferred date and time representation for the current locale				"4/13/2008 12:33 PM"
	 * %C		century number (the year divided by 100 and truncated to an integer)		"00" to "99"
	 * %d		day of the month as a decimal number										"01" to "31"
	 * %D		same as %m/%d/%y															"04/13/08"
	 * %e		day of the month as a decimal number, a single digit is preceded by a space	"1" to "31"
	 * %g		like %G, but without the century											"08"
	 * %G		The 4-digit year corresponding to the ISO week number (see %V).				"2008"
	 *		This has the same format and value as %Y, except that if the ISO week number
	 *		belongs to the previous or next year, that year is used instead.
	 * %h		same as %b																	"Jan" through "Dec"
	 * %H		hour as a decimal number using a 24-hour clock.								"00" to "23"
	 * %I		hour as a decimal number using a 12-hour clock.								"01" to "12"
	 * %j		day of the year as a decimal number.										"001" to "366"
	 * %m		month as a decimal number.													"01" to "12"
	 * %M		minute as a decimal number.													"00" to "59"
	 * %n		newline character		"\n"
	 * %p		either "am" or "pm" according to the given time value, or the				"am" or "pm"
	 *		corresponding strings for the current locale.
	 * %r		time in a.m. and p.m. notation												"8:44 PM"
	 * %R		time in 24 hour notation													"20:44"
	 * %S		second as a decimal number													"00" to "59"
	 * %t		tab character																"\t"
	 * %T		current time, equal to %H:%M:%S												"12:49:11"
	 * %u		weekday as a decimal number ["1", "7"], with "1" representing Monday		"1" to "7"
	 * %U		week number of the current year as a decimal number, starting with the		"0" to ("52" or "53")
	 *		first Sunday as the first day of the first week
	 * %V		The ISO 8601:1988 week number of the current year as a decimal number,		"00" to ("52" or "53")
	 *		range 01 to 53, where week 1 is the first week that has at least 4 days
	 *		in the current year, and with Monday as the first day of the week.
	 *		(Use %G or %g for the year component that corresponds to the week number
	 *		for the specified timestamp.)
	 * %W		week number of the current year as a decimal number, starting with the		"00" to ("52" or "53")
	 *		first Monday as the first day of the first week
	 * %w		day of the week as a decimal, Sunday being "0"								"0" to "6"
	 * %x		preferred date representation for the current locale without the time		"4/13/2008"
	 * %X		preferred time representation for the current locale without the date		"12:53:05"
	 * %y		year as a decimal number without a century									"00" "99"
	 * %Y		year as a decimal number including the century								"2008"
	 * %Z		time zone or name or abbreviation											"UTC", "EST", "PST"
	 * %z		same as %Z
	 * %%		a literal "%" characters													"%"
	 * d		Day of the month, 2 digits with leading zeros								"01" to "31"
	 * D		A textual representation of a day, three letters							"Mon" through "Sun"
	 * j		Day of the month without leading zeros										"1" to "31"
	 * l		A full textual representation of the day of the week (lowercase "L")		"Sunday" through "Saturday"
	 * N		ISO-8601 numeric representation of the day of the week (added in PHP 5.1.0)	"1" (for Monday) through "7" (for Sunday)
	 * S		English ordinal suffix for the day of the month, 2 characters				"st", "nd", "rd" or "th". Works well with j
	 * w		Numeric representation of the day of the week								"0" (for Sunday) through "6" (for Saturday)
	 * z		The day of the year (starting from "0")										"0" through "365"
	 * W		ISO-8601 week number of year, weeks starting on Monday						"00" to ("52" or "53")
	 * F		A full textual representation of a month, such as January or March			"January" through "December"
	 * m		Numeric representation of a month, with leading zeros						"01" through "12"
	 * M		A short textual representation of a month, three letters					"Jan" through "Dec"
	 * n		Numeric representation of a month, without leading zeros					"1" through "12"
	 * t		Number of days in the given month											"28" through "31"
	 * L		Whether it's a leap year													"1" if it is a leap year, "0" otherwise
	 * o		ISO-8601 year number. This has the same value as Y, except that if the		"2008"
	 *		ISO week number (W) belongs to the previous or next year, that year
	 *		is used instead.
	 * Y		A full numeric representation of a year, 4 digits							"2008"
	 * y		A two digit representation of a year										"08"
	 * a		Lowercase Ante meridiem and Post meridiem									"am" or "pm"
	 * A		Uppercase Ante meridiem and Post meridiem									"AM" or "PM"
	 * B		Swatch Internet time														"000" through "999"
	 * g		12-hour format of an hour without leading zeros								"1" through "12"
	 * G		24-hour format of an hour without leading zeros								"0" through "23"
	 * h		12-hour format of an hour with leading zeros								"01" through "12"
	 * H		24-hour format of an hour with leading zeros								"00" through "23"
	 * i		Minutes with leading zeros													"00" to "59"
	 * s		Seconds, with leading zeros													"00" through "59"
	 * u		Milliseconds																"54321"
	 * e		Timezone identifier															"UTC", "EST", "PST"
	 * I		Whether or not the date is in daylight saving time (uppercase i)			"1" if Daylight Saving Time, "0" otherwise
	 * O		Difference to Greenwich time (GMT) in hours									"+0200", "-0600"
	 * P		Difference to Greenwich time (GMT) with colon between hours and minutes		"+02:00", "-06:00"
	 * T		Timezone abbreviation														"UTC", "EST", "PST"
	 * Z		Timezone offset in seconds. The offset for timezones west of UTC is			"-43200" through "50400"
	 *			always negative, and for those east of UTC is always positive.
	 * c		ISO 8601 date																"2004-02-12T15:19:21+00:00"
	 * r		RFC 2822 formatted date														"Thu, 21 Dec 2000 16:01:07 +0200"
	 * U		Seconds since the Unix Epoch (January 1 1970 00:00:00 GMT)					"0"
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @return {String}  A string representation of the current Date object.
	 */
	var formatReplace = function (context) {
		return function (m) {
			var formatString, override = false;
			if (m.charAt(0) === "\\" || m.substring(0, 2) === "%%") {
				return m.replace("\\", "").replace("%%", "%");
			}

			override = normalizer.shouldOverrideDefaults(m);
			formatString = $D.normalizeFormat(m, context);
			if (formatString) {
				return context.toString(formatString, override);
			}
		};
	};
	$P._format = function (format) {
		var formatter = formatReplace(this);
		if (!format) {
			return this._toString();
		} else {
			return format.replace(/(%|\\)?.|%%/g, formatter);
		}
	};

	if (!$P.format) {
		$P.format = $P._format;
	}
}());
;(function () {
	var $D = Date,
		$P = $D.prototype,
		p = function (s, l) {
			if (!l) {
				l = 2;
			}
			return ("000" + s).slice(l * -1);
		};

	var validateConfigObject = function (obj) {
		var result = {}, self = this, prop, testFunc;
		testFunc = function (prop, func, value) {
			if (prop === "day") {
				var month = (obj.month !== undefined) ? obj.month : self.getMonth();
				var year = (obj.year !== undefined) ? obj.year : self.getFullYear();
				return $D[func](value, year, month);
			} else {
				return $D[func](value);
			}
		};
		for (prop in obj) {
			if (hasOwnProperty.call(obj, prop)) {
				var func = "validate" + prop.charAt(0).toUpperCase() + prop.slice(1);

				if ($D[func] && obj[prop] !== null && testFunc(prop, func, obj[prop])) {
					result[prop] = obj[prop];
				}
			}
		}
		return result;
	};
	/**
	 * Resets the time of this Date object to 12:00 AM (00:00), which is the start of the day.
	 * @param {Boolean}  .clone() this date instance before clearing Time
	 * @return {Date}    this
	 */
	$P.clearTime = function () {
		this.setHours(0);
		this.setMinutes(0);
		this.setSeconds(0);
		this.setMilliseconds(0);
		return this;
	};

	/**
	 * Resets the time of this Date object to the current time ('now').
	 * @return {Date}    this
	 */
	$P.setTimeToNow = function () {
		var n = new Date();
		this.setHours(n.getHours());
		this.setMinutes(n.getMinutes());
		this.setSeconds(n.getSeconds());
		this.setMilliseconds(n.getMilliseconds());
		return this;
	};
	/**
	 * Returns a new Date object that is an exact date and time copy of the original instance.
	 * @return {Date}    A new Date instance
	 */
	$P.clone = function () {
		return new Date(this.getTime());
	};

	/**
	 * Compares this instance to a Date object and returns an number indication of their relative values.  
	 * @param {Date}     Date object to compare [Required]
	 * @return {Number}  -1 = this is lessthan date. 0 = values are equal. 1 = this is greaterthan date.
	 */
	$P.compareTo = function (date) {
		return Date.compare(this, date);
	};

	/**
	 * Compares this instance to another Date object and returns true if they are equal.  
	 * @param {Date}     Date object to compare. If no date to compare, new Date() [now] is used.
	 * @return {Boolean} true if dates are equal. false if they are not equal.
	 */
	$P.equals = function (date) {
		return Date.equals(this, (date !== undefined ? date : new Date()));
	};

	/**
	 * Determines if this instance is between a range of two dates or equal to either the start or end dates.
	 * @param {Date}     Start of range [Required]
	 * @param {Date}     End of range [Required]
	 * @return {Boolean} true is this is between or equal to the start and end dates, else false
	 */
	$P.between = function (start, end) {
		return this.getTime() >= start.getTime() && this.getTime() <= end.getTime();
	};

	/**
	 * Determines if this date occurs after the date to compare to.
	 * @param {Date}     Date object to compare. If no date to compare, new Date() ("now") is used.
	 * @return {Boolean} true if this date instance is greater than the date to compare to (or "now"), otherwise false.
	 */
	$P.isAfter = function (date) {
		return this.compareTo(date || new Date()) === 1;
	};

	/**
	 * Determines if this date occurs before the date to compare to.
	 * @param {Date}     Date object to compare. If no date to compare, new Date() ("now") is used.
	 * @return {Boolean} true if this date instance is less than the date to compare to (or "now").
	 */
	$P.isBefore = function (date) {
		return (this.compareTo(date || new Date()) === -1);
	};

	/**
	 * Determines if the current Date instance occurs today.
	 * @return {Boolean} true if this date instance is 'today', otherwise false.
	 */
	
	/**
	 * Determines if the current Date instance occurs on the same Date as the supplied 'date'. 
	 * If no 'date' to compare to is provided, the current Date instance is compared to 'today'. 
	 * @param {date}     Date object to compare. If no date to compare, the current Date ("now") is used.
	 * @return {Boolean} true if this Date instance occurs on the same Day as the supplied 'date'.
	 */
	$P.isToday = $P.isSameDay = function (date) {
		return this.clone().clearTime().equals((date || new Date()).clone().clearTime());
	};
	
	/**
	 * Adds the specified number of milliseconds to this instance. 
	 * @param {Number}   The number of milliseconds to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addMilliseconds = function (value) {
		if (!value) { return this; }
		this.setTime(this.getTime() + value * 1);
		return this;
	};

	/**
	 * Adds the specified number of seconds to this instance. 
	 * @param {Number}   The number of seconds to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addSeconds = function (value) {
		if (!value) { return this; }
		return this.addMilliseconds(value * 1000);
	};

	/**
	 * Adds the specified number of seconds to this instance. 
	 * @param {Number}   The number of seconds to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addMinutes = function (value) {
		if (!value) { return this; }
		return this.addMilliseconds(value * 60000); // 60*1000
	};

	/**
	 * Adds the specified number of hours to this instance. 
	 * @param {Number}   The number of hours to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addHours = function (value) {
		if (!value) { return this; }
		return this.addMilliseconds(value * 3600000); // 60*60*1000
	};

	/**
	 * Adds the specified number of days to this instance. 
	 * @param {Number}   The number of days to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addDays = function (value) {
		if (!value) { return this; }
		this.setDate(this.getDate() + value * 1);
		return this;
	};

	/**
	 * Adds the specified number of weekdays (ie - not sat or sun) to this instance. 
	 * @param {Number}   The number of days to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addWeekdays = function (value) {
		if (!value) { return this; }
		var day = this.getDay();
		var weeks = (Math.ceil(Math.abs(value)/7));
		if (day === 0 || day === 6) {
			if (value > 0) {
				this.next().monday();
				this.addDays(-1);
				day = this.getDay();
			}
		}

		if (value < 0) {
			while (value < 0) {
				this.addDays(-1);
				day = this.getDay();
				if (day !== 0 && day !== 6) {
					value++;
				}
			}
			return this;
		} else if (value > 5 || (6-day) <= value) {
			value = value + (weeks * 2);
		}

		return this.addDays(value);
	};

	/**
	 * Adds the specified number of weeks to this instance. 
	 * @param {Number}   The number of weeks to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addWeeks = function (value) {
		if (!value) { return this; }
		return this.addDays(value * 7);
	};


	/**
	 * Adds the specified number of months to this instance. 
	 * @param {Number}   The number of months to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addMonths = function (value) {
		if (!value) { return this; }
		var n = this.getDate();
		this.setDate(1);
		this.setMonth(this.getMonth() + value * 1);
		this.setDate(Math.min(n, $D.getDaysInMonth(this.getFullYear(), this.getMonth())));
		return this;
	};

	$P.addQuarters = function (value) {
		if (!value) { return this; }
		// note this will take you to the same point in the quarter as you are now.
		// i.e. - if you are 15 days into the quarter you'll be 15 days into the resulting one.
		// bonus: this allows adding fractional quarters
		return this.addMonths(value * 3);
	};

	/**
	 * Adds the specified number of years to this instance. 
	 * @param {Number}   The number of years to add. The number can be positive or negative [Required]
	 * @return {Date}    this
	 */
	$P.addYears = function (value) {
		if (!value) { return this; }
		return this.addMonths(value * 12);
	};

	/**
	 * Adds (or subtracts) to the value of the years, months, weeks, days, hours, minutes, seconds, milliseconds of the date instance using given configuration object. Positive and Negative values allowed.
	 * Example
	<pre><code>
	Date.today().add( { days: 1, months: 1 } )
	 
	new Date().add( { years: -1 } )
	</code></pre> 
	 * @param {Object}   Configuration object containing attributes (months, days, etc.)
	 * @return {Date}    this
	 */
	$P.add = function (config) {
		if (typeof config === "number") {
			this._orient = config;
			return this;
		}
		
		var x = config;

		if (x.day) {
			// If we should be a different date than today (eg: for 'tomorrow -1d', etc).
			// Should only effect parsing, not direct usage (eg, Finish and FinishExact)
			if ((x.day - this.getDate()) !== 0) {
				this.setDate(x.day);
			}
		}
		if (x.milliseconds) {
			this.addMilliseconds(x.milliseconds);
		}
		if (x.seconds) {
			this.addSeconds(x.seconds);
		}
		if (x.minutes) {
			this.addMinutes(x.minutes);
		}
		if (x.hours) {
			this.addHours(x.hours);
		}
		if (x.weeks) {
			this.addWeeks(x.weeks);
		}
		if (x.months) {
			this.addMonths(x.months);
		}
		if (x.years) {
			this.addYears(x.years);
		}
		if (x.days) {
			this.addDays(x.days);
		}
		return this;
	};
	
	/**
	 * Get the week number. Week one (1) is the week which contains the first Thursday of the year. Monday is considered the first day of the week.
	 * The .getWeek() function does NOT convert the date to UTC. The local datetime is used. 
	 * Please use .getISOWeek() to get the week of the UTC converted date.
	 * @return {Number}  1 to 53
	 */
	$P.getWeek = function (utc) {
		// Create a copy of this date object  
		var self, target = new Date(this.valueOf());
		if (utc) {
			target.addMinutes(target.getTimezoneOffset());
			self = target.clone();
		} else {
			self = this;
		}
		// ISO week date weeks start on monday  
		// so correct the day number  
		var dayNr = (self.getDay() + 6) % 7;
		// ISO 8601 states that week 1 is the week  
		// with the first thursday of that year.  
		// Set the target date to the thursday in the target week  
		target.setDate(target.getDate() - dayNr + 3);
		// Store the millisecond value of the target date  
		var firstThursday = target.valueOf();
		// Set the target to the first thursday of the year  
		// First set the target to january first  
		target.setMonth(0, 1);
		// Not a thursday? Correct the date to the next thursday  
		if (target.getDay() !== 4) {
			target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
		}
		// The weeknumber is the number of weeks between the   
		// first thursday of the year and the thursday in the target week  
		return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 3600 * 1000  
	};
	
	/**
	 * Get the ISO 8601 week number. Week one ("01") is the week which contains the first Thursday of the year. Monday is considered the first day of the week.
	 * The .getISOWeek() function does convert the date to it's UTC value. Please use .getWeek() to get the week of the local date.
	 * @return {String}  "01" to "53"
	 */
	$P.getISOWeek = function () {
		return p(this.getWeek(true));
	};

	/**
	 * Moves the date to Monday of the week set. Week one (1) is the week which contains the first Thursday of the year.
	 * @param {Number}   A Number (1 to 53) that represents the week of the year.
	 * @return {Date}    this
	 */
	$P.setWeek = function (n) {
		if ((n - this.getWeek()) === 0) {
			if (this.getDay() !== 1) {
				return this.moveToDayOfWeek(1, (this.getDay() > 1 ? -1 : 1));
			} else {
				return this;
			}
		} else {
			return this.moveToDayOfWeek(1, (this.getDay() > 1 ? -1 : 1)).addWeeks(n - this.getWeek());
		}
	};

	$P.setQuarter = function (qtr) {
		var month = Math.abs(((qtr-1) * 3) + 1);
		return this.setMonth(month, 1);
	};

	$P.getQuarter = function () {
		return Date.getQuarter(this);
	};

	$P.getDaysLeftInQuarter = function () {
		return Date.getDaysLeftInQuarter(this);
	};

	/**
	 * Moves the date to the next n'th occurrence of the dayOfWeek starting from the beginning of the month. The number (-1) is a magic number and will return the last occurrence of the dayOfWeek in the month.
	 * @param {Number}   The dayOfWeek to move to
	 * @param {Number}   The n'th occurrence to move to. Use (-1) to return the last occurrence in the month
	 * @return {Date}    this
	 */
	$P.moveToNthOccurrence = function (dayOfWeek, occurrence) {
		if (dayOfWeek === "Weekday") {
			if (occurrence > 0) {
				this.moveToFirstDayOfMonth();
				if (this.is().weekday()) {
					occurrence -= 1;
				}
			} else if (occurrence < 0) {
				this.moveToLastDayOfMonth();
				if (this.is().weekday()) {
					occurrence += 1;
				}
			} else {
				return this;
			}
			return this.addWeekdays(occurrence);
		}
		var shift = 0;
		if (occurrence > 0) {
			shift = occurrence - 1;
		}
		else if (occurrence === -1) {
			this.moveToLastDayOfMonth();
			if (this.getDay() !== dayOfWeek) {
				this.moveToDayOfWeek(dayOfWeek, -1);
			}
			return this;
		}
		return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek, +1).addWeeks(shift);
	};


	var moveToN = function (getFunc, addFunc, nVal) {
		return function (value, orient) {
			var diff = (value - this[getFunc]() + nVal * (orient || +1)) % nVal;
			return this[addFunc]((diff === 0) ? diff += nVal * (orient || +1) : diff);
		};
	};
	/**
	 * Move to the next or last dayOfWeek based on the orient value.
	 * @param {Number}   The dayOfWeek to move to
	 * @param {Number}   Forward (+1) or Back (-1). Defaults to +1. [Optional]
	 * @return {Date}    this
	 */
	$P.moveToDayOfWeek = moveToN("getDay", "addDays", 7);
	/**
	 * Move to the next or last month based on the orient value.
	 * @param {Number}   The month to move to. 0 = January, 11 = December
	 * @param {Number}   Forward (+1) or Back (-1). Defaults to +1. [Optional]
	 * @return {Date}    this
	 */
	$P.moveToMonth = moveToN("getMonth", "addMonths", 12);
	/**
	 * Get the Ordinate of the current day ("th", "st", "rd").
	 * @return {String} 
	 */
	$P.getOrdinate = function () {
		var num = this.getDate();
		return ord(num);
	};
	/**
	 * Get the Ordinal day (numeric day number) of the year, adjusted for leap year.
	 * @return {Number} 1 through 365 (366 in leap years)
	 */
	$P.getOrdinalNumber = function () {
		return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 86400000) + 1;
	};

	/**
	 * Get the time zone abbreviation of the current date.
	 * @return {String} The abbreviated time zone name (e.g. "EST")
	 */
	$P.getTimezone = function () {
		return $D.getTimezoneAbbreviation(this.getUTCOffset(), this.isDaylightSavingTime());
	};

	$P.setTimezoneOffset = function (offset) {
		var here = this.getTimezoneOffset(), there = Number(offset) * -6 / 10;
		return (there || there === 0) ? this.addMinutes(there - here) : this;
	};

	$P.setTimezone = function (offset) {
		return this.setTimezoneOffset($D.getTimezoneOffset(offset));
	};

	/**
	 * Indicates whether Daylight Saving Time is observed in the current time zone.
	 * @return {Boolean} true|false
	 */
	$P.hasDaylightSavingTime = function () {
		return (Date.today().set({month: 0, day: 1}).getTimezoneOffset() !== Date.today().set({month: 6, day: 1}).getTimezoneOffset());
	};
	
	/**
	 * Indicates whether this Date instance is within the Daylight Saving Time range for the current time zone.
	 * @return {Boolean} true|false
	 */
	$P.isDaylightSavingTime = function () {
		return Date.today().set({month: 0, day: 1}).getTimezoneOffset() !== this.getTimezoneOffset();
	};

	/**
	 * Get the offset from UTC of the current date.
	 * @return {String} The 4-character offset string prefixed with + or - (e.g. "-0500")
	 */
	$P.getUTCOffset = function (offset) {
		var n = (offset || this.getTimezoneOffset()) * -10 / 6, r;
		if (n < 0) {
			r = (n - 10000).toString();
			return r.charAt(0) + r.substr(2);
		} else {
			r = (n + 10000).toString();
			return "+" + r.substr(1);
		}
	};

	/**
	 * Returns the number of milliseconds between this date and date.
	 * @param {Date} Defaults to now
	 * @return {Number} The diff in milliseconds
	 */
	$P.getElapsed = function (date) {
		return (date || new Date()) - this;
	};

	/**
	 * Set the value of year, month, day, hour, minute, second, millisecond of date instance using given configuration object.
	 * Example
	<pre><code>
	Date.today().set( { day: 20, month: 1 } )

	new Date().set( { millisecond: 0 } )
	</code></pre>
	 * 
	 * @param {Object}   Configuration object containing attributes (month, day, etc.)
	 * @return {Date}    this
	 */
	$P.set = function (config) {
		config = validateConfigObject.call(this, config);
		var key;
		for (key in config) {
			if (hasOwnProperty.call(config, key)) {
				var name = key.charAt(0).toUpperCase() + key.slice(1);
				var addFunc, getFunc;
				if (key !== "week" && key !== "month" && key !== "timezone" && key !== "timezoneOffset") {
					name += "s";
				}
				addFunc = "add" + name;
				getFunc = "get" + name;
				if (key === "month") {
					addFunc = addFunc + "s";
				} else if (key === "year"){
					getFunc = "getFullYear";
				}
				if (key !== "day" && key !== "timezone" && key !== "timezoneOffset"  && key !== "week" &&  key !== "hour") {
						this[addFunc](config[key] - this[getFunc]());
				} else if ( key === "timezone"|| key === "timezoneOffset" || key === "week" || key === "hour") {
					this["set"+name](config[key]);
				}
			}
		}
		// day has to go last because you can't validate the day without first knowing the month
		if (config.day) {
			this.addDays(config.day - this.getDate());
		}
		
		return this;
	};

	/**
	 * Moves the date to the first day of the month.
	 * @return {Date}    this
	 */
	$P.moveToFirstDayOfMonth = function () {
		return this.set({ day: 1 });
	};

	/**
	 * Moves the date to the last day of the month.
	 * @return {Date}    this
	 */
	$P.moveToLastDayOfMonth = function () {
		return this.set({ day: $D.getDaysInMonth(this.getFullYear(), this.getMonth())});
	};


	/**
	 * Converts the value of the current Date object to its equivalent string representation.
	 * Format Specifiers
	 * CUSTOM DATE AND TIME FORMAT STRINGS
	 * Format  Description                                                                  Example
	 * ------  ---------------------------------------------------------------------------  -----------------------
	 * s      The seconds of the minute between 0-59.                                      "0" to "59"
	 * ss     The seconds of the minute with leading zero if required.                     "00" to "59"
	 * 
	 * m      The minute of the hour between 0-59.                                         "0"  or "59"
	 * mm     The minute of the hour with leading zero if required.                        "00" or "59"
	 * 
	 * h      The hour of the day between 1-12.                                            "1"  to "12"
	 * hh     The hour of the day with leading zero if required.                           "01" to "12"
	 * 
	 * H      The hour of the day between 0-23.                                            "0"  to "23"
	 * HH     The hour of the day with leading zero if required.                           "00" to "23"
	 * 
	 * d      The day of the month between 1 and 31.                                       "1"  to "31"
	 * dd     The day of the month with leading zero if required.                          "01" to "31"
	 * ddd    Abbreviated day name. Date.CultureInfo.abbreviatedDayNames.                                "Mon" to "Sun" 
	 * dddd   The full day name. Date.CultureInfo.dayNames.                                              "Monday" to "Sunday"
	 * 
	 * M      The month of the year between 1-12.                                          "1" to "12"
	 * MM     The month of the year with leading zero if required.                         "01" to "12"
	 * MMM    Abbreviated month name. Date.CultureInfo.abbreviatedMonthNames.                            "Jan" to "Dec"
	 * MMMM   The full month name. Date.CultureInfo.monthNames.                                          "January" to "December"
	 *
	 * yy     The year as a two-digit number.                                              "99" or "08"
	 * yyyy   The full four digit year.                                                    "1999" or "2008"
	 * 
	 * t      Displays the first character of the A.M./P.M. designator.                    "A" or "P"
	 *		Date.CultureInfo.amDesignator or Date.CultureInfo.pmDesignator
	 * tt     Displays the A.M./P.M. designator.                                           "AM" or "PM"
	 *		Date.CultureInfo.amDesignator or Date.CultureInfo.pmDesignator
	 * 
	 * S      The ordinal suffix ("st, "nd", "rd" or "th") of the current day.            "st, "nd", "rd" or "th"
	 *
	 * STANDARD DATE AND TIME FORMAT STRINGS
	 * Format  Description                                                                  Example
	 *------  ---------------------------------------------------------------------------  -----------------------
	 * d      The CultureInfo shortDate Format Pattern                                     "M/d/yyyy"
	 * D      The CultureInfo longDate Format Pattern                                      "dddd, MMMM dd, yyyy"
	 * F      The CultureInfo fullDateTime Format Pattern                                  "dddd, MMMM dd, yyyy h:mm:ss tt"
	 * m      The CultureInfo monthDay Format Pattern                                      "MMMM dd"
	 * r      The CultureInfo rfc1123 Format Pattern                                       "ddd, dd MMM yyyy HH:mm:ss GMT"
	 * s      The CultureInfo sortableDateTime Format Pattern                              "yyyy-MM-ddTHH:mm:ss"
	 * t      The CultureInfo shortTime Format Pattern                                     "h:mm tt"
	 * T      The CultureInfo longTime Format Pattern                                      "h:mm:ss tt"
	 * u      The CultureInfo universalSortableDateTime Format Pattern                     "yyyy-MM-dd HH:mm:ssZ"
	 * y      The CultureInfo yearMonth Format Pattern                                     "MMMM, yyyy"
	 *
	 * @param {String}   A format string consisting of one or more format spcifiers [Optional].
	 * @return {String}  A string representation of the current Date object.
	 */
	
	var ord = function (n) {
		switch (n * 1) {
		case 1:
		case 21:
		case 31:
			return "st";
		case 2:
		case 22:
			return "nd";
		case 3:
		case 23:
			return "rd";
		default:
			return "th";
		}
	};
	var parseStandardFormats = function (format) {
		var y, c = Date.CultureInfo.formatPatterns;
		switch (format) {
			case "d":
				return this.toString(c.shortDate);
			case "D":
				return this.toString(c.longDate);
			case "F":
				return this.toString(c.fullDateTime);
			case "m":
				return this.toString(c.monthDay);
			case "r":
			case "R":
				y = this.clone().addMinutes(this.getTimezoneOffset());
				return y.toString(c.rfc1123) + " GMT";
			case "s":
				return this.toString(c.sortableDateTime);
			case "t":
				return this.toString(c.shortTime);
			case "T":
				return this.toString(c.longTime);
			case "u":
				y = this.clone().addMinutes(this.getTimezoneOffset());
				return y.toString(c.universalSortableDateTime);
			case "y":
				return this.toString(c.yearMonth);
			default:
				return false;
		}
	};
	var parseFormatStringsClosure = function (context) {
		return function (m) {
			if (m.charAt(0) === "\\") {
				return m.replace("\\", "");
			}
			switch (m) {
				case "hh":
					return p(context.getHours() < 13 ? (context.getHours() === 0 ? 12 : context.getHours()) : (context.getHours() - 12));
				case "h":
					return context.getHours() < 13 ? (context.getHours() === 0 ? 12 : context.getHours()) : (context.getHours() - 12);
				case "HH":
					return p(context.getHours());
				case "H":
					return context.getHours();
				case "mm":
					return p(context.getMinutes());
				case "m":
					return context.getMinutes();
				case "ss":
					return p(context.getSeconds());
				case "s":
					return context.getSeconds();
				case "yyyy":
					return p(context.getFullYear(), 4);
				case "yy":
					return p(context.getFullYear());
				case "y":
					return context.getFullYear();
				case "E":
				case "dddd":
					return Date.CultureInfo.dayNames[context.getDay()];
				case "ddd":
					return Date.CultureInfo.abbreviatedDayNames[context.getDay()];
				case "dd":
					return p(context.getDate());
				case "d":
					return context.getDate();
				case "MMMM":
					return Date.CultureInfo.monthNames[context.getMonth()];
				case "MMM":
					return Date.CultureInfo.abbreviatedMonthNames[context.getMonth()];
				case "MM":
					return p((context.getMonth() + 1));
				case "M":
					return context.getMonth() + 1;
				case "t":
					return context.getHours() < 12 ? Date.CultureInfo.amDesignator.substring(0, 1) : Date.CultureInfo.pmDesignator.substring(0, 1);
				case "tt":
					return context.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator;
				case "S":
					return ord(context.getDate());
				case "W":
					return context.getWeek();
				case "WW":
					return context.getISOWeek();
				case "Q":
					return "Q" + context.getQuarter();
				case "q":
					return String(context.getQuarter());
				case "z":
					return context.getTimezone();
				case "Z":
				case "X":
					return Date.getTimezoneOffset(context.getTimezone());
				case "ZZ": // Timezone offset in seconds
					return context.getTimezoneOffset() * -60;
				case "u":
					return context.getDay();
				case "L":
					return ($D.isLeapYear(context.getFullYear())) ? 1 : 0;
				case "B":
					// Swatch Internet Time (.beats)
					return "@"+((context.getUTCSeconds() + (context.getUTCMinutes()*60) + ((context.getUTCHours()+1)*3600))/86.4);
				default:
					return m;
			}
		};
	};
	$P.toString = function (format, ignoreStandards) {
		
		// Standard Date and Time Format Strings. Formats pulled from CultureInfo file and
		// may vary by culture. 
		if (!ignoreStandards && format && format.length === 1) {
			output = parseStandardFormats.call(this, format);
			if (output) {
				return output;
			}
		}
		var parseFormatStrings = parseFormatStringsClosure(this);
		return format ? format.replace(/((\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S|q|Q|WW?W?W?)(?![^\[]*\]))/g, parseFormatStrings).replace(/\[|\]/g, "") : this._toString();
	};

}());
;(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.adapter = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */

'use strict';

var _adapter_factory = require('./adapter_factory.js');

var adapter = (0, _adapter_factory.adapterFactory)({ window: typeof window === 'undefined' ? undefined : window });
module.exports = adapter; // this is the difference from adapter_core.

},{"./adapter_factory.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adapterFactory = adapterFactory;

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

var _chrome_shim = require('./chrome/chrome_shim');

var chromeShim = _interopRequireWildcard(_chrome_shim);

var _firefox_shim = require('./firefox/firefox_shim');

var firefoxShim = _interopRequireWildcard(_firefox_shim);

var _safari_shim = require('./safari/safari_shim');

var safariShim = _interopRequireWildcard(_safari_shim);

var _common_shim = require('./common_shim');

var commonShim = _interopRequireWildcard(_common_shim);

var _sdp = require('sdp');

var sdp = _interopRequireWildcard(_sdp);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Shimming starts here.
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
function adapterFactory() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      window = _ref.window;

  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    shimChrome: true,
    shimFirefox: true,
    shimSafari: true
  };

  // Utils.
  var logging = utils.log;
  var browserDetails = utils.detectBrowser(window);

  var adapter = {
    browserDetails: browserDetails,
    commonShim: commonShim,
    extractVersion: utils.extractVersion,
    disableLog: utils.disableLog,
    disableWarnings: utils.disableWarnings,
    // Expose sdp as a convenience. For production apps include directly.
    sdp: sdp
  };

  // Shim browser if found.
  switch (browserDetails.browser) {
    case 'chrome':
      if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
        logging('Chrome shim is not included in this adapter release.');
        return adapter;
      }
      if (browserDetails.version === null) {
        logging('Chrome shim can not determine version, not shimming.');
        return adapter;
      }
      logging('adapter.js shimming chrome.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = chromeShim;

      // Must be called before shimPeerConnection.
      commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);

      chromeShim.shimGetUserMedia(window, browserDetails);
      chromeShim.shimMediaStream(window, browserDetails);
      chromeShim.shimPeerConnection(window, browserDetails);
      chromeShim.shimOnTrack(window, browserDetails);
      chromeShim.shimAddTrackRemoveTrack(window, browserDetails);
      chromeShim.shimGetSendersWithDtmf(window, browserDetails);
      chromeShim.shimGetStats(window, browserDetails);
      chromeShim.shimSenderReceiverGetStats(window, browserDetails);
      chromeShim.fixNegotiationNeeded(window, browserDetails);

      commonShim.shimRTCIceCandidate(window, browserDetails);
      commonShim.shimConnectionState(window, browserDetails);
      commonShim.shimMaxMessageSize(window, browserDetails);
      commonShim.shimSendThrowTypeError(window, browserDetails);
      commonShim.removeExtmapAllowMixed(window, browserDetails);
      break;
    case 'firefox':
      if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
        logging('Firefox shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming firefox.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = firefoxShim;

      // Must be called before shimPeerConnection.
      commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);

      firefoxShim.shimGetUserMedia(window, browserDetails);
      firefoxShim.shimPeerConnection(window, browserDetails);
      firefoxShim.shimOnTrack(window, browserDetails);
      firefoxShim.shimRemoveStream(window, browserDetails);
      firefoxShim.shimSenderGetStats(window, browserDetails);
      firefoxShim.shimReceiverGetStats(window, browserDetails);
      firefoxShim.shimRTCDataChannel(window, browserDetails);
      firefoxShim.shimAddTransceiver(window, browserDetails);
      firefoxShim.shimGetParameters(window, browserDetails);
      firefoxShim.shimCreateOffer(window, browserDetails);
      firefoxShim.shimCreateAnswer(window, browserDetails);

      commonShim.shimRTCIceCandidate(window, browserDetails);
      commonShim.shimConnectionState(window, browserDetails);
      commonShim.shimMaxMessageSize(window, browserDetails);
      commonShim.shimSendThrowTypeError(window, browserDetails);
      break;
    case 'safari':
      if (!safariShim || !options.shimSafari) {
        logging('Safari shim is not included in this adapter release.');
        return adapter;
      }
      logging('adapter.js shimming safari.');
      // Export to the adapter global object visible in the browser.
      adapter.browserShim = safariShim;

      // Must be called before shimCallbackAPI.
      commonShim.shimAddIceCandidateNullOrEmpty(window, browserDetails);

      safariShim.shimRTCIceServerUrls(window, browserDetails);
      safariShim.shimCreateOfferLegacy(window, browserDetails);
      safariShim.shimCallbacksAPI(window, browserDetails);
      safariShim.shimLocalStreamsAPI(window, browserDetails);
      safariShim.shimRemoteStreamsAPI(window, browserDetails);
      safariShim.shimTrackEventTransceiver(window, browserDetails);
      safariShim.shimGetUserMedia(window, browserDetails);
      safariShim.shimAudioContext(window, browserDetails);

      commonShim.shimRTCIceCandidate(window, browserDetails);
      commonShim.shimMaxMessageSize(window, browserDetails);
      commonShim.shimSendThrowTypeError(window, browserDetails);
      commonShim.removeExtmapAllowMixed(window, browserDetails);
      break;
    default:
      logging('Unsupported browser!');
      break;
  }

  return adapter;
}

// Browser shims.

},{"./chrome/chrome_shim":3,"./common_shim":6,"./firefox/firefox_shim":7,"./safari/safari_shim":10,"./utils":11,"sdp":12}],3:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimMediaStream = shimMediaStream;
exports.shimOnTrack = shimOnTrack;
exports.shimGetSendersWithDtmf = shimGetSendersWithDtmf;
exports.shimGetStats = shimGetStats;
exports.shimSenderReceiverGetStats = shimSenderReceiverGetStats;
exports.shimAddTrackRemoveTrackWithNative = shimAddTrackRemoveTrackWithNative;
exports.shimAddTrackRemoveTrack = shimAddTrackRemoveTrack;
exports.shimPeerConnection = shimPeerConnection;
exports.fixNegotiationNeeded = fixNegotiationNeeded;

var _utils = require('../utils.js');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function shimMediaStream(window) {
  window.MediaStream = window.MediaStream || window.webkitMediaStream;
}

function shimOnTrack(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
      get: function get() {
        return this._ontrack;
      },
      set: function set(f) {
        if (this._ontrack) {
          this.removeEventListener('track', this._ontrack);
        }
        this.addEventListener('track', this._ontrack = f);
      },

      enumerable: true,
      configurable: true
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      var _this = this;

      if (!this._ontrackpoly) {
        this._ontrackpoly = function (e) {
          // onaddstream does not fire when a track is added to an existing
          // stream. But stream.onaddtrack is implemented so we use that.
          e.stream.addEventListener('addtrack', function (te) {
            var receiver = void 0;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === te.track.id;
              });
            } else {
              receiver = { track: te.track };
            }

            var event = new Event('track');
            event.track = te.track;
            event.receiver = receiver;
            event.transceiver = { receiver: receiver };
            event.streams = [e.stream];
            _this.dispatchEvent(event);
          });
          e.stream.getTracks().forEach(function (track) {
            var receiver = void 0;
            if (window.RTCPeerConnection.prototype.getReceivers) {
              receiver = _this.getReceivers().find(function (r) {
                return r.track && r.track.id === track.id;
              });
            } else {
              receiver = { track: track };
            }
            var event = new Event('track');
            event.track = track;
            event.receiver = receiver;
            event.transceiver = { receiver: receiver };
            event.streams = [e.stream];
            _this.dispatchEvent(event);
          });
        };
        this.addEventListener('addstream', this._ontrackpoly);
      }
      return origSetRemoteDescription.apply(this, arguments);
    };
  } else {
    // even if RTCRtpTransceiver is in window, it is only used and
    // emitted in unified-plan. Unfortunately this means we need
    // to unconditionally wrap the event.
    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
      if (!e.transceiver) {
        Object.defineProperty(e, 'transceiver', { value: { receiver: e.receiver } });
      }
      return e;
    });
  }
}

function shimGetSendersWithDtmf(window) {
  // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
    var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
      return {
        track: track,
        get dtmf() {
          if (this._dtmf === undefined) {
            if (track.kind === 'audio') {
              this._dtmf = pc.createDTMFSender(track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        },
        _pc: pc
      };
    };

    // augment addTrack when getSenders is not available.
    if (!window.RTCPeerConnection.prototype.getSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        this._senders = this._senders || [];
        return this._senders.slice(); // return a copy of the internal state.
      };
      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
        var sender = origAddTrack.apply(this, arguments);
        if (!sender) {
          sender = shimSenderWithDtmf(this, track);
          this._senders.push(sender);
        }
        return sender;
      };

      var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
      window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
        origRemoveTrack.apply(this, arguments);
        var idx = this._senders.indexOf(sender);
        if (idx !== -1) {
          this._senders.splice(idx, 1);
        }
      };
    }
    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      var _this2 = this;

      this._senders = this._senders || [];
      origAddStream.apply(this, [stream]);
      stream.getTracks().forEach(function (track) {
        _this2._senders.push(shimSenderWithDtmf(_this2, track));
      });
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      var _this3 = this;

      this._senders = this._senders || [];
      origRemoveStream.apply(this, [stream]);

      stream.getTracks().forEach(function (track) {
        var sender = _this3._senders.find(function (s) {
          return s.track === track;
        });
        if (sender) {
          // remove sender
          _this3._senders.splice(_this3._senders.indexOf(sender), 1);
        }
      });
    };
  } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      var _this4 = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this4;
      });
      return senders;
    };

    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
      get: function get() {
        if (this._dtmf === undefined) {
          if (this.track.kind === 'audio') {
            this._dtmf = this._pc.createDTMFSender(this.track);
          } else {
            this._dtmf = null;
          }
        }
        return this._dtmf;
      }
    });
  }
}

function shimGetStats(window) {
  if (!window.RTCPeerConnection) {
    return;
  }

  var origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    var _this5 = this;

    var _arguments = Array.prototype.slice.call(arguments),
        selector = _arguments[0],
        onSucc = _arguments[1],
        onErr = _arguments[2];

    // If selector is a function then we are in the old style stats so just
    // pass back the original getStats format to avoid breaking old users.


    if (arguments.length > 0 && typeof selector === 'function') {
      return origGetStats.apply(this, arguments);
    }

    // When spec-style getStats is supported, return those when called with
    // either no arguments or the selector argument is null.
    if (origGetStats.length === 0 && (arguments.length === 0 || typeof selector !== 'function')) {
      return origGetStats.apply(this, []);
    }

    var fixChromeStats_ = function fixChromeStats_(response) {
      var standardReport = {};
      var reports = response.result();
      reports.forEach(function (report) {
        var standardStats = {
          id: report.id,
          timestamp: report.timestamp,
          type: {
            localcandidate: 'local-candidate',
            remotecandidate: 'remote-candidate'
          }[report.type] || report.type
        };
        report.names().forEach(function (name) {
          standardStats[name] = report.stat(name);
        });
        standardReport[standardStats.id] = standardStats;
      });

      return standardReport;
    };

    // shim getStats with maplike support
    var makeMapStats = function makeMapStats(stats) {
      return new Map(Object.keys(stats).map(function (key) {
        return [key, stats[key]];
      }));
    };

    if (arguments.length >= 2) {
      var successCallbackWrapper_ = function successCallbackWrapper_(response) {
        onSucc(makeMapStats(fixChromeStats_(response)));
      };

      return origGetStats.apply(this, [successCallbackWrapper_, selector]);
    }

    // promise-support
    return new Promise(function (resolve, reject) {
      origGetStats.apply(_this5, [function (response) {
        resolve(makeMapStats(fixChromeStats_(response)));
      }, reject]);
    }).then(onSucc, onErr);
  };
}

function shimSenderReceiverGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
    return;
  }

  // shim sender stats.
  if (!('getStats' in window.RTCRtpSender.prototype)) {
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
        var _this6 = this;

        var senders = origGetSenders.apply(this, []);
        senders.forEach(function (sender) {
          return sender._pc = _this6;
        });
        return senders;
      };
    }

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function addTrack() {
        var sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function getStats() {
      var sender = this;
      return this._pc.getStats().then(function (result) {
        return (
          /* Note: this will include stats of all senders that
           *   send a track with the same id as sender.track as
           *   it is not possible to identify the RTCRtpSender.
           */
          utils.filterStats(result, sender.track, true)
        );
      });
    };
  }

  // shim receiver stats.
  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
    var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
        var _this7 = this;

        var receivers = origGetReceivers.apply(this, []);
        receivers.forEach(function (receiver) {
          return receiver._pc = _this7;
        });
        return receivers;
      };
    }
    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function getStats() {
      var receiver = this;
      return this._pc.getStats().then(function (result) {
        return utils.filterStats(result, receiver.track, false);
      });
    };
  }

  if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
    return;
  }

  // shim RTCPeerConnection.getStats(track).
  var origGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
      var track = arguments[0];
      var sender = void 0;
      var receiver = void 0;
      var err = void 0;
      this.getSenders().forEach(function (s) {
        if (s.track === track) {
          if (sender) {
            err = true;
          } else {
            sender = s;
          }
        }
      });
      this.getReceivers().forEach(function (r) {
        if (r.track === track) {
          if (receiver) {
            err = true;
          } else {
            receiver = r;
          }
        }
        return r.track === track;
      });
      if (err || sender && receiver) {
        return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
      } else if (sender) {
        return sender.getStats();
      } else if (receiver) {
        return receiver.getStats();
      }
      return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
    }
    return origGetStats.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrackWithNative(window) {
  // shim addTrack/removeTrack with native variants in order to make
  // the interactions with legacy getLocalStreams behave as in other browsers.
  // Keeps a mapping stream.id => [stream, rtpsenders...]
  window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    var _this8 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
      return _this8._shimmedLocalStreams[streamId][0];
    });
  };

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    if (!stream) {
      return origAddTrack.apply(this, arguments);
    }
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    var sender = origAddTrack.apply(this, arguments);
    if (!this._shimmedLocalStreams[stream.id]) {
      this._shimmedLocalStreams[stream.id] = [stream, sender];
    } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
      this._shimmedLocalStreams[stream.id].push(sender);
    }
    return sender;
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    var _this9 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};

    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this9.getSenders().find(function (s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    var existingSenders = this.getSenders();
    origAddStream.apply(this, arguments);
    var newSenders = this.getSenders().filter(function (newSender) {
      return existingSenders.indexOf(newSender) === -1;
    });
    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    delete this._shimmedLocalStreams[stream.id];
    return origRemoveStream.apply(this, arguments);
  };

  var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
  window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    var _this10 = this;

    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
    if (sender) {
      Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
        var idx = _this10._shimmedLocalStreams[streamId].indexOf(sender);
        if (idx !== -1) {
          _this10._shimmedLocalStreams[streamId].splice(idx, 1);
        }
        if (_this10._shimmedLocalStreams[streamId].length === 1) {
          delete _this10._shimmedLocalStreams[streamId];
        }
      });
    }
    return origRemoveTrack.apply(this, arguments);
  };
}

function shimAddTrackRemoveTrack(window, browserDetails) {
  if (!window.RTCPeerConnection) {
    return;
  }
  // shim addTrack and removeTrack.
  if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
    return shimAddTrackRemoveTrackWithNative(window);
  }

  // also shim pc.getLocalStreams when addTrack is shimmed
  // to return the original streams.
  var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
  window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
    var _this11 = this;

    var nativeStreams = origGetLocalStreams.apply(this);
    this._reverseStreams = this._reverseStreams || {};
    return nativeStreams.map(function (stream) {
      return _this11._reverseStreams[stream.id];
    });
  };

  var origAddStream = window.RTCPeerConnection.prototype.addStream;
  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
    var _this12 = this;

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    stream.getTracks().forEach(function (track) {
      var alreadyExists = _this12.getSenders().find(function (s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }
    });
    // Add identity mapping for consistency with addTrack.
    // Unless this is being used with a stream from addTrack.
    if (!this._reverseStreams[stream.id]) {
      var newStream = new window.MediaStream(stream.getTracks());
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      stream = newStream;
    }
    origAddStream.apply(this, [stream]);
  };

  var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};

    origRemoveStream.apply(this, [this._streams[stream.id] || stream]);
    delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
    delete this._streams[stream.id];
  };

  window.RTCPeerConnection.prototype.addTrack = function addTrack(track, stream) {
    var _this13 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }
    var streams = [].slice.call(arguments, 1);
    if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
      return t === track;
    })) {
      // this is not fully correct but all we can manage without
      // [[associated MediaStreams]] internal slot.
      throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
    }

    var alreadyExists = this.getSenders().find(function (s) {
      return s.track === track;
    });
    if (alreadyExists) {
      throw new DOMException('Track already exists.', 'InvalidAccessError');
    }

    this._streams = this._streams || {};
    this._reverseStreams = this._reverseStreams || {};
    var oldStream = this._streams[stream.id];
    if (oldStream) {
      // this is using odd Chrome behaviour, use with caution:
      // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
      // Note: we rely on the high-level addTrack/dtmf shim to
      // create the sender with a dtmf sender.
      oldStream.addTrack(track);

      // Trigger ONN async.
      Promise.resolve().then(function () {
        _this13.dispatchEvent(new Event('negotiationneeded'));
      });
    } else {
      var newStream = new window.MediaStream([track]);
      this._streams[stream.id] = newStream;
      this._reverseStreams[newStream.id] = stream;
      this.addStream(newStream);
    }
    return this.getSenders().find(function (s) {
      return s.track === track;
    });
  };

  // replace the internal stream id with the external one and
  // vice versa.
  function replaceInternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }
  function replaceExternalStreamId(pc, description) {
    var sdp = description.sdp;
    Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
      var externalStream = pc._reverseStreams[internalId];
      var internalStream = pc._streams[externalStream.id];
      sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
    });
    return new RTCSessionDescription({
      type: description.type,
      sdp: sdp
    });
  }
  ['createOffer', 'createAnswer'].forEach(function (method) {
    var nativeMethod = window.RTCPeerConnection.prototype[method];
    var methodObj = _defineProperty({}, method, function () {
      var _this14 = this;

      var args = arguments;
      var isLegacyCall = arguments.length && typeof arguments[0] === 'function';
      if (isLegacyCall) {
        return nativeMethod.apply(this, [function (description) {
          var desc = replaceInternalStreamId(_this14, description);
          args[0].apply(null, [desc]);
        }, function (err) {
          if (args[1]) {
            args[1].apply(null, err);
          }
        }, arguments[2]]);
      }
      return nativeMethod.apply(this, arguments).then(function (description) {
        return replaceInternalStreamId(_this14, description);
      });
    });
    window.RTCPeerConnection.prototype[method] = methodObj[method];
  });

  var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
  window.RTCPeerConnection.prototype.setLocalDescription = function setLocalDescription() {
    if (!arguments.length || !arguments[0].type) {
      return origSetLocalDescription.apply(this, arguments);
    }
    arguments[0] = replaceExternalStreamId(this, arguments[0]);
    return origSetLocalDescription.apply(this, arguments);
  };

  // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

  var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
  Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
    get: function get() {
      var description = origLocalDescription.get.apply(this);
      if (description.type === '') {
        return description;
      }
      return replaceInternalStreamId(this, description);
    }
  });

  window.RTCPeerConnection.prototype.removeTrack = function removeTrack(sender) {
    var _this15 = this;

    if (this.signalingState === 'closed') {
      throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
    }
    // We can not yet check for sender instanceof RTCRtpSender
    // since we shim RTPSender. So we check if sender._pc is set.
    if (!sender._pc) {
      throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
    }
    var isLocal = sender._pc === this;
    if (!isLocal) {
      throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
    }

    // Search for the native stream the senders track belongs to.
    this._streams = this._streams || {};
    var stream = void 0;
    Object.keys(this._streams).forEach(function (streamid) {
      var hasTrack = _this15._streams[streamid].getTracks().find(function (track) {
        return sender.track === track;
      });
      if (hasTrack) {
        stream = _this15._streams[streamid];
      }
    });

    if (stream) {
      if (stream.getTracks().length === 1) {
        // if this is the last track of the stream, remove the stream. This
        // takes care of any shimmed _senders.
        this.removeStream(this._reverseStreams[stream.id]);
      } else {
        // relying on the same odd chrome behaviour as above.
        stream.removeTrack(sender.track);
      }
      this.dispatchEvent(new Event('negotiationneeded'));
    }
  };
}

function shimPeerConnection(window, browserDetails) {
  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.webkitRTCPeerConnection;
  }
  if (!window.RTCPeerConnection) {
    return;
  }

  // shim implicit creation of RTCSessionDescription/RTCIceCandidate
  if (browserDetails.version < 53) {
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      var methodObj = _defineProperty({}, method, function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      });
      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  }
}

// Attempt to fix ONN in plan-b mode.
function fixNegotiationNeeded(window, browserDetails) {
  utils.wrapPeerConnectionEvent(window, 'negotiationneeded', function (e) {
    var pc = e.target;
    if (browserDetails.version < 72 || pc.getConfiguration && pc.getConfiguration().sdpSemantics === 'plan-b') {
      if (pc.signalingState !== 'stable') {
        return;
      }
    }
    return e;
  });
}

},{"../utils.js":11,"./getdisplaymedia":4,"./getusermedia":5}],4:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window, getSourceId) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  // getSourceId is a function that returns a promise resolving with
  // the sourceId of the screen/window/tab to be shared.
  if (typeof getSourceId !== 'function') {
    console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    return getSourceId(constraints).then(function (sourceId) {
      var widthSpecified = constraints.video && constraints.video.width;
      var heightSpecified = constraints.video && constraints.video.height;
      var frameRateSpecified = constraints.video && constraints.video.frameRate;
      constraints.video = {
        mandatory: {
          chromeMediaSource: 'desktop',
          chromeMediaSourceId: sourceId,
          maxFrameRate: frameRateSpecified || 3
        }
      };
      if (widthSpecified) {
        constraints.video.mandatory.maxWidth = widthSpecified;
      }
      if (heightSpecified) {
        constraints.video.mandatory.maxHeight = heightSpecified;
      }
      return window.navigator.mediaDevices.getUserMedia(constraints);
    });
  };
}

},{}],5:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimGetUserMedia = shimGetUserMedia;

var _utils = require('../utils.js');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var logging = utils.log;

function shimGetUserMedia(window, browserDetails) {
  var navigator = window && window.navigator;

  if (!navigator.mediaDevices) {
    return;
  }

  var constraintsToChrome_ = function constraintsToChrome_(c) {
    if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) !== 'object' || c.mandatory || c.optional) {
      return c;
    }
    var cc = {};
    Object.keys(c).forEach(function (key) {
      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
        return;
      }
      var r = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
      if (r.exact !== undefined && typeof r.exact === 'number') {
        r.min = r.max = r.exact;
      }
      var oldname_ = function oldname_(prefix, name) {
        if (prefix) {
          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
        }
        return name === 'deviceId' ? 'sourceId' : name;
      };
      if (r.ideal !== undefined) {
        cc.optional = cc.optional || [];
        var oc = {};
        if (typeof r.ideal === 'number') {
          oc[oldname_('min', key)] = r.ideal;
          cc.optional.push(oc);
          oc = {};
          oc[oldname_('max', key)] = r.ideal;
          cc.optional.push(oc);
        } else {
          oc[oldname_('', key)] = r.ideal;
          cc.optional.push(oc);
        }
      }
      if (r.exact !== undefined && typeof r.exact !== 'number') {
        cc.mandatory = cc.mandatory || {};
        cc.mandatory[oldname_('', key)] = r.exact;
      } else {
        ['min', 'max'].forEach(function (mix) {
          if (r[mix] !== undefined) {
            cc.mandatory = cc.mandatory || {};
            cc.mandatory[oldname_(mix, key)] = r[mix];
          }
        });
      }
    });
    if (c.advanced) {
      cc.optional = (cc.optional || []).concat(c.advanced);
    }
    return cc;
  };

  var shimConstraints_ = function shimConstraints_(constraints, func) {
    if (browserDetails.version >= 61) {
      return func(constraints);
    }
    constraints = JSON.parse(JSON.stringify(constraints));
    if (constraints && _typeof(constraints.audio) === 'object') {
      var remap = function remap(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };
      constraints = JSON.parse(JSON.stringify(constraints));
      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
      constraints.audio = constraintsToChrome_(constraints.audio);
    }
    if (constraints && _typeof(constraints.video) === 'object') {
      // Shim facingMode for mobile & surface pro.
      var face = constraints.video.facingMode;
      face = face && ((typeof face === 'undefined' ? 'undefined' : _typeof(face)) === 'object' ? face : { ideal: face });
      var getSupportedFacingModeLies = browserDetails.version < 66;

      if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
        delete constraints.video.facingMode;
        var matches = void 0;
        if (face.exact === 'environment' || face.ideal === 'environment') {
          matches = ['back', 'rear'];
        } else if (face.exact === 'user' || face.ideal === 'user') {
          matches = ['front'];
        }
        if (matches) {
          // Look for matches in label, or use last cam for back (typical).
          return navigator.mediaDevices.enumerateDevices().then(function (devices) {
            devices = devices.filter(function (d) {
              return d.kind === 'videoinput';
            });
            var dev = devices.find(function (d) {
              return matches.some(function (match) {
                return d.label.toLowerCase().includes(match);
              });
            });
            if (!dev && devices.length && matches.includes('back')) {
              dev = devices[devices.length - 1]; // more likely the back cam
            }
            if (dev) {
              constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
            }
            constraints.video = constraintsToChrome_(constraints.video);
            logging('chrome: ' + JSON.stringify(constraints));
            return func(constraints);
          });
        }
      }
      constraints.video = constraintsToChrome_(constraints.video);
    }
    logging('chrome: ' + JSON.stringify(constraints));
    return func(constraints);
  };

  var shimError_ = function shimError_(e) {
    if (browserDetails.version >= 64) {
      return e;
    }
    return {
      name: {
        PermissionDeniedError: 'NotAllowedError',
        PermissionDismissedError: 'NotAllowedError',
        InvalidStateError: 'NotAllowedError',
        DevicesNotFoundError: 'NotFoundError',
        ConstraintNotSatisfiedError: 'OverconstrainedError',
        TrackStartError: 'NotReadableError',
        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
        MediaDeviceKillSwitchOn: 'NotAllowedError',
        TabCaptureError: 'AbortError',
        ScreenCaptureError: 'AbortError',
        DeviceCaptureError: 'AbortError'
      }[e.name] || e.name,
      message: e.message,
      constraint: e.constraint || e.constraintName,
      toString: function toString() {
        return this.name + (this.message && ': ') + this.message;
      }
    };
  };

  var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
    shimConstraints_(constraints, function (c) {
      navigator.webkitGetUserMedia(c, onSuccess, function (e) {
        if (onError) {
          onError(shimError_(e));
        }
      });
    });
  };
  navigator.getUserMedia = getUserMedia_.bind(navigator);

  // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
  // function which returns a Promise, it does not accept spec-style
  // constraints.
  if (navigator.mediaDevices.getUserMedia) {
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (cs) {
      return shimConstraints_(cs, function (c) {
        return origGetUserMedia(c).then(function (stream) {
          if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
            stream.getTracks().forEach(function (track) {
              track.stop();
            });
            throw new DOMException('', 'NotFoundError');
          }
          return stream;
        }, function (e) {
          return Promise.reject(shimError_(e));
        });
      });
    };
  }
}

},{"../utils.js":11}],6:[function(require,module,exports){
/*
 *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimRTCIceCandidate = shimRTCIceCandidate;
exports.shimMaxMessageSize = shimMaxMessageSize;
exports.shimSendThrowTypeError = shimSendThrowTypeError;
exports.shimConnectionState = shimConnectionState;
exports.removeExtmapAllowMixed = removeExtmapAllowMixed;
exports.shimAddIceCandidateNullOrEmpty = shimAddIceCandidateNullOrEmpty;

var _sdp = require('sdp');

var _sdp2 = _interopRequireDefault(_sdp);

var _utils = require('./utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function shimRTCIceCandidate(window) {
  // foundation is arbitrarily chosen as an indicator for full support for
  // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
  if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
    return;
  }

  var NativeRTCIceCandidate = window.RTCIceCandidate;
  window.RTCIceCandidate = function RTCIceCandidate(args) {
    // Remove the a= which shouldn't be part of the candidate string.
    if ((typeof args === 'undefined' ? 'undefined' : _typeof(args)) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
      args = JSON.parse(JSON.stringify(args));
      args.candidate = args.candidate.substr(2);
    }

    if (args.candidate && args.candidate.length) {
      // Augment the native candidate with the parsed fields.
      var nativeCandidate = new NativeRTCIceCandidate(args);
      var parsedCandidate = _sdp2.default.parseCandidate(args.candidate);
      var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);

      // Add a serializer that does not serialize the extra attributes.
      augmentedCandidate.toJSON = function toJSON() {
        return {
          candidate: augmentedCandidate.candidate,
          sdpMid: augmentedCandidate.sdpMid,
          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
          usernameFragment: augmentedCandidate.usernameFragment
        };
      };
      return augmentedCandidate;
    }
    return new NativeRTCIceCandidate(args);
  };
  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

  // Hook up the augmented candidate in onicecandidate and
  // addEventListener('icecandidate', ...)
  utils.wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
    if (e.candidate) {
      Object.defineProperty(e, 'candidate', {
        value: new window.RTCIceCandidate(e.candidate),
        writable: 'false'
      });
    }
    return e;
  });
}

function shimMaxMessageSize(window, browserDetails) {
  if (!window.RTCPeerConnection) {
    return;
  }

  if (!('sctp' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
      get: function get() {
        return typeof this._sctp === 'undefined' ? null : this._sctp;
      }
    });
  }

  var sctpInDescription = function sctpInDescription(description) {
    if (!description || !description.sdp) {
      return false;
    }
    var sections = _sdp2.default.splitSections(description.sdp);
    sections.shift();
    return sections.some(function (mediaSection) {
      var mLine = _sdp2.default.parseMLine(mediaSection);
      return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
    });
  };

  var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
    // TODO: Is there a better solution for detecting Firefox?
    var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
    if (match === null || match.length < 2) {
      return -1;
    }
    var version = parseInt(match[1], 10);
    // Test for NaN (yes, this is ugly)
    return version !== version ? -1 : version;
  };

  var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
    // Every implementation we know can send at least 64 KiB.
    // Note: Although Chrome is technically able to send up to 256 KiB, the
    //       data does not reach the other peer reliably.
    //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
    var canSendMaxMessageSize = 65536;
    if (browserDetails.browser === 'firefox') {
      if (browserDetails.version < 57) {
        if (remoteIsFirefox === -1) {
          // FF < 57 will send in 16 KiB chunks using the deprecated PPID
          // fragmentation.
          canSendMaxMessageSize = 16384;
        } else {
          // However, other FF (and RAWRTC) can reassemble PPID-fragmented
          // messages. Thus, supporting ~2 GiB when sending.
          canSendMaxMessageSize = 2147483637;
        }
      } else if (browserDetails.version < 60) {
        // Currently, all FF >= 57 will reset the remote maximum message size
        // to the default value when a data channel is created at a later
        // stage. :(
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
        canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
      } else {
        // FF >= 60 supports sending ~2 GiB
        canSendMaxMessageSize = 2147483637;
      }
    }
    return canSendMaxMessageSize;
  };

  var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
    // Note: 65536 bytes is the default value from the SDP spec. Also,
    //       every implementation we know supports receiving 65536 bytes.
    var maxMessageSize = 65536;

    // FF 57 has a slightly incorrect default remote max message size, so
    // we need to adjust it here to avoid a failure when sending.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
    if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
      maxMessageSize = 65535;
    }

    var match = _sdp2.default.matchPrefix(description.sdp, 'a=max-message-size:');
    if (match.length > 0) {
      maxMessageSize = parseInt(match[0].substr(19), 10);
    } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
      // If the maximum message size is not present in the remote SDP and
      // both local and remote are Firefox, the remote peer can receive
      // ~2 GiB.
      maxMessageSize = 2147483637;
    }
    return maxMessageSize;
  };

  var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
    this._sctp = null;
    // Chrome decided to not expose .sctp in plan-b mode.
    // As usual, adapter.js has to do an 'ugly worakaround'
    // to cover up the mess.
    if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
      var _getConfiguration = this.getConfiguration(),
          sdpSemantics = _getConfiguration.sdpSemantics;

      if (sdpSemantics === 'plan-b') {
        Object.defineProperty(this, 'sctp', {
          get: function get() {
            return typeof this._sctp === 'undefined' ? null : this._sctp;
          },

          enumerable: true,
          configurable: true
        });
      }
    }

    if (sctpInDescription(arguments[0])) {
      // Check if the remote is FF.
      var isFirefox = getRemoteFirefoxVersion(arguments[0]);

      // Get the maximum message size the local peer is capable of sending
      var canSendMMS = getCanSendMaxMessageSize(isFirefox);

      // Get the maximum message size of the remote peer.
      var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

      // Determine final maximum message size
      var maxMessageSize = void 0;
      if (canSendMMS === 0 && remoteMMS === 0) {
        maxMessageSize = Number.POSITIVE_INFINITY;
      } else if (canSendMMS === 0 || remoteMMS === 0) {
        maxMessageSize = Math.max(canSendMMS, remoteMMS);
      } else {
        maxMessageSize = Math.min(canSendMMS, remoteMMS);
      }

      // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
      // attribute.
      var sctp = {};
      Object.defineProperty(sctp, 'maxMessageSize', {
        get: function get() {
          return maxMessageSize;
        }
      });
      this._sctp = sctp;
    }

    return origSetRemoteDescription.apply(this, arguments);
  };
}

function shimSendThrowTypeError(window) {
  if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
    return;
  }

  // Note: Although Firefox >= 57 has a native implementation, the maximum
  //       message size can be reset for all data channels at a later stage.
  //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

  function wrapDcSend(dc, pc) {
    var origDataChannelSend = dc.send;
    dc.send = function send() {
      var data = arguments[0];
      var length = data.length || data.size || data.byteLength;
      if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
        throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
      }
      return origDataChannelSend.apply(dc, arguments);
    };
  }
  var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
  window.RTCPeerConnection.prototype.createDataChannel = function createDataChannel() {
    var dataChannel = origCreateDataChannel.apply(this, arguments);
    wrapDcSend(dataChannel, this);
    return dataChannel;
  };
  utils.wrapPeerConnectionEvent(window, 'datachannel', function (e) {
    wrapDcSend(e.channel, e.target);
    return e;
  });
}

/* shims RTCConnectionState by pretending it is the same as iceConnectionState.
 * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
 * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
 * since DTLS failures would be hidden. See
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
 * for the Firefox tracking bug.
 */
function shimConnectionState(window) {
  if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) {
    return;
  }
  var proto = window.RTCPeerConnection.prototype;
  Object.defineProperty(proto, 'connectionState', {
    get: function get() {
      return {
        completed: 'connected',
        checking: 'connecting'
      }[this.iceConnectionState] || this.iceConnectionState;
    },

    enumerable: true,
    configurable: true
  });
  Object.defineProperty(proto, 'onconnectionstatechange', {
    get: function get() {
      return this._onconnectionstatechange || null;
    },
    set: function set(cb) {
      if (this._onconnectionstatechange) {
        this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
        delete this._onconnectionstatechange;
      }
      if (cb) {
        this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
      }
    },

    enumerable: true,
    configurable: true
  });

  ['setLocalDescription', 'setRemoteDescription'].forEach(function (method) {
    var origMethod = proto[method];
    proto[method] = function () {
      if (!this._connectionstatechangepoly) {
        this._connectionstatechangepoly = function (e) {
          var pc = e.target;
          if (pc._lastConnectionState !== pc.connectionState) {
            pc._lastConnectionState = pc.connectionState;
            var newEvent = new Event('connectionstatechange', e);
            pc.dispatchEvent(newEvent);
          }
          return e;
        };
        this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
      }
      return origMethod.apply(this, arguments);
    };
  });
}

function removeExtmapAllowMixed(window, browserDetails) {
  /* remove a=extmap-allow-mixed for webrtc.org < M71 */
  if (!window.RTCPeerConnection) {
    return;
  }
  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
    return;
  }
  if (browserDetails.browser === 'safari' && browserDetails.version >= 605) {
    return;
  }
  var nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
  window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription(desc) {
    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
      var sdp = desc.sdp.split('\n').filter(function (line) {
        return line.trim() !== 'a=extmap-allow-mixed';
      }).join('\n');
      // Safari enforces read-only-ness of RTCSessionDescription fields.
      if (window.RTCSessionDescription && desc instanceof window.RTCSessionDescription) {
        arguments[0] = new window.RTCSessionDescription({
          type: desc.type,
          sdp: sdp
        });
      } else {
        desc.sdp = sdp;
      }
    }
    return nativeSRD.apply(this, arguments);
  };
}

function shimAddIceCandidateNullOrEmpty(window, browserDetails) {
  // Support for addIceCandidate(null or undefined)
  // as well as addIceCandidate({candidate: "", ...})
  // https://bugs.chromium.org/p/chromium/issues/detail?id=978582
  // Note: must be called before other polyfills which change the signature.
  if (!(window.RTCPeerConnection && window.RTCPeerConnection.prototype)) {
    return;
  }
  var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
  if (!nativeAddIceCandidate || nativeAddIceCandidate.length === 0) {
    return;
  }
  window.RTCPeerConnection.prototype.addIceCandidate = function addIceCandidate() {
    if (!arguments[0]) {
      if (arguments[1]) {
        arguments[1].apply(null);
      }
      return Promise.resolve();
    }
    // Firefox 68+ emits and processes {candidate: "", ...}, ignore
    // in older versions.
    // Native support for ignoring exists for Chrome M77+.
    // Safari ignores as well, exact version unknown but works in the same
    // version that also ignores addIceCandidate(null).
    if ((browserDetails.browser === 'chrome' && browserDetails.version < 78 || browserDetails.browser === 'firefox' && browserDetails.version < 68 || browserDetails.browser === 'safari') && arguments[0] && arguments[0].candidate === '') {
      return Promise.resolve();
    }
    return nativeAddIceCandidate.apply(this, arguments);
  };
}

},{"./utils":11,"sdp":12}],7:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _getusermedia = require('./getusermedia');

Object.defineProperty(exports, 'shimGetUserMedia', {
  enumerable: true,
  get: function get() {
    return _getusermedia.shimGetUserMedia;
  }
});

var _getdisplaymedia = require('./getdisplaymedia');

Object.defineProperty(exports, 'shimGetDisplayMedia', {
  enumerable: true,
  get: function get() {
    return _getdisplaymedia.shimGetDisplayMedia;
  }
});
exports.shimOnTrack = shimOnTrack;
exports.shimPeerConnection = shimPeerConnection;
exports.shimSenderGetStats = shimSenderGetStats;
exports.shimReceiverGetStats = shimReceiverGetStats;
exports.shimRemoveStream = shimRemoveStream;
exports.shimRTCDataChannel = shimRTCDataChannel;
exports.shimAddTransceiver = shimAddTransceiver;
exports.shimGetParameters = shimGetParameters;
exports.shimCreateOffer = shimCreateOffer;
exports.shimCreateAnswer = shimCreateAnswer;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function shimOnTrack(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return { receiver: this.receiver };
      }
    });
  }
}

function shimPeerConnection(window, browserDetails) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
    return; // probably media.peerconnection.enabled=false in about:config
  }
  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
    // very basic support for old versions.
    window.RTCPeerConnection = window.mozRTCPeerConnection;
  }

  if (browserDetails.version < 53) {
    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      var methodObj = _defineProperty({}, method, function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      });
      window.RTCPeerConnection.prototype[method] = methodObj[method];
    });
  }

  var modernStatsTypes = {
    inboundrtp: 'inbound-rtp',
    outboundrtp: 'outbound-rtp',
    candidatepair: 'candidate-pair',
    localcandidate: 'local-candidate',
    remotecandidate: 'remote-candidate'
  };

  var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
  window.RTCPeerConnection.prototype.getStats = function getStats() {
    var _arguments = Array.prototype.slice.call(arguments),
        selector = _arguments[0],
        onSucc = _arguments[1],
        onErr = _arguments[2];

    return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
      if (browserDetails.version < 53 && !onSucc) {
        // Shim only promise getStats with spec-hyphens in type names
        // Leave callback version alone; misc old uses of forEach before Map
        try {
          stats.forEach(function (stat) {
            stat.type = modernStatsTypes[stat.type] || stat.type;
          });
        } catch (e) {
          if (e.name !== 'TypeError') {
            throw e;
          }
          // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
          stats.forEach(function (stat, i) {
            stats.set(i, Object.assign({}, stat, {
              type: modernStatsTypes[stat.type] || stat.type
            }));
          });
        }
      }
      return stats;
    }).then(onSucc, onErr);
  };
}

function shimSenderGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
    return;
  }
  var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
  if (origGetSenders) {
    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
      var _this = this;

      var senders = origGetSenders.apply(this, []);
      senders.forEach(function (sender) {
        return sender._pc = _this;
      });
      return senders;
    };
  }

  var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
  if (origAddTrack) {
    window.RTCPeerConnection.prototype.addTrack = function addTrack() {
      var sender = origAddTrack.apply(this, arguments);
      sender._pc = this;
      return sender;
    };
  }
  window.RTCRtpSender.prototype.getStats = function getStats() {
    return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
  };
}

function shimReceiverGetStats(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
    return;
  }
  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
    return;
  }
  var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
  if (origGetReceivers) {
    window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
      var _this2 = this;

      var receivers = origGetReceivers.apply(this, []);
      receivers.forEach(function (receiver) {
        return receiver._pc = _this2;
      });
      return receivers;
    };
  }
  utils.wrapPeerConnectionEvent(window, 'track', function (e) {
    e.receiver._pc = e.srcElement;
    return e;
  });
  window.RTCRtpReceiver.prototype.getStats = function getStats() {
    return this._pc.getStats(this.track);
  };
}

function shimRemoveStream(window) {
  if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
    return;
  }
  window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
    var _this3 = this;

    utils.deprecated('removeStream', 'removeTrack');
    this.getSenders().forEach(function (sender) {
      if (sender.track && stream.getTracks().includes(sender.track)) {
        _this3.removeTrack(sender);
      }
    });
  };
}

function shimRTCDataChannel(window) {
  // rename DataChannel to RTCDataChannel (native fix in FF60):
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
  if (window.DataChannel && !window.RTCDataChannel) {
    window.RTCDataChannel = window.DataChannel;
  }
}

function shimAddTransceiver(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection)) {
    return;
  }
  var origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
  if (origAddTransceiver) {
    window.RTCPeerConnection.prototype.addTransceiver = function addTransceiver() {
      this.setParametersPromises = [];
      var initParameters = arguments[1];
      var shouldPerformCheck = initParameters && 'sendEncodings' in initParameters;
      if (shouldPerformCheck) {
        // If sendEncodings params are provided, validate grammar
        initParameters.sendEncodings.forEach(function (encodingParam) {
          if ('rid' in encodingParam) {
            var ridRegex = /^[a-z0-9]{0,16}$/i;
            if (!ridRegex.test(encodingParam.rid)) {
              throw new TypeError('Invalid RID value provided.');
            }
          }
          if ('scaleResolutionDownBy' in encodingParam) {
            if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
              throw new RangeError('scale_resolution_down_by must be >= 1.0');
            }
          }
          if ('maxFramerate' in encodingParam) {
            if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
              throw new RangeError('max_framerate must be >= 0.0');
            }
          }
        });
      }
      var transceiver = origAddTransceiver.apply(this, arguments);
      if (shouldPerformCheck) {
        // Check if the init options were applied. If not we do this in an
        // asynchronous way and save the promise reference in a global object.
        // This is an ugly hack, but at the same time is way more robust than
        // checking the sender parameters before and after the createOffer
        // Also note that after the createoffer we are not 100% sure that
        // the params were asynchronously applied so we might miss the
        // opportunity to recreate offer.
        var sender = transceiver.sender;

        var params = sender.getParameters();
        if (!('encodings' in params) ||
        // Avoid being fooled by patched getParameters() below.
        params.encodings.length === 1 && Object.keys(params.encodings[0]).length === 0) {
          params.encodings = initParameters.sendEncodings;
          sender.sendEncodings = initParameters.sendEncodings;
          this.setParametersPromises.push(sender.setParameters(params).then(function () {
            delete sender.sendEncodings;
          }).catch(function () {
            delete sender.sendEncodings;
          }));
        }
      }
      return transceiver;
    };
  }
}

function shimGetParameters(window) {
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCRtpSender)) {
    return;
  }
  var origGetParameters = window.RTCRtpSender.prototype.getParameters;
  if (origGetParameters) {
    window.RTCRtpSender.prototype.getParameters = function getParameters() {
      var params = origGetParameters.apply(this, arguments);
      if (!('encodings' in params)) {
        params.encodings = [].concat(this.sendEncodings || [{}]);
      }
      return params;
    };
  }
}

function shimCreateOffer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection)) {
    return;
  }
  var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function createOffer() {
    var _this4 = this,
        _arguments2 = arguments;

    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(function () {
        return origCreateOffer.apply(_this4, _arguments2);
      }).finally(function () {
        _this4.setParametersPromises = [];
      });
    }
    return origCreateOffer.apply(this, arguments);
  };
}

function shimCreateAnswer(window) {
  // https://github.com/webrtcHacks/adapter/issues/998#issuecomment-516921647
  // Firefox ignores the init sendEncodings options passed to addTransceiver
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1396918
  if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection)) {
    return;
  }
  var origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
  window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
    var _this5 = this,
        _arguments3 = arguments;

    if (this.setParametersPromises && this.setParametersPromises.length) {
      return Promise.all(this.setParametersPromises).then(function () {
        return origCreateAnswer.apply(_this5, _arguments3);
      }).finally(function () {
        _this5.setParametersPromises = [];
      });
    }
    return origCreateAnswer.apply(this, arguments);
  };
}

},{"../utils":11,"./getdisplaymedia":8,"./getusermedia":9}],8:[function(require,module,exports){
/*
 *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shimGetDisplayMedia = shimGetDisplayMedia;
function shimGetDisplayMedia(window, preferredMediaSource) {
  if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
    return;
  }
  if (!window.navigator.mediaDevices) {
    return;
  }
  window.navigator.mediaDevices.getDisplayMedia = function getDisplayMedia(constraints) {
    if (!(constraints && constraints.video)) {
      var err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
      err.name = 'NotFoundError';
      // from https://heycam.github.io/webidl/#idl-DOMException-error-names
      err.code = 8;
      return Promise.reject(err);
    }
    if (constraints.video === true) {
      constraints.video = { mediaSource: preferredMediaSource };
    } else {
      constraints.video.mediaSource = preferredMediaSource;
    }
    return window.navigator.mediaDevices.getUserMedia(constraints);
  };
}

},{}],9:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimGetUserMedia = shimGetUserMedia;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimGetUserMedia(window, browserDetails) {
  var navigator = window && window.navigator;
  var MediaStreamTrack = window && window.MediaStreamTrack;

  navigator.getUserMedia = function (constraints, onSuccess, onError) {
    // Replace Firefox 44+'s deprecation warning with unprefixed version.
    utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
  };

  if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
    var remap = function remap(obj, a, b) {
      if (a in obj && !(b in obj)) {
        obj[b] = obj[a];
        delete obj[a];
      }
    };

    var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (c) {
      if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object' && _typeof(c.audio) === 'object') {
        c = JSON.parse(JSON.stringify(c));
        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
      }
      return nativeGetUserMedia(c);
    };

    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
      var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
      MediaStreamTrack.prototype.getSettings = function () {
        var obj = nativeGetSettings.apply(this, arguments);
        remap(obj, 'mozAutoGainControl', 'autoGainControl');
        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
        return obj;
      };
    }

    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
      var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
      MediaStreamTrack.prototype.applyConstraints = function (c) {
        if (this.kind === 'audio' && (typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c, 'autoGainControl', 'mozAutoGainControl');
          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeApplyConstraints.apply(this, [c]);
      };
    }
  }
}

},{"../utils":11}],10:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.shimLocalStreamsAPI = shimLocalStreamsAPI;
exports.shimRemoteStreamsAPI = shimRemoteStreamsAPI;
exports.shimCallbacksAPI = shimCallbacksAPI;
exports.shimGetUserMedia = shimGetUserMedia;
exports.shimConstraints = shimConstraints;
exports.shimRTCIceServerUrls = shimRTCIceServerUrls;
exports.shimTrackEventTransceiver = shimTrackEventTransceiver;
exports.shimCreateOfferLegacy = shimCreateOfferLegacy;
exports.shimAudioContext = shimAudioContext;

var _utils = require('../utils');

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function shimLocalStreamsAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getLocalStreams = function getLocalStreams() {
      if (!this._localStreams) {
        this._localStreams = [];
      }
      return this._localStreams;
    };
  }
  if (!('addStream' in window.RTCPeerConnection.prototype)) {
    var _addTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
      var _this = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }
      if (!this._localStreams.includes(stream)) {
        this._localStreams.push(stream);
      }
      // Try to emulate Chrome's behaviour of adding in audio-video order.
      // Safari orders by track id.
      stream.getAudioTracks().forEach(function (track) {
        return _addTrack.call(_this, track, stream);
      });
      stream.getVideoTracks().forEach(function (track) {
        return _addTrack.call(_this, track, stream);
      });
    };

    window.RTCPeerConnection.prototype.addTrack = function addTrack(track) {
      var _this2 = this;

      for (var _len = arguments.length, streams = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        streams[_key - 1] = arguments[_key];
      }

      if (streams) {
        streams.forEach(function (stream) {
          if (!_this2._localStreams) {
            _this2._localStreams = [stream];
          } else if (!_this2._localStreams.includes(stream)) {
            _this2._localStreams.push(stream);
          }
        });
      }
      return _addTrack.apply(this, arguments);
    };
  }
  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.removeStream = function removeStream(stream) {
      var _this3 = this;

      if (!this._localStreams) {
        this._localStreams = [];
      }
      var index = this._localStreams.indexOf(stream);
      if (index === -1) {
        return;
      }
      this._localStreams.splice(index, 1);
      var tracks = stream.getTracks();
      this.getSenders().forEach(function (sender) {
        if (tracks.includes(sender.track)) {
          _this3.removeTrack(sender);
        }
      });
    };
  }
}

function shimRemoteStreamsAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
    window.RTCPeerConnection.prototype.getRemoteStreams = function getRemoteStreams() {
      return this._remoteStreams ? this._remoteStreams : [];
    };
  }
  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
      get: function get() {
        return this._onaddstream;
      },
      set: function set(f) {
        var _this4 = this;

        if (this._onaddstream) {
          this.removeEventListener('addstream', this._onaddstream);
          this.removeEventListener('track', this._onaddstreampoly);
        }
        this.addEventListener('addstream', this._onaddstream = f);
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!_this4._remoteStreams) {
              _this4._remoteStreams = [];
            }
            if (_this4._remoteStreams.includes(stream)) {
              return;
            }
            _this4._remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = stream;
            _this4.dispatchEvent(event);
          });
        });
      }
    });
    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function setRemoteDescription() {
      var pc = this;
      if (!this._onaddstreampoly) {
        this.addEventListener('track', this._onaddstreampoly = function (e) {
          e.streams.forEach(function (stream) {
            if (!pc._remoteStreams) {
              pc._remoteStreams = [];
            }
            if (pc._remoteStreams.indexOf(stream) >= 0) {
              return;
            }
            pc._remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = stream;
            pc.dispatchEvent(event);
          });
        });
      }
      return origSetRemoteDescription.apply(pc, arguments);
    };
  }
}

function shimCallbacksAPI(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
    return;
  }
  var prototype = window.RTCPeerConnection.prototype;
  var origCreateOffer = prototype.createOffer;
  var origCreateAnswer = prototype.createAnswer;
  var setLocalDescription = prototype.setLocalDescription;
  var setRemoteDescription = prototype.setRemoteDescription;
  var addIceCandidate = prototype.addIceCandidate;

  prototype.createOffer = function createOffer(successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = origCreateOffer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  prototype.createAnswer = function createAnswer(successCallback, failureCallback) {
    var options = arguments.length >= 2 ? arguments[2] : arguments[0];
    var promise = origCreateAnswer.apply(this, [options]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };

  var withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setLocalDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setLocalDescription = withCallback;

  withCallback = function withCallback(description, successCallback, failureCallback) {
    var promise = setRemoteDescription.apply(this, [description]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.setRemoteDescription = withCallback;

  withCallback = function withCallback(candidate, successCallback, failureCallback) {
    var promise = addIceCandidate.apply(this, [candidate]);
    if (!failureCallback) {
      return promise;
    }
    promise.then(successCallback, failureCallback);
    return Promise.resolve();
  };
  prototype.addIceCandidate = withCallback;
}

function shimGetUserMedia(window) {
  var navigator = window && window.navigator;

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // shim not needed in Safari 12.1
    var mediaDevices = navigator.mediaDevices;
    var _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
    navigator.mediaDevices.getUserMedia = function (constraints) {
      return _getUserMedia(shimConstraints(constraints));
    };
  }

  if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.getUserMedia = function getUserMedia(constraints, cb, errcb) {
      navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
    }.bind(navigator);
  }
}

function shimConstraints(constraints) {
  if (constraints && constraints.video !== undefined) {
    return Object.assign({}, constraints, { video: utils.compactObject(constraints.video) });
  }

  return constraints;
}

function shimRTCIceServerUrls(window) {
  if (!window.RTCPeerConnection) {
    return;
  }
  // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
  var OrigPeerConnection = window.RTCPeerConnection;
  window.RTCPeerConnection = function RTCPeerConnection(pcConfig, pcConstraints) {
    if (pcConfig && pcConfig.iceServers) {
      var newIceServers = [];
      for (var i = 0; i < pcConfig.iceServers.length; i++) {
        var server = pcConfig.iceServers[i];
        if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
          utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
          server = JSON.parse(JSON.stringify(server));
          server.urls = server.url;
          delete server.url;
          newIceServers.push(server);
        } else {
          newIceServers.push(pcConfig.iceServers[i]);
        }
      }
      pcConfig.iceServers = newIceServers;
    }
    return new OrigPeerConnection(pcConfig, pcConstraints);
  };
  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
  // wrap static methods. Currently just generateCertificate.
  if ('generateCertificate' in OrigPeerConnection) {
    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
      get: function get() {
        return OrigPeerConnection.generateCertificate;
      }
    });
  }
}

function shimTrackEventTransceiver(window) {
  // Add event.transceiver member over deprecated event.receiver
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
      get: function get() {
        return { receiver: this.receiver };
      }
    });
  }
}

function shimCreateOfferLegacy(window) {
  var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
  window.RTCPeerConnection.prototype.createOffer = function createOffer(offerOptions) {
    if (offerOptions) {
      if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
      }
      var audioTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.receiver.track.kind === 'audio';
      });
      if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
        if (audioTransceiver.direction === 'sendrecv') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('sendonly');
          } else {
            audioTransceiver.direction = 'sendonly';
          }
        } else if (audioTransceiver.direction === 'recvonly') {
          if (audioTransceiver.setDirection) {
            audioTransceiver.setDirection('inactive');
          } else {
            audioTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
        this.addTransceiver('audio');
      }

      if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
        // support bit values
        offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
      }
      var videoTransceiver = this.getTransceivers().find(function (transceiver) {
        return transceiver.receiver.track.kind === 'video';
      });
      if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
        if (videoTransceiver.direction === 'sendrecv') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('sendonly');
          } else {
            videoTransceiver.direction = 'sendonly';
          }
        } else if (videoTransceiver.direction === 'recvonly') {
          if (videoTransceiver.setDirection) {
            videoTransceiver.setDirection('inactive');
          } else {
            videoTransceiver.direction = 'inactive';
          }
        }
      } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
        this.addTransceiver('video');
      }
    }
    return origCreateOffer.apply(this, arguments);
  };
}

function shimAudioContext(window) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || window.AudioContext) {
    return;
  }
  window.AudioContext = window.webkitAudioContext;
}

},{"../utils":11}],11:[function(require,module,exports){
/*
 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
/* eslint-env node */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.extractVersion = extractVersion;
exports.wrapPeerConnectionEvent = wrapPeerConnectionEvent;
exports.disableLog = disableLog;
exports.disableWarnings = disableWarnings;
exports.log = log;
exports.deprecated = deprecated;
exports.detectBrowser = detectBrowser;
exports.compactObject = compactObject;
exports.walkStats = walkStats;
exports.filterStats = filterStats;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var logDisabled_ = true;
var deprecationWarnings_ = true;

/**
 * Extract browser version out of the provided user agent string.
 *
 * @param {!string} uastring userAgent string.
 * @param {!string} expr Regular expression used as match criteria.
 * @param {!number} pos position in the version string to be returned.
 * @return {!number} browser version.
 */
function extractVersion(uastring, expr, pos) {
  var match = uastring.match(expr);
  return match && match.length >= pos && parseInt(match[pos], 10);
}

// Wraps the peerconnection event eventNameToWrap in a function
// which returns the modified event object (or false to prevent
// the event).
function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
  if (!window.RTCPeerConnection) {
    return;
  }
  var proto = window.RTCPeerConnection.prototype;
  var nativeAddEventListener = proto.addEventListener;
  proto.addEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap) {
      return nativeAddEventListener.apply(this, arguments);
    }
    var wrappedCallback = function wrappedCallback(e) {
      var modifiedEvent = wrapper(e);
      if (modifiedEvent) {
        if (cb.handleEvent) {
          cb.handleEvent(modifiedEvent);
        } else {
          cb(modifiedEvent);
        }
      }
    };
    this._eventMap = this._eventMap || {};
    if (!this._eventMap[eventNameToWrap]) {
      this._eventMap[eventNameToWrap] = new Map();
    }
    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
    return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
  };

  var nativeRemoveEventListener = proto.removeEventListener;
  proto.removeEventListener = function (nativeEventName, cb) {
    if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[eventNameToWrap]) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    if (!this._eventMap[eventNameToWrap].has(cb)) {
      return nativeRemoveEventListener.apply(this, arguments);
    }
    var unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
    this._eventMap[eventNameToWrap].delete(cb);
    if (this._eventMap[eventNameToWrap].size === 0) {
      delete this._eventMap[eventNameToWrap];
    }
    if (Object.keys(this._eventMap).length === 0) {
      delete this._eventMap;
    }
    return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
  };

  Object.defineProperty(proto, 'on' + eventNameToWrap, {
    get: function get() {
      return this['_on' + eventNameToWrap];
    },
    set: function set(cb) {
      if (this['_on' + eventNameToWrap]) {
        this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
        delete this['_on' + eventNameToWrap];
      }
      if (cb) {
        this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
      }
    },

    enumerable: true,
    configurable: true
  });
}

function disableLog(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
  }
  logDisabled_ = bool;
  return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
}

/**
 * Disable or enable deprecation warnings
 * @param {!boolean} bool set to true to disable warnings.
 */
function disableWarnings(bool) {
  if (typeof bool !== 'boolean') {
    return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
  }
  deprecationWarnings_ = !bool;
  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
}

function log() {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    if (logDisabled_) {
      return;
    }
    if (typeof console !== 'undefined' && typeof console.log === 'function') {
      console.log.apply(console, arguments);
    }
  }
}

/**
 * Shows a deprecation warning suggesting the modern and spec-compatible API.
 */
function deprecated(oldMethod, newMethod) {
  if (!deprecationWarnings_) {
    return;
  }
  console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
}

/**
 * Browser detector.
 *
 * @return {object} result containing browser and version
 *     properties.
 */
function detectBrowser(window) {
  // Returned result object.
  var result = { browser: null, version: null };

  // Fail early if it's not a browser
  if (typeof window === 'undefined' || !window.navigator) {
    result.browser = 'Not a browser.';
    return result;
  }

  var navigator = window.navigator;


  if (navigator.mozGetUserMedia) {
    // Firefox.
    result.browser = 'firefox';
    result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
  } else if (navigator.webkitGetUserMedia || window.isSecureContext === false && window.webkitRTCPeerConnection && !window.RTCIceGatherer) {
    // Chrome, Chromium, Webview, Opera.
    // Version matches Chrome/WebRTC version.
    // Chrome 74 removed webkitGetUserMedia on http as well so we need the
    // more complicated fallback to webkitRTCPeerConnection.
    result.browser = 'chrome';
    result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
  } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
    // Safari.
    result.browser = 'safari';
    result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
    result.supportsUnifiedPlan = window.RTCRtpTransceiver && 'currentDirection' in window.RTCRtpTransceiver.prototype;
  } else {
    // Default fallthrough: not supported.
    result.browser = 'Not a supported browser.';
    return result;
  }

  return result;
}

/**
 * Checks if something is an object.
 *
 * @param {*} val The something you want to check.
 * @return true if val is an object, false otherwise.
 */
function isObject(val) {
  return Object.prototype.toString.call(val) === '[object Object]';
}

/**
 * Remove all empty objects and undefined values
 * from a nested object -- an enhanced and vanilla version
 * of Lodash's `compact`.
 */
function compactObject(data) {
  if (!isObject(data)) {
    return data;
  }

  return Object.keys(data).reduce(function (accumulator, key) {
    var isObj = isObject(data[key]);
    var value = isObj ? compactObject(data[key]) : data[key];
    var isEmptyObject = isObj && !Object.keys(value).length;
    if (value === undefined || isEmptyObject) {
      return accumulator;
    }
    return Object.assign(accumulator, _defineProperty({}, key, value));
  }, {});
}

/* iterates the stats graph recursively. */
function walkStats(stats, base, resultSet) {
  if (!base || resultSet.has(base.id)) {
    return;
  }
  resultSet.set(base.id, base);
  Object.keys(base).forEach(function (name) {
    if (name.endsWith('Id')) {
      walkStats(stats, stats.get(base[name]), resultSet);
    } else if (name.endsWith('Ids')) {
      base[name].forEach(function (id) {
        walkStats(stats, stats.get(id), resultSet);
      });
    }
  });
}

/* filter getStats for a sender/receiver track. */
function filterStats(result, track, outbound) {
  var streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
  var filteredResult = new Map();
  if (track === null) {
    return filteredResult;
  }
  var trackStats = [];
  result.forEach(function (value) {
    if (value.type === 'track' && value.trackIdentifier === track.id) {
      trackStats.push(value);
    }
  });
  trackStats.forEach(function (trackStat) {
    result.forEach(function (stats) {
      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
        walkStats(result, stats, filteredResult);
      }
    });
  });
  return filteredResult;
}

},{}],12:[function(require,module,exports){
/* eslint-env node */
'use strict';

// SDP helpers.

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var SDPUtils = {};

// Generate an alphanumeric identifier for cname or mids.
// TODO: use UUIDs instead? https://gist.github.com/jed/982883
SDPUtils.generateIdentifier = function () {
  return Math.random().toString(36).substr(2, 10);
};

// The RTCP CNAME used by all peerconnections from the same JS.
SDPUtils.localCName = SDPUtils.generateIdentifier();

// Splits SDP into lines, dealing with both CRLF and LF.
SDPUtils.splitLines = function (blob) {
  return blob.trim().split('\n').map(function (line) {
    return line.trim();
  });
};
// Splits SDP into sessionpart and mediasections. Ensures CRLF.
SDPUtils.splitSections = function (blob) {
  var parts = blob.split('\nm=');
  return parts.map(function (part, index) {
    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
  });
};

// returns the session description.
SDPUtils.getDescription = function (blob) {
  var sections = SDPUtils.splitSections(blob);
  return sections && sections[0];
};

// returns the individual media sections.
SDPUtils.getMediaSections = function (blob) {
  var sections = SDPUtils.splitSections(blob);
  sections.shift();
  return sections;
};

// Returns lines that start with a certain prefix.
SDPUtils.matchPrefix = function (blob, prefix) {
  return SDPUtils.splitLines(blob).filter(function (line) {
    return line.indexOf(prefix) === 0;
  });
};

// Parses an ICE candidate line. Sample input:
// candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
// rport 55996"
SDPUtils.parseCandidate = function (line) {
  var parts = void 0;
  // Parse both variants.
  if (line.indexOf('a=candidate:') === 0) {
    parts = line.substring(12).split(' ');
  } else {
    parts = line.substring(10).split(' ');
  }

  var candidate = {
    foundation: parts[0],
    component: { 1: 'rtp', 2: 'rtcp' }[parts[1]],
    protocol: parts[2].toLowerCase(),
    priority: parseInt(parts[3], 10),
    ip: parts[4],
    address: parts[4], // address is an alias for ip.
    port: parseInt(parts[5], 10),
    // skip parts[6] == 'typ'
    type: parts[7]
  };

  for (var i = 8; i < parts.length; i += 2) {
    switch (parts[i]) {
      case 'raddr':
        candidate.relatedAddress = parts[i + 1];
        break;
      case 'rport':
        candidate.relatedPort = parseInt(parts[i + 1], 10);
        break;
      case 'tcptype':
        candidate.tcpType = parts[i + 1];
        break;
      case 'ufrag':
        candidate.ufrag = parts[i + 1]; // for backward compatibility.
        candidate.usernameFragment = parts[i + 1];
        break;
      default:
        // extension handling, in particular ufrag. Don't overwrite.
        if (candidate[parts[i]] === undefined) {
          candidate[parts[i]] = parts[i + 1];
        }
        break;
    }
  }
  return candidate;
};

// Translates a candidate object into SDP candidate attribute.
SDPUtils.writeCandidate = function (candidate) {
  var sdp = [];
  sdp.push(candidate.foundation);

  var component = candidate.component;
  if (component === 'rtp') {
    sdp.push(1);
  } else if (component === 'rtcp') {
    sdp.push(2);
  } else {
    sdp.push(component);
  }
  sdp.push(candidate.protocol.toUpperCase());
  sdp.push(candidate.priority);
  sdp.push(candidate.address || candidate.ip);
  sdp.push(candidate.port);

  var type = candidate.type;
  sdp.push('typ');
  sdp.push(type);
  if (type !== 'host' && candidate.relatedAddress && candidate.relatedPort) {
    sdp.push('raddr');
    sdp.push(candidate.relatedAddress);
    sdp.push('rport');
    sdp.push(candidate.relatedPort);
  }
  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
    sdp.push('tcptype');
    sdp.push(candidate.tcpType);
  }
  if (candidate.usernameFragment || candidate.ufrag) {
    sdp.push('ufrag');
    sdp.push(candidate.usernameFragment || candidate.ufrag);
  }
  return 'candidate:' + sdp.join(' ');
};

// Parses an ice-options line, returns an array of option tags.
// a=ice-options:foo bar
SDPUtils.parseIceOptions = function (line) {
  return line.substr(14).split(' ');
};

// Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
// a=rtpmap:111 opus/48000/2
SDPUtils.parseRtpMap = function (line) {
  var parts = line.substr(9).split(' ');
  var parsed = {
    payloadType: parseInt(parts.shift(), 10) // was: id
  };

  parts = parts[0].split('/');

  parsed.name = parts[0];
  parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
  // legacy alias, got renamed back to channels in ORTC.
  parsed.numChannels = parsed.channels;
  return parsed;
};

// Generate an a=rtpmap line from RTCRtpCodecCapability or
// RTCRtpCodecParameters.
SDPUtils.writeRtpMap = function (codec) {
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  var channels = codec.channels || codec.numChannels || 1;
  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate + (channels !== 1 ? '/' + channels : '') + '\r\n';
};

// Parses an a=extmap line (headerextension from RFC 5285). Sample input:
// a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
// a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
SDPUtils.parseExtmap = function (line) {
  var parts = line.substr(9).split(' ');
  return {
    id: parseInt(parts[0], 10),
    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
    uri: parts[1]
  };
};

// Generates a=extmap line from RTCRtpHeaderExtensionParameters or
// RTCRtpHeaderExtension.
SDPUtils.writeExtmap = function (headerExtension) {
  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) + (headerExtension.direction && headerExtension.direction !== 'sendrecv' ? '/' + headerExtension.direction : '') + ' ' + headerExtension.uri + '\r\n';
};

// Parses an ftmp line, returns dictionary. Sample input:
// a=fmtp:96 vbr=on;cng=on
// Also deals with vbr=on; cng=on
SDPUtils.parseFmtp = function (line) {
  var parsed = {};
  var kv = void 0;
  var parts = line.substr(line.indexOf(' ') + 1).split(';');
  for (var j = 0; j < parts.length; j++) {
    kv = parts[j].trim().split('=');
    parsed[kv[0].trim()] = kv[1];
  }
  return parsed;
};

// Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeFmtp = function (codec) {
  var line = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.parameters && Object.keys(codec.parameters).length) {
    var params = [];
    Object.keys(codec.parameters).forEach(function (param) {
      if (codec.parameters[param]) {
        params.push(param + '=' + codec.parameters[param]);
      } else {
        params.push(param);
      }
    });
    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
  }
  return line;
};

// Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
// a=rtcp-fb:98 nack rpsi
SDPUtils.parseRtcpFb = function (line) {
  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
  return {
    type: parts.shift(),
    parameter: parts.join(' ')
  };
};
// Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
SDPUtils.writeRtcpFb = function (codec) {
  var lines = '';
  var pt = codec.payloadType;
  if (codec.preferredPayloadType !== undefined) {
    pt = codec.preferredPayloadType;
  }
  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
    // FIXME: special handling for trr-int?
    codec.rtcpFeedback.forEach(function (fb) {
      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type + (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') + '\r\n';
    });
  }
  return lines;
};

// Parses an RFC 5576 ssrc media attribute. Sample input:
// a=ssrc:3735928559 cname:something
SDPUtils.parseSsrcMedia = function (line) {
  var sp = line.indexOf(' ');
  var parts = {
    ssrc: parseInt(line.substr(7, sp - 7), 10)
  };
  var colon = line.indexOf(':', sp);
  if (colon > -1) {
    parts.attribute = line.substr(sp + 1, colon - sp - 1);
    parts.value = line.substr(colon + 1);
  } else {
    parts.attribute = line.substr(sp + 1);
  }
  return parts;
};

SDPUtils.parseSsrcGroup = function (line) {
  var parts = line.substr(13).split(' ');
  return {
    semantics: parts.shift(),
    ssrcs: parts.map(function (ssrc) {
      return parseInt(ssrc, 10);
    })
  };
};

// Extracts the MID (RFC 5888) from a media section.
// returns the MID or undefined if no mid line was found.
SDPUtils.getMid = function (mediaSection) {
  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
  if (mid) {
    return mid.substr(6);
  }
};

SDPUtils.parseFingerprint = function (line) {
  var parts = line.substr(14).split(' ');
  return {
    algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
    value: parts[1]
  };
};

// Extracts DTLS parameters from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the fingerprint line as input. See also getIceParameters.
SDPUtils.getDtlsParameters = function (mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=fingerprint:');
  // Note: a=setup line is ignored since we use the 'auto' role.
  // Note2: 'algorithm' is not case sensitive except in Edge.
  return {
    role: 'auto',
    fingerprints: lines.map(SDPUtils.parseFingerprint)
  };
};

// Serializes DTLS parameters to SDP.
SDPUtils.writeDtlsParameters = function (params, setupType) {
  var sdp = 'a=setup:' + setupType + '\r\n';
  params.fingerprints.forEach(function (fp) {
    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
  });
  return sdp;
};

// Parses a=crypto lines into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#dictionary-rtcsrtpsdesparameters-members
SDPUtils.parseCryptoLine = function (line) {
  var parts = line.substr(9).split(' ');
  return {
    tag: parseInt(parts[0], 10),
    cryptoSuite: parts[1],
    keyParams: parts[2],
    sessionParams: parts.slice(3)
  };
};

SDPUtils.writeCryptoLine = function (parameters) {
  return 'a=crypto:' + parameters.tag + ' ' + parameters.cryptoSuite + ' ' + (_typeof(parameters.keyParams) === 'object' ? SDPUtils.writeCryptoKeyParams(parameters.keyParams) : parameters.keyParams) + (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') + '\r\n';
};

// Parses the crypto key parameters into
//   https://rawgit.com/aboba/edgertc/master/msortc-rs4.html#rtcsrtpkeyparam*
SDPUtils.parseCryptoKeyParams = function (keyParams) {
  if (keyParams.indexOf('inline:') !== 0) {
    return null;
  }
  var parts = keyParams.substr(7).split('|');
  return {
    keyMethod: 'inline',
    keySalt: parts[0],
    lifeTime: parts[1],
    mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
    mkiLength: parts[2] ? parts[2].split(':')[1] : undefined
  };
};

SDPUtils.writeCryptoKeyParams = function (keyParams) {
  return keyParams.keyMethod + ':' + keyParams.keySalt + (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') + (keyParams.mkiValue && keyParams.mkiLength ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength : '');
};

// Extracts all SDES parameters.
SDPUtils.getCryptoParameters = function (mediaSection, sessionpart) {
  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=crypto:');
  return lines.map(SDPUtils.parseCryptoLine);
};

// Parses ICE information from SDP media section or sessionpart.
// FIXME: for consistency with other functions this should only
//   get the ice-ufrag and ice-pwd lines as input.
SDPUtils.getIceParameters = function (mediaSection, sessionpart) {
  var ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-ufrag:')[0];
  var pwd = SDPUtils.matchPrefix(mediaSection + sessionpart, 'a=ice-pwd:')[0];
  if (!(ufrag && pwd)) {
    return null;
  }
  return {
    usernameFragment: ufrag.substr(12),
    password: pwd.substr(10)
  };
};

// Serializes ICE parameters to SDP.
SDPUtils.writeIceParameters = function (params) {
  var sdp = 'a=ice-ufrag:' + params.usernameFragment + '\r\n' + 'a=ice-pwd:' + params.password + '\r\n';
  if (params.iceLite) {
    sdp += 'a=ice-lite\r\n';
  }
  return sdp;
};

// Parses the SDP media section and returns RTCRtpParameters.
SDPUtils.parseRtpParameters = function (mediaSection) {
  var description = {
    codecs: [],
    headerExtensions: [],
    fecMechanisms: [],
    rtcp: []
  };
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  for (var i = 3; i < mline.length; i++) {
    // find all codecs from mline[3..]
    var pt = mline[i];
    var rtpmapline = SDPUtils.matchPrefix(mediaSection, 'a=rtpmap:' + pt + ' ')[0];
    if (rtpmapline) {
      var codec = SDPUtils.parseRtpMap(rtpmapline);
      var fmtps = SDPUtils.matchPrefix(mediaSection, 'a=fmtp:' + pt + ' ');
      // Only the first a=fmtp:<pt> is considered.
      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
      codec.rtcpFeedback = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-fb:' + pt + ' ').map(SDPUtils.parseRtcpFb);
      description.codecs.push(codec);
      // parse FEC mechanisms from rtpmap lines.
      switch (codec.name.toUpperCase()) {
        case 'RED':
        case 'ULPFEC':
          description.fecMechanisms.push(codec.name.toUpperCase());
          break;
        default:
          // only RED and ULPFEC are recognized as FEC mechanisms.
          break;
      }
    }
  }
  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function (line) {
    description.headerExtensions.push(SDPUtils.parseExtmap(line));
  });
  // FIXME: parse rtcp.
  return description;
};

// Generates parts of the SDP media section describing the capabilities /
// parameters.
SDPUtils.writeRtpDescription = function (kind, caps) {
  var sdp = '';

  // Build the mline.
  sdp += 'm=' + kind + ' ';
  sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
  sdp += ' UDP/TLS/RTP/SAVPF ';
  sdp += caps.codecs.map(function (codec) {
    if (codec.preferredPayloadType !== undefined) {
      return codec.preferredPayloadType;
    }
    return codec.payloadType;
  }).join(' ') + '\r\n';

  sdp += 'c=IN IP4 0.0.0.0\r\n';
  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

  // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
  caps.codecs.forEach(function (codec) {
    sdp += SDPUtils.writeRtpMap(codec);
    sdp += SDPUtils.writeFmtp(codec);
    sdp += SDPUtils.writeRtcpFb(codec);
  });
  var maxptime = 0;
  caps.codecs.forEach(function (codec) {
    if (codec.maxptime > maxptime) {
      maxptime = codec.maxptime;
    }
  });
  if (maxptime > 0) {
    sdp += 'a=maxptime:' + maxptime + '\r\n';
  }

  if (caps.headerExtensions) {
    caps.headerExtensions.forEach(function (extension) {
      sdp += SDPUtils.writeExtmap(extension);
    });
  }
  // FIXME: write fecMechanisms.
  return sdp;
};

// Parses the SDP media section and returns an array of
// RTCRtpEncodingParameters.
SDPUtils.parseRtpEncodingParameters = function (mediaSection) {
  var encodingParameters = [];
  var description = SDPUtils.parseRtpParameters(mediaSection);
  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

  // filter a=ssrc:... cname:, ignore PlanB-msid
  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (parts) {
    return parts.attribute === 'cname';
  });
  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
  var secondarySsrc = void 0;

  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID').map(function (line) {
    var parts = line.substr(17).split(' ');
    return parts.map(function (part) {
      return parseInt(part, 10);
    });
  });
  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
    secondarySsrc = flows[0][1];
  }

  description.codecs.forEach(function (codec) {
    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
      var encParam = {
        ssrc: primarySsrc,
        codecPayloadType: parseInt(codec.parameters.apt, 10)
      };
      if (primarySsrc && secondarySsrc) {
        encParam.rtx = { ssrc: secondarySsrc };
      }
      encodingParameters.push(encParam);
      if (hasRed) {
        encParam = JSON.parse(JSON.stringify(encParam));
        encParam.fec = {
          ssrc: primarySsrc,
          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
        };
        encodingParameters.push(encParam);
      }
    }
  });
  if (encodingParameters.length === 0 && primarySsrc) {
    encodingParameters.push({
      ssrc: primarySsrc
    });
  }

  // we support both b=AS and b=TIAS but interpret AS as TIAS.
  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
  if (bandwidth.length) {
    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
      bandwidth = parseInt(bandwidth[0].substr(7), 10);
    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
      // use formula from JSEP to convert b=AS to TIAS value.
      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95 - 50 * 40 * 8;
    } else {
      bandwidth = undefined;
    }
    encodingParameters.forEach(function (params) {
      params.maxBitrate = bandwidth;
    });
  }
  return encodingParameters;
};

// parses http://draft.ortc.org/#rtcrtcpparameters*
SDPUtils.parseRtcpParameters = function (mediaSection) {
  var rtcpParameters = {};

  // Gets the first SSRC. Note that with RTX there might be multiple
  // SSRCs.
  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (obj) {
    return obj.attribute === 'cname';
  })[0];
  if (remoteSsrc) {
    rtcpParameters.cname = remoteSsrc.value;
    rtcpParameters.ssrc = remoteSsrc.ssrc;
  }

  // Edge uses the compound attribute instead of reducedSize
  // compound is !reducedSize
  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
  rtcpParameters.reducedSize = rsize.length > 0;
  rtcpParameters.compound = rsize.length === 0;

  // parses the rtcp-mux attrіbute.
  // Note that Edge does not support unmuxed RTCP.
  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
  rtcpParameters.mux = mux.length > 0;

  return rtcpParameters;
};

SDPUtils.writeRtcpParameters = function (rtcpParameters) {
  var sdp = '';
  if (rtcpParameters.reducedSize) {
    sdp += 'a=rtcp-rsize\r\n';
  }
  if (rtcpParameters.mux) {
    sdp += 'a=rtcp-mux\r\n';
  }
  if (rtcpParameters.ssrc !== undefined && rtcpParameters.cname) {
    sdp += 'a=ssrc:' + rtcpParameters.ssrc + ' cname:' + rtcpParameters.cname + '\r\n';
  }
  return sdp;
};

// parses either a=msid: or a=ssrc:... msid lines and returns
// the id of the MediaStream and MediaStreamTrack.
SDPUtils.parseMsid = function (mediaSection) {
  var parts = void 0;
  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
  if (spec.length === 1) {
    parts = spec[0].substr(7).split(' ');
    return { stream: parts[0], track: parts[1] };
  }
  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:').map(function (line) {
    return SDPUtils.parseSsrcMedia(line);
  }).filter(function (msidParts) {
    return msidParts.attribute === 'msid';
  });
  if (planB.length > 0) {
    parts = planB[0].value.split(' ');
    return { stream: parts[0], track: parts[1] };
  }
};

// SCTP
// parses draft-ietf-mmusic-sctp-sdp-26 first and falls back
// to draft-ietf-mmusic-sctp-sdp-05
SDPUtils.parseSctpDescription = function (mediaSection) {
  var mline = SDPUtils.parseMLine(mediaSection);
  var maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
  var maxMessageSize = void 0;
  if (maxSizeLine.length > 0) {
    maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
  }
  if (isNaN(maxMessageSize)) {
    maxMessageSize = 65536;
  }
  var sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
  if (sctpPort.length > 0) {
    return {
      port: parseInt(sctpPort[0].substr(12), 10),
      protocol: mline.fmt,
      maxMessageSize: maxMessageSize
    };
  }
  var sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
  if (sctpMapLines.length > 0) {
    var parts = sctpMapLines[0].substr(10).split(' ');
    return {
      port: parseInt(parts[0], 10),
      protocol: parts[1],
      maxMessageSize: maxMessageSize
    };
  }
};

// SCTP
// outputs the draft-ietf-mmusic-sctp-sdp-26 version that all browsers
// support by now receiving in this format, unless we originally parsed
// as the draft-ietf-mmusic-sctp-sdp-05 format (indicated by the m-line
// protocol of DTLS/SCTP -- without UDP/ or TCP/)
SDPUtils.writeSctpDescription = function (media, sctp) {
  var output = [];
  if (media.protocol !== 'DTLS/SCTP') {
    output = ['m=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctp-port:' + sctp.port + '\r\n'];
  } else {
    output = ['m=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n', 'c=IN IP4 0.0.0.0\r\n', 'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'];
  }
  if (sctp.maxMessageSize !== undefined) {
    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
  }
  return output.join('');
};

// Generate a session ID for SDP.
// https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
// recommends using a cryptographically random +ve 64-bit value
// but right now this should be acceptable and within the right range
SDPUtils.generateSessionId = function () {
  return Math.random().toString().substr(2, 21);
};

// Write boiler plate for start of SDP
// sessId argument is optional - if not supplied it will
// be generated randomly
// sessVersion is optional and defaults to 2
// sessUser is optional and defaults to 'thisisadapterortc'
SDPUtils.writeSessionBoilerplate = function (sessId, sessVer, sessUser) {
  var sessionId = void 0;
  var version = sessVer !== undefined ? sessVer : 2;
  if (sessId) {
    sessionId = sessId;
  } else {
    sessionId = SDPUtils.generateSessionId();
  }
  var user = sessUser || 'thisisadapterortc';
  // FIXME: sess-id should be an NTP timestamp.
  return 'v=0\r\n' + 'o=' + user + ' ' + sessionId + ' ' + version + ' IN IP4 127.0.0.1\r\n' + 's=-\r\n' + 't=0 0\r\n';
};

// Gets the direction from the mediaSection or the sessionpart.
SDPUtils.getDirection = function (mediaSection, sessionpart) {
  // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
  var lines = SDPUtils.splitLines(mediaSection);
  for (var i = 0; i < lines.length; i++) {
    switch (lines[i]) {
      case 'a=sendrecv':
      case 'a=sendonly':
      case 'a=recvonly':
      case 'a=inactive':
        return lines[i].substr(2);
      default:
      // FIXME: What should happen here?
    }
  }
  if (sessionpart) {
    return SDPUtils.getDirection(sessionpart);
  }
  return 'sendrecv';
};

SDPUtils.getKind = function (mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var mline = lines[0].split(' ');
  return mline[0].substr(2);
};

SDPUtils.isRejected = function (mediaSection) {
  return mediaSection.split(' ', 2)[1] === '0';
};

SDPUtils.parseMLine = function (mediaSection) {
  var lines = SDPUtils.splitLines(mediaSection);
  var parts = lines[0].substr(2).split(' ');
  return {
    kind: parts[0],
    port: parseInt(parts[1], 10),
    protocol: parts[2],
    fmt: parts.slice(3).join(' ')
  };
};

SDPUtils.parseOLine = function (mediaSection) {
  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
  var parts = line.substr(2).split(' ');
  return {
    username: parts[0],
    sessionId: parts[1],
    sessionVersion: parseInt(parts[2], 10),
    netType: parts[3],
    addressType: parts[4],
    address: parts[5]
  };
};

// a very naive interpretation of a valid SDP.
SDPUtils.isValidSDP = function (blob) {
  if (typeof blob !== 'string' || blob.length === 0) {
    return false;
  }
  var lines = SDPUtils.splitLines(blob);
  for (var i = 0; i < lines.length; i++) {
    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
      return false;
    }
    // TODO: check the modifier a bit more.
  }
  return true;
};

// Expose public methods.
if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') {
  module.exports = SDPUtils;
}
},{}]},{},[1])(1)
});

;
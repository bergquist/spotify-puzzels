var BestBefore = function(input) {
	this.input = input;
	this.numbers = convertInput(input);
	this.validMonths = [];
}

BestBefore.prototype.setHighestAsDay = function() {
	var self = this;
	this.validMonths.forEach(function(month) {
		var day = daysAreValidForMonth(month, self.numbers);
		if (day) {
			self.finalDay = day;
			self.finalMonth = month;
			deleteFromArray(self.numbers, self.finalMonth);
		}
	});
}

BestBefore.prototype.SetYear = function() {
	if (this.finalYear === undefined) {
		deleteFromArray(this.numbers, this.finalDay);
		this.finalYear = this.numbers[0];
	}
}

BestBefore.prototype.formatResponse = function() {
	if (this.finalYear < 2000) {
		this.finalYear += 2000;
		this.finalYear = this.finalYear.toString();
	}

	if (this.finalMonth < 10) { 
		this.finalMonth = '0' + this.finalMonth.toString();
	}

	if (this.finalDay < 10) {
		this.finalDay = '0' + this.finalDay.toString();
	}

	return this.finalYear + '-' + this.finalMonth + '-' + this.finalDay;
}

BestBefore.prototype.tryToFindYear = function() {
	var simpleYear = containsYear(this.numbers);
	if (simpleYear) { 
		this.finalYear = simpleYear;
	} else if (this.validMonths.length >= 2) {
		this.validMonths.sort(function(a, b){ return a - b; });
		this.finalYear = this.validMonths[0];
		deleteFromArray(this.validMonths, this.finalYear);
	}

	if (this.finalYear) {
		deleteFromArray(this.numbers, this.finalYear);
	}
}

BestBefore.prototype.validate = function() {
	this.validMonths = returnValidMonths(this.numbers);
	this.tryToFindYear();
	this.setHighestAsDay();
	this.SetYear();

	if (this.finalYear && this.finalMonth && this.finalDay) {
		return this.formatResponse();
	} else {
		return  this.input + ' is illegal';
	}
}

var validate = function(input) {
	return new BestBefore(input).validate();
}
describe('simple year', function() {
	describe('should be', function() {
		it('2001', function() { expect(containsYear(['2001'])).toBeTruthy(); });
		it('2999', function() { expect(containsYear(['2999'])).toBeTruthy(); });
		it('99', function() { expect(containsYear(['99'])).toBeTruthy(); });
		it('55', function() { expect(containsYear(['55'])).toBeTruthy(); });
		it('32', function() { expect(containsYear(['32'])).toBeTruthy(); });
		it('0', function() { expect(containsYear(['0'])).toBeTruthy(); });
	});
	
	describe('should not be', function() {

	});
});


describe('validate', function() {
	/*
	describe("28/2/12", function() {
		it("should return 2002-12-28", function() {
			var result = validate("28/2/12");
			expect(result).toEqual("2002-12-28");
		});
	});
	
	describe("28/28/12", function() {
		it("should return 2028-12-28", function() {
			var result = validate("28/28/12");
			expect(result).toEqual("2028-12-28");
		});
	});
	
	describe("30/30/30", function() {
		it("should return 30/30/30 is illegal", function() {
			var result = validate("30/30/30");
			expect(result).toEqual("30/30/30 is illegal");
		});		
	});
	*/
});

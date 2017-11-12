describe("Cooper Challenge", function(){
  var testSubject;
  describe("Male", function(){
    testSubject = new Person({gender: 'man'});
    it("returns a correct data on calculation for man 50+ age", function(){
      testSubject.age = 53;
      expect(cooper(testSubject, {distance: 2000})).toEqual("Above Average");
    });

    it("returns correct data on calculation for man 40-49 age", function(){
      testSubject.age = 47;
      expect(cooper(testSubject,{distance: 1423})).toEqual("Below Average");
    });

    it("returns correct data on calculation for man 30-39 age", function(){
      testSubject.age = 39;
      expect(cooper(testSubject, {distance: 2000})).toEqual("Average");
    });

    it("returns correct data on calculation for man 20-29 age", function(){
      testSubject.age = 29;
      expect(cooper(testSubject, {distance: 1599})).toEqual("Poor");
    });

    it("returns correct data on calculation for man 17-19 age", function(){
      expect(cooper({age: 18, gender: "man", distance: 3500})).toEqual("Excellent");
    });

    it("returns correct data on calculation for man 15-16 age", function(){
      expect(cooper({age: 16, gender: "man", distance: 2799})).toEqual("Above Average");
    });

    it("returns correct data on calculation for man 13-14 age", function(){
      expect(cooper({age: 13, gender: "man", distance: 2112})).toEqual("Below Average");
    });
  });
  describe("Female", function(){
    it("returns a correct data on calculation for woman 50+ age", function(){
      expect(cooper({age: 60, gender: "woman", distance: 1555})).toEqual("Average");
    });

    it("returns a correct data on calculation for woman 40-49 age", function(){
      expect(cooper({age: 47, gender: "woman", distance: 2000})).toEqual("Above Average");
    });

    it("returns a correct data on calculation for woman 30-39 age", function(){
      expect(cooper({age: 32, gender: "woman", distance: 1800})).toEqual("Average");
    });

    it("returns a correct data on calculation for woman 20-29 age", function(){
      expect(cooper({age: 25, gender: "woman", distance: 3000})).toEqual("Excellent");
    });

    it("returns a correct data on calculation for woman 17-19 age", function(){
      expect(cooper({age: 19, gender: "woman", distance: 1600})).toEqual("Poor");
    });

    it("returns a correct data on calculation for woman 15-16 age", function(){
      expect(cooper({age: 15, gender: "woman", distance: 1659})).toEqual("Below Average");
    });

    it("returns a correct data on calculation for woman 13-14 age", function(){
      expect(cooper({age: 14, gender: "woman", distance: 1950})).toEqual("Above Average");
    });
  });
});

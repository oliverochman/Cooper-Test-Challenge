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
      expect(cooper(testSubject, {distance: 1423})).toEqual("Below Average");
    });

    it("returns correct data on calculation for man 30-39 age", function(){
      testSubject.age = 39;
      expect(cooper(testSubject, {distance: 1800})).toEqual("Average");
    });

    it("returns correct data on calculation for man 20-29 age", function(){
      testSubject.age = 29;
      expect(cooper(testSubject, {distance: 3000})).toEqual("Excellent");
    });

    it("returns correct data on calculation for man 17-19 age", function(){
      testSubject.age = 18;
      expect(cooper(testSubject, {distance: 2000})).toEqual("Poor");
    });

    it("returns correct data on calculation for man 15-16 age", function(){
      testSubject.age = 16;
      expect(cooper(testSubject, {distance: 2799})).toEqual("Above Average");
    });

    it("returns correct data on calculation for man 13-14 age", function(){
      testSubject.age = 13;
      expect(cooper(testSubject, {distance: 2112})).toEqual("Below Average");
    });
  });
  describe("Female", function(){
    testSubject = new Person({gender: 'woman'});
    it("returns a correct data on calculation for woman 50+ age", function(){
      testSubject.age = 60;
      expect(cooper(testSubject, {distance: 1555})).toEqual("Average");
    });

    it("returns a correct data on calculation for woman 40-49 age", function(){
      testSubject.age = 47;
      expect(cooper(testSubject, {distance: 2000})).toEqual("Above Average");
    });

    it("returns a correct data on calculation for woman 30-39 age", function(){
      testSubject.age = 32;
      expect(cooper(testSubject, {distance: 1800})).toEqual("Average");
    });

    it("returns a correct data on calculation for woman 20-29 age", function(){
      testSubject.age = 25;
      expect(cooper(testSubject, {distance: 3000})).toEqual("Excellent");
    });

    it("returns a correct data on calculation for woman 17-19 age", function(){
      testSubject.age = 19;
      expect(cooper(testSubject, {distance: 1600})).toEqual("Poor");
    });

    it("returns a correct data on calculation for woman 15-16 age", function(){
      testSubject.age = 15;
      expect(cooper(testSubject, {distance: 1659})).toEqual("Below Average");
    });

    it("returns a correct data on calculation for woman 13-14 age", function(){
      testSubject.age = 14;
      expect(cooper(testSubject, {distance: 1950})).toEqual("Above Average");
    });
  });
});

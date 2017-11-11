describe("cooper", function(){
  it("returns a correct data on calculation", function(){
    expect(cooper({age: 53, gender: "man", distance: 2000})).toEqual("Above Average");
  });
})

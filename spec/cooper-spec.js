describe("cooper", function(){
  it("returns a correct data on calculation for man 50+ age", function(){
    expect(cooper({age: 53, gender: "man", distance: 2000})).toEqual("Above Average");
  });

  it("returns a correct data on calculation for man 40-49 age", function(){
    expect(cooper({age: 47, gender: "man", distance: 1423})).toEqual("Bellow Average");
  })

  it("returns a correct data on calculation for man 30-39 age", function(){
    expect(cooper({age: 33, gender: "man", distance: 2000})).toEqual("Average");
  })
})

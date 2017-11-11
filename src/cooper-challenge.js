function cooper(attr){
  if(attr.gender == "man") {
    if(attr.age >= 50) {
      if(attr.distance >= 2400) {
        return "Excellent";
      }
      if(attr.distance >= 2000) {
        return "Above Average";
      }
      if(attr.distance >= 1600) {
        return "Average";
      }
      if(attr.distance >= 1300) {
        return "Bellow Average";
      }
      if(attr.distance > 1300) {
        return "Poor";
      }
    }
  }
}

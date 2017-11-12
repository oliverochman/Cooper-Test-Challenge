function cooper(subject, attr) {
  if(subject.gender == "man") {
    if(subject.age >= 50) {
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
        return "Below Average";
      }
      if(attr.distance < 1300) {
        return "Poor";
      }
    }
    if(subject.age >= 40) {
      if(attr.distance >= 2500) {
        return "Excellent";
      }
      if(attr.distance >= 2100) {
        return "Above Average";
      }
      if(attr.distance >= 1700) {
        return "Average";
      }
      if(attr.distance >= 1400) {
        return "Below Average";
      }
      if(attr.distance < 1400) {
        return "Poor";
      }
    }
    if(subject.age >= 30) {
      if(attr.distance >= 2700) {
        return "Excellent";
      }
      if(attr.distance >= 2300) {
        return "Above Average";
      }
      if(attr.distance >= 1900) {
        return "Average";
      }
      if(attr.distance >= 1500) {
        return "Below Average";
      }
      if(attr.distance < 1500) {
        return "Poor";
      }
    }
    if(subject.age >= 20) {
      if(attr.distance >= 2800) {
        return "Excellent";
      }
      if(attr.distance >= 2400) {
        return "Above Average";
      }
      if(attr.distance >= 2200) {
        return "Average";
      }
      if(attr.distance >= 1600) {
        return "Below Average";
      }
      if(attr.distance < 1600) {
        return "Poor";
      }
    }
    if(subject.age >= 17) {
      if(attr.distance >= 3000) {
        return "Excellent";
      }
      if(attr.distance >= 2700) {
        return "Above Average";
      }
      if(attr.distance >= 2500) {
        return "Average";
      }
      if(attr.distance >= 2300) {
        return "Below Average";
      }
      if(attr.distance < 2300) {
        return "Poor";
      }
    }
    if(subject.age >= 15) {
      if(attr.distance >= 2800) {
        return "Excellent";
      }
      if(attr.distance >= 2500) {
        return "Above Average";
      }
      if(attr.distance >= 2300) {
        return "Average";
      }
      if(attr.distance >= 2200) {
        return "Below Average";
      }
      if(attr.distance < 2200) {
        return "Poor";
      }
    }
    if(subject.age >= 13) {
      if(attr.distance >= 2700) {
        return "Excellent";
      }
      if(attr.distance >= 2400) {
        return "Above Average";
      }
      if(attr.distance >= 2200) {
        return "Average";
      }
      if(attr.distance >= 2100) {
        return "Below Average";
      }
      if(attr.distance < 2100) {
        return "Poor";
      }
    }
  }
  if(subject.gender == "woman") {
    if(subject.age >= 50) {
      if(attr.distance >= 2200) {
        return "Excellent";
      }
      if(attr.distance >= 1700) {
        return "Above Average";
      }
      if(attr.distance >= 1400) {
        return "Average";
      }
      if(attr.distance >= 1100) {
        return "Below Average";
      }
      if(attr.distance < 1100) {
        return "Poor";
      }
    }
    if(subject.age >= 40) {
      if(attr.distance >= 2300) {
        return "Excellent";
      }
      if(attr.distance >= 1900) {
        return "Above Average";
      }
      if(attr.distance >= 1500) {
        return "Average";
      }
      if(attr.distance >= 1200) {
        return "Below Average";
      }
      if(attr.distance < 1200) {
        return "Poor";
      }
    }
    if(subject.age >= 30) {
      if(attr.distance >= 2500) {
        return "Excellent";
      }
      if(attr.distance >= 2000) {
        return "Above Average";
      }
      if(attr.distance >= 1700) {
        return "Average";
      }
      if(attr.distance >= 1400) {
        return "Below Average";
      }
      if(attr.distance < 1400) {
        return "Poor";
      }
    }
    if(subject.age >= 20) {
      if(attr.distance >= 2700) {
        return "Excellent";
      }
      if(attr.distance >= 2200) {
        return "Above Average";
      }
      if(attr.distance >= 1800) {
        return "Average";
      }
      if(attr.distance >= 1500) {
        return "Below Average";
      }
      if(attr.distance < 1500) {
        return "Poor";
      }
    }
    if(subject.age >= 17) {
      if(attr.distance >= 2300) {
        return "Excellent";
      }
      if(attr.distance >= 2100) {
        return "Above Average";
      }
      if(attr.distance >= 1800) {
        return "Average";
      }
      if(attr.distance >= 1700) {
        return "Below Average";
      }
      if(attr.distance < 1700) {
        return "Poor";
      }
    }
    if(subject.age >= 15) {
      if(attr.distance >= 2100) {
        return "Excellent";
      }
      if(attr.distance >= 2000) {
        return "Above Average";
      }
      if(attr.distance >= 1700) {
        return "Average";
      }
      if(attr.distance >= 1600) {
        return "Below Average";
      }
      if(attr.distance < 1600) {
        return "Poor";
      }
    }
    if(subject.age >= 13) {
      if(attr.distance >= 2000) {
        return "Excellent";
      }
      if(attr.distance >= 1900) {
        return "Above Average";
      }
      if(attr.distance >= 1600) {
        return "Average";
      }
      if(attr.distance >= 1500) {
        return "Below Average";
      }
      if(attr.distance < 1500) {
        return "Poor";
      }
    }
  }
}

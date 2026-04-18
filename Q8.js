function gradeScore(score) {
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else if (score >= 50) {
    return "C";
  } else if (score >= 40) {
    return "D";
  } else {
    return "F";
  }
}

// Test cases
console.log(gradeScore(85));
console.log(gradeScore(62));
console.log(gradeScore(45));
console.log(gradeScore(30));

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

function summarizeStudent(students) {
  return students.map(student => {
    const grade = gradeScore(student.score);
    return `${student.name} scored ${student.score} — Grade: ${grade}`;
  });
}

// Example data
const students = [
  { name: "Joy", score: 88 },
  { name: "Micheal", score: 55 },
  { name: "Emmanuel", score: 39 }
];

console.log(summarizeStudent(students));

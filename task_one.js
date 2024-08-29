const students = [
  {
    name: 'Ahmed',
    score: 68,
  },
  {
    name: 'Ali',
    score: 24,
  },
  {
    name: 'Mariam',
    score: 85,
  },
  {
    name: 'Amr',
    score: 54,
  },
  {
    name: 'Sara',
    score: 99,
  },
];

// Create a function that takes the array of students and prints each student and their grade to the console.

//The grade is calculated as follows:
//If the score is less than 50, the grade is 'F'.
//If the score is between 50 and 60, the grade is 'D'.
//If the score is between 60 and 70, the grade is 'C'.
//If the score is between 70 and 80, the grade is 'B'.
//If the score is higher than 80, the grade is 'A'.

//The output for each student should look like this: "Name: -student name-, Grade: -student grade-"

//Bonus: Sort the students by their grade in descending order into a new array and print the new array to the console. (Hint: Use the sort method)
//Write your code here

//grade decision making logic
const getGrade = (score) => {
  if (score < 50) {
    return 'F';
  } else if (score >= 50 && score < 60) {
    return 'D';
  } else if (score >= 60 && score < 70) {
    return 'C';
  } else if (score >= 70 && score < 80) {
    return 'B';
  } else {
    return 'A';
  }
};

// Function to print student grades and return the updated array with grades
const printStudentGrades = (students) => {
  return students.map(student => {
    const grade = getGrade(student.score);
    console.log(`Name: ${student.name}, Grade: ${grade}`);
    return { ...student, grade };
  });
};

// Get the updated array with grades
const studentsWithGrades = printStudentGrades(students);


// Sorting the students by grades in descending order, then by score if grades are the same
const studentsSorted = studentsWithGrades.sort((a, b) => {
  const gradeOrder = { A: 4, B: 3, C: 2, D: 1, F: 0 };
  // Sort by grade, then by score if grades are equal
  if (gradeOrder[b.grade] !== gradeOrder[a.grade]) {
    return gradeOrder[b.grade] - gradeOrder[a.grade];
  } else {
    return b.score - a.score; // Sort by score if grades are the same
  }
});

console.log('Sorted Students:', studentsSorted);
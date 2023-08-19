// 2. Define an object that represents a student's information including name, age, and grade. Implement a method to update the student's grade.

const student = {
  name: 'aayush bajpai',
  age: 19,
  grade: 'B',
};

// function to update grade
const updateGrade = (student, grade) => {
  student.grade = grade;
};

// function to print stu obj
const printObj = (obj) => {
  for (let key in obj) {
    console.log(`${key} : ${obj[key]}`);
  }
};

// test-case
updateGrade(student, 'A+');
printObj(student);

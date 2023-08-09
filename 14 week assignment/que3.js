// // Que - 3
// Imagine you are given a list of student objects, each containing the student's name and their marks. Your task is to create a function that checks results by filtering out students whose score is more than 90 and prints a message saying "Congratulations [Student Name]! You have cleared the exam."

// list of student objects
const students = [
  {
    name: 'Mithun',
    marks: 95,
  },
  {
    name: 'Prabir',
    marks: 75,
  },
  {
    name: 'Alka',
    marks: 92,
  },
  {
    name: 'Shivam',
    marks: 70,
  },
  {
    name: 'Farman',
    marks: 99,
  },
];

// function
const greetPassouts = (studentName) => {
  let validUser = false;

  students.map((student) => {
    if (student.name === studentName) {
      validUser = true;
      if (student.marks > 90) {
        console.log(
          `Congratulations ${student.name}! You have cleared the exam.`
        );
      } else {
        console.log(`sorry ! You have not cleared the exam.`);
      }
    }
  });

  if (validUser === false) {
    console.log('Invalid User !!!');
  }
};

// test-cases
greetPassouts('Mithun');
greetPassouts('Prabir');
greetPassouts('Mithun S');

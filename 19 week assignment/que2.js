// Create a student enrollment system using JavaScript classes. Implement two classes, Student and Admission, to manage student enrollments, course admission, and enrollment tracking. The Student class should have methods for enrolling in courses and displaying enrolled courses, while the Admission class should handle student enrollments, course admission, and the display of enrolled students. Your task is to implement these classes with clear and organized code, adhering to the specified requirements provided.

// class for student
class Student {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.enrolledCourses = [];
  }

  // enroll courses
  enrollCourse(courseName) {
    this.enrolledCourses.push(courseName);
    console.log(`${this.name} has enrolled in ${courseName}.`);
  }

  // display enrolled courses
  showCourses() {
    let str = `${this.name}'s enrolled courses: `;
    for (let course of this.enrolledCourses) {
      str += `${course}. `;
    }

    console.log(str);
  }
}

// class for Admission
class Admission extends Student {
  constructor() {
    super();
    this.enrolledStudents = [];
  }

  // enroll students
  enrollStudent(student) {
    this.enrolledStudents.push(student);
    console.log(`${student.name} has been enrolled.`);
  }

  // assign course
  assignCourse(student, courseName) {
    student.enrolledCourses.push(courseName);
    console.log(`${student.name} has been enrolled in ${courseName}`);
  }

  // show enrolled students
  showEnrolledStudents() {
    console.log(`Enrolled students: `);
    for (let stu of this.enrolledStudents) {
      console.log(`- ${stu.name} (${stu.id})`);
    }
  }
}

// test-case
const admissionOffice = new Admission();

let student1 = new Student('aayush', 'aayush@pw.live');
let student2 = new Student('jay', 'jay@pw.live');

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);
console.log();

admissionOffice.assignCourse(student1, 'Facebook ADS expertisation');
admissionOffice.assignCourse(student2, ' Full stack web development');
console.log();

student1.showCourses();
student2.showCourses();
console.log();

admissionOffice.showEnrolledStudents();

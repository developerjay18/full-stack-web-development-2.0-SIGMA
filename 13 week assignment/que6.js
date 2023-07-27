// You are developing a form validation system. Write a program that takes user information(such as name,email, age) and uses the typeof operator to check the data type of each input. Print appropriate messages like "Name should be a string", "Email should be a string," or "age should be a number." if any field is not proper.

function formValidation(name, email, age) {
  if (typeof name !== 'string') {
    console.log('Name should be a string');
  }

  if (typeof email !== 'string') {
    console.log('Email should be a string');
  }

  if (typeof age !== 'number') {
    console.log('age should be a number');
  }
}

// example 1
formValidation('rahul', 'vk19@yahoo.com', '18');

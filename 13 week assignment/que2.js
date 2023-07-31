// You are building a simple login system. Implement the login feature that has two variables: username and password. You should check if the username is "admin" and the password is "12345". If both conditions are true, print "Login sucessful"  otherwise, print "Invalid credentials."

function loginAuthentication(username, password) {
  if (username === 'admin' && password === '12345') {
    console.log(`username is : ${username} and password is : ${password}`);
    console.log('Login sucessfull');
  } else {
    console.log('Invalid credentials');
  }
}

// example 1
loginAuthentication('admin', '12345');

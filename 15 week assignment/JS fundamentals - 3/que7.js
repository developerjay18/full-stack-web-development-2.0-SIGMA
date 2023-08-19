// // Build a program that utilizes a Map to store user information (name, age, email) and allows adding, updating, and deleting user records.

// // func to add user
const addUser = (map, name, age, email) => {
  map.set(email, [name, age, email]);
};

// func to delete user
const deleteUser = (map, email) => {
  if (map.has(email)) {
    map.delete(email);
    console.log(`User deleted successfully`);
  } else {
    console.log(`user not registered`);
  }
};

// func to update user
const updateUser = (map, name, age, email) => {
  if (map.has(email)) {
    let user = map.get(email);
    user[0] = name;
    user[1] = age;
    console.log(`User updated successfully`);
  } else {
    console.log(`User not registered`);
  }
};

// display user
const displayUser = (map) => {
  for (let [key, value] of map) {
    console.log('----------------');
    console.log(`${key}`);
    console.log(`name : ${value[0]}`);
    console.log(`age : ${value[1]}`);
    console.log(`email : ${value[2]}`);
    console.log('----------------');
  }
};

let sampleMap = new Map();

// test-case
addUser(sampleMap, 'aayush', 19, 'abd17@gmail.com');
addUser(sampleMap, 'avinash', 19, 'ap@gmail.com');
displayUser(sampleMap);
updateUser(sampleMap, 'hiramani', 19, 'abd17@gmail.com');
deleteUser(sampleMap, 'ap@gmail.com');
displayUser(sampleMap);

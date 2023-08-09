// que - 1
// Imagine you are working for a social media company. You have a list of all the users. Your job is to create a function that checks if a specific username is in that list. The function should take the username as input and tell you whether it's present in the list of users or not.

// assuming that this list is given by social media company.
const givenUsersList = [
  'aayush',
  'jay',
  'yashu',
  'pandey',
  'oza',
  'shukan',
  'lalit',
  'mithun',
];

// function for checking user
const isUserPresent = (username) => {
  if (givenUsersList.includes(username)) {
    console.log(`Yes, ${username} is a valid user.`);
  } else {
    console.log(`No, ${username} is not a valid user.`);
  }
};

// examples
isUserPresent('aayush');
isUserPresent('virat');

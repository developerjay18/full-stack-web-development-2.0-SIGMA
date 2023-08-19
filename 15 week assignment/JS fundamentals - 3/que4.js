// 4. Develop a program that accepts an object and a property name, and checks if the object has the specified property.

const cricketer = {
  name: 'virat kohli',
  jerseyNo: 18,
  centuries: 76,
  nationality: 'indian',
  spouse: 'anushka sharma',
  titleName: 'king kohli',
};

// func to check prop availability
const checkAvailability = (obj, property) => {
  if (obj.hasOwnProperty(property)) {
    console.log(`Yes, this property is available`);
  } else {
    console.log(`No, this property is not available`);
  }
};

// test-case
checkAvailability(cricketer, 'name');
checkAvailability(cricketer, 'gender');

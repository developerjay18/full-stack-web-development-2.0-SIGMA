// que - 8
// Let’s say you are working for an event management company. As a web developer, you need to build a countdown timer for an upcoming event. You need to build a function that calculates the number of days between the current date and the event's start date.

// event date
const eventDate = '2023-10-14'; // IND vs PAK match

// function
const calculateDays = (date) => {
  let launchDate = new Date(`${date} 12:00:00`);
  let currentDate = new Date();
  let diffrence = Math.floor((launchDate - currentDate) / 1000); // remaining seconds
  let days = Math.ceil(diffrence / 3600 / 24); // remaining days

  console.log(days);
};

// test-case
calculateDays(eventDate);

// You are developing a booking application for a cinema. The ticket price depends on the type of the viewer("child", "adult", or "senior"). Write a program which calculates the price acordingly and prints the total price to be paid. Let’s assume the ticket price for a child is Rs. 100, adult ticket price is Rs. 150 and ticket price for a senior is Rs. 120.

function ticketPriceCalc(numberOfChilds, numberOfAdults, numberOfSeniors) {
  let total =
    numberOfChilds * 100 + numberOfAdults * 150 + numberOfSeniors * 120;

  console.log(`No of childs : ${numberOfChilds}`);
  console.log(`No of Adults : ${numberOfAdults}`);
  console.log(`No of Seniors : ${numberOfSeniors}`);
  console.log('--------------------------');

  console.log(`The total ticket price is ${total}`);
}

ticketPriceCalc(2, 1, 1);

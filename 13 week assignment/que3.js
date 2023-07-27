// You are working on a currency conversion application. Write a program that has variable which stores the amount in Indian Rupees (INR) and prints the equivalent amount in US Dollars (USD). Use the current exchange rate of 1 USD = 82 INR.


function convertToUSD(INR){
    let USD = INR/82;
    console.log(`${INR} INR is ${USD} USD`);
}

// example 1
convertToUSD(850)
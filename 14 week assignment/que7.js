// que - 7
// Imagine you are working for a digital banking platform, and your team is tasked with improving the security of customer accounts. Your challenge is to create a function that generates a random 4-digit OTP (One-Time Password) for authentication purposes.

// function for OTP generation
const generateOtp = () => {
  let otp = Math.floor(Math.random() * (9999 - 1000) + 1000);
  console.log(`Here is your OTP : ${otp}`);
};

// test-case
generateOtp();

// fetching elements
let container = document.querySelector('.time-container');
let hourBox = document.querySelector('.hour');
let minBox = document.querySelector('.min');
let secBox = document.querySelector('.sec');

// function to change bg-color
let changeBgColor = (hexcode) => {
  container.style.backgroundColor = hexcode;
};

// function to render time
let showTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }

  hourBox.textContent = hour;
  minBox.textContent = minute;
  secBox.textContent = second;

  changeBgColor(`#${hour}${minute}${second}`);
};

// setting interval to call func on every 1 sec automatically
setInterval(showTime, 1000);

// fetching elements
let decBtn = document.querySelector('.dec');
let incBtn = document.querySelector('.inc');
let displayer = document.querySelector('.value');
let counter = 0;

// render counter value function
const showCountVal = () => {
  if (counter < 0) {
    alert('counter is going beyond 0');
  }
  displayer.textContent = counter;
};

// adding event listners
decBtn.addEventListener('click', () => {
  counter--;
  showCountVal();
});

incBtn.addEventListener('click', () => {
  counter++;
  showCountVal();
});

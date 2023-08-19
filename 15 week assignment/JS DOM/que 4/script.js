// fetching values
let nameInput = document.querySelector('input[name=name]');
let passwordInput = document.querySelector('input[name=password]');
let btn = document.querySelector('button');

// adding event listner
btn.addEventListener('click', (event) => {
  // stopping form submission
  event.preventDefault();

  if (nameInput.value.length >= 3 && passwordInput.value.length >= 8) {
    alert('Form validation successful');
  } else {
    alert('Form validation failed !!');
  }
});

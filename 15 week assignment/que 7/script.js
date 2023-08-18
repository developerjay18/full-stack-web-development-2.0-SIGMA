// fecthing elements
let input = document.querySelector('input');
let items = document.querySelectorAll('li');

// adding event listner to input element
input.addEventListener('input', () => {
  let enteredVal = input.value.toLowerCase();

  for (let item of items) {
    let itemVal = item.textContent.toLowerCase();

    if (itemVal.includes(enteredVal)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
});

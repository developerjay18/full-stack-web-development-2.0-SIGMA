// fetching elements
let heading = document.querySelector('h1');
let btn = document.querySelector('button');
let img = document.querySelector('img');

// adding event listner
btn.addEventListener('click', () => {
  img.classList.toggle('hidden');
  if (img.getAttribute('class') === 'hidden') {
    heading.textContent = 'Your image is hidden';
  } else {
    heading.textContent = 'Your image is visible';
  }
});

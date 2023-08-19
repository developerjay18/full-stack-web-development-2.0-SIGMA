// fetching elements
let imageInput = document.querySelector('input');
let displayerBox = document.querySelector('.displayer');
let image = document.querySelector('img');

// logic..
imageInput.addEventListener('change', (event) => {
  let file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      image.src = reader.result;
    };

    reader.readAsDataURL(file);
  }
});

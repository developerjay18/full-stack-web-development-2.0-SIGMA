// available options
const options = ['Javasript', 'java', 'Python', 'C++'];

// fetching elements
let container = document.querySelector('.container');
let heading = document.createElement('h1');
let select = document.createElement('select');

// adding text-content to elements
heading.textContent = 'Which is my favourite programming language : ';

for (let option of options) {
  let opt = document.createElement('option');
  opt.textContent = option;
  select.append(opt);
}

// appending all data to rendering on div
container.append(heading);
container.append(select);

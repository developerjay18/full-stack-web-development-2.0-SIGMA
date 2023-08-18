// fetching elements
let loginBtn = document.querySelector('.login');
let logoutBtn = document.querySelector('.logout');
let heading = document.querySelector('h1');

// checking status and renderinf heading
let checkAndRender = () => {
  if (localStorage.getItem('status') === 'login') {
    heading.textContent = 'User is logged In';
  } else {
    heading.textContent = 'User has not logged In';
  }
};

// adding event listners
loginBtn.addEventListener('click', () => {
  localStorage.setItem('status', 'login');
  checkAndRender();
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('status');
  checkAndRender();
});

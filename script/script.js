const dropdownButton = document.querySelector('.dropdown-button');
const dropdownMenu = document.querySelector('.dropdown-menu');

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});


document.addEventListener('click', (e) => {
  if (!dropdownMenu.contains(e.target) && !dropdownButton.contains(e.target)) {
    setTimeout(() => {
      dropdownMenu.classList.remove('show');
    }, 200);
  }
});



const hamburger = document.querySelector('.hamburger');
const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerMenu = document.querySelector('.hamburger-menu');


hamburgerButton.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('show');
});


hamburgerMenu.addEventListener('click', (drop) => {
  const menuItem = drop.target;

  if (menuItem.tagName === 'A') {
    drop.preventDefault();
  }
  hamburgerMenu.classList.remove('show');
});
const menu = document.getElementById('menu-nav');
const burgerButton = menu.querySelector('.burger');
/*const links = menu.querySelector('.links');*/


function toggleMenu() {
  const menu = document.getElementById('menuinit');
  const links = menu.querySelector('.links');
  links.classList.toggle('show');
}

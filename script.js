document.addEventListener('DOMContentLoaded', function() {
  const menu = document.querySelector('.menuinit');
  const burgerButton = menu.querySelector('.burger');
  const links = menu.querySelector('.links');
  const menuIcon = menu.querySelector('#menuIcon');
  const closeIcon = menu.querySelector('#closeIcon');

  function toggleMenu() {
    links.classList.toggle('show');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
  }

  burgerButton.addEventListener('click', toggleMenu);
  closeIcon.addEventListener('click', toggleMenu);
});

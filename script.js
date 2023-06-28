const menuHamburger = document.querySelector('.hamburguer');
const navMobile = document.querySelector('.navbar');
const navMobileLinks = document.querySelectorAll('.nav-list a');
const hamburgerImage = document.querySelector('#hamburguer');

function toggleMenu() {
  if (navMobile.classList.contains('active')) {
    hamburgerImage.src = './images/cancel.svg';
  } else {
    hamburgerImage.src = './images/Icon - Menu.svg';
  }
}

menuHamburger.addEventListener('click', () => {
  navMobile.classList.toggle('active');
  toggleMenu();
});

navMobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMobile.classList.remove('active');
    toggleMenu();
  });
});






// Get the necessary DOM elements
const popupButton = document.getElementById('popupButton');
const popupContainer = document.getElementById('popupContainer');
const popup = document.getElementById('popup');
const popupTitle = document.querySelector('.popup-title');
const closeButton = document.querySelector('.popup-close');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// Add event listeners
popupButton.addEventListener('click', function() {
  // Set the dynamic content
  popupTitle.textContent = 'Tonic';

  // Show the popup
  popupContainer.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  // Hide the popup
  popupContainer.style.display = 'none';
});

button1.addEventListener('click', function() {
  // Button 1 functionality
  console.log('Button 1 clicked');
});

button2.addEventListener('click', function() {
  // Button 2 functionality
  console.log('Button 2 clicked');
});

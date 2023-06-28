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
const popupContainer = document.getElementById('popupContainer');
const popup = document.getElementById('popup');
const popupTitle = document.querySelector('.popup-title');
const closeButton = document.querySelector('.popup-close');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

// Function to open the popup with dynamic content
function openPopup(title, subtitle, imageSrc, paragraph, button1Text, button2Text) {
  // Set the dynamic content
  popupTitle.textContent = title;
  const popupContent = document.querySelector('.popup-content');
  popupContent.innerHTML = `
    <h3>${subtitle}</h3>
    <ul>
      <li>Point 1</li>
      <li>Point 2</li>
      <li>Point 3</li>
    </ul>

    <img src="${imageSrc}" alt="Image">

    <h3>Subtitle 3</h3>
    <p>${paragraph}</p>
  `;

  // Show the popup
  popupContainer.style.display = 'block';
}

// Add event listeners for each popup button
const popupButton1 = document.getElementById('popupButton1');
popupButton1.addEventListener('click', function() {
  openPopup(
    'Tonic',
    ' ',
    './images/Snapshoot Portfolio.png',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'Button 1 for Popup 1',
    'Button 2 for Popup 1'
  );
});

const popupButton2 = document.getElementById('popupButton2');
popupButton2.addEventListener('click', function() {
  openPopup(
    'Multi-Post Stories',
    ' ',
    './images/Snapshoot 2.png',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'Button 1 for Popup 2',
    'Button 2 for Popup 2'
  );
});

const popupButton3 = document.getElementById('popupButton3');
popupButton3.addEventListener('click', function() {
  openPopup(
    'TONIC',
    ' ',
    './images/Snapshoot 3.png',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'Button 1 for Popup 3',
    'Button 2 for Popup 3'
  );
});

const popupButton4 = document.getElementById('popupButton4');
popupButton4.addEventListener('click', function() {
  openPopup(
    'Multi-Post Stories',
    ' ',
    './images/Snapshoot Portfolio 4.png',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'Button 1 for Popup 4',
    'Button 2 for Popup 4'
  );
});

// Add event listener for the close button
closeButton.addEventListener('click', function() {
  // Hide the popup
  popupContainer.style.display = 'none';
});

// Add event listeners for the buttons inside the popup
button1.addEventListener('click', function() {
  // Button 1 functionality
  console.log('Button 1 clicked');
});

button2.addEventListener('click', function() {
  // Button 2 functionality
  console.log('Button 2 clicked');
});


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

const popupTitle = document.querySelector('.popup-title');
const closeButton = document.querySelector('.popup-close');
// Function to open the popup with dynamic content
function openPopup(title, subtitle, imageSrc, imageSrc1, paragraph) {
  // Set the dynamic content
  popupTitle.textContent = title;
  const popupContent = document.querySelector('.popup-content');
  popupContent.innerHTML = `
    <h3>${subtitle}</h3>
    <ul class="dates dated-d">
                <li>CANOPY</li>
                <li><img src="./images/bullet.svg" alt="counter" /></li>
                <li class="stack-backend">Back End Dev</li>
                <li><img src="./images/bullet.svg" alt="counter" /></li>
                <li class="stack-backend">2015</li>
              </ul>

    <img src="${imageSrc}" alt="Image" class='imagemobile111'>
    <img src="${imageSrc1}" alt="Image" class='imagedesktop111'>

    
    <p>${paragraph}</p>

    <ul class="stacks">
              <li class="stack-over">HTML</li>
              <li class="stack-over mobile-hide desktop-show">Ruby on rails</li>
              <li class="stack-over">CSS</li>
              <li class="stack-over">Javascript</li>
            </ul>
  `;

  // Show the popup
  popupContainer.style.display = 'block';
}

// Add event listeners for each popup button
const popupButton1 = document.getElementById('popupButton1');
popupButton1.addEventListener('click', () => {
  openPopup(
    'Tonic',
    ' ',
    './images/Snapshoot Portfolio.png',
    './images/SnapshootPortfolio.svg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'Button 1 for Popup 1',
    'Button 2 for Popup 1',
  );
});

const popupButton2 = document.getElementById('popupButton2');
popupButton2.addEventListener('click', () => {
  openPopup(
    'Multi-Post Stories',
    ' ',
    './images/Snapshoot 2.png',
    './images/SnapshootPortfolio.svg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'Button 1 for Popup 2',
    'Button 2 for Popup 2',
  );
});

const popupButton3 = document.getElementById('popupButton3');
popupButton3.addEventListener('click', () => {
  openPopup(
    'TONIC',
    ' ',
    './images/Snapshoot 3.png',
    './images/SnapshootPortfolio.svg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'Button 1 for Popup 3',
    'Button 2 for Popup 3',
  );
});

const popupButton4 = document.getElementById('popupButton4');
popupButton4.addEventListener('click', () => {
  openPopup(
    'Multi-Post Stories',
    ' ',
    './images/Snapshoot Portfolio 4.png',
    './images/SnapshootPortfolio.svg',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    'Button 1 for Popup 4',
    'Button 2 for Popup 4',
  );
});

closeButton.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});

document.getElementById("myForm").addEventListener("submit", function(event) {
 // Prevent form submission

  var emailInput = document.getElementById("emailInput");
  //var errorMessage = document.getElementById("your email must be write in lower case");

  if (emailInput.value === emailInput.value.toLowerCase()) {
    // Validation is OK, send the form
    console.log("Form sent successfully!");
    this.submit(); // Submit the form
  } else {
    // Validation failed, display error message
    event.preventDefault(); 
  }
});
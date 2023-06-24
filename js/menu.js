function MobileMenu() {
    const menuHamburguer = document.querySelector('.burguer');
    const navMobile = document.querySelector('.menu-nav');
    const navMobileLinks = document.querySelectorAll('.links');
    const hamburgerImage = document.querySelector('#burguer');

    function toggleMenu() {
        if (navMobile.classList.contains('active')) {
          hamburgerImage.src = './images/cancel.svg';
        } else {
          hamburgerImage.src = './images/burger.png';
        }
      }
}
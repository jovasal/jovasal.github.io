function MobileMenu() {
    const menuHamburguer = document.querySelector('.burguer');
    const navigationMobile = document.querySelector('.menu-nav');
    const navMobileLinks = document.querySelectorAll('.links');
    const hamburgerImage = document.querySelector('#burguer');

    function toggleMenu() {
        if (navMobile.classList.contains('active')) {
          hamburgerImage.src = './images/cancel.svg';
        } else {
          hamburgerImage.src = './images/Icon - Menu.svg';
        }
      }
}
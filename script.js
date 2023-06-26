/*const menu = document.getElementById('menu-nav');
const burgerButton = menu.querySelector('.burger');
const links = menu.querySelector('.links');


function toggleMenu() {
  const menu = document.getElementById('menu-nav');
  const links = menu.querySelector('.links');
  links.classList.toggle('show');
}*/



//get necesary element

var menuIcon = document.getElementById("menuIcon");
var closeIcon = document.getElementById("closeIcon");
var links = document.getElementById("links");


//Add even listener to the menu icon

menuIcon.addEventListener("click", function() {
  menuIcon.style.display = "none";
  closeIcon.style.display = "inline-block";
  links.classList.add("open");
});

  // Add event listener to the close icon
  closeIcon.addEventListener("click", function() {
    menuIcon.style.display = "inline-block";
    closeIcon.style.display = "none";
    links.classList.remove("open");
  });

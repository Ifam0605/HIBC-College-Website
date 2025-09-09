var navLinks= document.getElementById("navLinks");

function showmenu(){
    navLinks.style.right="0";
}   
function hidemenu(){
    navLinks.style.right="-200px";
}
const typed = new Typed('.multiple-text', {
    strings: ['International', 'Business', 'College',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
// document.addEventListener('contextmenu', event => event.preventDefault());
var menu = document.getElementById("menu");
var navs = document.getElementById("navs");

menu.addEventListener("click", function(e) {
    navs.classList.toggle("display");
})
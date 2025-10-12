// open & close cart
var cart = document.querySelector(".cart");

function open_cart() {
  cart.classList.add("active");
}
function close_cart() {
  cart.classList.remove("active");
}

// open & close menu
var menu = document.querySelector("#menu");

function open_menu() {
  menu.classList.add("active");
}
function close_menu() {
  menu.classList.remove("active");
}

// back_to_top
let back_to_top = document.querySelector(".back_to_top");
back_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
  });
});

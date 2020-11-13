const navtoggle = document.querySelector(".nav__button");
const navitems = document.querySelectorAll(".nav-items");

navtoggle.addEventListener("click", function () {
  navitems.forEach(function (item) {
    item.classList.toggle("nav-display");
  });
});

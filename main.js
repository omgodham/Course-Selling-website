var navElmnt = document.querySelector("nav");
var menuBtnElmnt = document.querySelector(".mobile-menu-logo");
var mobileNavElmnt = document.querySelector(".mobile-nav");
var closeBtnElmnt = document.querySelector(".close-menu-logo");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 60) {
    navElmnt.classList.add("scrolled");
  } else {
    navElmnt.classList.remove("scrolled");
  }
});
menuBtnElmnt.addEventListener("click", () => {
  mobileNavElmnt.classList.add("active");
});
closeBtnElmnt.addEventListener("click", () => {
  mobileNavElmnt.classList.remove("active");
});

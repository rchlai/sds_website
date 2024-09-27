const menuBtn = document.querySelector("#menu-btn");
const navBar = document.querySelector(".header .flex .navbar");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navBar.classList.toggle("active");
};

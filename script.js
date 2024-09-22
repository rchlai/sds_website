const body = document.body;
const toggleBtn = document.getElementById('toggle-btn');
let darkMode = localStorage.getItem('dark-mode');
const profile = document.querySelector('.header .flex .profile');
const search = document.querySelector('.header .flex .search-form');
const sideBar = document.querySelector('.side-bar');


const enableDarkMode = () => {
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled') {
   enableDarkMode();
}

toggleBtn.onclick = (event) => {
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled') {
      enableDarkMode();
   } else {
      disableDarkMode();
   }
}

document.querySelector('#user-btn').onclick = () => {
   profile.classList.toggle('active');
   search.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
   search.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () => {
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () => {
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200) {
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}
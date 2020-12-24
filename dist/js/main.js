// Select The DOM Items
const currentYear = document.getElementById("year");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const marker = document.querySelector("#marker");
const navLinks = document.querySelectorAll(".nav-link");

// Get current Year
currentYear.innerHTML = new Date().getFullYear();

// Set Intial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

// Magic Indicator for Nav links
function indicator(e) {
  marker.style.top = e.offsetTop+"px";
  marker.style.width = e.offsetWidth+"px";
}

navLinks.forEach(link => {
  link.addEventListener("mousemove", (e) => {
    indicator(e.target);
  })
})

// Light Mode Toggle
const checkbox = document.getElementById("checkbox");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  // Website will stay on current theme on reload
  if (currentTheme === "light") {
    checkbox.checked = true;
    localStorage.setItem("theme", "light");
  } else {
    checkbox.checked = false;
    localStorage.setItem("theme", "dark");
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

checkbox.addEventListener("change", switchTheme);

// Accordion
let acc = document.getElementsByClassName("acc");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.previousElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Preloader
const loader = document.querySelector("#preloader");
const main = document.querySelector("#home");
const header = document.querySelector("header");

function init() {
  setTimeout(() => {
    loader.style.opacity = 0;
    loader.style.display = "none";

    main.style.display = "block";
    header.style.display = "block";
    setTimeout(() => (main.style.opacity = 1, header.style.opacity = 1), 60);
  }, 5000);

}

init();
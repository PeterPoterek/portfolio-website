import Swiper from "swiper";
import "swiper/css";

import AOS from "aos";
import "aos/dist/aos.css";

import PanelSnap from "panelsnap";

import "animate.css";

//#region Swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  speed: 500,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
//#endregion

//#region Mobile Menu
(() => {
  const mobileMenu = document.querySelector("#mobile-menu");
  const openMenuBtn = document.querySelector("#mobile-open");
  const closeMenuBtn = document.querySelector("#mobile-close");
  const mobileMenuLinks = document.querySelectorAll("#mobile-menu a");

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    if (isMenuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  const closeMoblieMenu = () => {
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
    document.body.style.overflow = "auto";
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", closeMoblieMenu);
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);

    document.body.style.overflow = "auto";
  });
})();
//#endregion

//#region AOS
AOS.init();
//#endregion

//#region panelsnap
const mainContainer = document.querySelector("#mainContainer");
const options = {
  container: mainContainer,
  panelSelector: "section",
  directionThreshold: 50,
  delay: 0,
  duration: 3000,
  easing: function (t) {
    return t;
  },
};
document.addEventListener("DOMContentLoaded", function () {
  new PanelSnap(options);
});
//#endregion

//#region background particles
document.addEventListener("DOMContentLoaded", function () {
  new FinisherHeader({
    count: 100,
    size: {
      min: 2,
      max: 15,
      pulse: 0,
    },
    speed: {
      x: {
        min: 0,
        max: 0.4,
      },
      y: {
        min: 0,
        max: 0.5,
      },
    },
    colors: {
      background: "#18181b",
      particles: ["#4f46e5", "#818cf8", "#3730a3"],
    },
    blending: "overlay",
    opacity: {
      center: 1,
      edge: 0,
    },
    skew: -2,
    shapes: ["c"],
  });
});
//#endregion

//#region scollToTop
const scrollToTopBtn = document.querySelector("#scrollToTopBtn");
const about = document.querySelector("#about");
window.addEventListener("scroll", () => {
  if (window.scrollY >= about.offsetTop) {
    scrollToTopBtn.classList.remove("hidden");
    scrollToTopBtn.classList.add("opacity-100");
  } else {
    scrollToTopBtn.classList.remove("opacity-100");
    scrollToTopBtn.classList.add("hidden");
  }
});
//#endregion

console.log(`
 /\\_/\\
( o.o )  meow
 > ^ <
`);

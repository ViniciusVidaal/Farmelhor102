const preloader = document.getElementById("preloader");

const hidePreloader = () => {
  if (!preloader) return;
  preloader.classList.add("open");
  setTimeout(() => {
    preloader.classList.add("hide");
    setTimeout(() => preloader.remove(), 500);
  }, 650);
};

window.addEventListener("load", () => {
  const delay = 200;
  setTimeout(hidePreloader, delay);
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const menuClose = document.querySelector(".menu-close");
const mobileLinks = document.querySelectorAll(".mobile-nav a");

const setMenuState = (isOpen) => {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
};

menuToggle?.addEventListener("click", () => setMenuState(true));
menuClose?.addEventListener("click", () => setMenuState(false));
mobileLinks.forEach((link) => link.addEventListener("click", () => setMenuState(false)));

AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 80,
});

const bannerSwiper = new Swiper(".banner-swiper", {
  loop: true,
  speed: 800,
  allowTouchMove: false,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".banner-swiper .swiper-pagination",
    clickable: true,
  },
});

const swiper = new Swiper(".testimonials-swiper", {
  loop: true,
  speed: 4500,
  slidesPerView: 1.1,
  spaceBetween: 20,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});

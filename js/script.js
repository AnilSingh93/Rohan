// Navigation, hero carousel, FAQ, and demo enquiry form
const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
menuButton?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});
document.querySelectorAll('.nav-dropdown > a').forEach(link => {
  link.addEventListener('click', event => {
    if (window.matchMedia('(max-width: 800px)').matches) {
      event.preventDefault();
      link.parentElement.classList.toggle('open');
    }
  });
});
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (!link.parentElement.classList.contains('nav-dropdown')) {
      mainNav.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
      if (menuButton) menuButton.textContent = '☰';
    }
  });
});

const slides = [
  'https://rishikeshyogkendra.com/assets/img/home/hero-slider/slider-two.webp',
  'https://rishikeshyogkendra.com/assets/img/home/hero-slider/slider-four.webp',
  'https://rishikeshyogkendra.com/assets/img/home/hero-slider/slider-one.webp'
];
let currentSlide = 0;
const heroBg = document.getElementById('heroBg');
const count = document.querySelector('.hero-count');
function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;
  heroBg.style.backgroundImage = `url("${slides[currentSlide]}")`;
  if (count) count.innerHTML = `0${currentSlide + 1} <i></i> 0${slides.length}`;
}
document.querySelector('.hero-next')?.addEventListener('click', () => showSlide(currentSlide + 1));
document.querySelector('.hero-prev')?.addEventListener('click', () => showSlide(currentSlide - 1));

// Demo form: prepares an email to the school. Replace with your backend endpoint for production.
document.getElementById('enquiryForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent('Website enquiry — ' + data.get('course'));
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone')}\nCourse: ${data.get('course')}\n\nMessage:\n${data.get('message')}`
  );
  window.location.href = `mailto:info@rishikeshyogkendra.com?subject=${subject}&body=${body}`;
});

const carouselSlide = document.querySelector('.carouselSlide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter 

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX'
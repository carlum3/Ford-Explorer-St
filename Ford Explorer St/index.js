const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slide = document.querySelector('.slide');
let slideNumber = 0;

//slide next button
nextBtn.click = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
  slideNumber++;
  if (slideNumber > (numberofSlides - 1)) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add('active');
}

//slider prev button
prevBtn.onclick = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberofSlides - 1;
  }

  slides[slideNumber].classList.add('active')
}
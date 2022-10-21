function initCarousel() {
  // ваш код...
  let carousel = document.querySelector('.carousel__inner');

  let nextButton = document.querySelector(".carousel__arrow_right");
  let prevButton = document.querySelector(".carousel__arrow_left");

  let widthSlide = carousel.offsetWidth;

  const slidesNum = carousel.children.length;

  let counter = 1;

  if (counter === 1) {
    prevButton.style.display = "none";
  }

  prevButton.addEventListener('click', () => {
    nextButton.style.display = "";

    let prevStep = widthSlide * (counter - 2);
    carousel.style.transform = `translateX(-${prevStep}px)`;
    counter--;

    if (prevStep <= 1) {
      prevButton.style.display = "none";
    }
  });

  nextButton.addEventListener('click', () => {
    prevButton.style.display = "";

    let nextStep = widthSlide * counter;
    carousel.style.transform = `translateX(-${nextStep}px)`;
    counter++;

    if(counter === slidesNum) nextButton.style.display = "none";
  });
}

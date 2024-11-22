const nextBtn = document.querySelector('.nextPrevArrows__next');
const prevBtn = document.querySelector('.nextPrevArrows__prev');

const slider = document.querySelector('.slider');
const sliderList = document.querySelector('.slider__list');

const thumbnail = document.querySelector('.thumbnail');
const thumbnailItems = document.querySelectorAll('.thumbnail__item');


thumbnail.appendChild(thumbnailItems[0]);


// function for next button
nextBtn.onclick = function() {
  moveSlider('nextPrevArrows__next');
}


// function for prev button
prevBtn.onclick = function() {
  moveSlider('nextPrevArrows__prev');
}


function moveSlider(direction) {
  const sliderItems = sliderList.querySelectorAll('.slider__item');
  const thumbnailItems = document.querySelectorAll('.thumbnail__item');

  if (direction === 'nextPrevArrows__next') {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add('nextPrevArrows__next');
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add('nextPrevArrows__prev');
  }

  slider.addEventListener('animationend', function() {
    if (direction === 'nextPrevArrows__next') {
      slider.classList.remove('nextPrevArrows__next');
    } else {
      slider.classList.remove('nextPrevArrows__prev');
    }
  }, {once: true})  // remove the event Listener after it's triggered
}
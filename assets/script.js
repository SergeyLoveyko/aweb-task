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





// slider cards hidden

function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  }
}

const sliderCards = document.querySelectorAll('.species__item');

function checkSlide(e) {
  // console.log( window.scrollY );
  sliderCards.forEach(sliderCard => {
    // half way through the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderCard.style.height / 2;
    // bottom of the image
    const cardBottom = sliderCard.offsetTop + sliderCard.style.height;
    const isHalfShown = slideInAt > sliderCard.offsetTop;
    const isNotScrolledPast = window.scrollY < cardBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderCard.classList.add('active');
    } else {
      sliderCard.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
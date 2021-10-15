const swiper = new Swiper(".slider", {
  preloadImages: false,
  lazy: true,
});

swiper.on('slideChange', function () {
  changeSliderInfo()
});

let sliderInfoItem = document.querySelectorAll('.slider-info__item');

(function getSliderItems(){
  let sliderListItem = document.querySelectorAll('.slider-list__link');
  let sliderBtnRight = document.querySelector('.slider-info__btn--right');
  let sliderBtnLeft = document.querySelector('.slider-info__btn--left');
  
  setSliderLengthText(sliderListItem.length);
  
  sliderBtnRight.addEventListener('click', function () {
    incrementSlider(sliderListItem.length)
  });
  
  sliderBtnLeft.addEventListener('click', function () {
    decrementSlider()
  });
  
  sliderListItem.forEach((item, key) => {
    item.addEventListener('click', function (event) {
      event.preventDefault();
      setActiveSlider(key)
    }, false)
  });
})();

function changeSliderInfo() {
  sliderInfoItem.forEach((item, key) => {
    let attrId = swiper.activeIndex;
    if(!item.classList.contains('slider-info__item--hidden')) {
      item.classList.add('slider-info__item--hidden');
    }
    
    if(attrId === key) {
      item.classList.remove('slider-info__item--hidden');
    }
  })
}

function incrementSlider(length) {
  if(length === swiper.activeIndex) {
    return;
  }
  swiper.slideTo(swiper.activeIndex + 1);
}

function decrementSlider() {
  if(swiper.activeIndex === 0) {
    return;
  }
  swiper.slideTo(swiper.activeIndex - 1);
}

function setSliderLengthText(length) {
  let sliderCount = document.getElementById('slider-length');
  sliderCount.innerHTML = length  < 10 ? `0${length}` : length;
}


function setActiveSlider(key) {
  swiper.slideTo(key);
}

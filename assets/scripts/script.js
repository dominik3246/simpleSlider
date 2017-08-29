var slider__image = document.querySelectorAll("#slider__list > li > img"),
  slider__element = document.querySelectorAll("#slider__list > li"),
  window__width = window.innerWidth,
  window__height = window.innerHeight;


var slider = {
  changeWidth: ['resize', 'load'].map((e) => {
    window.addEventListener(e, (() => {
      for (let i = 0; i < slider__image.length; i++) {
        slider__image[i].style.width = window.innerWidth + 'px';
      }
    }))
  }),
}

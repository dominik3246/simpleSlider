var slider__image = document.querySelectorAll("#slider__list > li > img"),
  slider__element = document.querySelectorAll("#slider__list > li"),
  window__width = window.innerWidth,
  window__height = window.innerHeight,
  listUl = document.getElementById('slider__list'),
  bulletBox = document.getElementById('slider__bullets');

var slider = {
  changeWidth: ['resize', 'load'].map((e) => {
    window.addEventListener(e, (() => {
      for (let i = 0; i < slider__image.length; i++) {
        slider__image[i].style.width = window.innerWidth + 'px';
      }
    }))
  }),
  bullets: window.addEventListener('load', (() => {
    var bulletsNumber = slider__image.length;
    var bulletSpan = document.createElement('span');
    bulletSpan.className += 'bullet';
    
    for (let i = 0; i < bulletsNumber; i++) {
      bulletBox.appendChild(bulletSpan.cloneNode(true));
    }
  }))
}

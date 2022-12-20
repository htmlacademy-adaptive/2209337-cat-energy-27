let navMain = document.querySelector('.main__nav');
let navToggle = document.querySelector('.main__nav__button-toggle');

navMain.classList.remove('main__nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main__nav--closed')) {
    navMain.classList.remove('main__nav--closed');
    navMain.classList.add('main__nav--opened');
  } else {
    navMain.classList.add('main__nav--closed');
    navMain.classList.remove('main__nav--opened');
  }
});

document.addEventListener("DOMContentLoaded", function () {

  document.getElementsByClassName('nav-btn')[0].addEventListener('click', function () {
    if (this.classList.contains('nav-btn_opened')){
      this.classList.remove('nav-btn_opened');
      document.getElementsByClassName('navigation')[0].classList.remove('navigation_opened');
    }else {
      this.classList.add('nav-btn_opened');
      document.getElementsByClassName('navigation')[0].classList.add('navigation_opened');
    }
  })

});

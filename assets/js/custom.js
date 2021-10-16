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

  document.querySelectorAll('.js-scroll-to').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var to = this.getAttribute('href');
      var element = document.querySelector(to);
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 104;

      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth"
      });
    })
  })

});

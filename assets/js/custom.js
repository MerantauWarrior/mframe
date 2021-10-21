$(document).ready(function () {
  console.log('ready');

  // kontakt
  $('.kontakt-form__field').click(function () {
    $(this).addClass('opened');
  })
  $('.kontakt-form__cross').click(function () {
    $(this).closest('.kontakt-form__field').removeClass('opened');
  })

  // back to top
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('.arrow-up').fadeIn();
    } else {
      $('.arrow-up').fadeOut();
    }
  });
  $('.arrow-up').click(function(){
    $('html, body').animate({scrollTop : 0},250);
  });

  // projects
  $('.js-scroll-to').click(function (e) {
    e.preventDefault();
    var to = $(this).attr('href');
    $('html,body').animate({scrollTop: $(to).offset().top - 103},250);
  })

  // kompetenzen
  $('.kompetenzen-categorie').click(function () {
    if ($(this).hasClass('kompetenzen-categorie_opened')){
      $(this).removeClass('kompetenzen-categorie_opened');
    }else {
      $(this).addClass('kompetenzen-categorie_opened');
    }
  })

  // modal
  $('.modal-close').click(function () {
    $('body').removeClass('ovh');
    $(this).closest('.modal').fadeOut(250);
  })
  $('.modal-open').click(function (e) {
    e.preventDefault();
    $('body').addClass('ovh');
    $('.modal').fadeIn(250);
  });

  // navigation
  $('.nav-btn').click(function () {
    $('.navigation').addClass('navigation_opened');
  })
  $('.nav-close').click(function () {
    $('.navigation').removeClass('navigation_opened');
  })

})

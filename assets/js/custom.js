var isMob = false;
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  console.log('you use mobile');
  isMob = true;
}
$(document).ready(function () {
  console.log('ready');

  // kontakt
  $('.kontakt-form__label').click(function () {
    $(this).parent().addClass('opened');
  })
  $('.kontakt-form__cross').click(function () {
    $(this).closest('.kontakt-form__field').removeClass('opened');
    $(this).siblings('input').val('');
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
    var scrDiff = isMob ? 55 : 103;
    var to = $(this).attr('href');
    $('html,body').animate({scrollTop: $(to).offset().top - scrDiff},250);
  })

  // kompetenzen
  $('.kompetenzen-categorie').click(function () {
    if ($(this).hasClass('kompetenzen-categorie_opened')){
      $(this).removeClass('kompetenzen-categorie_opened');
    }else {
      $(this).addClass('kompetenzen-categorie_opened');
    }
  })

  // navigation
  $('.nav-btn').click(function () {
    $('.navigation').addClass('navigation_opened');
  })
  $('.nav-close').click(function () {
    $('.navigation').removeClass('navigation_opened');
  })

  // video
  $('.js-play-video').click(function () {
    $(this).closest('.modal__content').find('.video-item').trigger('play');
    $(this).closest('.modal__content').find('.video-item').removeAttr('poster');
    $(this).closest('.modal__content').find('.video-item').attr('controls', true);
    $(this).hide();
  })

  // close
  var referer = false;
  if (document.referrer !== ''){
    referer = true;
  }
  $('.innerpage-close').click(function (e) {
    e.preventDefault();
    link = $(this).attr('href');
    window.location = referer ? document.referrer : window.location.protocol +'//'+window.location.host + '/mframe/'+ link;
  })

})

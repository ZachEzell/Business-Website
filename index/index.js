$(() => {
  new WOW().init();
});
/* WORK */
$(() => {
  $('#work').magnificPopup({
    delegate: 'a', // child item selector. By clicking on it
    // it will trigger the popup
    type: 'image', //what we will display
    gallery: {
      enabled: true
    }
  });
});
$(() => {
  $('#team-members').owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});
$(() => {
  $('#customers-testimonials').owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});

$(() => {
  $('.counter').counterUp({
    delay: 10,
    time: 2500
  });
});

$(() => {
  $('#clients-list').owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true
  });
});
$(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() < 60) {
      $('nav').removeClass('vesco-top-nav');
      $('nav').removeClass('navbar-inverse');
      $('#back-to-top').fadeOut();
    } else {
      $('nav').addClass('vesco-top-nav');
      $('nav').addClass('navbar-inverse');
      $('#back-to-top').fadeIn();
    }
  });
});

//Smooth Scrolling
// "this" means the anchor tag
$(function() {
  $('a.smooth-scroll').click(function(event) {
    event.preventDefault();

    var section = $(this).attr('href');
    $('html,body').animate({
      scrollTop: $(section).offset().top
    });
  });
});

$(document).ready(function() {


	// Smooth scrolling

	$('nav ul li a').on('click', function() {
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });


  // Initialize slick plugin

  $('.slick-slider').slick({
      autoplay: true, 
      autoplaySpeed: 3000,
      speed: 500,
      dots: true,
      fade: true,
      cssEase: "linear",
      arrows: true,
      pauseOnHover: false
  });
  $(".slick-prev").text("Prev");
  $(".slick-dots li button").text("");


  // Initialize wow plugin (the animations start when element is in view)

  new WOW().init();



  //The right side fixed content (team-member biography)

  $(".clickable-cd").click(function(e) {
    e.preventDefault();
    current_member = $(this).data("type");
    $("#team").addClass("slide-out");
    $(".member-bio." + current_member).addClass("slide-in");
    $('.member-bio-close').addClass("is-visible");
  });

    //when you click the team section again or close button, everything returns to previous state

  $(".team-section-overlay, .member-bio-close").click(function(e) {
    e.preventDefault();
    $("#team").removeClass("slide-out");
    $(".member-bio").removeClass("slide-in");
    $('.member-bio-close').removeClass("is-visible");
  });


  //Initialize filterizr with default options

  $('.filtr-container').filterizr();


  //Filter controls

  $('.filtr-controls li').click(function() {
      $('.filtr-controls li').removeClass('active');
      $(this).addClass('active');
  });
  
});
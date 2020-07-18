$(function(){

 
    // "use strict";


      // ALERT JS

      $(function () {
        alert("Click 'OK' TO Done")
    });

    // ===== Sticky menu
    
    $(window).on('scroll', function (event) {
      var scroll = $(window).scrollTop();
      if (scroll < 150) {
        $(".header_area").removeClass("sticky");
      } else {
        $(".header_area").addClass("sticky");
      }
    });



    //===== Mobile Menu toggler icon
    $(".navbar-toggler").on('click', function () {
      $(this).toggleClass("active");
    });


  //   BANNER SLIDER
   
   $('.slider_active').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});
   

// COUNT-DOWN

$('.count_down').counterUp({
    time: 10000
});

   
    // UPDATES SLIDER 
    $(".updates_wrap").slick({
        infinite: true,
        autoplay:true,
        autoplaySpeed:3000,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: true,
        nextArrow: '.right_btn',
        prevArrow: '.left_btn',
        responsive: [{
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    
      });


/* TOP TO BOTTOM BUTTON HERE */
$(window).on('scroll', function(event) {
  if($(this).scrollTop() > 800){
      $('.back-to-top').fadeIn(200)
  } else{
      $('.back-to-top').fadeOut(200)
  }
});


//==== Animate the scroll to top
$('.back-to-top').on('click', function(event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: 0,
  }, 1500);
});

/* TOP TO BOTTOM BUTTON HERE */




 //    COUNTDOWN TIMER JS

 function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
      total,
      days,
      hours,
      minutes,
      seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
          clearInterval(timeinterval);
      }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 25 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);




  
 
    
    
});
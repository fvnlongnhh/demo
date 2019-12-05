$(document).ready(function() {
    "use strict";

    $('.box02_list ul').slick({
        dots: false,
        arrows: false,
        slidesToShow: 2,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse: false,
        margin: 0,
        autoplay: false,
        autoplaySpeed: 5000,
        infinite: false,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });

    $('.box03_list').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        margin: 0,
        pauseOnHover: false,
        pauseOnFocuse: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 4,
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
              }
            },{
              breakpoint: 481,
              settings: {
                slidesToShow: 2,
              }
            }
        ]

    });


    $('.box04_txt ul').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.box04_img ul',
        prevArrow: '<button type="button" class="slick-prev btn"><a></a></button>',
        nextArrow: '<button type="button" class="slick-next btn"><a></a></button>'
    });

    $('.box04_img ul').slick({
        slidesToShow: 11,
        slidesToScroll: 1,
        asNavFor: '.box04_txt ul',
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 9,
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 7,
              }
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 361,
              settings: {
                slidesToShow: 3,
              }
            }
        ]
    });

    AOS.init({
        duration: 1000,
        once: true,
        disable : 'mobile',
    });
});

$(window).bind('load',function(){
  "use strict";
  $(function(){
    $('a[href^="#"]').click(function(){
      if ($($(this).attr('href') ).length ) {
        var p = $( $(this).attr('href') ).offset();
        if($(window).width() > 640){
          $('html,body').animate({ scrollTop: p.top - 100}, 400);
        }
        else {
          $('html,body').animate({ scrollTop: p.top - 100}, 400);
        }
      }
      return false;
    });
  });
});

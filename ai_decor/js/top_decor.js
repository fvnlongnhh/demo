$(document).ready(function () {
    "use strict";
    $('.slide ul').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('.box03_list ul').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode:true,
        centerPadding: '0',
        responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          }
        }
        ]
    });


    $('.box05_list ul').slick({
        dots: false,
        arrows: true,
        slidesToShow: 2,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
          }
        }
        ]
    });
});



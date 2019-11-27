$(document).ready(function () {
	"use strict";
    $('.box03_list ul').slick({
    	dots: false,
    	arrows: true,
		slidesToShow: 1,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.box04_img ul').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 421,
              settings: {
                slidesToShow: 2
              }
            }
        ]
    });

    $('.box05_list ul').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 421,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    });

    $('.box08_ct ul').slick({
        dots: true,
        arrows: false,
        slidesToShow: 7,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: 0,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 5
              }
            },
            {
              breakpoint: 421,
              settings: {
                slidesToShow: 3
              }
            }
        ]
    });

    if($(window).width() < 769){
            // MENU MOBILE CLICK
        $(".btn_side").click(function () {
            $(this).toggleClass('open');
            $("#gnavi").toggleClass("active");
            return false;
        });
        
        $("#gnavi ul li a").click(function () {
            $('.btn_side').removeClass('open');
            $("#gnavi").removeClass("active");
            return false;
        });
    }

});

// anchor animation
$(window).bind('load',function(){
    "use strict";
    $(function(){
        $('a[href^="#"]').click(function(){
            if ($($(this).attr('href') ).length ) {
                var p = $( $(this).attr('href') ).offset();
                if($(window).width() > 769){
                    $('html,body').animate({ scrollTop: p.top - 80}, 400);
                }
                else {
                    $('html,body').animate({ scrollTop: p.top - 80}, 400);
                }
            }
            return false;
        });
    });
});







 
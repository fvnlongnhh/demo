$(document).ready(function () {
    "use strict";
    
    $(".function_aside span").click(function() {
        $('.modal_price').addClass('open');
    });

    $(".modal_close,.ic_close").click(function() {
        $('.modal_price').removeClass('open');
    });

    $(window).scroll(function() {
        if($(window).width() > 769){
            var h_head = $('.head_ct').outerHeight();
            if ($(this).scrollTop() > 200) {
                $('.head_ct').addClass('fixed')
                $('.head_top').css({'margin-bottom': 120});

            } else {
                $('.head_ct').removeClass('fixed')
                $('.head_top').css({'margin-bottom': 0});
            }

            if ($(this).scrollTop() > 300) {
                $('.head_ct').addClass('active')
            } else {
                $('.head_ct').removeClass('active')
            }
        }
    });

    $('.btn_top').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });

    $(".btn_side").click(function () {
        $(this).toggleClass('open');
        $("nav").toggleClass("active");
        $(".sub a").removeClass("disable");
        $('ul.nav_sub').stop().slideUp();
        return false;
    });

    $("li.sub span").click(function(){
        $(this).parent().find('.nav_sub').slideToggle(400);
    });

    $("li.sub_lv2 span").click(function(){
        $(this).parent().find('.nav_sub_lv2').slideToggle(400);
    });

    $('.foot_partner ul').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
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
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 3,
          }
        }
        ]
    });


    if( $('.prd_detail_img').length){
         $('.slide_big').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          fade: true,
          asNavFor: '.slide_thumb'
        });
        $('.slide_thumb').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slide_big',
          dots: false,
          focusOnSelect: true
        });
    }
});



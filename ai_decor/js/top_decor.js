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
    });

    $('.box04_txt dt').click(function(){
        if ($(this).hasClass('active')){
            $(".box04_txt dd, .box04_txt dt").removeClass('active');
        } else {
            $(".box04_txt dd, .box04_txt dt").removeClass('active');
            $(this).addClass('active');
            $(this).next('dd').addClass('active');
        }
    });

    $('.box04_txt .num1').click(function(){
        $('.box04_img li').removeClass('active');
        $('.box04_img .img_1').addClass('active');
    });

    $('.box04_txt .num2').click(function(){
        console.log('aaaaa');
        $('.box04_img li').removeClass('active');
        $('.box04_img .img_2').addClass('active');
    });

    $('.box04_txt .num3').click(function(){
        $('.box04_img li').removeClass('active');
        $('.box04_img .img_3').addClass('active');
    });
});



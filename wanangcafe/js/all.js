$(document).ready(function() {
    "use strict";
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#btn_top').fadeIn(300);
            $('header, nav').addClass('active');
        } else {
            $('#btn_top').fadeOut(300);
            $('header, nav').removeClass('active');
        }
    });

    $('#btn_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });

    if($(window).width() < 769){
        // MENU MOBILE CLICK
        $(".btn_side").click(function () {
            $(this).toggleClass('open');
            $("nav ul").toggleClass("active");
            return false;
        });

        $('nav ul li.sub ul').slideUp();
        $('nav ul li.sub').click(function() {
            $(this).toggleClass('active');
            $('li.sub ul').stop().slideToggle(300);
        });
    }

    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-back',
        disable: 'mobile',
        offset : 200,
    });
});

if( $('.coffee_img').length){
    $('.coffee_img ul').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><a></a></button>',
        nextArrow: '<button type="button" class="slick-next"><a></a></button>'
    });
}


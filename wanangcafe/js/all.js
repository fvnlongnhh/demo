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
    }

    AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-out-back',
        disable: 'mobile',
        offset : 200,
    });
});

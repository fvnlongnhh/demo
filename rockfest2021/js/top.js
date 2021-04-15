$(document).ready(function() {
    "use strict";
    $('.box_faq_ct dt').click(function() {
        $('.box_faq_ct dd').stop().slideUp(300);
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next('dd').stop().slideUp(300);
        } else {
            $('.box_faq_ct dt').removeClass('open');
            $(this).addClass('open');
            $(this).next('dd').stop().slideDown(300);
        }
    });

    $('.minus, .plus').click(function(){
        $('.box_ticket_ct .btn').addClass('active');
    });

    $('.amount input').blur(function(){
        if( $(this).val() < 1 ) {
            $('.box_ticket_ct .btn').removeClass('active');
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
    });
});




$(window).load(function() {
    AOS.init({
        easing: 'ease',
        once: true,
        duration: 1000,
        disable: 'mobile',
    });
});

// anchor in page
$(window).bind('load', function() {
    "use strict";
    $(function() {
        $('a[href^="#"]').click(function() {
            if ($($(this).attr('href')).length) {
                var p = $($(this).attr('href')).offset();
                if ($(window).width() > 640) {
                    $('html,body').animate({ scrollTop: p.top - 100 }, 400);
                } else {
                    $('html,body').animate({ scrollTop: p.top - 60 }, 400);
                }
            }
            return false;
        });
    });
});

$(document).ready(function() {
    "use strict";

    $(".function_aside span").click(function() {
        $('.modal_price').addClass('open');
    });

    $(".modal_close,.ic_close").click(function() {
        $('.modal_price').removeClass('open');
    });

    $(window).scroll(function() {
        if ($(window).width() > 769) {
            var h_head = $('.head_ct').outerHeight();

            if ($(this).scrollTop() > 200) {
                $('.head_ct').addClass('fixed')
                $('.head_top').css({ 'margin-bottom': 120 });

            } else {
                $('.head_ct').removeClass('fixed')
                $('.head_top').css({ 'margin-bottom': 0 });
            }

            if ($(this).scrollTop() > 300) {
                $('.head_ct').addClass('active')
            } else {
                $('.head_ct').removeClass('active')
            }
        }else{
            if ($(this).scrollTop() > 0) {
                $('.function_aside').addClass('active');
            }else{
                $('.function_aside').removeClass('active');
            }
        }
    });

    $('.btn_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });

    $(".btn_side").click(function() {
        $(this).toggleClass('open');
        $("nav").toggleClass("active");
        $(".sub a").removeClass("disable");
        $('ul.nav_sub').stop().slideUp();
        return false;
    });

    if ($(window).width() < 769) {
        $('.nav_2 ul').hide();
        $(".nav_2 p").click(function() {
            $(this).toggleClass('active');
            $(this).next('ul').slideToggle(400);
        });

        $(".nav_2 li.sub > span").click(function() {
            $(this).toggleClass('active');
            $(this).parent().find('.nav_sub').slideToggle(400);
        });

        $(".nav_2 li.sub_lv2 span").click(function() {
            $(this).toggleClass('active');
            $(this).parent().find('.nav_sub_lv2').slideToggle(400);
        });

    }

    if ($('.box04').length) {
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
            $('.box04_img li').removeClass('active');
            $('.box04_img .img_2').addClass('active');
        });

        $('.box04_txt .num3').click(function(){
            $('.box04_img li').removeClass('active');
            $('.box04_img .img_3').addClass('active');
        });

        $('.box04_txt .num4').click(function(){
            $('.box04_img li').removeClass('active');
            $('.box04_img .img_4').addClass('active');
        });

        $('.box04_txt .num5').click(function(){
            $('.box04_img li').removeClass('active');
            $('.box04_img .img_5').addClass('active');
        });

        $('.box04_txt .num6').click(function(){
            $('.box04_img li').removeClass('active');
            $('.box04_img .img_6').addClass('active');
        });

        $('.box04_txt .num7').click(function(){
            $('.box04_img li').removeClass('active');
            $('.box04_img .img_7').addClass('active');
        });

        $('.box04_txt .num8').click(function(){
            console.log('aaaaa');
            $('.box04_img li').removeClass('active');
            $('.box04_img .img_8').addClass('active');
        });

        $('.box04_txt .num9').click(function(){
            $('.box04_img li').removeClass('active');
            $('.box04_img .img_9').addClass('active');
        });
    }

    $("nav li.sub span").click(function() {
        $(this).parent().find('.nav_sub').slideToggle(400);
    });

    $("nav li.sub_lv2 span").click(function() {
        $(this).parent().find('.nav_sub_lv2').slideToggle(400);
    });


    $('.foot_partner ul').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse: false,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
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


    if ($('.prd_detail_img').length) {
        $('.slide_big').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slide_thumb'
        });
        $('.slide_thumb').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slide_big',
            dots: false,
            focusOnSelect: true
        });
    }

     $('.search_btn').click(function(){
        $('.search_form, body').addClass('active');
    });

    $('.close_search').click(function(){
        $('.search_form, body').removeClass('active');
    });
});
$(document).ready(function () {
    "use strict";
    $('.slide ul, .vnxk_box01_r ul').slick({
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
        autoplaySpeed: 4000
    });
    
    $(".function_aside span").click(function() {
        $('.modal_price').addClass('open');
    });

    $(".modal_close,.ic_close").click(function() {
        $('.modal_price').removeClass('open');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.btn_top').fadeIn(300);
        } else {
            $('.btn_top').fadeOut(300);
        }

        if($(window).width() > 769){
            var h_head = $('.head_ct').outerHeight();
            if ($(this).scrollTop() > 200) {
                $('.head_ct').addClass('fixed')
                $('.head_top').css({'margin-bottom': h_head + 'px'});

            } else {
                $('.head_ct').removeClass('fixed')
                $('.head_top').css({'margin-bottom': 0});
            }

            if ($(this).scrollTop() > 300) {
                $('.head_ct').addClass('active')
            } else {
                $('.head_ct').removeClass('active')
            }
        }else{
            $(window).scroll(function() {
                if ($(this).scrollTop() > 0) {
                    $('.function_aside').addClass('active');
                } else {
                    $('.function_aside').removeClass('active');
                }
            }); 
        }
    });

    $('.btn_top').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });

     $('.close_search').click(function(){
        $('.search_form, body').removeClass('active');
    });


    $('.search_btn,.search_sp').click(function(){
        $('.search_form, body').toggleClass('active');
        $('.cart_form , .user_form, .gnavi').removeClass('active');
        $('.btn_side').removeClass('open');
        $(".sub a").removeClass("disable");
        $('ul.gnavi_sub').stop().slideUp();
    });

   
    $('.h_cart, .cart_sp').click(function(){
        $('.cart_form, body').toggleClass('active');
        $('.search_form , .user_form, .gnavi').removeClass('active');
        $('.btn_side').removeClass('open');
        $(".sub a").removeClass("disable");
        $('ul.gnavi_sub').stop().slideUp();
    });

    $('.user_sp').click(function(){
        $('.user_form, body').toggleClass('active');
        $('.cart_form , .search_form, .gnavi').removeClass('active');
        $('.btn_side').removeClass('open');
        $(".sub a").removeClass("disable");
        $('ul.gnavi_sub').stop().slideUp();
    });

    $('.h_user').click(function(){
        $('.user_form').toggleClass('active');
        $('.cart_form , .search_form, .gnavi').removeClass('active');
        $('.user_login').addClass('on');
        $('.user_active').removeClass('on');
    });

    $('.h_login').click(function(){
        $('.user_form').toggleClass('active');
        $('.cart_form , .search_form, .gnavi').removeClass('active');
        $('.user_active').addClass('on');
        $('.user_login').removeClass('on');
    });

    $('.close_cart').click(function(){
        $('.cart_form, body').removeClass('active');
    });

    $('.wrap-btn .btn-buy').click(function(){
        $('.cart_form, body').addClass('active');
    });


    $(".btn_side").click(function () {
        $(this).toggleClass('open');
        $(".gnavi").toggleClass("active");
        $(".sub a").removeClass("disable");
        $('ul.gnavi_sub').stop().slideUp();
        $('.cart_form , .search_form, .user_form').removeClass('active');
        return false;
    });

    $('.vnxk_tab li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.vnxk_tab li').removeClass('current');
        $('.vnxk_box02_ct').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })




    $("li.sub span").click(function(){
        $(this).parent().find('.gnavi_sub').slideToggle(400);
    });

});



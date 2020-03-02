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
        $(".gnavi").toggleClass("active");
        $(".sub a").removeClass("disable");
        $('ul.gnavi_sub').stop().slideUp();
        $('.cart_form , .search_form, .user_form').removeClass('active');
        return false;
    });

    $("li.sub span").click(function(){
        $(this).parent().find('.gnavi_sub').slideToggle(400);
    });

});



$(document).ready(function() {
    "use strict";
    if ($(window).width() > 768) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('#btn_top').fadeIn(300);
                $('#header').addClass('active');
                $('#gnavi').addClass('fix');
            } else {
                $('#btn_top').fadeOut(300);
                $('#header').removeClass('active');
                $('#gnavi').removeClass('fix');
            }
        });
    }

    $('#btn_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });

    if( $('#slider').length) {
        $('.slide_list ul').slick({
            dots: false,
            arrows: true,
            slidesToShow: 1,
            speed: 500,
            pauseOnHover: false,
            pauseOnFocuse: false,
            margin: 0,
            fade: true,
            autoplay: true,
            autoplaySpeed: 5000
        });
    }

    $('.open_boxpick').click(function(){
        $('.box_pick_num').addClass('active');
    });

    $('.open_box_tab1').click(function(){
        $('.box_pick_num').addClass('active');
        $('.box_tab1').addClass('active');
        $('.box_tab2').removeClass('active');
    });

    $('.open_box_tab2').click(function(){
        $('.box_pick_num').addClass('active');
        $('.box_tab2').addClass('active');
        $('.box_tab1').removeClass('active');
    });

    $('.list_reward_tel li').click(function(){
        $('.list_reward_tel li').removeClass('active');
        $(this).addClass('active');
    });


    $('.games_item, .guide_item, #payment .payment_item , .notifi_item li').on('click', function() {
        var href = $(this).find('a').attr('href');
        location.href = href;
    });

    $('.btn_modal').click(function (){
        $('.box_modal, body').addClass('active');
    });

    $('.box_modal .close_modal').click(function (){
        $('.box_modal, body').removeClass('active');
    });

    $('.select_num li').click(function(){
        $(this).toggleClass('on');
    });

    $('.box_body_3d .select_num li').click(function(){
        $(this).parent().find('li').removeClass('on');
        $(this).addClass('on');
    });

    $('.box_body_3d_plus .select_num li').click(function(){
        $(this).parent().find('li').removeClass('on');
        $(this).addClass('on');
    });

    $('.select_price li').click(function(){
        $('.select_price li').removeClass('on');
        $(this).toggleClass('on');
    });

    $('.box_bot a, .box_head .right').click(function(){
        $('.box_pick_num').removeClass('active');
    });

    $('.select_box').click(function(){
        $('.type_list').removeClass('active');
        $('.date_list').toggleClass('active');
    });

    $('.select_type').click(function(){
        $('.type_list').toggleClass('active');
        $('.date_list').removeClass('active');
    });

    $('.type_list li').click(function(){
        $('.type_list li').removeClass('check');
        $(this).toggleClass('check');
    });


    $('.date_list li').click(function(){
        $(this).toggleClass('check');
    });

    $('.num_big span').click(function(){
        $(this).parent().find('span').removeClass('active');
        $(this).toggleClass('active');
    });

    $('.side_nav_bg').click(function(){
        $('#side_nav').removeClass('active')
    });

    $('.btn_nav').click(function(){
        $('#side_nav').addClass('active')
    });

    

    if( $('.rate_content').length) {
        $('.rate_tab li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('.rate_tab li').removeClass('active');
            $('.rate_tab_ct').removeClass('active');

            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
        });
    }

    if( $('.result_content').length) {
        $('.result_tab li').click(function(){
            var tab_id = $(this).attr('data-tab');

            $('.result_tab li').removeClass('active');
            $('.result_tab_ct').removeClass('active');

            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
        });
    }

    
});
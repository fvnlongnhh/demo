$(document).ready(function() {
    "use strict";

    $('.box06_list ul').slick({
        dots: true,
        arrows: true,
        slidesToShow: 2,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse: false,
        margin: 0,
        centerMode: true,
        centerPadding : '50px',
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: false,
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
              }
            }
        ],
        prevArrow: '<button type="button" class="slick-prev"><a><img src="./images/ic_prev.jpg"></a></button>',
        nextArrow: '<button type="button" class="slick-next"><a><img src="./images/ic_next.jpg"></a></button>'
    });

    AOS.init({
        duration: 1000,
        once: true,
    });

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
        $(".btn_open").click(function () {
            $(this).toggleClass('open');
            $("nav ul").toggleClass("active");
            return false;
        });
    }

    $('.service_link ul li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.service_link ul li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
});

$(window).bind('load',function(){
  "use strict";
  $(function(){
    $('a[href^="#"]').click(function(){
      if ($($(this).attr('href') ).length ) {
        var p = $( $(this).attr('href') ).offset();
        if($(window).width() > 768){
          $('html,body').animate({ scrollTop: p.top - 100}, 400);
        }
        else {
          $('html,body').animate({ scrollTop: p.top - 100}, 400);
        }
      }
      return false;
    });
  });
});

$(document).ready(function() {
    "use strict";
    // $('.box04_txt ul').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     dots: false,
    //     fade: true,
    //     asNavFor: '.box04_img ul',
    //     prevArrow: '<button type="button" class="slick-prev btn"><a></a></button>',
    //     nextArrow: '<button type="button" class="slick-next btn"><a></a></button>'
    // });

    // $('.box04_img ul').slick({
    //     slidesToShow: 11,
    //     slidesToScroll: 1,
    //     asNavFor: '.box04_txt ul',
    //     dots: false,
    //     arrows: false,
    //     centerMode: true,
    //     centerPadding: '0',
    //     focusOnSelect: true,
    //     responsive: [
    //         {
    //           breakpoint: 1201,
    //           settings: {
    //             slidesToShow: 9,
    //           }
    //         },
    //         {
    //           breakpoint: 769,
    //           settings: {
    //             slidesToShow: 7,
    //           }
    //         },
    //         {
    //           breakpoint: 481,
    //           settings: {
    //             slidesToShow: 5,
    //           }
    //         },
    //         {
    //           breakpoint: 361,
    //           settings: {
    //             slidesToShow: 3,
    //           }
    //         }
    //     ]
    // });

    AOS.init({
        duration: 1000,
        once: true,
        disable : 'mobile',
    });
});

$(window).bind('load',function(){
  "use strict";
  $(function(){
    $('a[href^="#"]').click(function(){
      if ($($(this).attr('href') ).length ) {
        var p = $( $(this).attr('href') ).offset();
        if($(window).width() > 640){
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

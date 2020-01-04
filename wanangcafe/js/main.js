$(document).ready(function() {
    "use strict";
    $('.slider ul').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        fade: true,
        prevArrow: '<button type="button" class="slick-prev"><a></a></button>',
        nextArrow: '<button type="button" class="slick-next"><a></a></button>'
    });
});

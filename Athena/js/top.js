$(document).ready(function() {
    "use strict";
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('#btn_top').fadeIn(300);
        } else {
            $('#btn_top').fadeOut(300);
        }
    });

    $('#btn_top').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });


    $(".btn_side").click(function() {
        $(this).toggleClass('open');
        $("nav").toggleClass("active");
        $(".sub_btn").removeClass("disable");
        return false;
    });
});


if ($(window).width() > 769){
    $(window).bind('load', function() {
        AOS.init({
            easing: 'ease-out',
            duration: 1000,
            offset: 200,
        });
    });
}else{
    $(window).bind('load', function() {
        AOS.init({
            easing: 'ease-out',
            duration: 1000,
            offset: 50,
        });
    });
}
// anchor in page
$(window).bind('load', function() {
    "use strict";
    $(function() {
        $('a[href^="#"]').click(function() {
            if ($($(this).attr('href')).length) {
                var p = $($(this).attr('href')).offset();
                if ($(window).width() > 769) {
                    $('html,body').animate({ scrollTop: p.top - 170 }, 400);
                } else {
                    $('html,body').animate({ scrollTop: p.top - 100 }, 400);
                }
            }
            return false;
        });
    });

    var hash = location.hash;
    if (hash) {
        var p1 = $(hash).offset();
        if ($(window).width() > 769) {
            $('html,body').animate({ scrollTop: p1.top - 100 }, 400);
        } else {
            $('html,body').animate({ scrollTop: p1.top - 100 }, 400);
        }
    }
});


// MATRIX
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let dropCount = window.innerWidth / 15;
let drops = []


for(let i = 0; i < dropCount; i++){
  drops.push({x: i * 15, y: Math.ceil(Math.random() * 60) * -15})
}

const drop = () => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  for(let i = 0; i < dropCount; i++) {
    let text = String.fromCharCode(Math.random() * 128);
    if(drops[i].y > canvas.height) {
      drops[i].y = -15;
    }
    drops[i].y += 15;
    ctx.font = '12px monospace';
    ctx.fillStyle = "#fff";
    ctx.fillText(text, drops[i].x, drops[i].y);
  }
}
setInterval(drop, 50);

window.addEventListener('resize', () => {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  dropCount = window.innerWidth / 15;
  drops = []

  for(let i = 0; i < dropCount; i++){
    drops.push({x: i * 15, y: Math.ceil(Math.random() * 60) * -15})
  }
})
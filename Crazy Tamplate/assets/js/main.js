$(document).ready(function () {

    var owl = document.querySelectorAll(".owl-dots .owl-dot span");
    for (var i = 0; i < owl.length; i++) {
        owl[i].addEventListener("click", function () {
            alert()
        })
    }
    // Coursels Starts
    $('.owl-carousel').owlCarousel({
        // animateIn: "fadeIn",
        // animateOut: "fadeOut",
        loop: true,
        // margin: 10,
        // nav:true,
        // center:true,
        autoplayTimeout: 3000,
        autoplay: true,
        // autoplaySpeed:true,
        smartSpeed: 1500,
        dotsEach:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('.owl-carousel').on('changed.owl.carousel', function (event) {
        var item = event.item.index - 2;    
        $('.content').removeClass('animation');
        $('.owl-item').not('.cloned').eq(item).find('.content').addClass('animation');
    });

    var owl = $('.owl-carousel');

    $("#courselHeader .header .owl-carousel .item .content .click a i").click(function () {
        owl.trigger('next.owl.carousel');
    })


// NAVBAR-SCROLL
    $('#navbar nav .navbar-collapse ul li:nth-child(1) a').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
        return false;
    });
    $('#navbar nav .navbar-collapse ul li:nth-child(2) a').click(function(){
        $("html, body").animate({scrollTop: 588 }, 1000)
    })
    $('#navbar nav .navbar-collapse ul li:nth-child(3) a').click(function(){
        $("html, body").animate({scrollTop: 1425 }, 1000)
    })
    $('#navbar nav .navbar-collapse ul li:nth-child(4) a').click(function(){
        $("html, body").animate({scrollTop: 2293 }, 1000)
    })
    $('#navbar nav .navbar-collapse ul li:nth-child(5) a').click(function(){
        $("html, body").animate({scrollTop: 3387 }, 1000)
    })
    $('#navbar nav .navbar-collapse ul li:nth-child(6) a').click(function(){
        $("html, body").animate({scrollTop: 4308 }, 1000)
    })
    $('#navbar nav .navbar-collapse ul li:nth-child(7) a').click(function(){
        $("html, body").animate({scrollTop: 5327 }, 1000)
    })
    $('#navbar nav .navbar-collapse ul li:nth-child(8) a').click(function(){
        $("html, body").animate({scrollTop: 6238 }, 1000)
    })
    $('#navbar nav .navbar-collapse ul li:nth-child(9) a').click(function(){
        $("html, body").animate({scrollTop: 7278 }, 1000)
    })
    $('#navbar nav .navbar-collapse ul li:nth-child(10) a').click(function(){
        $("html, body").animate({scrollTop: 8092 }, 1000)
    })
 
    $('#navbar nav .navbar-collapse ul li:nth-child(1) a').addClass("actives");
    $('#navbar nav .navbar-collapse ul li a').click(function(){
        $('#navbar nav .navbar-collapse ul li a.actives').removeClass('actives');
        $(this).addClass('actives');
    })
    
// NAVBAR SCROLL-END

// scroll
    if($(window).scrollTop()<400){
        $("#up").hide()
    }

    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            $("#up").fadeIn(1000);
        }else{
            $("#up").fadeOut(1000);
        }
    });

    $("#up").click(function(){
        $("html, body").animate({scrollTop : 0},2000);
        return false;
    })
// scroll-end

var creative = $("#headerCarousel .container-fluid .row .col-md-12 .borderContent h1 .creative")
var awesome = $("#headerCarousel .container-fluid .row .col-md-12 .borderContent h1 .awesome")

    setInterval(function(){
        creative.css({"opacity":"0"})
        awesome.css({"opacity":"1"})
    }, 2000)
    setInterval(function(){
        creative.css({"opacity":"1"})
        awesome.css({"opacity":"0"})
    }, 4000)
    var  count = 0;

$("#navbar nav button").click(function(){
    if(count%2==0){
    $(this).css({"top":"2%"});
    }else if(count%2!=0){
    $(this).css({"top":"20%"});
    }
    count++;
})

//  $(window).scroll(function(){
//         var scrollsize = window.scrollY;
//         console.log(scrollsize)
//     })

});













$(function () {

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    })


    $('.main_slider').on('init reInit afterchange', function () {
        var here = $('.slick-current');
        here.addclass('on').siblings().removeclass('on')
    })


})

// $(function(){}) 상단에 jquery적을려면 사용 하단에 적어도 보통적어줌
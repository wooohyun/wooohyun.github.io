$(function () {

    $('.main_slider').on('init reInit afterChange', function () {
        var here = $('.slick-current');
        here.addClass('on').siblings().removeClass('on')
    })


    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,
    })
})

// $(function(){}) 상단에 jquery적을려면 사용 하단에 적어도 보통적어줌
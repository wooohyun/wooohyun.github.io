$(function () {


    $('.visual_slider').slick({
        autoplay: true,
        dots: true,
        pauseOnHover: false,
    });

    $('.slider').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 3000,
        dots: true,
        pauseOnHover: false,
    });

    $('.slider02').slick({
        slidesToShow: 3
    });


})
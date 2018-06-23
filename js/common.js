$(function () {

    $('.description__slider').slick({
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 810,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });

    $("#menu1").on('click',function(){
        var elem = $(this);

        elem.toggleClass('menu_btn__active');
        if(elem.hasClass('menu_btn__active')) {
            $('.header__menu-mob').slideDown(500);
        } else {
            $('.header__menu-mob').slideUp(500);
        }
    });


});
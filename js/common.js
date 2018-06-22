$(function () {

    $('.description__slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1
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
$(function () {

    /* Slick.js http://kenwheeler.github.io/slick/
    ========================*/

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

    /* Menu-mobile
    ========================*/

    $('#menu1').on('click',function(){
        var elem = $(this);

        elem.toggleClass('menu_btn__active');
        if(elem.hasClass('menu_btn__active')) {
            $('.header__menu-mob').slideDown(500);
        } else {
            $('.header__menu-mob').slideUp(500);
        }
    });

    /* Tabs
    ========================*/

    $('.requests__tab-nav').on('click', function() {
        alert(123)
        $('.requests__tab-nav').removeClass('requests__tab-nav--active');
        $('.requests__table-wrap').removeClass('requests__active');
        $(this).addClass('requests__tab-nav--active');

        if ($(this).html() === $('.requests__tab-nav:first').html()) {
            $('.requests__table-wrap:first').addClass('requests__active');
        } else {
            $('.requests__table-wrap:last').addClass('requests__active');
        }
    })


});
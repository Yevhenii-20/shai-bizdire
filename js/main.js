$( document ).ready(function() {

    // STICKY HEADER

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 40) {
            $('.header-block').addClass('fixed-header');
            $('.scroll-block').css('display', 'block');
        }
        else {
            $('.header-block').removeClass('fixed-header');
            $('.scroll-block').css('display', 'none');
        }
    });

    // SUB MENU HOVERING

    $(".navigation li").hover(function() {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
          $(this).children("ul").stop().slideDown(300);
        } else {
          $(this).children("ul").stop().slideUp(300);
        }
    });

    // SUB MENU DROPWOWN

    $(".dropdown li").on('click', function(event) {
        $(".sub-menu.active").removeClass('active').slideUp(300);
        event.stopPropagation();
        $(this).children("ul").slideToggle();
        $(this).children("ul").toggleClass('active');
    });

    $(".sub-menu li").on('click', function(event) {
        $(".dropdown li").children("ul").stop().slideUp(300);
    });

    // HEADER BURGER MENU

    $(".burger-menu").on("click",".bar",function(event){
        event.stopPropagation();
        $(".bar").toggleClass('change');
        $(".header-navigation-block").toggleClass('active');
        $("body").toggleClass('active');
        $(".overlay").toggleClass('active');
    });

    $(".header-navigation-block").on("click",function(event){
        event.stopPropagation();
    });
});

// SUB MENU DROPWOWN

$(document).on('click', function() {
    $(".dropdown li").children("ul").stop().slideUp(300);
    $(".header-navigation-block").removeClass('active');
    $("body").removeClass('active');
    $(".bar").removeClass('change');
    $(".overlay").removeClass('active');
});
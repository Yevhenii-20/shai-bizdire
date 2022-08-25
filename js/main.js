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
    
    // SLIDER SETTiNGS

    $('.slider-listing').slick(
        {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                  breakpoint: 1180,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                    breakpoint: 530,
                    settings: {
                      slidesToShow: 1
                    }
                  }
              ]
        }
    );

    $('.slider-testimonial').slick(
        {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        }
    );

    $('.post-slider').slick(
        {
            infinite: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        }
    );

    $('.slider-related-post').slick(
        {
            arrows: false,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 530,
                    settings: {
                      slidesToShow: 1
                    }
                  }
              ]
        }
    );

    $('.big-slider-product').slick(
        {
            infinite: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            fade: true,
            asNavFor: '.small-slider-product'
        }
    );

    $('.small-slider-product').slick(
        {
            infinite: true,
            arrows: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            asNavFor: '.big-slider-product',
            centerMode: true,
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 1180,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                    breakpoint: 530,
                    settings: {
                      slidesToShow: 2
                    }
                  }
              ]
        }
    );

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
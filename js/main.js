$( document ).ready(function() {

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

    $(".navigation li").hover(function() {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
          $(this).children("ul").stop().slideDown(300);
        } else {
          $(this).children("ul").stop().slideUp(300);
        }
    });



    $(".dropdown li").on('click', function(event) {
        $(".sub-menu.active").removeClass('active').slideUp(300);
        event.stopPropagation();
        $(this).children("ul").slideToggle();
        $(this).children("ul").toggleClass('active');
    });

    $(".sub-menu li").on('click', function(event) {
        $(".dropdown li").children("ul").stop().slideUp(300);
    });
    

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

    $(".burger-menu").on("click",".bar",function(event){
        event.stopPropagation();
        $(".bar").toggleClass('change');
        $(".header-navigation-block").toggleClass('active');
        $("body").toggleClass('active');
       });

       $(".header-navigation-block").on("click",function(event){
        event.stopPropagation();
       });
      

});

$(document).on('click', function() {
    $(".dropdown li").children("ul").stop().slideUp(300);
    $(".header-navigation-block").removeClass('active');
    $("body").removeClass('active');
});
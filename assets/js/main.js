;
(function($) {
    $(document).ready(function() {

         /*-------------------------------------------------------------------------------
        Javascript for preloader
         -------------------------------------------------------------------------------*/
         $(window).on("load", function(){
            $(".preloader").fadeOut();
        })
       /*-------------------------------------------------------------------------------
        javaScript for offcanvas
        -------------------------------------------------------------------------------*/
        $(".menu-trigger").on("click", function() {
            $(".offcanvas-header").addClass("active");
            $(".menu-trigger").hide();
            $(".menu-close").show();
        });
        $(".menu-close").on("click", function() {
            $(".offcanvas-header").removeClass("active");
            $(".menu-close").hide();
            $(".menu-trigger").show();
        });

        var header = $(".header-area");

        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                header.addClass("sticky");
            } else {
                header.removeClass("sticky");
            }
        });

        /*---------------------------------
        Javascript for AOS animation
        ----------------------------------*/
        AOS.init({
            duration: 1200,
            once: true,
        });

        /*-------------------------------------------------------------------------------
        Nft Slider 
        -------------------------------------------------------------------------------*/
        $('#travel-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0',
            arrows: false,
            prevArrow: "<i class='prev fas fa-angle-left'></i>",
            nextArrow: "<i class='next fas fa-angle-right'></i>",
            dots: true,
            fade: false,
            responsive: [{
                    breakpoint: 1281,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });

    })
}(jQuery));


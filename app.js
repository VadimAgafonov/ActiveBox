$(function () {

    /* Fixed Header */
    var header = $("#header"),
        worksH = $("#works").innerHeight (),
        scrollOffset = $(window).scrollTop ();
        let nav = $("#nav");
        let navToggle = $("#navToggle");

        checkScroll(scrollOffset);
        $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

        function checkScroll(scrollOffset) {   

            if( scrollOffset >= worksH ) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }
    }

    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset -70
        }, 500);

    });


    /* Nav Toggle */
    

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });


    /* Reviews */

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });


});




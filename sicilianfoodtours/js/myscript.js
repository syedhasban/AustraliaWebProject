$(document).ready(function() {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
        isClosed = false;

    trigger.click(function() {
        hamburger_cross();
    });

    function hamburger_cross() {

        if (isClosed == true) {
            overlay.hide();
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            isClosed = false;
        } else {
            overlay.show();
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');
            isClosed = true;
        }
    }

    $('[data-toggle="offcanvas"]').click(function() {
        $('#wrapper').toggleClass('toggled');
    });
});


// slidr
$(document).ready(function() {



});
// end slider




jQuery(document).ready(function() {



    var have_resize = $('.have-resize');
    have_resize.owlCarousel({


        navText: ["<a class='control_prev'><i class='fa fa-long-arrow-left'></i></a>",
            " <a class='control_next'><i class='fa fa-long-arrow-right'></i></a>"
        ],

        loop: true,
        //   dots: false,
        responsiveClass: true,
        items: 1
            //autoWidth: true,
            // responsive: {

        //     320: {
        //         items: 1,
        //         stagePadding: 10,
        //         margin: 10
        //     },

        //     430: {
        //         items: 2,
        //         stagePadding: 40,
        //         margin: 35,
        //         nav: false
        //     },
        //     992: {
        //         items: 1,
        //         nav: true
        //     }
        // }

    });



    dotcount = 1;

    jQuery('.owl-dot').each(function() {
        jQuery(this).addClass('dotnumber' + dotcount);
        jQuery(this).attr('data-info', dotcount);
        dotcount = dotcount + 1;
    });

    slidecount = 1;

    jQuery('.owl-item').not('.cloned').each(function() {
        jQuery(this).addClass('slidenumber' + slidecount);
        slidecount = slidecount + 1;
    });

    jQuery('.owl-dot').each(function() {

        grab = jQuery(this).data('info');

        slidegrab = jQuery('.slidenumber' + grab + ' img').attr('src');
        console.log(slidegrab);

        jQuery(this).css("background-image", "url(" + slidegrab + ")");

    });

    amount = jQuery('.owl-dot').length;
    gotowidth = 100 / amount;

    jQuery('.owl-dot').css("width", gotowidth + "%");
    newwidth = jQuery('.owl-dot').width();
    jQuery('.owl-dot').css("height", newwidth + "px");




});
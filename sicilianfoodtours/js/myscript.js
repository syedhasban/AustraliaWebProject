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

    var owl = $('.slider-1');

    owl.owlCarousel({
        dots: false,
        stagePadding: 50,
        loop: true,
        navText: ["<a class='control_prev'><i class='fa fa-angle-left'></i></a>",
            " <a class='control_next'><i class='fa fa-angle-right'></i></a>"
        ],

        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 2
            }
        }
    });


    var have_resize = $('.have-resize');
    have_resize.owlCarousel({




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


    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        dots: false,
        navText: ["<a class='control_prev'><i class='fa fa-angle-left'></i></a>",
            " <a class='control_next'><i class='fa fa-angle-right'></i></a>"
        ],


        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: true,

        loop: true,

        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count)  {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });





});
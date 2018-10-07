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
$(document).ready(function () {
    
    
    $('.container-gallery').gallery({
        height: '35vw',
        width: '35vw',
        items: 6,
        singleLine: true,
        thumbHeight: '10vw',
        showThumbnails: true,

        0: {
            height: 200,
            items: 2,
            thumbHeight: 50
        },
        320: {
            height: 300,
            items: 3,
            thumbHeight: 70
        },
        480: {
            height: 300,
            thumbHeight: 100,
            items: 3

        },
        600: {
            height: 300,
            items: 4
        },
        768: {

            //showThumbnails: false,
            items: 4
            //height: 300,
            //thumbHeight: 50
        },



    });
});
// end slider
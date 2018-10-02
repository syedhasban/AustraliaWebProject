jQuery(document).ready(function($) {
    $('.fp-action-btn').click(function() {
        $('html, body').animate({
            scrollTop: $(".hosting-table").offset().top - 155
        }, 500);
    });

    $('.ut-action-btn').click(function() {
        $('html, body').animate({
            scrollTop: $(".hosting-table").offset().top - 155
        }, 500);
    });

    $('.local-btn').click(function() {
        $('html, body').animate({
            scrollTop: $('#check-vid-width').offset().top - 180
        }, 500);
    });

    $("#show-specs").click(function() {
        var is_visible = document.getElementById("spec-scroll").style.display;
        if (is_visible == "none") {
            $("#spec-scroll").slideDown("fast");
        } else {
            $("#spec-scroll").slideUp("fast");
        }
    });

    $('.goto-uptime').click(function() {
        $('html, body').animate({
            scrollTop: $(".uptime-chart").offset().top - 155
        }, 500);
    });
    $('.click-here').click(function() {
        $('html, body').animate({
            scrollTop: $(".hosting-table").offset().top - 135
        }, 500);
    });
    $('.spec-close-arrow').click(function() {
        $('.ht-tech-specs').fadeOut();
    });

    /*mobile menu*/

    ! function(a) {
        function b() {
            a(".optnWrap").find("input").is(":checked") ? a(this).closest(".optnWrap").addClass("radioActive") : a(this).closest(".optnWrap").removeClass("radioActive"), a(".optnWrap").on("click", function() {
                a("input[type=radio]", this).prop("checked", !0), a(".optnWrap").removeClass("radioActive"), a(this).find("input").is(":checked") && a(this).closest(".optnWrap").addClass("radioActive")
            })
        }

        function e() {
            var b = parseInt(a(".navbar-wrap").css("right"));
            b == -240 ? (a(".mob-menu-alpha").fadeIn(), a(".navbuton").animate({
                right: 240
            }, 300), a(".navbar-wrap").animate({
                right: 0
            }, 300), a("#pageLayout,nav.navbar").animate({
                right: 240
            }, 300)) : (a(".mob-menu-alpha").fadeOut(), a(".navbuton").animate({
                right: 0
            }, 300), a(".navbar-wrap").animate({
                right: -240
            }, 300), a("#pageLayout,nav.navbar").animate({
                right: 0
            }, 300))
        }

        function f() {
            a(".navbar, #pageLayout, #navbar-wrap").removeAttr("style")
        }

        function g() {
            a(".navbar-toggle").on("click", function() {
                e()
            }), a(".navigationBar ul li").on("click", function() {
                e()
            })
        }

        function h() {
            a(".close-icon img").on("click", function() {
                a(".caseWrapInnerContent").hide()
            })
        }

        function i() {
            a(".caseWrap li").on("click", function() {
                a(".caseWrapInnerContent").show()
            })
        }
        a(".addtoany_share_save_container").addClass("animation-element");
        var k = (jQuery(".animation-element"), jQuery(window));
        k.trigger("scroll"), a(function() {
            b(), g(), h(), i()
        }), a(window).resize(function() {
            f()
        }), a(".mob-menu-alpha").click(function() {
            e(), a(".mob-menu-alpha").fadeOut()
        }), a(window).width() < 767 ? a("li.hasChild > a").click(function(b) {
            b.preventDefault(), a(this).next().slideToggle()
        }) : a(".dropdownWrapper").removeAttr("style")
    }(jQuery);

    $('.view-tech-specs').click(function() {
        var current_state = $('.ht-tech-specs').css('display');
        var data_title = $(this).attr('data-title');
        var data_desc = $(this).attr('data-desc');
        var data_pid = $(this).attr('data-pid');
        var data_price = $(this).attr('data-price');
        var data_cents = $(this).attr('data-cents');
        var data_ssd = $(this).attr('data-ssd');
        var data_cpu = $(this).attr('data-cpu');
        var data_ram = $(this).attr('data-ram');
        $('#data-title').html(data_title);
        $('#data-title2').html(data_title);
        $('#data-desc').html(data_desc);
        $('#data-price').html(data_price);
        $('#data-cents').html(data_cents);
        $('#data-ssd').html(data_ssd);
        $('#data-cpu').html(data_cpu);
        $('#data-ram').html(data_ram);
        $('#spec-link').attr('href', 'https://secure.hostingaustralia.com.au/cart.php?a=add&pid=' + data_pid);
        if (current_state == 'none') {
            $('.ht-tech-specs').fadeIn();
            $('html, body').animate({
                scrollTop: $(".ht-tech-specs").offset().top - 255
            }, 500);
        }
    });

});

jQuery(document).ready(function($) {
    $('.fp-action-btn').click(function() {
        $('html, body').animate({
            scrollTop: $(".hosting-table").offset().top - 155
        }, 500);
    });

    $('.ut-action-btn').click(function() {
        $('html, body').animate({
            scrollTop: $(".hosting-table").offset().top - 155
        }, 500);
    });

    $('.local-btn').click(function() {
        $('html, body').animate({
            scrollTop: $('#check-vid-width').offset().top - 180
        }, 500);
    });

    $("#show-specs").click(function() {
        var is_visible = document.getElementById("spec-scroll").style.display;
        if (is_visible == "none") {
            $("#spec-scroll").slideDown("fast");
        } else {
            $("#spec-scroll").slideUp("fast");
        }
    });

});
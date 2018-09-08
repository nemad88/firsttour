$(document).ready(function () {
    
    $('.js--section-guides').waypoint(function (direction) {
        if (direction == "down") {
            $('.topnav').addClass('light');
        } else {
            $('.topnav').removeClass('light');
        }
        
    }, {
            offset: '60px;'
        });

    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated flipInY');
    }, {
            offset: '50%'
        })

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
            offset: '50%'
        })

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
            offset: '50%'
        })

})


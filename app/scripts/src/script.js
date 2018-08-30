function resize() {
    var width = $(window).width();
    if(width > 1200 && width < 1290){
        width = width + 20;
    }
    if (width >= 1920) {
        $('html').css('font-size', 10 + 'px');
    } else if (width >= 1280) {
        // $('html').css('font-size', 10 + 'px');
        $('html').css('font-size', 10 * width / 1920 + 'px');

    } else if (width >= 750) {
        $('html').css('font-size', 10 + 'px');
        $('body').css('font-size', '3rem');
    } else {
        $('html').css('font-size', 10 * width / 750 + 'px');
        $('body').css('font-size', '3rem');
    }
    var heightTr = $('body').find('.base-table .table-title').height();
    var length = $('body').find('.base-table tr').length;
    for (var i = 1; i <= length; i++) {
        $('body').find('.list-border .border-' + i).css('top', (heightTr * (i + 1)) + 'px');
    }
}

function menuShowHide() {
    $(document).mouseup(function (e) {
        var container = $(".nav-menu.hide-on-pc");
        if (   !container.is(e.target)
            && container.has(e.target).length === 0
            && !$('header .menu').is(e.target)
            && $('header .menu').has(e.target).length === 0
        ) {
            $('.nav-menu').css('transform','translateX(-100%)');
        } else {

        }
    });
    $('header .menu').click(function () {
        $('.nav-menu').velocity(
            {
                'translateX':['0%','-100%']
            },
            {
                duration: 700
            });
    });

    $('.close-menu').click(function () {
        $('.nav-menu').velocity(
            {
                'translateX':['-100%','0%']
            },
            {
                duration: 700
            });
    });
}

function scrollBar() {
    $('.scrollbar-outer').scrollbar();
}

function animation() {
    $('.mouse-scroll').velocity({
        translateY: [0, "10px"],
        translateX: ["-50%", "-50%"]
    }, {
        loop: true
    }).velocity("reverse");

    $('body').on('click', '.mouse-scroll', function () {
        $('.section-2').first().velocity("scroll", {duration: 1350, easing: "ease-in"});
    })
    $('body').on('click', '.box-1 .actions a', function (e) {
        e.preventDefault();
        $('.section-2').first().velocity("scroll", {duration: 650, easing: "ease-in"});
    })
    $('body').on('click', '.box-2 .actions a', function (e) {
        e.preventDefault();
        $('.section-3').first().velocity("scroll", {duration: 1000, easing: "ease-in"});
    })
    $('body').on('click', '.box-3 .actions a', function (e) {
        e.preventDefault();
        $('.section-4').first().velocity("scroll", {duration: 1350, easing: "ease-in"});
    })
    $('body').on('click', '.go-to', function (e) {
        e.preventDefault();
        var des = $(this).attr('des');
        $(des).first().velocity("scroll", {duration: 1350, easing: "ease-in"});
    })
}

$(document).ready(function () {
    // startFireWork();
    menuShowHide();
    resize();
    $(window).resize(function () {
        resize();
    });
    scrollBar();
    new WOW().init();
    animation();
});

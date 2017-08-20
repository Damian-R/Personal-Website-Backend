var navbar = $('nav');
var didScroll = false;
var didResize = false;
var smallScreen = false;

var jWindow = $(window);

// get size of window on start up
if(jWindow.width() < 768)
    smallScreen = true;
else
    smallScreen = false;

if(smallScreen){
    navbar.addClass("navbar-close");
    navbar.addClass("navbar-mobile");
    $('.welcome-img').addClass('align-left');
    $('about-img').addClass('align-right');
} else {
    $('.welcome-img').removeClass('align-left');
    $('about-img').removeClass('align-right');
}

jWindow.scroll(function(){
    didScroll = true;
});

jWindow.resize(function(){
    didResize = true;
});

$('#bs-navbar-collapse').on('hide.bs.collapse', function() {
    didScroll = true;
});

// Make the 'About' button on the navbar scroll you to the projects div
$('#nav-about-button').on('click', function(){
    var dest = $('#about-container').offset().top - 70;
    window.scroll(0, dest);
});

// Make the 'Projects' button on the navbar scroll you to the projects div
$('#nav-projects-button').on('click', function(){
    var dest = $('#projects-container').offset().top - 70;
    window.scroll(0, dest);
});

$('.navbar-toggle').on('click', function(){
    navbar.css("opacity", "1");
});

$('.dropdown').on('show.bs.dropdown', function(e){
    $('.navbar').find('.dropdown-menu').first().stop(true, true).slideDown("fast");
});

$('.dropdown').on('hide.bs.dropdown', function(e){
    e.preventDefault();
    $('.navbar').find('.dropdown-menu').first().stop(true, true).slideUp("fast", function(){
        $("a[data-toggle='dropdown']").attr("aria-expanded", "false");
        $('.dropdown').removeClass("open");
    });
});

setInterval(function(){
    // Check when window has been switched to support smaller screen sizes (such as phones)
    if(didResize){
        if(!smallScreen){
            //switched to small
            if(jWindow.width() < 768){
                switchedScreenSize();
                navbar.addClass("navbar-close");
                navbar.addClass("navbar-mobile");
            }
        } else {
            if(jWindow.width() > 768){
                switchedScreenSize();
                navbar.removeClass("navbar-mobile");
            }
        }
        didResize = false;
    }

    if(!smallScreen)
        if(didScroll){
            var offset = $('h1').offset().top;
            if($(window).scrollTop() >= offset - 70){
                navbar.addClass("navbar-close");
            } else {
                navbar.removeClass("navbar-close");
            }

            didScroll = false;
        }
}, 250);

function switchedScreenSize(){
    $('.welcome-img').toggleClass('align-left');
    $('.about-img').toggleClass('align-right');
    didScroll = true;
    smallScreen = !smallScreen;
}
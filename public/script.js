/* global $ */

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

$('a[href*="#"').on("click", function(){
     var target = $(this.hash);
     if(target.length != 0){
         var dest = target.offset().top - 65;
         $('html, body').animate({
             scrollTop: dest
         }, 1000);
     } else {
         document.location.href = "/" + this.hash;
     }
});

$('.navbar-toggle').on('click', function(){
    navbar.css("opacity", "1");
});

// TODO FIX COLLAPSED CONTACT DROPDOWN

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).fadeOut(200);
});

$('#contact-email').on('click', function() {
    console.log("email clicked");
    console.log($(this).siblings("div"));
    $(this).siblings('div').css("display", "block");
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
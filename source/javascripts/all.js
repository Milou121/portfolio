//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {
    // $('#about').removeClass('.navbar-link').addClass('.navbar-link-darker');
    // $(document.parent.document).scroll(function() {
    // });

//old scroll
  //   $(document).scroll(function () {
  //   //if you hard code, then use console
  //   //.log to determine when you want the
  //   //nav bar to stick.
  //   console.log($(document).scrollTop())
  //   if ($(document).scrollTop() > 566) {
  //     $('.navbar').removeClass('navbar-top').addClass('navbar-content', 900);
  //   }
  //   if ($(document).scrollTop() < 565) {
  //     $('.navbar').removeClass('navbar-content').addClass('navbar-top');
  //   }
  // });
// old scroll end
//

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.navbar').outerHeight();

$(window).scroll(function(event){
  didScroll = true;
  hasScrolled();
});

function hasScrolled() {
  var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('.navbar').removeClass('navbar-down').addClass('navbar-up');
      } else {
        if ($(document).scrollTop() < 100){
          $(".navbar").removeClass('navbar-down');
          return false;
        }
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
          $('.navbar').removeClass('navbar-up').addClass('navbar-down');
        }
      }

      lastScrollTop = st;
    }

  });

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//= require jquery
//= require bootstrap-sprockets
//= require_tree .

$(document).ready(function() {
    // $('#about').removeClass('.navbar-link').addClass('.navbar-link-darker');
    // $(document.parent.document).scroll(function() {
    // });


    $(document).scroll(function () {
    //if you hard code, then use console
    //.log to determine when you want the
    //nav bar to stick.
    console.log($(document).scrollTop())
    if ($(document).scrollTop() > 566) {
      $('.navbar').removeClass('navbar-top').addClass('navbar-content', 900);
    }
    if ($(document).scrollTop() < 565) {
      $('.navbar').removeClass('navbar-content').addClass('navbar-top');
    }
  });

    // $('.resume-buttons').click(function(){
    //   $("p").removeClass('active').next().addClass('active');
    // });
  });

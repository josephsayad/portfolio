var DEBUG = true; 

$(document).ready(function(){
  controlNavigationBar();
  enableSmoothScroll();
});

function controlNavigationBar() {
  var windowWidth = $(window).width();
  if(DEBUG) console.log(windowWidth);
  if(windowWidth >= 768) {
    animateBigNav();
  }
}

function animateBigNav() {
	$('.page-nav').click(function() {

  	// On the first click, the var clicks will be assigned to undefined, 
  	// which is interpreted as false. Therefore, the drop-down menu slides
  	// down upon invocation of the else conditional. The second click will 
  	// result the variable in having the value true.
    var clicks = $(this).data('clicks');
    if (clicks) {
      $('.page-nav').css({'background-color':'rgba(46, 48, 58, 0.96)', 'opacity':'1'});
      $('.page-nav-wrapper').css({'border-bottom':'none'});
      $('.page-nav-wrapper').slideUp('slow');
      $('#caret-two').hide('fast');
      $('#caret-one').show('fast');
    } 
    else {
      $('.page-nav').css({'background-color':'#C32F34', 'opacity':'.95'});
      $('.page-nav-wrapper').css({'border-bottom': '1px solid rgba(255, 255, 255, .2)'});
      $('.page-nav-wrapper').slideDown('slow');
    }
    // changes the value false to true and assigns it to clicks, and vice 
    // versa for each click.
    $(this).data("clicks", !clicks);
  });

  // .fa-caret-up and -down animation
  $('.entire-nav-wrap').mouseenter(function() {
    $('#caret-one').hide('fast');
    $('#caret-two').css({'display':'block'}).hide().show('fast');
  })
  .mouseleave(function() {
    $('#caret-two').hide('fast');
    $('#caret-one').show('fast');
  });
}

function enableSmoothScroll() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
}
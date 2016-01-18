var DEBUG = true; 

$(document).ready(function(){
  controlledNavigationBar();
  enableSmoothScroll();
});

function controlledNavigationBar() {
  var currentWidth = null;
  $('#caret-two').hide();

  $('.entire-nav-wrap').mouseenter(function() {
    currentWidth = $(window).width();
    if(DEBUG) console.log('Hover at: ' + currentWidth);
    if(currentWidth >= 768) {
      $('#caret-one').hide('fast');
      $('#caret-two').show('fast');
    }
  })
  .mouseleave(function() {
    if(currentWidth >= 768) {
      $('#caret-one').show('fast');
      $('#caret-two').hide('fast');
    }
  })
  // Monitors the screen size of browser upon every click. 
  // Permits drop-down menu for desktops/labtops when the current
  // width is 768px or greater.
  .click(function() {
    currentWidth = $(window).width();
    if(DEBUG) console.log('Click at: ' + currentWidth);
    if(currentWidth >= 768) {
      animateBigNav();
    }
    else {
      animateSmallNav();
    }  
  });

  var width = $(window).width();
  $(window).resize(function() {
    $('.mobile-nav-wrapper').slideUp();
    $('.page-nav-wrapper').slideUp('slow');
    $('.page-nav').css({'background-color':'rgba(46, 48, 58, 0.96)', 'opacity':'1'});
    $('#caret-two').hide('fast');
    $('#caret-one').show('slow');
  });
}

function animateBigNav() {
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
    $('#caret-one').show('slow');
  } 
  else {
    $('.page-nav').css({'background-color':'#C32F34', 'opacity':'.95'});
    $('.page-nav-wrapper').css({'border-bottom': '1px solid rgba(255, 255, 255, .2)'});
    $('.page-nav-wrapper').slideDown('slow');
  }
  // changes the value false to true and assigns it to clicks, and vice 
  // versa for each click.
  $(this).data("clicks", !clicks);
}

function animateSmallNav() {
  // On the first click, the var clicks will be assigned to undefined, 
  // which is interpreted as false. Therefore, the drop-down menu slides
  // down upon invocation of the else conditional. The second click will 
  // result the variable in having the value true.
  var clicks = $(this).data('clicks');
  if (clicks) {
    $('.mobile-nav-wrapper').slideUp('fast');
  } 
  else {
    $('.mobile-nav-wrapper').slideDown('fast');
  }
  // changes the value false to true and assigns it to clicks, and vice 
  // versa for each click.
  $(this).data("clicks", !clicks);
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
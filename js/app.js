$(document).ready(function() {

  $(function(){
  if($('body').is('#faq')){
    new Accordion('.accordion-container');
  }
});

  var yes21 = document.getElementById('21Yes');
  var no21 = document.getElementById('21No');

  $(yes21).click(function() {
    $('body').removeClass('modal-open');
    window.scrollTo(0, 0);
  })

  $(no21).click(function() {
    window.location.href = 'http://snapple.com';
  });

  var image = document.getElementsByClassName('lax');
  new simpleParallax(image, {
    orientation: 'up',
    overflow: true
  });

  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('#navbar').outerHeight();

  $(window).scroll(function(event) {
    didScroll = true;
  });

  setInterval(function() {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
      return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
      // Scroll Down
      $('#navbar').removeClass('nav-down').addClass('nav-up');
    } else {
      // Scroll Up
      if (st + $(window).height() < $(document).height()) {
        $('#navbar').removeClass('nav-up').addClass('nav-down');
      }
    }

    lastScrollTop = st;
  }


  // Cookie Logic

  (function() {
    "use strict";

    var cookieName = 'tplCookieConsent';
    var cookieLifetime = 30;

    /**
     * Set a cookie
     * @param cname - cookie name
     * @param cvalue - cookie value
     * @param exdays - expiry in days
     */
    var _setCookie = function(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };

    /**
     * Get a cookie
     * @param cname - cookie name
     * @returns string
     */
    var _getCookie = function(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    };


    var _shouldShowPopup = function() {
      if (_getCookie(cookieName)) {
        return false;
      } else {
        return true;
      }
    };

    if (_shouldShowPopup()) {
      $('body').addClass('modal-open');
      console.log("Show Modal");
    }

    $('#21Yes').on('click', function() {
      _setCookie(cookieName, 1, cookieLifetime);
    });

  })();

  function hamburger(x) {
  x.classList.toggle("change");
  }

  $('#hammenu').on('click', function() {
    this.classList.toggle("change");
  });




});

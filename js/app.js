$(document).ready(function() {

  var yes21 = document.getElementById('21Yes');
  var no21 = document.getElementById('21No');

  $(yes21).click(function() {
    $('body').removeClass('modal-open');
    window.scrollTo(0,0);
  })

  $(no21).click(function() {
    window.location.href = 'http://snapple.com';
  });


  var image = document.getElementsByClassName('lax');
  new simpleParallax(image, {
    orientation: 'up',
    overflow: true
  });

  var stickyOffset = $("#navbar").offset();
  var $contentDivs = $(".content");
  $(document).scroll(function() {
    $contentDivs.each(function(k) {
      var _thisOffset = $(this).offset();
      var _actPosition = _thisOffset.top - $(window).scrollTop();
      if (_actPosition < stickyOffset.top && _actPosition + $(this).height() > 0) {
        $("#navbar").removeClass("green-nav red-nav").addClass($(this).hasClass("green-nav") ? "green-nav" : "red-nav");
        return false;
      }
    });
  });









});

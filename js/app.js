$(document).ready(function() {


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

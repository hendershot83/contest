$(document).ready(
  function slide() {
    var speed = 2000;
    var interval = 5000; 
    var slide = $('.slider .slide');
    var count = 0;
    var length = slide.length-1;
    setInterval(function(){
      $(slide[count]).fadeOut(speed);
      if ( count >= length ) {
        count = 0;
      } else {
        count++;
      }
      $(slide[count]).fadeIn(speed);
    }, interval);
}());
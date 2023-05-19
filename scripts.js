// A $( document ).ready() block.
$( document ).ready(function() {
    
    $('.hamburger-button').click(function(){
        $(this).toggleClass('active');
        $(".mobile-menu").fadeToggle();
      });

// Animate on Scroll - activate
AOS.init({
    duration: 500
});

});


// Typed.js Code
var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
  	typeSpeed: 10,
  	startDelay: 500,
  	backSpeed: 10,
  	backDelay: 1000,
  	smartBackspace: true,
  	loop: true,
  	loopCount: Infinity
});

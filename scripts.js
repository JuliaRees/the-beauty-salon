// A $( document ).ready() block.
$( document ).ready(function() {
    
$('.hamburger-button').click(function(){
	$('.mobile-menu').slideToggle(250);
	$(this).toggleClass('active');
});

// Animate on Scroll - activate
AOS.init({
    duration: 500
});

});


// Typed.js Code
var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
  	typeSpeed: 60,
  	startDelay: 500,
  	backSpeed: 30,
  	backDelay: 1000,
  	smartBackspace: true,
  	loop: true,
  	loopCount: Infinity
});

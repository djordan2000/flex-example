// hide navbar when scrolling down and show it again when scrolling up
var didScroll;
var lastScrollTop = 0;
var delta = 50; //distance scrolled
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){//once scrolling has occurred
    didScroll = true;
});

setInterval(function() {//evaluate whether user has stopped scrolling
    if (didScroll) { //if user has scrolled
        hasScrolled(); //scroll header up/down as determined by hasScrolled()
        didScroll = false; //reset scrolling boolean to false
    }
}, 10); //default minimal timed limit for smooth UI

function hasScrolled() {
    var st = $(this).scrollTop(); //get the vertical scrollbar position distance as scrolled from top  
 //get absolute value of scrolled distance and eliminate negative values. lastScrollTop = 0 this value is used to obtain the absolute value of the distance up/down scrolled
    if(Math.abs(lastScrollTop - st) <= delta) //if user has scrolled <= 100px
        return;  //stop this if() 
    
    if (st > lastScrollTop && st > navbarHeight){ //If user has scrolled DOWN both more than 0 and more than navbar height
        $('header').slideUp(); //hide header
    } else {
     //If user has scrolled UP; check scrollbar position relative to viewport height and check that the user is somewhere other than the bottom of the page.
        if(st + $(window).height() < $(document).height()) {
            $('header').slideDown(); //display header
        }
    }
    lastScrollTop = st;  //reset scrollTop value to current position
  }
  
 /* Up button */
if(document.documentElement.clientWidth>800) {
	$(document).scroll(function() {
	  var y = $(this).scrollTop();
	  if (y > 800) {
		$('.upbutt').fadeIn();
	  } else {
		$('.upbutt').fadeOut();
	  }
	});
}

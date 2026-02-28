// Mobile Menu
// A $( document ).ready() block.
$(document).ready(function () {
    $(document).ready(function () {
        $(".mobile-button").click(function () {
            $(".mobile-button").toggleClass("active");
            $(".mobile-menu").toggleClass("active");
        });
    });
});

// Slick
$('.testimonial-container').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    accessibility: true,
    dots: true,
    fade: true,
    infinite: true,
    pauseOnHover: true,
});


$('.slider-container').slick({
	autoplay: true, 
	autoplaySpeed: 900, 
	speed: 500, 
	arrows: false, 
	accessibility: true, 
	dots: false, 
	fade: true, 
	infinite: true, 
	pauseOnHover: false, 
});

// Portfolio Slider
 $('.portfolio-container').slick({
  autoplay: true, 
  autoplaySpeed: 2000, 
  speed: 1000, 
  accessibility: true, 
  pauseOnHover: true, 
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: true, 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});


// Animate on Scroll
AOS.init ({
});
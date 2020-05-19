$(document).ready(function(){
	$("#btn-menu").click(function() {
        $(this).toggleClass("open");
    });

    $("#btn-menu").click(function() {
        $(".bg-nav").slideToggle();
    });

	// HERO SLIDER
	$('.single-item').slick({
		arrow: true,
		dots: false,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 2000,
	});

	// LOGO SLIDER
	$('.responsive').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
				}
			}
		  // You can unslick at a given breakpoint now by adding:
		  // settings: "unslick"
		  // instead of a settings object
		]
	});
});
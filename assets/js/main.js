$('body').scrollspy({ target: '#navbar-example' })

$('.carouselExampleControls').carousel({
  interval: 2000
});
$('#carouselExampleControls').on('slide.bs.carousel', function () {

});

if($("#xs-check").is(":visible")) {
  $("#carouselExampleControls").collapse('show'); 	} else { $("#carouselExampleControls").collapse('hide'); 	}
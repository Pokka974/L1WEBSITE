$(document).ready(function(){

	console.log("Ready !");
	$("#button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#debut").offset().top
	    }, 800);
	});
});
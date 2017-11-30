$(document).ready(function(){

	console.log("Ready !");

	$.getJSON("listeImg.json", function(data) {

		$.each(data["images"], function(i) {

			$("#listImg").append("<li><a href='#'><img src='" + data["images"][i].path + "'/></a></li>");
		});
	});

	$("#button").click(function() {
	    $('html, body').animate({
	        scrollTop: $("#debut").offset().top
	    }, 800);
	});

});


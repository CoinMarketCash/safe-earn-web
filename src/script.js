







$(document).ready(function(){
	$("#arrow-container").on('click', function(e) {
		console.log("as");
		e.preventDefault();
		$('html, body').animate({ scrollTop: $("#token-main").offset().top}, 500, 'linear');
	  });
});







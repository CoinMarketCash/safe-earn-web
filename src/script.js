







$(document).ready(function(){
	$("#arrow-container").on('click', function(e) {
		console.log("as");
		e.preventDefault();
		$('html, body').animate({ scrollTop: $("#token-main").offset().top}, 500, 'linear');
	  });

	$("#tab-content").find('div').hide();
	$("#tab-content").find("#tab-1").fadeIn(200);



	var tabs =  $(".tabs li a");
	
	$(".tabs li a").click(function() {
		var content = this.hash.replace('/','');
		tabs.removeClass("active");
		$(this).addClass("active");
		$("#tab-content").find('.tab-container').hide();
		$(content).fadeIn(200);
	});
	

});







$(window).on('load', function() {

	$("#thx-for-presale").hide();


	$('#bnbInput').on('input', function() {
	    $("#you-receive").text(($("#bnbInput").val() * 630_000_000_000));
	});


	$(".btn-submit-presale").click(function() {
        let price = $("#bnbInput").val()
        buyPresale(price);
	});


});

(function(window, document, $) {
    'use strict';
    var $html = $('html'),
        $body = $('body');


    startTimers();




})(window, document, jQuery);



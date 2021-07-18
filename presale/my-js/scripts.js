$(".thx-for-presale").hide();

$(window).on('load', function() {

	$(".thx-for-presale").hide();


	$('#bnbInput').on('input', function() {
        var bnbAmount = ($("#bnbInput").val() * 630_000_000_000);
        if (bnbAmount > 2) {
            bnbAmount = 2;
        }
	    $("#you-receive").text(bnbAmount);
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



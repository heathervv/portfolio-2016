$(document).ready(function() {
	var cta = $('.cta');

	cta.click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, 750, 'swing');

		return false;
	});
});
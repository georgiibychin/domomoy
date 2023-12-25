jQuery(document).ready(function() {
	$('.unclicked').click(function(e){
		e.preventDefault();
		var id = $(this).data('service');
		$('.container.service').hide();
		$('.container.service-' + id).show();
	});
});
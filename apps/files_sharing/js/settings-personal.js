$(document).ready(function() {

	$('#fileSharingSettings img').click(function() {
		var url = $(this).data('url');
		if (url) {
			window.open(url, 'name', 'width=600,height=400');
		}
	});

});

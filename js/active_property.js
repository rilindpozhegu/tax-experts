jQuery(document).ready(function($){
	// Get correct path and find target ling
	var path = window.location.pathname.split("/").pop();
	// Account for home page with empty path
	if (path == '') {
		path = 'index.php';
	}
	var target = $('nav a[href="'+path+'"]');
	// add active class to target lin
	target.addClass ('active_nav');
})
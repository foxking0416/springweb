
$(document).ready(function() {
	$('#objBirdLeft').hover(function() {
	  $(this).attr('src', 'spring/images/bird1.jpg');
	}, function() {
	  $(this).attr('src', 'spring/images/bird3.jpg');
	});
});

$(document).ready(function() {
    $( "#myImg" ).mouseover(function(){
        $(this).attr("src", "http://www.jqueryui.com/images/logo.gif");
    });

    $( "#myImg" ).mouseout(function(){
        $(this).attr("src", "http://static.jquery.com/files/rocker/images/logo_jquery_215x53.gif");
    });
});
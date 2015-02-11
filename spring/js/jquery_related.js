
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


$(function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 100 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // run the effect
      $( "#objBirdLeft" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#objBirdLeft:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // set effect from select menu value
    $( "#button" ).click(function() {
      runEffect();
    });
 
    $( "#objBirdLeft" ).hide();
  });
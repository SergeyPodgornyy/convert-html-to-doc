var $plainHTML = $("#plainHTML"),
	$submit = $("input[type='submit'"),
	$downloadBtn = '<a href="file.pdf" class="btn btn-success" id="downloadBtn" role="button">Download file</a>';

$plainHTML.keyup(function(){
	if($plainHTML.val().length!==0){
		// $submit.removeClass('disabled');
		$submit.removeAttr('disabled');
	} else {
		$submit.attr('disabled', 'disabled');
	}
});

$("#target").submit(function( event ) {
  event.preventDefault();
  alert( "Handler for .submit() called." );

  $("#downloadBtn").remove();

  $.ajax({
  	url: 'script.php',
  	type: 'POST',
  	data: $plainHTML.val()
  })
  .done(function(msg) {
  	console.log("success");

	$("#target").append($downloadBtn);
  })
  .fail(function() {
  	console.log("error");
  	// $("#target").append($downloadBtn);
  })
  .always(function(msg) {
  	console.log("complete");
  });
  
});
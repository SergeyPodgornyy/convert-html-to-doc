var $plainHTML = $("#plainHTML"),
	$submit = $("input[type='submit'"),
	$downloadBtn = $('<a href="result/test.doc" class="btn btn-success" id="downloadBtn" role="button">Download file</a>');

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
  $('.alert').remove();

  var dataToSend = 'plainHTML=' + $plainHTML.val();

  $.ajax({
  	url: 'script.php',
  	type: 'POST',
  	data: dataToSend
  })
  .done(function(msg) {
  	console.log("success");

	  $("#target").append($downloadBtn.attr('href', msg));
  })
  .fail(function() {
  	console.log("error");
  	$("#target").append('<div class="alert alert-danger" role="alert"><b>Oh snap!</b> Change a few things up and try submitting again.</div>');
  })
  .always(function(msg) {
  	console.log("complete");
  });
  
});

// http://habrahabr.ru/post/138666/
// http://habrahabr.ru/post/136999/
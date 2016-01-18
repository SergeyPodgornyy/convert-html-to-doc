var $plainHTML = $("#plainHTML"), // textarea for HTML markup
	$submit = $("input[type='submit']"), // Submit button (Convert to DOC)
	$downloadBtn = $('<a href="#" class="btn btn-success" id="downloadBtn" role="button">Download file</a>'); // Button for downloading file

$plainHTML.keyup(function(){
	if($plainHTML.val().length!==0){
		$submit.removeAttr('disabled'); // remove disabled attribute, if content of textarea is not empty
	} else {
		$submit.attr('disabled', 'disabled'); // add disabled attribute, if textarea is empty
	}
});

$("#target").submit(function( event ) {
  event.preventDefault(); // default action of the event will not be triggered

  $("#downloadBtn").remove(); // remove download button
  $('.alert').remove(); // remove DIV element which generated, if the server responds with an error

  var dataToSend = 'plainHTML=' + $plainHTML.val(); // prepare data to send on server

  $.ajax({
  	url: 'script.php', // destination script
  	type: 'POST', // method
  	data: dataToSend // data
  })
  .done(function(msg) {
  	console.log("success");

	  $("#target").append($downloadBtn.attr('href', msg)); // create button to download file

    alert('File has been created!');
  })
  .fail(function() {
  	console.log("error");
  	$("#target").append('<div class="alert alert-danger" role="alert"><b>Oh snap!</b> Change a few things up and try submitting again.</div>'); // create alert box, if the server responds with an error
  })
  .always(function(msg) {
  	console.log("complete"); // will display, when communicating with the server end
  });
  
});
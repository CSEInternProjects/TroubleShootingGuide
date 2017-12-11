function commtttingData(){
	var myKeyVals = {
        "Uid": "userId","emailId": "EmailId"};
    $.ajax({
        type: 'POST',
        //url: "http://kh9331.kitspl.com:3002",
        url: "http://kh9331.kitspl.com:8653",
		data: JSON.stringify(myKeyVals),
        dataType: "json"

    }).done(function(resultData) {
        //alert("Successfully Regestered");
        alertify
  .alert("This is an alert dialog.", function(){
    
  });
        //location.href = "./regester.html";
    }).error(function(error) {
        alert("Something went wrong or User already exists----> " + error);
        //console.log(error);
    });
	}

onClickCommit(value)
{
    alertify.confirm("This is a confirm dialog.",
  function(){
    alertify.success('Ok');
    alert("hii");
  },
  function(){
    alertify.error('Cancel');
    alert("bye");
  });
}    
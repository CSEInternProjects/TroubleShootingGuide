function OnclickOfDelBtn(num,id)
{
    alertify.confirm("Do you want delete this question tag for sure?",
  function(){
    alertify.success('successfully deleted !!');
    deletingTag(num,id);
  },
  function(){
    alertify.error('operation cancled');
    //alert("bye");
  });    
}

function deletingTag(num,id)
{
  num=parseInt(num);
  num=num-100;
  var Requiredleafnode=LeafNodeWhereAnswerIsThereInJsonIs;
  for(var x=0;x<nowJson.length;x++)
  {
    if(nowJson[x].name===Requiredleafnode)
    {
      if(nowJson[x].probStmt.length==1)
      {
      }
      else
      { 
          for(var i=num;i<nowJson[x].probStmt.length-1;i++)
          {
              nowJson[x].probStmt[i]=nowJson[x].probStmt[i+1];
              nowJson[x].solution[i]=nowJson[x].solution[i+1];
          }
      }
      nowJson[x].probStmt.pop();
      nowJson[x].solution.pop();
      //deleting TagThrough Html
      alertify
  .alert("Question tag deleted successfully !! ", function(){
    
  });
      
      id=id.slice(0,id.length-1);
      document.getElementById("forAnsAndCopyBtn").removeChild(document.getElementById(id));
      break;

    }
  }
  
}


function commtttingData(){
	// var myKeyVals = {
 //        "Uid": "userId","emailId": "EmailId"};
    $.ajax({
        type: 'POST',
        url: "http://kh9331.kitspl.com:8653",
        data: JSON.stringify(nowJson),
        dataType: "json"

    }).done(function(resultData) {
        //alert("Successfully Regestered");
        alertify
  .alert("Data committed successfully !! ", function(){
    
  });
        //location.href = "./regester.html";
    }).error(function(error) {
        //alert("Something went wrong or User already exists----> " + error);
        alertify
  .alert("Something went wrong, please check server----> ", function(){
    
  });
        //console.log(error);
    });
	}

function onClickCommit(value)
{
    alertify.confirm("Do you want commit?",
  function(){
    alertify.success('successfull attempt !!');
    commtttingData();
  },
  function(){
    alertify.error('operation cancled');
    //alert("bye");
  });
}



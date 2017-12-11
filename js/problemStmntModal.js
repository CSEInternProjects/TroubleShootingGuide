function problemStatementModal(id,num,question,answer)
{
  document.getElementById("problemInput").value=question;
  document.getElementById("solutionArea").value=answer;
  $('#editProblem').css("display","block");
        ssi_modal.show({
            content:$('#editProblem'),
            keepContent:true,
            title: 'Add Node',
            buttons: [{
                className: 'btn btn-primary',
                label: 'Save',
                closeAfter: true,
                method: function () {
                             saveProblemStatementDetails(num);
                }
            }]
        },id);

      $(".ssi-modalWrapper.medium").css("height","62%");
    }

    function saveProblemStatementDetails(num)
    {
      //alert("saveOptions");
    var  questionInput=$('#problemInput');
    var questionEntered=questionInput[0].value;
   //alert(questionEntered);

   var solutionInput=$('#solutionArea');

   var solutionEntered=solutionInput[0].value;
   //alert(solutionEntered);
    setEditedPartToNowJson(num,questionEntered,solutionEntered);
	}


function onclickAddQuestion(id)
{
  
  $('#editProblem').css("display","block");
        ssi_modal.show({
            content:$('#editProblem'),
            keepContent:true,
            title: 'Add Node',
            buttons: [{
                className: 'btn btn-primary',
                label: 'Save',
                closeAfter: true,
                method: function () {
                             receiveQuestionAndSol();
                }
            }]
        },id);

      $(".ssi-modalWrapper.medium").css("height","62%");
    }

    function receiveQuestionAndSol()
    {
      //alert("saveOptions");
    var  questionInput=$('#problemInput');
    var questionEntered=questionInput[0].value;
  // alert(questionEntered);

   var solutionInput=$('#solutionArea');

   var solutionEntered=solutionInput[0].value;
   //alert(solutionEntered);
   setAddQuestionToNowJson(questionEntered,solutionEntered);
  
  }

  function setAddQuestionToNowJson(question,answer)
 {

  answer=answer.replace(new RegExp('\n', 'g'), '<br>');
  var Requiredleafnode=LeafNodeWhereAnswerIsThereInJsonIs;
  for(var x=0;x<nowJson.length;x++)
  {
    if(nowJson[x].name===Requiredleafnode)
    {   
        var IndexOfNewQuestion=nowJson[x].probStmt.length;
        nowJson[x].probStmt[IndexOfNewQuestion]=question;
        nowJson[x].solution[IndexOfNewQuestion]=answer;
        var num=IndexOfNewQuestion+100;
        fillProblemAndSolution(num,question,answer)
        break;
    }
  }

}

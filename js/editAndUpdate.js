function editAnswerModal(onClickOfEdit)
{


    var text=document.getElementById("forAns").innerHTML;
    text=text.replace(/<br><br>/g, '\r\n');
    document.getElementById("answerArea").value=text;
  $('#editAnswerDiv').css("display","block");
        ssi_modal.show({
            content:$('#editAnswerDiv'),
            keepContent:true,
            title: 'Edit Answer',
            buttons: [{
                className: 'btn btn-primary',
                label: 'Save',
                closeAfter: true,
                method: function () {
                    saveAnswer(onClickOfEdit);
                }
            }]
        },onClickOfEdit.id);
}


function saveAnswer(onClickOfEdit2)
{
var  input=$('#answerArea');
answer=input[0].value;

//alert(answer);
var text=answer;
text=text.replace(new RegExp('\n', 'g'), '<br><br>');
document.getElementById("forAns").innerHTML=text;
upDateAns(text);
}



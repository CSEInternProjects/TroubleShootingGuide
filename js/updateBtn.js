function onclickUpdateBtn(idOfUpdate)
{
	if(idOfUpdate.slice(0,idOfUpdate.length-1)==="1")
	{
		alert("Oops!!\nUpdate on root is not possible");
		return;
	}
	var question;
	var options=[];
	var id=idOfUpdate;
	id=id.slice(0,id.length-1);
	var indexOfQuestion=findsQestionByIdAndReturnsIndex(id);
    var optionString="";
    question=nowJson[indexOfQuestion].Q;
    //console.log(question);
    var optIndex=findsAllOptionsByQuestionIndexAndSendOptionIndex(indexOfQuestion);
    for(var x=0;x<optIndex.length;x++)
    	{
    		options[x]=nowJson[optIndex[x]].op;
    	}
    	//console.log(options);
       for(var z=0;z<options.length;z++)
       {
         var optionString=optionString+options[z];
         	optionString=optionString+",";
       }
       optionString=optionString.slice(0,optionString.length-1);
       document.getElementById("updateInput").value=question;     
       document.getElementById("updateOptionsInput").value=optionString;
       editAnswerModal2(idOfUpdate);

}

function findsQestionByIdAndReturnsIndex(id)
{
	for(var i=0;i<nowJson.length;i++)
		if(nowJson[i].name===id)
			return(i);
}

function findsAllOptionsByQuestionIndexAndSendOptionIndex(indexOfQuestion)
{
	var optionsIds=[];
	//var options=[];
	var opIds=[];
	for(var i=0;i<nowJson[indexOfQuestion].opt.length;i++)
	{	
		optionsIds[i]=nowJson[indexOfQuestion].opt[i].childNode;
		for(var x=0;x<nowJson.length;x++)
			if(nowJson[x].name===optionsIds[i])
			{
				opIds[i]=x;
			}		

	}
	return(opIds);
	
}

function settingUpdate(question,options)
{
	var indexOfQuestion=findsQestionByIdAndReturnsIndex(currentSelected);
    nowJson[indexOfQuestion].Q=question;
    console.log(question);
    var optIndex=findsAllOptionsByQuestionIndexAndSendOptionIndex(indexOfQuestion);
    for(var x=0;x<optIndex.length;x++)
    	{
    		nowJson[optIndex[x]].op=options[x];
    	}
var e = document.getElementById(stackOfDivInDecisionId[stackOfDivInDecisionIdCounter-1]+"s");
   e.selectedIndex=0;
  jsfunction(e);
}



function editAnswerModal2(onClickOfEdit)
{


    
  $('#updateDiv').css("display","block");
        ssi_modal.show({
            content:$('#updateDiv'),
            keepContent:true,
            title: 'Edit Answer',
            buttons: [{
                className: 'btn btn-primary',
                label: 'Save',
                closeAfter: true,
                method: function () {
                    saveFunction(onClickOfEdit);
                }
            }]
        },onClickOfEdit);


}

function saveFunction(onClickOfEdit)
{
		var  input=$('#updateInput');
var question=input[0].value;
var  input2=$('#updateOptionsInput');
var optionString=input2[0].value;
//var s = "The quick brown fox jumps over the lazy dog.";  
var options = optionString.split(",");
 settingUpdate(question,options); 

}
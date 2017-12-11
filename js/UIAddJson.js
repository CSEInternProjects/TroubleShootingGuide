

jQuery(document).ready(function(){

//alert("ready")
  $('#input-option').selectize({
    delimiter: ',',
    persist: false,
    create: function(input) {
        return {
            value: input,
            text: input
        }
    }
});
})


function copyToClipboard(element) {
  var text = $(element).clone().find('br').prepend('\r\n').end().text()
  element = $('<textarea>').appendTo('body').val(text).select()
  document.execCommand('copy')
  element.remove()
}
var currentSelected=0;
var count=1;
var firstTime=0;
var stackOfDivInDecisionId=[],stackOfDivInDecisionIdCounter=-1;
// This will remove all the div tags created after selcetion is done
function jsfunction2(eventForId)
{
	//alert("hii 2 "+eventForId.id);

	var i=0,stackOfDivInDecisionIdCounterTemp=stackOfDivInDecisionIdCounter;

	for(i=0;i<=stackOfDivInDecisionIdCounter;i++)
	{
		if((stackOfDivInDecisionId[i]+"s")==eventForId.id)
		{
             break;
		}
	}

	stackOfDivInDecisionIdCounter=i;
	for(i;i<stackOfDivInDecisionIdCounterTemp;i++)
	{
		var myDiv = document.getElementById("decisions");
		var DivToRemove=document.getElementById(stackOfDivInDecisionId[i+1]);
        myDiv.removeChild(DivToRemove);

	}
}

var firstTime=0;

//API Call is done here
function forTextToJson(eventForId)
	{
		 var saveData = $.ajax({
    		type: 'GET',
    		url: "http://kh9331.kitspl.com:3005",
			//url: "http://konycse.konylabs.net:3005",
    		dataType: "json",
    		cors: true,
    		headers: {

    		}


    	})
      .done(function (resultData)
      {
        console.log(resultData);
        jsfunction(eventForId,resultData);
      });
    //   .error(function (){
    //
    //     alert("Oops!!\nSomething went wrong!!");
    //     console.log('hell');
    // });

	}


nowJson="";
// this will be call on every selection and will parse thre json.
SelectedOPtionText="";
function jsfunction(eventForId,jsonSet2)
{
	//jsonSet =forTextToJson();

	////alert("hii");
	var strUser="1";

	//stackOfDivInDecisionId[stackOfDivInDecisionIdCounter]=strUser;
	if (firstTime===0)
	{
		//getJson();
		nowJson=jsonSet2;
	    document.getElementById('load').style.display="none";
    }
    
	if(firstTime!==0)
	{   var getId=eventForId.id;
		var e = document.getElementById(String(getId));
		strUser = e.options[e.selectedIndex].value;
		SelectedOPtionText=e.options[e.selectedIndex].text;
		if((stackOfDivInDecisionId[stackOfDivInDecisionIdCounter]+"s")===getId)
		{
		if(e.options[e.selectedIndex].value=="")
			{
				document.getElementById("sampleDisplay").style.display = "block";
			    document.getElementById("forAnsAndCopyBtn").style.display = "none";
			    document.getElementById("AddQuestionTag").style.display = "none";
			    document.getElementById("CTagHeadding").innerHTML="Decision Tree";

				if(eventForId.id!==undefined)
				{
		         	var forIdToDeleteExtentNode=eventForId.id;
	             	forIdToDeleteExtentNode=forIdToDeleteExtentNode.slice(0,forIdToDeleteExtentNode.length-1);
	             	if(document.getElementById(forIdToDeleteExtentNode+"e")!==null)
	  				{
						document.getElementById(forIdToDeleteExtentNode+"d").removeChild(document.getElementById(forIdToDeleteExtentNode+"e"));	 
					}
    			}
				return;
			}
		}
		else{
			jsfunction2(eventForId);
			var e = document.getElementById(String(getId));
		    strUser = e.options[e.selectedIndex].value;
			if(e.options[e.selectedIndex].value=="")
			{
				document.getElementById("sampleDisplay").style.display = "block";
			    document.getElementById("forAnsAndCopyBtn").style.display = "none";
			    document.getElementById("AddQuestionTag").style.display = "none";
				document.getElementById("CTagHeadding").innerHTML="Decision Tree";
				if(eventForId.id!==undefined)
				{
		         	var forIdToDeleteExtentNode=eventForId.id;
	             	forIdToDeleteExtentNode=forIdToDeleteExtentNode.slice(0,forIdToDeleteExtentNode.length-1);
	             	if(document.getElementById(forIdToDeleteExtentNode+"e")!==null)
	  				{
						document.getElementById(forIdToDeleteExtentNode+"d").removeChild(document.getElementById(forIdToDeleteExtentNode+"e"));	 
					}
    			}
				return;

			}
		}
	}

	firstTime=1;
	var optionsText=[],optionsValue=[];
	var counter=0;
	////alert("hii"+strUser);
	var j=0,lengthOfOptionsAreSetHere=0, ThisNodeIsLeaf=0;
	var k=0, NewQuestion,optionFromJson=[];
     var myNode = document.getElementById("forAnsAndCopyBtn");
   while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
    }
	for(var i=0;i<nowJson.length;i++)
	{
		if(nowJson[i].name===strUser)
	   	{
	   		for(lengthOfOptionsAreSetHere=0;lengthOfOptionsAreSetHere<nowJson[i].opt.length;lengthOfOptionsAreSetHere++)
				optionFromJson[lengthOfOptionsAreSetHere]=nowJson[i].opt[lengthOfOptionsAreSetHere].childNode;
			//lengthOfOptionsAreSetHere--;
			if(lengthOfOptionsAreSetHere<=0)
			ThisNodeIsLeaf=1;
		}
	}

	for(var i1=0;i1<lengthOfOptionsAreSetHere;i1++)// instead of 5 we can write code to know exact value
	{

		var strUserTemp=optionFromJson[i1];
		for(var i=0;i<nowJson.length;i++)
	{


		if(nowJson[i].name===strUserTemp)
		{
			optionsValue[j]=nowJson[i].name;
			//optionsText[j]=nowJson[i].optionsValue[j];
			optionsText[j]=nowJson[i].op;
			j++;
		}
		if(nowJson[i].name===strUser&&k==0)
		{
			NewQuestion=nowJson[i].Q;
			k=1;
		}
	}
	//counter++;
	}
	if(ThisNodeIsLeaf==1)
	{
		//NewQuestion="Leaf";
    LeafNodeWhereAnswerIsThereInJsonIs=strUser;
    	var ReqQaqId=eventForId.id;
    ReqQaqId=ReqQaqId.slice(0,ReqQaqId.length-1);
   if(document.getElementById(ReqQaqId+"e")===null)
    {
    var parent= document.getElementById(ReqQaqId+"d");
    refElement= document.getElementById(ReqQaqId+"u");
    var y = document.createElement("INPUT");
    y.setAttribute("type", "button");
    y.setAttribute("value", "Extend option");
    y.id=ReqQaqId+"e";
    //x.onclick = addNode(this);
    LeafNodeWhereAnswerIsThereInJsonIs=strUser;
    y.className="extentNodeAndUpdate";
    y.onclick= function(){

       extendNodeModal(y.id);
       //alert("now");
        }
    parent.insertBefore(y, refElement.nextSibling);
    }
    for(var x=0;x<nowJson.length;x++)
	{
		if(nowJson[x].name===strUser)
			{
				NewQuestion=nowJson[x].Q;
				//alertify.alert("Answer: "+NewQuestion, function(){
    			alertify.message('We hope you gotthe answer\nThank you!!');
				document.getElementById("sampleDisplay").style.display = "none";
			    document.getElementById("forAnsAndCopyBtn").style.display = "block";
				document.getElementById("AddQuestionTag").style.display = "block";
				document.getElementById("CTagHeadding").innerHTML=SelectedOPtionText;
				//document.getElementById("forAns").innerHTML=NewQuestion;
				for(var ab=0;ab<nowJson[x].probStmt.length;ab++)
                {
                    fillProblemAndSolution(ab+100,nowJson[x].probStmt[ab],nowJson[x].solution[ab]);
                }
				break;//As we got what we want in json, we  breraking this loop.
			}

	}

	return;
	}
	else{
		        document.getElementById("sampleDisplay").style.display = "block";
			    document.getElementById("forAnsAndCopyBtn").style.display = "none";
				document.getElementById("AddQuestionTag").style.display = "none";
				document.getElementById("CTagHeadding").innerHTML="Decision Tree";
	}
	currentSelected=strUser;
	if(eventForId.id!==undefined)
	{
		var forIdToDeleteExtentNode=eventForId.id;
	    forIdToDeleteExtentNode=forIdToDeleteExtentNode.slice(0,forIdToDeleteExtentNode.length-1);
	    if(document.getElementById(forIdToDeleteExtentNode+"e")!==null)
	  	{
			document.getElementById(forIdToDeleteExtentNode+"d").removeChild(document.getElementById(forIdToDeleteExtentNode+"e"));	 
		}
    }
	var myDiv = document.getElementById("decisions");
	var Qac = document.createElement('div');
	Qac.className = "qac";
	stackOfDivInDecisionIdCounter++;
	stackOfDivInDecisionId[stackOfDivInDecisionIdCounter]=strUser;
	Qac.id=stackOfDivInDecisionId[stackOfDivInDecisionIdCounter];
	var x = document.createElement("INPUT");
    x.setAttribute("type", "button");
    x.setAttribute("value", "Add option");
    x.id=stackOfDivInDecisionId[stackOfDivInDecisionIdCounter]+"p";
    //x.onclick = addNode(this);
	
	x.className="btn btn-primary";
    x.onclick= function(){
      onClickOfAnyButtonIDOfOnCDiv=this.id;
      onClickOfAnyButtonIDOfOnCDiv=onClickOfAnyButtonIDOfOnCDiv.slice(0,onClickOfAnyButtonIDOfOnCDiv.length-1);
      //  addOption(this);
        openOptionsModal(x.id);
        //alert("now");
        }
    var update = document.createElement("INPUT");
    update.setAttribute("type", "button");
    update.setAttribute("value", "update");
    update.id=stackOfDivInDecisionId[stackOfDivInDecisionIdCounter]+"u";
    //x.onclick = addNode(this);
	
	update.className="extentNodeAndUpdate";
    update.onclick= function(){
      
        //alert("update");
        onclickUpdateBtn(this.id);
        }
	 var Qaq = document.createElement('a');
	Qaq.className="qaq";
	Qaq.setAttribute('href',"#");
	Qaq.innerHTML = NewQuestion;
	Qac.appendChild(Qaq);

    var divButtons = document.createElement('div');
  divButtons.className="divButtons";
  divButtons.id=stackOfDivInDecisionId[stackOfDivInDecisionIdCounter]+"d";
  Qac.appendChild(divButtons);
	divButtons.appendChild(x);
    divButtons.appendChild(update);
  //if()
    var selectList = document.createElement("select");
	 //stackOfDivInDecisionIdCounter++;     this is set for at qac already
	//stackOfDivInDecisionId[stackOfDivInDecisionIdCounter]=strUser;
	selectList.id = stackOfDivInDecisionId[stackOfDivInDecisionIdCounter]+"s";
	count++;
	selectList.className="qas";
	divButtons.appendChild(selectList);
	//
	var option = document.createElement("option");
	option.value = "";
    option.text = "Pelase select..";
    selectList.appendChild(option);
	for (var i = 0; i < optionsValue.length; i++) {
    var option = document.createElement("option");
    option.className="qaa";
    option.value = optionsValue[i];
    option.text = optionsText[i];
    selectList.appendChild(option);
}
selectList.options[0].selected=true;
//selectList.setAttribute("onchange",jsfunction2());
selectList.onchange = function() {jsfunction(this)};
myDiv.appendChild(Qac);
	//alert("hii"+strUser);

}
var onClickOfAnyButtonIDOfOnCDiv="";
var LeafNodeWhereAnswerIsThereInJsonIs="";
function addOptionHere(optionsToBeAddedTest)
 {   //currentSelectedAddOption=currentSelectedAddOption.slice(0,currentSelectedAddOption.length-1);
     currentSelectedAddOption=onClickOfAnyButtonIDOfOnCDiv;
    optionsToBeAdded=optionsToBeAddedTest;
     for(var k=0;k<optionsToBeAdded.length;k++)//for each loop it creates a child node in json
     {
      ParentNameSettingToChildByIdCreation=currentSelectedAddOption;
      var j=1;var dot=".";
      ParentNameSettingToChildByIdCreation=ParentNameSettingToChildByIdCreation+dot+j.toString();
      //ParentNameSettingToChildByIdCreation=ParentNameSettingToChildByIdCreation+dot;
    for(var i=0;i<nowJson.length;i++)//create unique id
       {
         //ParentNameSettingToChildByIdCreation=ParentNameSettingToChildByIdCreation+dot+j.toString();
          if(nowJson[i].name===ParentNameSettingToChildByIdCreation)
          {
           ParentNameSettingToChildByIdCreation=ParentNameSettingToChildByIdCreation.slice(0,ParentNameSettingToChildByIdCreation.length-1);
            j++;
            ParentNameSettingToChildByIdCreation=ParentNameSettingToChildByIdCreation+j.toString();
            i=0;
          }
        }
        for(var i=0;i<nowJson.length;i++)//create unique id
       {
        if(nowJson[i].name===currentSelectedAddOption)
      {
        nowJson[i].opt[nowJson[i].opt.length]={"childNode": ParentNameSettingToChildByIdCreation };//appending this child at the end
      }
     }
       nowJson[nowJson.length]={"name": ParentNameSettingToChildByIdCreation,"Q":"fix Ans","op":optionsToBeAdded[k],"opt":[],"probStmt":["need to set qusetion for "+optionsToBeAdded[k]],
		"solution":["need to set answer for "+optionsToBeAdded[k]]};
   }
   var e = document.getElementById(stackOfDivInDecisionId[stackOfDivInDecisionIdCounter-1]+"s");
 	 e.selectedIndex=0;
 	jsfunction(e);
 }
var ans= "This answer is successfully changed";
function upDateAns(ans)
{
    for(var i=0;i<nowJson.length;i++)
    {
        if(LeafNodeWhereAnswerIsThereInJsonIs===nowJson[i].name)
        {
            nowJson[i].Q=ans;
        }
    }
}

function extendNode(question,optionsToBeAddedTest)
{   var optionsToBeAdded=optionsToBeAddedTest;
    for(var i=0;i<nowJson.length;i++)
    {
        if(LeafNodeWhereAnswerIsThereInJsonIs===nowJson[i].name)
        {
            nowJson[i].Q=question;
            nowJson[i].probStmt=[];
            nowJson[i].solution=[];
        }
    }
    currentSelectedAddOption=LeafNodeWhereAnswerIsThereInJsonIs
    for(var k=0;k<optionsToBeAdded.length;k++)//for each loop it creates a child node in json
     {
      ParentNameSettingToChildByIdCreation=currentSelectedAddOption;
      var j=1;var dot=".";
      ParentNameSettingToChildByIdCreation=ParentNameSettingToChildByIdCreation+dot+j.toString();
      //ParentNameSettingToChildByIdCreation=ParentNameSettingToChildByIdCreation+dot;
    for(var i=0;i<nowJson.length;i++)//create unique id
       {
         //ParentNameSettingToChildByIdCreation=ParentNameSettingToChildByIdCreation+dot+j.toString();
          if(nowJson[i].name===ParentNameSettingToChildByIdCreation)
          {
           ParentNameSettingToChildByIdCreation=ParentNameSettingToChildByIdCreation.slice(0,ParentNameSettingToChildByIdCreation.length-1);
            j++;
            ParentNameSettingToChildByIdCreation=ParentNameSettingToChildByIdCreation+j.toString();
            i=0;
          }
        }
        for(var i=0;i<nowJson.length;i++)//create unique id
       {
        if(nowJson[i].name===currentSelectedAddOption)
      {
        nowJson[i].opt[nowJson[i].opt.length]={"childNode": ParentNameSettingToChildByIdCreation };//appending this child at the end
      }
     }
       nowJson[nowJson.length]={"name": ParentNameSettingToChildByIdCreation,"Q":"fix Ans","op":optionsToBeAdded[k],"opt":[],"probStmt":["need to set qusetion for "+optionsToBeAdded[k]],
		"solution":["need to set answer for "+optionsToBeAdded[k]]};
   }

    var e = document.getElementById(stackOfDivInDecisionId[stackOfDivInDecisionIdCounter]+"s");
 	 e.selectedIndex=0;
 	jsfunction(e);	
 		
}

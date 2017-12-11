
globalHider=null;
function sa(solDivid,copyId,editId,divForAllBtnsOnLeftId)
{
  if ($('#'+solDivid).is(':hidden')) {
$('#'+solDivid).show();
} else {
$('#'+solDivid).hide();
}

// hides or show copy button
if ($('#'+copyId).is(':hidden')) {
$('#'+copyId).show();
} else {
$('#'+copyId).hide();
}

//hides edit button
if ($('#'+editId).is(':hidden')) {
$('#'+editId).show();
} else {
$('#'+editId).hide();
}

if(globalHider !== solDivid && globalHider!==null)
{
  if (!($('#'+globalHider).is(':hidden')))
   {

         $('#'+globalHider).hide();
          var editdiv = globalHider.replace("r", "a");

          $('#'+editdiv).hide();

         


  }
}
globalHider=solDivid;

if ($('#'+divForAllBtnsOnLeftId).is(':hidden')) {
$('#'+divForAllBtnsOnLeftId).show();
} 
else {
$('#'+divForAllBtnsOnLeftId).hide();
}
}


function fillProblemAndSolution(num,problem,answer)
{
var probId = num.toString();
var anchorId=num.toString();
anchorId=anchorId+"q";
var answerId=+num.toString();
var copyId=num.toString()+"c";
var editId=num.toString()+"e";
var delBtnId=num.toString()+"d";
var divForAllBtnsOnLeftId=num.toString()+"a";
var IdToSendOnclickOnCopyBtn="'"+copyId+"'";
var IdToSendOnclickOnEditBtn="'"+editId+"'";
var divForAllBtnsOnLeftOnclick="'"+divForAllBtnsOnLeftId+"'";
answerId=answerId+"r";
var IdToSendOnclickOnAnchor="'"+answerId+"'";
var mainDiv=document.getElementById('forAnsAndCopyBtn');

var newDiv=document.createElement('div');
newDiv.className="probDiv";
newDiv.id=probId;
newDiv.innerHTML='<a id='+anchorId+' class="anchorClass" href="#" onclick="sa('+IdToSendOnclickOnAnchor+','+IdToSendOnclickOnCopyBtn+','+IdToSendOnclickOnEditBtn+','+divForAllBtnsOnLeftOnclick+')">'+problem+'</a>';
mainDiv.append(newDiv);

var solDiv=document.createElement('div');
solDiv.id=answerId;
solDiv.className="solDiv";
solDiv.innerHTML=answer;
var divForAllBtnsOnLeft= document.createElement('div');
divForAllBtnsOnLeft.className="divForAllBtnsOnLeft";
divForAllBtnsOnLeft.id=divForAllBtnsOnLeftId;
var xy = document.createElement("INPUT");
    xy.setAttribute("type", "button");
    xy.setAttribute("value", "Copy!");
    xy.id=copyId;
    xy.className="copy";
    xy.style.display = 'inline';
    xy.onclick= function(){
      var setAnswerId=this.id;
      setAnswerId=setAnswerId.slice(0,setAnswerId.length-1);
      setAnswerId=setAnswerId+"r";
      copyToClipboard(setAnswerId)
       // openOptionsModal(x.id);
              }

var edit = document.createElement("INPUT");
    edit.setAttribute("type", "button");
    edit.setAttribute("value", "Edit!");
    edit.id=editId;
    edit.className="edit";
    edit.style.display = 'inline';
    edit.onclick= function(){
    var id=this.id;
    id=id.slice(0,length-1);
    
    OnclickOfEditbutton(this.id,id);
      //alert("hii");
       // openOptionsModal(x.id);
              }
var delBtn = document.createElement("INPUT");
    delBtn.setAttribute("type", "button");
    delBtn.setAttribute("value", "delete!");
    delBtn.id=delBtnId;
    delBtn.className="delBtn";
    //delBtn.style.position = 'absolute';
    delBtn.style.display = 'inline';
    delBtn.onclick= function(){
    var id=this.id;
    id=id.slice(0,length-1);
    OnclickOfDelBtn(id,this.id);
    
      //alert("hii");
       // openOptionsModal(x.id);
              }

newDiv.append(solDiv);
divForAllBtnsOnLeft.append(edit);
divForAllBtnsOnLeft.append(delBtn);
divForAllBtnsOnLeft.append(xy);

    // delBtn.style.position = 'absolute';
    // delBtn.style.top = '10%';
newDiv.append(divForAllBtnsOnLeft);
$('#'+answerId).css({display:'none'});
$('#'+copyId).css({display:'none'});
$('#'+editId).css({display:'none'});
$('#'+divForAllBtnsOnLeftId).css({display:'none'});
}



function OnclickOfEditbutton(Id,num)
{
  num=parseInt(num);
  num=num-100;
  var Requiredleafnode=LeafNodeWhereAnswerIsThereInJsonIs;
  var RequiredQuestion;
  var RequiredSolution;
  for(var x=0;x<nowJson.length;x++)
  {
    if(nowJson[x].name===Requiredleafnode)
    {
        RequiredQuestion=nowJson[x].probStmt[num];
        RequiredSolution=nowJson[x].solution[num];
        break;
    }
  }
  console.log(RequiredSolution);
  if(RequiredQuestion!==undefined&&RequiredSolution!==undefined)
  {
    RequiredSolution=RequiredSolution.replace(/<br>/g, '\r\n');
    console.log(RequiredSolution);
    console.log(RequiredQuestion);
    problemStatementModal(Id,num,RequiredQuestion,RequiredSolution);
  }

}

function setEditedPartToNowJson(num,question,answer)
{
  answer=answer.replace(new RegExp('\n', 'g'), '<br>');
  var Requiredleafnode=LeafNodeWhereAnswerIsThereInJsonIs;
  for(var x=0;x<nowJson.length;x++)
  {
    if(nowJson[x].name===Requiredleafnode)
    {
        nowJson[x].probStmt[num]=question;
        nowJson[x].solution[num]=answer;
        var ToSetId= num+100;
        ToSetId=ToSetId.toString();
        document.getElementById(ToSetId+"q").innerHTML=question;
        document.getElementById(ToSetId+"r").innerHTML=answer;
        break;
    }
  }
}

function copyToClipboard(setAnswerId) {
  
  var element= document.getElementById(setAnswerId);
  setAnswerId=setAnswerId.slice(0,setAnswerId.length-1);
  var questionElement=document.getElementById(setAnswerId+"q");
  var textOfQuestion=questionElement.innerHTML;

  var text = $(element).clone().find('br').prepend('\r\n').end().text()
  text="Question : "+textOfQuestion+"\n\n\n"+text;
  element = $('<textarea>').appendTo('body').val(text).select()
  document.execCommand('copy')
  element.remove()
}
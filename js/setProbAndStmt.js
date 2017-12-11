globalHider=null;
function sa(solDivid,copyId)
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

if(globalHider !== solDivid && globalHider!==null)
{
  if (!($('#'+globalHider).is(':hidden')))
   {

         $('#'+globalHider).hide();
          var cpybtn = globalHider.replace("r", "c");

          $('#'+cpybtn).hide();

         


  }
}
globalHider=solDivid;
}
function fillProblemAndSolution(num,problem,answer)
{
var probId = num.toString();
var anchorId=num.toString();
anchorId=anchorId+"q";
var answerId=+num.toString();
var copyId=num.toString()+"c";
var IdToSendOnclickOnCopyBtn="'"+copyId+"'";
answerId=answerId+"r";
var IdToSendOnclickOnAnchor="'"+answerId+"'";
var mainDiv=document.getElementById('forAnsAndCopyBtn');

var newDiv=document.createElement('div');
newDiv.className="probDiv";
newDiv.id=probId;
newDiv.innerHTML='<a id='+anchorId+' class="anchorClass" href="#" onclick="sa('+IdToSendOnclickOnAnchor+','+IdToSendOnclickOnCopyBtn+')">'+problem+'</a>';
mainDiv.append(newDiv);

var solDiv=document.createElement('div');
solDiv.id=answerId;
solDiv.className="solDiv";
solDiv.innerHTML=answer;
var xy = document.createElement("INPUT");
    xy.setAttribute("type", "button");
    xy.setAttribute("value", "Copy!");
    xy.id=copyId;
    xy.className="copy";
    xy.onclick= function(){
      var setAnswerId=this.id;
      setAnswerId=setAnswerId.slice(0,setAnswerId.length-1);
      setAnswerId=setAnswerId+"r";
      copyToClipboard(setAnswerId)
       // openOptionsModal(x.id);
              }

newDiv.append(solDiv);
newDiv.append(xy);
$('#'+answerId).css({display:'none'});
$('#'+copyId).css({display:'none'});
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
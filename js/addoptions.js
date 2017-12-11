function doCall()
{
  //alert("d")
  $('#simpleDiv').css("display","none");
}

function openOptionsModal(id)
{
//  var idForInput=id+"1";
//   var x = document.createElement("INPUT");
//     x.setAttribute("type", "text");
//     x.setAttribute("placeholder", "Add Options Here");
//     x.id=id;
//     //x.onclick = addNode(this);
// //  x.className="btn btn-primary";
// $('.container').append(x);
  $('#simpleDiv').css("display","block");
        ssi_modal.show({
            content:$('#simpleDiv'),
            keepContent:true,
            title: 'Add Options Here',
            buttons: [{
                className: 'btn btn-primary',
                label: 'Save',
                closeAfter: true,
                method: function () {
                  saveOptions();
                }
            }]
        },id);

        $('#simpleDivInput').selectize({
          delimiter: ',',
          persist: false,
          create: function(input) {
              return {
                  value: input,
                  text: input
              }
          }
      });
    }


function saveOptions()
{
  //alert("saveOptions");
var  input=$('#simpleDivInput');
optionsArray=input[0].value;
addedOptions=optionsArray.split(',');
addOptionHere(addedOptions);

var select = $('#simpleDivInput').selectize();
var control = select[0].selectize;
control.clear();

}


function extendNodeModal(id)
{
//  var idForInput=id+"1";
//   var x = document.createElement("INPUT");
//     x.setAttribute("type", "text");
//     x.setAttribute("placeholder", "Add Options Here");
//     x.id=id;
//     //x.onclick = addNode(this);
// //  x.className="btn btn-primary";
// $('.container').append(x);
  $('#extendNodeDiv').css("display","block");
        ssi_modal.show({
            content:$('#extendNodeDiv'),
            keepContent:true,
            title: 'Add Node',
            buttons: [{
                className: 'btn btn-primary',
                label: 'Save',
                closeAfter: true,
                method: function () {
                  saveExtendNodeDetails();
                }
            }]
        },id);

        $('#optionsInput').selectize({
          delimiter: ',',
          persist: false,
          create: function(input) {
              return {
                  value: input,
                  text: input
              }
          }
      });
    }

function saveExtendNodeDetails()
    {
      //alert("saveOptions");
    var  questionInput=$('#questionInput');
    var questionEntered=questionInput[0].value;
   //alert(questionEntered);
    var  input=$('#optionsInput');
    optionsArray=input[0].value;
    addedOptions=optionsArray.split(',');
 // alert(addedOptions);
    extendNode(questionEntered,addedOptions);
   var select = $('#optionsInput').selectize();
    var control = select[0].selectize;
    control.clear();

   }
function makeimg(){
  document.getElementById("file").click();
}
function previewfile(){
  const preview = 
  document.querySelector("input[type=file]").files[0];
  const reader = new FileReader();

  reader.addEventListener("load",function() {
    preview.src = reader.result;
             alert(reader.result);
  }
   );

  if(file){
    reader.readAsDataURL(file);
  }
}

function validate(){
  var fname = document.getElementById('fname');
  var pnumber = document.getElementById('pnumber'); 
  var service= document.getElementById('service');
  var local = document.getElementById('local');

  if(fname.value==''){
    onError(fname,'')
  }
    else {
      onSuccess(pnumber)
    }

    
  }
  if (pnumber.value==''){
    onError(pnumber,'')
  }
  else {
    onSuccess(service)
  }
  if(service.value==''){
    onError(service,'')
  }
  else {
    onSuccess(local)
  }
  if(local.value==''){
    onError(local,'')
  }
  else {
    onSuccess()
  }
  alert('Thank you' +fname.value)


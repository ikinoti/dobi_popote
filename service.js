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
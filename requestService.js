function validator(){
    var name= document.getElementById('name');
    var address= document.getElementById('address');
    var email= document.getElementById('email');
    var typeofservice= document.getElementById('typeofservice');
    var describe = document.getElementById('describe');
    

    if(name.value.trim() ==''){
        alert('Name cannot be blank');
        name.focus();
        return false;
    }
    if(address.value ==''){
        alert('Addres cannot be blank');
        address.focus();
        return false;
    }
    if(email.value ==''){
        alert('email cannot be blank');
        mobile.focus();
        return false;
    }
    if(typeofservice.value ==''){
        alert('Select a type of service');
        typeofservice.focus();
        return false;
    }
    if(describe ==''){
        alert('this section cannnot be empty');
        describe.focus();
        return false;
    }
    alert('Thank you  '+name.value +' for booking  with us');
}
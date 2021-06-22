function validate(){
    var name= document.getElementById('name');
    var address= document.getElementById('address');
    var mobile= document.getElementById('mobile');
    var typeofservice= document.getElementById('typeofservice');


    if(name.value ==''){
        alert('Name cannot be blank');
        name.focus();
    }
    if(address.value ==''){
        alert('Addres cannot be blank');
        address.focus();
    }
    if(mobile.value ==''){
        alert('Mobile number cannot be blank')
        mobile.focus();
    }
    if(typeofservice.value ==''){
        alert('Select a type of service')
        typeofservice.focus();
    }
    alert('Thank you for booking with us');
}



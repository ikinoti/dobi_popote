
function validater(){
    var fName=document.getElementById('fname');
    var sName= document.getElementById('lname');
    var mail = document.getElementById('email');
    var phone= document.getElementById('phone');

// if (fName.value == '' || sName)

    if(fName.value=='' ){
        alert('Dear user, input your first name');
        fName.focus();
        return false;
    }
    if(sName.value==''){
        alert('Dear '+fName.value+' '+sName.value +'Enter your second name');
        fName.focus();
        return false;
    }
    if(phone.value==''){
        alert('Dear '+fName.value+' '+'Enter your phone number')
        fName.focus();

    }
    if(mail.value==''){
        alert('Dear '+fName.value+' '+'Enter your Email address')
        mail.focus()

    }
    

    alert('Thank you '+fName.value+'For submitting this form')
    // return true;
};
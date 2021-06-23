
function validater(){
    var fName=document.getElementById('fname');
    var sName= document.getElementById('lname');
    var mail = document.getElementById('email');
    var phone= document.getElementById('phone');
    var address = document.getElementById()

// if (fName.value == '' || sName)

    if(fName.value=='' ){
        alert('Dear user, input your first name');
        fName.focus();
        return false;
    }
    if(sName.value==''){
        alert('Dear '+fName.value+' '+sName.value +'Enter your second name');
        sName.focus();
        return false;
    }
    if(phone.value==''){
        alert('Dear '+fName.value+' '+'Enter your phone number')
        phone.focus();
        return false;

    }
    if(mail.value==''){
        alert('Dear '+fName.value+' '+'Enter your Email address')
        mail.focus();
        return false;
    }
    if(add)
    

    alert('Thank you '+fName.value+'\n We shall contact you soon')
     return true;
};

////////////////////////////////////

function newsletter(){
    var email=document.getElementById('subscribe');
    if(email.value==''){
        alert('Dear user, kindly fill your email \n to join our mailing list');
        return false;
        mail.focus
    
    }
    alert('Thank you for subscribing to our newsletter');
    return true;
}



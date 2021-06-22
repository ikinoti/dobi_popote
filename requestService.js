
    const name= document.getElementById('name');
    const address= document.getElementById('address');
    const mobile= document.getElementById('mobile');
    const typeofservice= document.getElementById('typeofservice');
    const fom = document.getElementById('form');

    FormData.addEventListener('submit', (e)=>) {
        e.preventDefault();
    }

    if(name.value ==''){
        setErrorfor(name,'Name cannot be blank');
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
    Push.Message('Thank you for booking with us');
}



function fvalid() {
    var name = document.forms["RegForm"]["Name"];
    var email = document.forms["RegForm"]["EMail"];
    var phone = document.forms["RegForm"]["Telephone"];
    var what = document.forms["RegForm"]["Subject"];
    var password = document.forms["RegForm"]["Password"];
    var address = document.forms["RegForm"]["Address"];
   

    if (name.value == "") {
        alert("Dear User, Please enter your name.");
        name.focus();
        return false;
    }

    if (address.value == "") {
        window.alert("Dear "+name.value+" Please enter your address.");
        address.focus();
        return false;
    }

    if (email.value == "") {
        window.alert(
            "Dear "+name.value+" Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    if (phone.value == "") {
        window.alert(
            "Dear "+name.value+" Please enter your telephone number.");
        phone.focus();
        return false;
    }

    if (password.value == "") {
        window.alert("Dear "+name.value+" Please enter your password");
        password.focus();
        return false;
    }

    if (what.selectedIndex < 1) {
        alert("Dear "+name.value+" Please delect type of service.");
        what.focus();
        return false;
    }

    window.alert("Thank you "+name.value+" For your submission")
}
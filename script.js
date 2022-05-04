function email_validatiopn(event) {
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
        return true;
    } else {
        alert("Your email is invalid");
        location.reload();
    }
}

function password_validation(event) {
    //8 letter password, with at least a symbol, upper and lower case letters and a number
    if(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(event.target.value)){
        return true;
    } else {
        alert("Your password is invalid"); 
        location.reload();  
    }
}
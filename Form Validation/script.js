

function validate_form(){



    var name = document.getElementById('fname').value;
    console.log(name);
    var email = document.getElementById('femail').value;
    var phone = document.getElementById('fphnumber').value;
    var pass1 = document.getElementById('fpassword').value;
    var pass2 = document.getElementById('cpassword').value;

    var valid = true;

    if(name == ""){
        document.getElementById('fnameError').innerHTML = "Name is required";
        valid = false;
    }
    else{
        valid = true;
    }
    if(email == "" || !validateEmail(email)){
        document.getElementById('femailError').innerHTML = "Email is required";
        valid = false;
    }
    else{
        valid = true;
    }
    if(phone == "" ){
        document.getElementById('fphnumberError').innerHTML = "Phone number is required";
        valid = false;
    }
    if(phone.length != 10){
        document.getElementById('fphnumberError').innerHTML = "Phone number must be 10 digits";
        valid = false;
    }
    else if(phone.length == 10){
        for(var i=0; i <phone.length; i++){
            if(phone[i] < '0' || phone[i] > '9'){
                document.getElementById('fphnumberError').innerHTML = "Phone number is required";
                valid = false;
                }
            }
        }
    else{
        valid = true;
    }
    if(pass1 == ""){
        document.getElementById('fpasswordError').innerHTML = "Password is required";
        valid = false;
    }
    else{
        valid = true;
    }
    if(pass2 == ""){
        document.getElementById('cpasswordError').innerHTML = "Confirm password is required";
        valid = false;
    }
    else if(pass1 != pass2){
        document.getElementById('cpasswordError').innerHTML = "Password does not match";
        valid = false;
    }
    else{
        valid = true;
    }
    if(valid){
        alert("Form submitted successfully");
        document.getElementsByTagName('p').innerHTML = "";
        }
    return valid;
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

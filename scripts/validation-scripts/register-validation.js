function nameValidation(){
	var name = document.registerForm.passengerName.value;
    var namePartition = name.split(" ");
    var partition = namePartition.length;
    
    if(partition == 2){
    } else if(partition == 3){
    } else {
        alert(" Please provide a valid name.");
        document.getElementById("orangeForm-name").value = "";
    }
}

function emailValidation(){
	var email = document.registerForm.passengerEmailId.value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos+2 || dotpos+2 >= email.length) {
        alert("Not a valid e-mail address");
        document.getElementById("orangeForm-email").value = "";
        return false;
    }
}

function passwordValidation(){
	var password = document.registerForm.passengerPassword.value;
	var confirmPassword = document.registerForm.passengerConfirmPassword.value;
	if(!(password === confirmPassword)){
		alert("Both password are not same!");
        document.getElementById("orangeForm-pass").value = "";
        document.getElementById("orangeForm-confirm-pass").value = "";
    }
}

function contactNoValidation(){
	var contactNo = document.registerForm.passengerContactNo.value;
    var errMsg = "";
    var lengthOfContactNo = contactNo.length;
    
    if(lengthOfContactNo != 10){
        errMsg = "Contact no must be of 10 digits.";
    } else if(contactNo < 0){
        errMsg = "Please enter the valid contact no.";
    }
    
    if(errMsg != ""){
        alert(errMsg);
        document.getElementById("orangeForm-phone").value = "";
    }
}
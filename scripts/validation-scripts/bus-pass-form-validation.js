function nameValidation(){
	var passengerName = document.busPassForm.passengerName.value;
    var namePartition = passengerName.split(" ");
    var partition = namePartition.length;
    
    if(partition == 2){
    } else if(partition == 3){
    } else {
        alert(" Please provide a valid name.");
        document.busPassForm.passengerName.value = "";
    }
}

function isDigits(name){
    var letters = /^[A-Za-z]+$/;
    if(!letters.test(name)){
        return true;
    }
    return false;
}


function dateOfBirthValidation(){
	var passengerDOB = document.busPassForm.passengerDOB.value;
    //It you want to validate date then add your code here.
}

function busRouteFromValidation(){
	var busRouteFrom = document.busPassForm.busRouteFrom.value;
}

function busRouteToValidation(){
	var busRouteTo = document.busPassForm.busRouteTo.value;
}

function cityValidation(){
	var city = document.busPassForm.city.value;
    if(isDigits(city)){
        alert(" Please provide a valid city name.");
        document.busPassForm.city.value = "";
    }
}

function addressValidation(){
	//Here, message means address
	var address = document.busPassForm.message.value;
    if(address.length < 20){
        alert(" Addresss must contains 20 characters");
        document.busPassForm.message.value = "";
    }
}
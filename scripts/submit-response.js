function submitReason(){
    var applicationId = document.getElementById("applicationId").value;
    var reasonOfReject = document.getElementById("reason-of-reject").value;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","/pmt-pass/jsp-pages/submit-reason.jsp?applicationId="+getURL()+"&reasonOfReject="+reasonOfReject,false);
    xmlhttp.send();
    output = xmlhttp.responseText;
    if(parseInt(output.trim()) == 1){
        document.getElementById("success-alert-id").style.display = 'block';
        window.location = "admin-dashboard.html?applicationId="+applicationId;
    }
}
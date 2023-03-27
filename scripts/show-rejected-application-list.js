function showRejectedApplicationList(){
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","/pmt-pass/jsp-pages/show-rejected-application-list.jsp",false);
    xmlhttp.send();
    output = xmlhttp.responseText;
    document.getElementById("show-rejected-application-list-table-body").innerHTML = output.trim();
}
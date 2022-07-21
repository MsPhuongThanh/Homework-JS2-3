function quydoi(){
    var USD = document.getElementById("USD").value*1;
    
   
    var VND = USD * 23500;
    document.getElementById("alert").innerHTML ="<p>" + VND + "</p>";
    
    }
function dientichHCN(){
var length = document.getElementById("length").value*1;
var width = document.getElementById("width").value*1;

var area = length * width ;
document.getElementById("alert1").innerHTML ="<p>" + area + "</p>";
}

function chuviHCN(){
var length = document.getElementById("length").value*1;
var width = document.getElementById("width").value*1;

var perimeter = 2 * (length + width) ;
document.getElementById("alert2").innerHTML ="<p>" + perimeter + "</p>";

}
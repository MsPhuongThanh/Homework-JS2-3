function giatritrungbinh(){
var number1 = document.getElementById("number1").value*1;
var number2 = document.getElementById("number2").value*1;
var number3 = document.getElementById("number3").value*1;
var number4 = document.getElementById("number4").value*1;
var number5 = document.getElementById("number5").value*1;

var medium = (number1 + number2 + number3 + number4 + number5)/ 5;
document.getElementById("alert").innerHTML ="<p>" + medium + "</p>";

}
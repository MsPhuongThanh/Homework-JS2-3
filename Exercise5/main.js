document.getElementById("alert").onclick = funtion();{
// Input: Đặt biến 
    var number = document.getElementById("number").value*1;

// Xử lý 
var ten = Math.floor(number % 100 / 10);
var unit = number % 10;
var sum = ten + unit ; 
var currentFormat = new Intl.NumberFormat("vn-VN");


result += "<p> Tổng hai ký số </p>";
result +="<p>" + currentFormat.format(tong) + "</p>";
result += "</div>";

// Output
document.getElementById("alert").innerHTML = result; 

}
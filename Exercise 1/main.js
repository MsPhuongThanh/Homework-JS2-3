function Calculate(){
//Dom lấy các giá trị từ input 
var wage = +document.getElementById("wage").value;
var workinghours = +document.getElementById("workinghours").value;

//Tính tiền lương 
var currectyFormat = new Intl.NumberFormat("vn-VN");
var salary = wage * workinghours;

// In ra 

// Output
document.getElementById("alert").innerHTML ="<p>" + salary +"</p>";
};



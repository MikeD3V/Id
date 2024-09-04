var UserName = document.getElementById("name");
var UserLrn = document.getElementById("lrn");
var UserAddress = document.getElementById("address");
var UserNumber = document.getElementById("number");
var UserSex = document.getElementById("sex");


 var Wname = window.prompt("Enter Name:");
 var Wlrn = window.prompt("Enter  LRN:");
 alert("Enter Address")
 var Province = window.prompt("Province:");
 var City = window.prompt("City:");
 var Barangay = window.prompt("Barangay:");


 var Wnumber = window.prompt("Enter your Number:");
 var Wsex = window.prompt("Sex:");

 UserName.textContent = Wname.toUpperCase();
 UserLrn.textContent = Wlrn.toUpperCase();
 UserAddress.textContent = (Province + " "+ City + " "+ Barangay).toUpperCase();
 UserNumber.textContent = Wnumber.toUpperCase();
 UserSex.textContent = Wsex.toUpperCase();

if(Wname == ""){
    UserName.textContent = "N/A";
}
if(Wlrn == ""){
    UserLrn.textContent = "N/A";
}
if(Wnumber == ""){
    UserNumber.textContent = "N/A";
}
if(Wsex == ""){
    UserSex.textContent = "N/A";
}
if(Province,City,Barangay == ""){
    UserAddress.textContent = "N/A";
}




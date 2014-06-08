
$(function () {
    var year = new Date().getFullYear();
    $("#copyright").append(' ' + year);
 
});

function savefield(fieldName) {
    var value = document.getElementById(fieldName).value;
     localStorage.setItem(fieldName, value);
	 
	 
};

function loadAll() {


    document.getElementById("name").value = localStorage.getItem("name");
    document.getElementById("idNo").value = localStorage.getItem("idNo");
    document.getElementById("email").value = localStorage.getItem("email");
    document.getElementById("phoneNum").value = localStorage.getItem("phoneNum");
	document.getElementById("mobileNum").value = localStorage.getItem("mobileNum");
    document.getElementById("birthDate").value = localStorage.getItem("birthDate");
	document.getElementById("licenceNum").value = localStorage.getItem("licenceNum");
   

   
   
}

var tmpname="";
function validateForm() {

 
    var tel = document.getElementById("phoneNum").value;
    var hometel = document.getElementById("mobileNum").value;
	
    if ((tel == null ||tel == "") && (hometel == null ||hometel == "")) {
            alert("You must fill in  mobile phone or home phone ");
        return false;
    }
    else {
        $.ajax({
            type: "POST",
            url: "submit.php",
            data: "userNo",
            success: function () {
             //   alert("Registration Completed");
            },
        });
        alert("Registration Completed");
		
		   //להצגת שם המשתמש בדף הבית

tmpname=document.getElementById("name").value;;

 

		window.open("#pagehome", "_self")
     // document.getElementById('login').html="הצלחת";
    }
}
//שתילת null במקום ניקוי כל הזיכרון
function clearForm() {
 
	
	//שתילת NULL בזיכרון
        localStorage.setItem("name", null);
        localStorage.setItem("idNo", null);
        localStorage.setItem("email", null);
        localStorage.setItem("phoneNum", null);
        localStorage.setItem("phoneNum", null);
        localStorage.setItem("mobileNum", null);
        localStorage.setItem("birthDate", null);
        localStorage.setItem("licenceNum", null);
	// ניקוי השדות למשתמש הבא שיכנס	
	document.getElementById("name").value = "";
    document.getElementById("idNo").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNum").value = "";
	document.getElementById("mobileNum").value = "";
    document.getElementById("birthDate").value = "";
	document.getElementById("licenceNum").value = "";
			
//alert(localStorage.getItem("name"));
	


}
function showForm(){
alert(localStorage.getItem("name")+" "+ localStorage.getItem("idNo")+" "+localStorage.getItem("email")+" "+localStorage.getItem("phoneNum")+" "+localStorage.getItem("mobileNum")+" "+localStorage.getItem("birthDate")+" "+localStorage.getItem("licenceNum"))
}
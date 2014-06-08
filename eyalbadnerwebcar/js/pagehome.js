

$(function () {
//פונקציה לבדיקת רישום כניסה לאתר במקרה שיש משתמש יופיע שמו במקרה שאין ידרש מילוי פרטים לפני
loadAll();

 	nameinlocalstorage=localStorage.getItem("name")
	   idNoinlocalstorage =localStorage.getItem("idNo");
	if (localStorage.getItem("name")!== "" && localStorage.getItem("name")!== "null"){
	 $("#loginname").html(" Hi "+nameinlocalstorage+" Your ID No: "+idNoinlocalstorage+" if is not you Click Log out or Select Car");
	  $("#loginbutton").hide();
	  $("#logoutbutton").show();
	  	  $("#selectcarbutton").show();
		   $("#selectcarbuttonNoLog").hide();
	  
	 }else{
	 loadAll();//טוען נתונים מ localStorage
	  $("#loginname").html("Hi Click Log in before Select Car");
	 $("#loginbutton").show();
	 $("#logoutbutton").hide();
	  $("#selectcarbutton").hide();
	  $("#selectcarbuttonNoLog").show();
	 }
	 

});

//פונקציה שבודקת האם יש שם של אדם בזיכרון מסתירה או מראה כפתורים בהתאמה

// מנקה את בסיס הנתונים רענון הדף ומציגה כפתור הרשמה מחדש
function logout(){

 clearForm();
   // localStorage.clear();
	window.open("mainCar.html#pagelogin", "_self");		  
}

function noLoginclickSelect(){
 alert("You need log in before select Car Thank you ");
}

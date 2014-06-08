var dataNames = localStorage.getItem("namesListCarBADNER");
var personalinfo = JSON.parse(dataNames);
var indxinpage=0;//אינדקס הסופר מספר פעמים שנכנסו לדף


$(function () {

	carlist()  
 
})

function carlist() {//לוקחת נתונים ומסדרת בטבלה
	



	
	
    var i = 0;
	//מיון המערך לפי שמות הרכב יצרן
	personalinfo = _.sortBy( personalinfo , 'namecar' );
	  
    for (i = 0; i < personalinfo.length ; i++) {
        if(personalinfo[i].Stock==="true"){//רשימה שמציגה רק מי שבמלאי
        $("#namesListCar ul").append('<li value = "' + i + ' " id = "' + i + '">' +
		"<a href='#directionmap‬' data-role='button' data-icon='forward' data-iconpos='right' >"
		+"<img src='images/car"+i+".png'>"+ 
		personalinfo[i].namecar+"<br/> Car number: " + 
		personalinfo[i].numberCar+" Year: "+ 
		personalinfo[i].manufactureYear +"<br/> Gear: " +
		personalinfo[i].gear +" Stock: " +
		personalinfo[i].Stock + "</a>"+'</li>');
		}
		else{//רשומה של מכוניות שלא במלאי
		 $("#namesListCarback ul").append('<li value = "' + i + ' " id = "' + i + ' " >' +
		"<a href='#carback' data-role='button' data-icon='forward' data-iconpos='right' >"
		+"<img src='images/car"+i+".png'>"+ 
		personalinfo[i].namecar+"<br/> Car number: " + 
		personalinfo[i].numberCar+" Year: "+ 
		personalinfo[i].manufactureYear +"<br/> Gear: " +
		personalinfo[i].gear +" Stock: " +
		personalinfo[i].Stock + "</a>"+'</li>');
		}
	}
/////פונקציות של השכרת רכב מהחברה/////////
$("#namesListCar li" ).bind('click', function(e){
 idgo = $(this).attr('id');
	 nidgo=parseInt(idgo)
  
// הצגת הנתונים של המכונית הנבחרת
   $("#divcar_rental").html(" <center><img src='images/car"+idgo+".png'><center><b>This car you want "+personalinfo[idgo].namecar+" Gear:"+personalinfo[idgo].gear+" car number:"+personalinfo[idgo].numberCar+" </b>");
   
// כאשר המשתמש ילחץ חשב הפונקציה תשלח נתונים לחישוב המחיר בקובץ חיצוני עובד עבודה במקביל   
  $( "#tocalculate" ).click(function() { 
  
  //בשביל השיר
      var sound=document.getElementById("wait")
	      sound.play();
	  
		 $.mobile.loading( 'show',{textVisible:true}) 
		 setTimeout(work,3000);
		
    	})   

function work(){
window.open("#car_rental_quote", "_self")		
  var worker1 = new Worker('js/doWorkCarCost.js');
  
  var routeDistance=dist;

	  		   
  if(personalinfo[idgo].gear=="Auto"){//גיר אוטמטי יקבל 1 ידני יקבל 2 
  var igear="1"; // גיר אוטמטי
  }else{
  var igear="2"; // גיר ידני 
  }
 // alert(igear);
   
 	 // console.log(WrouteDistance);
 worker1.postMessage({ 'igear': igear, 'routeDistance': routeDistance }); // Send data to our worker.  

worker1.onmessage = function(e) {
  price=e.data;
  
  $("#Pricerental").html("The price for rent is :"+price);
  
}
	
}
   
   //קריאה לפונקציה להוצאת הרכב מהחברה ושינוי ללא זמין שולחת מספר מזהה של הרכב הנבחר
   $( "#endregistration" ).click(function() { 
     cargoout(idgo)
	
	}) 

});



////////////// פונקציות של החזרת רכב לחברה/////////
	
// קבלת רשומה שהמשתמש בחר להחזיר

$("#namesListCarback li" ).bind('click', function(e){
 id = $(this).attr('id');
	 nid=parseInt(id)
	 
	
	 
// הצגת הנתונים של המכונית הנבחרת
   $("#divcarback").html(" <center><img src='images/car"+nid+".png'><center><b>Do you want to return the  "+personalinfo[nid].namecar+" Gear:"+personalinfo[nid].gear+" car number:"+personalinfo[nid].numberCar+" </b>");
   
   
   
 // אחרי אישור הכנסת הרכב למלאי החברה
 $( "#carbackcance" ).click(function() { 
     carback(nid)
	
	})

  });
} 

//שינוי המלאי לקיים  
function carback(nid){
 	personalinfo[nid].Stock="true"; 
		localStorage.setItem("namesListCarBADNER",JSON.stringify(personalinfo))
	    
        alert("Thanks for returning the car hope to see you in future");
	
}

//רענון טבלה  לעמוד
// גם לרשומות המכוניות במלאי וגם למכוניות שלא במלאי יש צורך אחרי הוצאה או קבלה לרענן את הרשומות מחדש כדי לראות את השינויים
function pagcarbackindxinpage(){
// כדי לרענן את דף טבלת מכוניותבמלאי אחרי לחציה בכפתור כניסה לדף נמתין עד שיטען ואז נפעיל רענון
	var t = setTimeout("location.reload()", 100);

  
}

//שינוי המלאי ללא קיים
function cargoout(nidgo){
 	personalinfo[nidgo].Stock="false"; 
		localStorage.setItem("namesListCarBADNER",JSON.stringify(personalinfo))
	    
        alert("Thank you for renting our services wishing you a safe trip");
	 window.open("#pagehome", "_self")
}




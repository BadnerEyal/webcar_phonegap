$(document).ready(function () {

     if (localStorage.getItem('namesListCarBADNER') == null) {
        var listOfCar = [
		{namecar:"Audi" ,numberCar : "3398022", manufactureYear : "1944", Stock: "true" , gear: "Auto"},
		{namecar:"Bmw" ,numberCar: "123557989", manufactureYear: "1998", Stock: "true", gear: "Manual"},
        {namecar:"Ford" ,numberCar: "4569874", manufactureYear: "2013", Stock: "true", gear: "Auto"},
		{namecar:"Lamborghini" ,numberCar: "124558987", manufactureYear: "2012", Stock: "false", gear: "Auto"},
        {namecar:"Pontiac", numberCar: "1235489", manufactureYear: "2014", Stock: "false", gear: "Manual"}];
		
	//	_.sortBy(listOfCar,"namecar");// מיון לפי שם האוטו
	
	  //  listOfCar =_sortBy(listOfCar,"namecar");
		
        localStorage.setItem("namesListCarBADNER", JSON.stringify(listOfCar));
   }
});




$(document).ready(function () {
//Local Storage
 if (!Modernizr.localstorage) {
        alert("This is not going to work here... no Local Storage support\nPlease update your browser")
    }
   
//���� 

    if (!Modernizr.geolocation) {
        alert("This is not going to work here... no Geo-Location support\nPlease update your browser")
    }

//������

    if (!Modernizr.canvas) {
        alert("This is not going to work here... no Canvas support\nPlease update your browser")
    }
//�����	
	if (!Modernizr.webworkers) {
      alert("This is not going to work here... no Web workers support\nPlease update your browser" )
   }
	
   
  });
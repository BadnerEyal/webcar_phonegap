		
$(function () {
  PreloadImages()
 
});	
var canvas;
		var context;
		var slideNum=0;
		var images=new Array();
var canvas;
		var context;
		var slideNum=0;
		var images=new Array();	
	function PreloadImages()
	{
		var pic=new Image();
	
		images[0]="images/image-1.jpg";
		images[1]="images/image-2.jpg";
		images[2]="images/image-3.jpg";
		images[3]="images/image-4.jpg";
		images[4]="images/image-5.jpg";
	
		
		for(var i=0; i<images.length; i++)
		{
			pic.src=images[i];
		}
		changeImage()
	}

        function drawImage(currentImageURL) {
            canvas = document.getElementById('myCanvas');    
            context = canvas.getContext('2d');
			
            var img = new Image();
            img.src = currentImageURL;
		
            img.onload =function () {context.drawImage(img, 0, 0, 200, 200);};
			
       }
	  
	   
	   function changeImage(){
	   drawImage(images[slideNum]);
	   if(slideNum<4)
	   {
	  slideNum++
	  }
	  else{
	  slideNum=0
	  }
	   setTimeout('changeImage()',3000)
	   }
	   
	   
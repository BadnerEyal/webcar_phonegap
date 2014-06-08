onmessage = function(x) {
var Wigear = parseInt(x.data.igear);//גיר
 var WrouteDistance = parseInt(x.data.routeDistance);//מרחק 
 var cost = 0;

 console.log(WrouteDistance);

  if (WrouteDistance< 90) {
			//eקטן מ90 קמ
                cost = WrouteDistance* 1.2;
            }
            else {
                cost = WrouteDistance*0.9;
            };
	 console.log(cost);		
			
	 if (Wigear==2){//2 אומר גיר ידני
			cost=cost*0.9
     }
	cost=parseInt(cost);	 

      console.log(cost);
  postMessage(cost);
}

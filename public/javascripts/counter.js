
$(document).ready(function(){
	$("img.in").hover(
	function() {
	$(this).stop().animate({"opacity": "0"}, "slow");
	},
	function() {
	$(this).stop().animate({"opacity": "1"}, "slow");
	});
});


	var minutos_mil = min * 60000; // 
	var segundos_mil = sec * 1000; // 0
	var segundos = moment.duration(segundos_mil).seconds(); // 
	var minutos = moment.duration(minutos_mil).minutes(); // 
	var amount = minutos_mil + segundos_mil + 1000;
	var menos = (minutos_mil + segundos_mil) - 1000;
	var segundomenos = moment.duration(menos).seconds(); // 

	//console.log(amount);

function GetCount(){

        
      //  alert (dateNow);
      	amount = amount - 1000;
        //console.log(amount);
        delete dateNow;

        /* time is already past */
        if(amount < 0){
                out=
				"<div id='mins'><span></span>00<div id='mins_text'></div></div>" + 
				"<div id='secs'><span></span>00<div id='secs_text'></div></div>" +
				"<audio autoplay='autoplay'>"+
				 "<source src='sound/bell.mp3' type='audio/mpeg' />"+
				 "</audio>" ;
              //  document.getElementById('countbox').innerHTML=out;       
        }
        /* date is still good */
        else{
                days=0;hours=0;mins=0;secs=0;out="";


                mins= moment.duration(amount).minutes(); /* minutes */
                
                secs= moment.duration(amount).seconds(); /* seconds */

                str_mins = new String (mins); 
				str_secs = new String (secs);

				if (str_mins.length == 1) str_mins = "0" + str_mins;
				if (str_secs.length == 1) str_secs = "0" + str_secs; 
	
                out=
				"<div id='mins'><span></span>" + str_mins +"<div id='mins_text'></div></div>" + 
				"<div id='secs'><span></span>" + str_secs +"<div id='secs_text'></div></div>" ;
                document.getElementById('countbox').innerHTML=out;
			
               // console.log(amount);
                setTimeout("GetCount()", 1000);
        }
}


window.onload=function(){GetCount();}



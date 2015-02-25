
var bannerAD=new Array();    
var adNum=1;  
var init = true;

$.getJSON('project.json', function(data) {
	bannerAD = data.Banner;
});
/*
bannerAD[0]="spring/images/background/header1b.jpg";
bannerAD[1]="spring/images/background/header2b.jpg";
bannerAD[2]="spring/images/background/header3b.jpg";
bannerAD[3]="spring/images/background/header4b.jpg";
bannerAD[4]="spring/images/background/header5b.jpg";
bannerAD[5]="spring/images/background/header7b.jpg";
bannerAD[6]="spring/images/background/header8b.jpg";
bannerAD[7]="spring/images/background/header9b.jpg";
bannerAD[8]="spring/images/background/header11b.jpg";
bannerAD[9]="spring/images/background/header12b.jpg";
bannerAD[10]="spring/images/background/header13b.jpg";
bannerAD[11]="spring/images/background/header14b.jpg";*/


function nextAd(){
	if(init === true){
			setTimeout("nextAd()", 10000);
			init = false;
		}
		else
		{
		$(".header img").fadeTo(3000,0.01,"swing", function(){
			
				$('.header img').load(function() {
    			$(".header img").fadeTo(3000,1,"swing");
				}).attr("src", bannerAD[adNum]);
			
				//$(".header img").attr("src", bannerAD[adNum]);
			});
		
				if(adNum<bannerAD.length-1)
					adNum++ ;
				else 
					adNum=0;
				setTimeout("nextAd()", 16000);
		}
}

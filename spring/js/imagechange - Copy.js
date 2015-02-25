
var bannerAD=new Array();  
var bannerADlink=new Array();  
var adNum=0;  
var opacity = 1.0;
var fadeOut = false;


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
bannerAD[11]="spring/images/background/header14b.jpg";

preloadedimages=new Array();
for (i=0;i<bannerAD.length;i++){
	preloadedimages[i]=new Image();
	preloadedimages[i].src=bannerAD[i];
}


function nextAd(){
	bannerADrotator.style.opacity = opacity;
	if(fadeOut == true){
		opacity -= 0.005;		
		if(opacity<0){
			if(adNum<bannerAD.length-1)
				adNum++ ;
			else 
				adNum=0;
			
			opacity = 0;
			fadeOut = false;
		}
		theTimer=setTimeout("nextAd()", 10);
	}
	else{
		opacity += 0.005;
		
		if(opacity > 1){
			theTimer=setTimeout("nextAd()", 5000);
			opacity = 1;
			fadeOut = true;	
		}
		else{
			theTimer=setTimeout("nextAd()", 10);
		}
		
	}
	
	document.images.bannerADrotator.src=bannerAD[adNum];
}

function displayStatusMsg() {
	status=bannerADlink[adNum];
	document.returnValue = true;
}  

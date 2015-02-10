
var bannerAD=new Array();  
var bannerADlink=new Array();  
var adNum=0;  
var opacity = 1.0;
var fadeOut = false;


bannerAD[0]="spring/images/title.jpg";
bannerAD[1]="spring/images/facemountain.jpg";

preloadedimages=new Array();
for (i=0;i<bannerAD.length;i++){
	preloadedimages[i]=new Image();
	preloadedimages[i].src=bannerAD[i];
}

function setTransition(){
	if (document.all){
		bannerADrotator.filters.revealTrans.Transition=Math.floor(Math.random()*23);
		bannerADrotator.filters.revealTrans.apply();
	}
}

function playTransition(){
	if (document.all)
		bannerADrotator.filters.revealTrans.play()
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
	
	//setTransition();
	document.images.bannerADrotator.src=bannerAD[adNum];
	//playTransition();
}

function displayStatusMsg() {
	status=bannerADlink[adNum];
	document.returnValue = true;
}  

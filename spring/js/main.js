	//For switching banner 
	var banner=new Array();   
	var adNum=0;  
	var opacity = 1.0;
	var fadeOut = false;
	
	


	
	var projectList = new Array();
	var projectListPic = new Array();
	
	//preload information
	$.getJSON('project.json', function(data) {
		banner = data.Banner;

		projectList = data.ProjectList;
		for(i = 0; i < projectList.length; i++){
			projectListPic[i] = new Image();
			projectListPic[i].src = projectList[i].image;
		}
		
		for(i = 0; i < projectList.length; i++){
			var pageName = projectList[i].linkPath;
			$(".project_list").append('<div id= '+pageName+' class="divAutoAdd"><p> '+projectList[i].name+'</p>  </div>');
			$('#' + pageName).prepend(projectListPic[i]);
			$('#' + pageName).click(function(){ 
				jumpToProjectPage( $(this).context.id );
			});
		}		
  });
	
	var init = true;
	function nextBanner(){
		if(init === true){
			setTimeout("nextBanner()", 10000);
			init = false;
		}
		else
		{
		$(".header img").fadeTo(3000,0.01,"swing", function(){
			
				$('.header img').load(function() {
    			$(".header img").fadeTo(3000,1,"swing");
				}).attr("src", banner[adNum]);
			
				//$(".header img").attr("src", bannerAD[adNum]);
			});
		
				if(adNum<banner.length-1)
					adNum++ ;
				else 
					adNum=0;
				setTimeout("nextBanner()", 16000);
		}
	}
	
	
	function jumpToProjectPage(pg) {
		//$( ".content" ).css("display", "");
		//window.location.href= pg+ '.html';
		//window.location.href= 'projectM1.html';
		sessionStorage.setItem('projectIndex', pg);
		window.open('projectTest.html', '_blank');
		sessionStorage.setItem('session', 'project');
		//window.sessionStorage.clear();
		//window.sessionStorage["projectIndex"] = pg;

		
 };
	

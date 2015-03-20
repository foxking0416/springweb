	//For switching banner 
	var banner=new Array();   
	var adNum=0;  
	var opacity = 1.0;
	var fadeOut = false;
	
	


	
	/*var buildNorth = new Array();
	var buildMid = new Array();
	var buildSouth = new Array();
	var buildEast = new Array();
	var buildNorthPic = new Array();
	var buildMidPic = new Array();
	var buildSouthPic = new Array();
	var buildEastPic = new Array();*/
	var projectList = new Array();
	var projectListPic = new Array();
	
	//preload information
	$.getJSON('project.json', function(data) {
		banner = data.Banner;
		//buildNorth = data.North;
		//buildMid = data.Mid;
		//buildSouth = data.South;
		//buildEast = data.East;
		projectList = data.ProjectList;
		for(i = 0; i < projectList.length; i++){
			projectListPic[i] = new Image();
			projectListPic[i].src = projectList[i].image;
		}
		
		/*for(i = 0; i < buildNorth.length; i++){
			buildNorthPic[i] = new Image();
			buildNorthPic[i].src = buildNorth[i].image;
		}
		
		for(i = 0; i < buildMid.length; i++){
			buildMidPic[i] = new Image();
			buildMidPic[i].src = buildMid[i].image;
		}
		
		for(i = 0; i < buildSouth.length; i++){
			buildSouthPic[i] = new Image();
			buildSouthPic[i].src = buildSouth[i].image;
		}
		
		for(i = 0; i < buildEast.length; i++){
			buildEastPic[i] = new Image();
			buildEastPic[i].src = buildEast[i].image;
		}*/
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
	
	
	for(i = 0; i < projectList.length; i++){
		var pageName = projectList[i].linkPath;
		$(".project_list").append('<div id= '+pageName+' class="divAutoAdd"><p> '+projectList[i].name+'</p>  </div>');
		$('#' + pageName).prepend(projectListPic[i]);
		$('#' + pageName).click(function(){ 
			jumpToProjectPage( $(this).context.id );
		});
	}		
	
	/*
	function regionChange(eleId){
		$(".project_list").empty();

		if(eleId ==='selectN'){
			$(".selectN").addClass('current');
			$(".selectM").removeClass('current');
			$(".selectS").removeClass('current');
			$(".selectE").removeClass('current');
			
			$(".taiwan_map").removeClass('north');
			$(".taiwan_map").removeClass('middle');
			$(".taiwan_map").removeClass('south');
			$(".taiwan_map").removeClass('east');
			$(".taiwan_map").addClass('north');
			
			
		}
		else if(eleId === 'selectM'){
			$(".selectN").removeClass('current');
			$(".selectM").addClass('current');
			$(".selectS").removeClass('current');
			$(".selectE").removeClass('current');

			$(".taiwan_map").removeClass('north');
			$(".taiwan_map").removeClass('middle');
			$(".taiwan_map").removeClass('south');
			$(".taiwan_map").removeClass('east');
			$(".taiwan_map").addClass('middle');

			for(i = 0; i < buildMid.length; i++){
				var pageName = buildMid[i].linkPath;
				$(".project_list").append('<div id= '+pageName+' class="divAutoAdd"><p> '+buildMid[i].name+' </p> </div>');
				$('#' + pageName).prepend(buildMidPic[i]);
				$('#' + pageName).click(function(){ 
					jumpToProjectPage( $(this).context.id );
				});
			}
		}
		else if(eleId === 'selectS'){
			$(".selectN").removeClass('current');
			$(".selectM").removeClass('current');
			$(".selectS").addClass('current');
			$(".selectE").removeClass('current');
			
			$(".taiwan_map").removeClass('north');
			$(".taiwan_map").removeClass('middle');
			$(".taiwan_map").removeClass('south');
			$(".taiwan_map").removeClass('east');
			$(".taiwan_map").addClass('south');
						
			for(i = 0; i < buildSouth.length; i++){
				var pageName = buildSouth[i].linkPath;
				$(".project_list").append('<div id= '+pageName+' class="divAutoAdd" ><p> '+buildSouth[i].name+'</p>  </div>');
				$('#' + pageName).prepend(buildMidPic[i]);
				$('#' + pageName).click(function(){ 
					jumpToProjectPage( $(this).context.id );
				});
			}
		}
		else if(eleId === 'selectE'){
			$(".selectN").removeClass('current');
			$(".selectM").removeClass('current');
			$(".selectS").removeClass('current');
			$(".selectE").addClass('current');
						
			$(".taiwan_map").removeClass('north');
			$(".taiwan_map").removeClass('middle');
			$(".taiwan_map").removeClass('south');
			$(".taiwan_map").removeClass('east');
			$(".taiwan_map").addClass('east');
	
			for(i = 0; i < buildEast.length; i++){
				var pageName = buildEast[i].linkPath;
				$(".project_list").append('<div id= '+pageName+' class="divAutoAdd" ><p> '+buildEast[i].name+'</p>  </div>');
				$('#' + pageName).prepend(buildMidPic[i]);
				$('#' + pageName).click(function(){ 
					jumpToProjectPage( $(this).context.id );
				});
			}
		}
	}*/
	
	function jumpToProjectPage(pg) {
		//$( ".content" ).css("display", "");
		//window.location.href= pg+ '.html';
		//window.location.href= 'projectM1.html';
		window.open('projectTest.html', '_blank');
		window.sessionStorage["session"] = "project";
		window.sessionStorage["projectIndex"] = "s3";
 };
	

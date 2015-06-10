

	
	$( document ).ready(function() {
		var cw = $('.header').width();
		cw = cw * 0.3;
		$('.header').css({'height':cw+'px'});
	});
	
	//For switching banner 
	var banner=new Array();   
	var adNum=0;  
	var opacity = 1.0;
	var fadeOut = false;
	

	var projectList = new Array();
	var projectListPic = new Array();
	var positionCollection={};
	//preload information
	$.getJSON('project.json', function(data) {
		banner = data.Banner;
		preloadImages(banner);//preload banner image

		projectList = data.ProjectList;
		for(i = 0; i < projectList.length; i++){
			if(projectList[i].detail === 'True'){
				projectListPic[i] = new Image();
				projectListPic[i].src = projectList[i].image;
			}
			
			positionCollection[projectList[i].linkPath]=[projectList[i].posX, projectList[i].posY, projectList[i].scaleX, projectList[i].scaleY]; 
		}
		
		for(i = 0; i < projectList.length; i++){
			if(projectList[i].display === 'True'){
				var pageName = projectList[i].linkPath;
				if(projectList[i].detail === 'True'){
					$(".project_list").append('<div id= '+pageName+' class="divAutoAdd"><p>'+projectList[i].startYear+'年_'+projectList[i].name+'</p></div>');
					$('#' + pageName).prepend(projectListPic[i]);
					$('#' + pageName).click(function(){ 
						jumpToProjectPage( $(this).context.id );
					});
				}
				else{
					$(".project_list").append('<div id= '+pageName+' class="divAutoAddWithoutDetail"><p>'+projectList[i].startYear+'年_'+projectList[i].name+'</p>  </div>');
				}
				
				$('#' + pageName).hover(function () {
					var projectId = $(this).context.id;
					$('.region_select').css('background-position', positionCollection[projectId][0] + 'px ' + positionCollection[projectId][1] + 'px');
					$('.region_select').css('background-size', positionCollection[projectId][2] + 'px ' + positionCollection[projectId][3] + 'px');
					setTimeout(function(){ $(".region_select img").toggle("blind", {}, 100)}, 1000);
					//$(".region_select img").toggle("blind", {}, 500);
				}, function () {
					$('.region_select').css('background-position', 0 + 'px ' + 0 + 'px');
					$('.region_select').css('background-size', 460 + 'px ' + 100 + '%');
					$(".region_select img").toggle("blind", {}, 10);
				});
			}
		}		
  });
	

	var init = true;
	function nextBanner(){
		if(init === true){
			init = false;
			$(".header img").attr("src", banner[0]);
		}
		$('.header img').load(function() {
				$('.header img').fadeTo(1000, 1);
				setTimeout(function() {
					$('.header img').fadeOut(1000, LoadImages);
				}, 10000);
		});
	}
	
	
	/*var init = true;
	function nextBanner(){
		if(init === true){
			init = false;
			LoadImages();
			setTimeout("nextBanner()", 3000);
		}
	  else
		{
			$(".header img").fadeTo(1000,0.01,"swing", function(){
			
				$('.header img').load(function() {
    			$(".header img").fadeTo(1000,1,"swing");
				}).attr("src", banner[adNum]);
			
				
			});
		
			
			//setTimeout("nextBanner()", 4000);
		}
	}*/
	
	function LoadImages() {
		if(adNum<banner.length-1)
				adNum++ ;
			else 
				adNum=0;
		$(".header img").attr("src", banner[adNum]);
	}
	
	function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}
	
	
	function jumpToProjectPage(pg) {
		sessionStorage.setItem('projectIndex', pg);
		window.open('projectInfo.html', '_blank');
		sessionStorage.setItem('session', 'project');
  };
 
 	function jumpFromProjectToOther(destination){
		sessionStorage.setItem('session', destination);
		window.location.href='index.html';
	};
	
	
	

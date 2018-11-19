require(["config"], function(){
	require(["jquery","header","hot","mainfloor","banner","footer"], function($,header,hot,mainfloor,banner,footer){

		
		new Promise(function(resolve, reject){
			
			
			$("header").load("/html/component/header.html", function(){
				header.init();
				
				resolve();
			});
		}).then(function(){
			
		})
        $("hot").load("/html/component/hot.html", function(){
			
		});
		$("mainfloor").load("/html/component/mainfloor.html", function(){
			
		});
		mainfloor.init();
		$("banner").load("/html/component/banner.html", function(){
			banner.init();
		});
		

        $("footer").load("/html/component/footer.html", function(){
        	
        });
	})
})
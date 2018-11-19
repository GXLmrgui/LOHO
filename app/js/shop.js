require(["config"], function(){
	require(["jquery","header","list","jquerycookie","footer"], function($,header,list,jquerycookie,footer){
		
			
			
		$("header").load("/html/component/header.html", function(){
				header.init();
				
		});
		$("list").load("/html/component/list.html", function(){
	            list.init();
	    });
		
		$("footer").load("/html/component/footer.html", function(){
	    
	    });
	})
})
		

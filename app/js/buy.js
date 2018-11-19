require(["config"], function(){
	require(["jquery","header","product","jquerycookie","footer"], function($,header,product,jquerycookie,footer){
		
			
			
		$("header").load("/html/component/header.html", function(){
				header.init();
				
		});
		$("product").load("/html/component/product.html", function(){
	           product.init();
	    });
		
		$("footer").load("/html/component/footer.html", function(){
	    
	    });
	    
	    
	})
})
		

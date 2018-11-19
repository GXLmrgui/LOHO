define(["jquery","glass","template","jquerycookie"], function($,glass,template,jquerycookie){
	function List(){}
	
	List.prototype.init=function(){
		$(".glass").load("/html/component/glass.html",function(){
			    		glass.init();
			    		
			    		
		    		
			    	})
	    var ali=$("#btnbox li");
	    
	    $(".test").click(function(e){
	    	e=e||event;
	    	if(e.target.id=="test11"){
		    	    $(".glass").html("");
			    	$(".glass").load("/html/component/glass.html",function(){
			    		glass.init();
			    		
		    		
			    	})
		    	
		    }
		    
		});
	  
	}
	return new List();
	
})

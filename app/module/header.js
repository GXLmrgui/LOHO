define(["jquery","jquerycookie"], function($,jquerycookie){
	function Header(){}
	    Header.prototype.init=function(){
	    	if($.cookie('name')){
	    		$("#nouser").hide();
	    		
	    		$("#username").html("lhsj_"+$.cookie('name'));
	    		$("#welcome").show();
	    	}
		    $("#navOne").mousemove(function(){
		    	
		    	//$("#list1").css("display","block");
		    	$("#list1").css({"display":"block","z-index":99});
		    	
		    	
		    })
		    $("#navOne").mouseleave(function(){
		    	$("#list1").hide();
		    })
		    $("#navTow").mousemove(function(){
		    	
		    	//$("#list1").css("display","block");
		    	$("#list2").css({"display":"block","z-index":99});
		    	
		    	
		    })
		    $("#navTow").mouseleave(function(){
		    	$("#list2").hide();
		    })
		    $("#navThree").mousemove(function(){
		    	
		    	//$("#list1").css("display","block");
		    	$("#list3").css({"display":"block","z-index":99});
		    	
		    	
		    })
		    $("#navThree").mouseleave(function(){
		    	$("#list3").hide();
		    })
		    $("#navFour").mousemove(function(){
		    	
		    	//$("#list1").css("display","block");
		    	$("#list4").css({"display":"block","z-index":99});
		    	
		    	
		    })
		    $("#navFour").mouseleave(function(){
		    	$("#list4").hide();
		    })
		    $("#navFive").mousemove(function(){
		    	
		    	//$("#list1").css("display","block");
		    	$("#list5").css({"display":"block","z-index":99});
		    	
		    	
		    })
		    $("#navFive").mouseleave(function(){
		    	$("#list5").hide();
		    })
		    $("#navSix").mousemove(function(){
		    	
		    	//$("#list1").css("display","block");
		    	$("#list6").css({"display":"block","z-index":99});
		    	
		    	
		    })
		    $("#navSix").mouseleave(function(){
		    	$("#list6").hide();
		    })
	}
	return new Header();
})

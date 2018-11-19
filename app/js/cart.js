require(["config"], function(){
	require(["jquery","template","jquerycookie"], function($,template,jquerycookie){
	    	if($.cookie('name')){
	    		$("#nouser").hide();
	    		
	    		$("#username").html("lhsj_"+$.cookie('name'));
	    		$("#welcome").show();
	    	}
	    	var myCookie=$.cookie("addid");
	    	var allId = JSON.parse(myCookie)||[];
	        var allprice=0;
	        function Qiuhe(){
	        	for(var j=0;j<allId.length;j++){
	        		console.log(allId);
	        	}
	        }
	    	for(var i=0;i<allId.length;i++){
      		    var id=allId[i].idName;
      		    var num=allId[i].num;
      		    var price=allId[i].price;
      		    var a1=allId[i].a1;
      		    var img=allId[i].img;
      		    allprice+=price*num;
	  		    var arr={
	    		    	"id":id,
	    		    	"num":num,
	    		    	"price":price,
	    		    	"a1":a1,
			    	    "img":img
	  		    };
    		    var product=[];
	 		    product.push(arr);
	  		    
  		    }   
	    	    
	    	    var str1 = template("pro-template",{product: allId});
				$(".alls").html(str1);
                $(".alls").on("click",".jian",function(e){
                	e=e||event;
                	
                	var inputnum=parseInt($(this).next().val());
              	    if(inputnum==0){
              		    $(this).next().val(0);
             	    }else{
              		    $(this).next().val(inputnum-1);
                 	}
             	    inputnum=parseInt($(this).next().val());
             	    var price1=parseInt($(this).parent().prev().html());
             	    $(this).parent().next().html(inputnum*price1);
                	Qiuhe();
                });
                $(".alls").on("click",".jia",function(e){
                	e=e||event;
                	
                	var inputnum=parseInt($(this).prev().val());
              	    
              		$(this).prev().val(inputnum+1);
                 	inputnum=parseInt($(this).prev().val());
             	    var price1=parseInt($(this).parent().prev().html());
             	    $(this).parent().next().html(inputnum*price1);
                	
                });
                $(".alls").on("click",".del",function(e){
                	e=e||event;
                	
                	var r=confirm("你确定将此商品移除购物车？");   
                    if(r==true){
                    	$(this).parent().remove();
                    }
                	
                });
                
				
				
				$(".allprice").html(allprice);
			
				
    		    
 	}) 
})    
	     		   
    		  
					
	    		
	    	
	    	
	    	
	    


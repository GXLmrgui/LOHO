define(["jquery","template","jquerycookie"], function($,template,jquerycookie){
	function Glass(){}
	
	Glass.prototype.init=function(){
		var myCookie=$.cookie("addid");
	    var allId=JSON.parse(myCookie)||[];
	    //var allId=[];
	    
	    
		$.ajax({
			url:"http://localhost/LOHO/loho-gulp-require/projectserver/api/glass.php",
			method:"POST",
			dataType:"json",
			success: function(res){
				if(res.code==1){
					var html = template("pro-template",{product: res.product});
					
				    $("#newglass").html(html);
				    
				    $(".btn-group").click(function(e){
				    	e=e||event;
				    	var listid=e.target.id;
				    	$.cookie('id', listid, { expires: 7, path: '/' });
				    	
				    })
				    
				    $(".p2").on("click",".span3",function(e){
				    	e=e||event;
				    	var b=e.target.id;
				    	var bprice=0;
				    	var ba1="";
				    	var bimg="";
				    	
				    	for(var i=0;i<allId.length;i++){
				    		if(allId[i].idName==b){
				    			allId[i].num++;
				    		    break;
				    		}
				    	}
				    	if(i==allId.length){
			    		    console.log(b);
				    		var obj={"idName":b,"num":1,"price":res.product[b-1].price,"a1":res.product[b-1].a1,"img":res.product[b-1].img1};
				    		allId.push(obj);
				    	}
				    	var cookId= JSON.stringify(allId);
				    	
				    	$.cookie('addid',cookId,{ expires: 7, path: '/' });
				    })
				}
			}
		})
	}
	return new Glass();
	
})

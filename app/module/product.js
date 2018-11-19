define(["jquery","template","tools","jquerycookie"], function($,template,tools,jquerycookie){
	
	function Product(){};
	
	Product.prototype.init=function(){
		
		var listid=$.cookie('id');
		
		$.ajax({
			type:"POST",
			url:"http://localhost/LOHO/loho-gulp-require/projectserver/api/product.php",
			dataType:"json",
			data:{"listid":listid},
			success: function(res){
				if(res.code == 1){
					var str1 = template("product-template",{product: res.product});
					$("#product-box").html(str1);
				    var box = $("#fdjbox"),
						fdj = $("#zoom"),
					    big = $("#big"),
						bigImg = $("#bigImg");	
					$("#fdjbox").mouseover(function() {
					    $("#zoom").show();
					    $("#big").show();
					})
					$("#fdjbox").mouseout(function() {
					    $("#zoom").hide();
					    $("#big").hide();
					})
		            $("#fdjbox").mousemove(function(e) {
					    var l = e.pageX - $("#small").offset().left - ($("#zoom").width() / 2);
					    var t = e.pageY - $("#small").offset().top - ($("#zoom").height() / 2);
					    if (l < 0) {
					        l = 0;
					    }
					    if (l > $(this).width() - $("#zoom").width()) {
					        l = $(this).width() - $("#zoom").width()
					    }
					    if (t < 0) {
					        t = 0;
					    }
					    if (t > $(this).height() - $("#zoom").height()) {
					        t = $(this).height() - $("#zoom").height()
					    }
					
					    $("#zoom").css({
					        "left": l,
					        "top": t
					    })
					    var pX = l / ($("#fdjbox").width() - $("#zoom").width());
					    var pY = t / ($("#fdjbox").height() - $("#zoom").height());
					    $("#bigImg").css({
					        
					        "left": -pX * ($("#bigImg").width() - $("#big").width()),
					        "top": -pY * ($("#bigImg").height() - $("#big").height())
					    })
					
					
					
					})
		            
							
						
				}
			}
		})
	}
	return new Product();
})

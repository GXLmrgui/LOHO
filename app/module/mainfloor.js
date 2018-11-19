define(["jquery","template"], function($,template){
	
	function Mainfloor(){};
	
	Mainfloor.prototype.init=function(){
		
		
	    $.ajax({
			url:"http://localhost/LOHO/loho-gulp-require/projectserver/api/mainfloor.php",
			method:"POST",
			dataType:"json",
			success: function(res){
				if(res.code === 1){
					
					var str1 = template("floor1-template",{product: res.product[0]});
				    $("#floor1").html(str1);
				    var str2 = template("floor2-template",{product: res.product[1]});
				    $("#floor2").html(str2);
				    var str3 = template("floor3-template",{product: res.product[2]});
				    $("#floor3").html(str3);
				    var str4 = template("floor4-template",{product: res.product[3]});
			        $("#floor4").html(str4);
				    var str5 = template("floor5-template",{product: res.product[4]});
				    $("#floor5").html(str5);
				    var str6 = template("floor6-template",{product: res.product[5]});
				    $("#floor6").html(str6);
				}
			}
		})
    }
	return new Mainfloor();
})

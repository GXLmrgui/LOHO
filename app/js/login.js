require(["config"], function(){
	require(["jquery","jquerycookie","footer"], function($,jquerycookie,footer){
		new Promise(function(resolve, reject){
			$("#vcode").load("/html/component/code.html");
        	resolve();
        }).then(function(){
		   
	    })
		new Promise(function(resolve, reject){
				$("footer").load("/html/component/footer.html", function(){
	        	resolve();
	        });
			}).then(function(){
			   
		    })
		    $("form").submit(function(e){
		        var username=$("#username").val();
			    var password=$("#password").val(); 
			    $.ajax({
				type:"POST",
				url:"http://localhost/LOHO/loho-gulp-require/projectserver/api/login.php",
				data:{username:username,password:password},
				dataType:"json",
				success: function(res){
						if(res.code === 0){
							alert("用户名或密码错误！");
							
						}else{
							
							$.cookie('name', username, { expires: 7, path: '/' });
							alert("登录成功");
							window.location.href="/index.html";
							
						}
					}
					
		     	})
				e.preventDefault();
			    return false;
			})
			
	})
})
		

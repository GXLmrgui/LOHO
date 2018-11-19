require(["config"], function(){
	require(["jquery","footer"], function($,footer){
		new Promise(function(resolve, reject){
			$("#vcode").load("/html/component/code.html");
        	resolve();
        }).then(function(){
		   
	    })
        
			var flag=[false,false,false,false];
			$("#phone").focus(function(){
				var $parent=$(this).parent();
				$parent.find(".msg").remove();
				$parent.find(".rmsg").remove();
				var Msg="手机号为国内11位有效号码";
				$parent.append("<span class='msg'>" + Msg + "</span>");
			})
			$("#phone").blur(function(){
				var regPhone = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
				var rightbmsg="手机号码有效";
				var erroy1msg="不是一个有效的手机号，请重新输入";
				var erroy2msg="手机号已经被占用，请重新输入";
				var $parent=$(this).parent();
				$parent.find(".msg").remove();
				$parent.find(".rmsg").remove();
				var username=$("#phone").val();
				username=$.trim(username);
				
				$.ajax({
					url:"http://localhost/LOHO/loho-gulp-require/projectserver/api/register.php",
					data:{username:username},
					method:"POST",
					dataType:"json",
					success: function(res){
						
						if(res.code === 0){
							$parent.append("<span class='msg'>" + erroy2msg + "</span>");
							
						}else if(!regPhone.test(username)){
							$parent.append("<span class='msg'>" + erroy1msg + "</span>");
						}else{
							$parent.append("<span class='rmsg'>" + rightbmsg + "</span>");
							flag[0]=true;
							
						}
					}
				})
				
			})
			$("#pass1").focus(function(){
				var $parent=$(this).parent();
				$parent.find(".rmsg").remove();
				$parent.find(".msg").remove();
				var Msg="密码开头为字母，长度为6-12位";
				$parent.append("<span class='msg'>" + Msg + "</span>");
			})
			$("#pass1").blur(function(){
				var regPass = /^[a-zA-Z]\w{5,11}$/;
				var $parent=$(this).parent();
				var Msg2="密码不符合要求，请重新设置";
				var rMsg="密码符合要求";
				var password=$("#pass1").val();
				$parent.find(".rmsg").remove();
				$parent.find(".msg").remove();
				var Msg="密码开头为字母，长度为6-12位";
				if(!regPass.test(password)){
					$parent.append("<span class='msg'>" + Msg2 + "</span>");
				}else{
					$parent.append("<span class='rmsg'>" + rMsg + "</span>");
					flag[1]=true;
				};
			})
			$("#pass2").blur(function(){
				
				var password=$("#pass1").val();
				var password2=$("#pass2").val();
				
				var $parent=$(this).parent();
				
				$parent.find(".msg").remove();
				
				var pMsg="密码不相同";
				if(password!=password2){
					$parent.append("<span class='msg'>" + pMsg + "</span>");
				}else{
					flag[2]=true;
					$parent.find(".msg").remove();
				}
			})
            if($("#checkbox").attr("checked", true)){
				
				flag[3]=true;
			}
			
			$("#form").submit(function(e){
				e=e||event;
				var username=$("#phone").val();
				    username=$.trim(username);
				var password=$("#pass1").val();
				    password=$.trim(password);
				var isPass = flag.every(function(item){
					return item;
				});
				$.ajax({
						type:"POST",
						url:"http://localhost/LOHO/loho-gulp-require/projectserver/api/register2.php",
						data:{name:username,pass:password},
						dataType:"json",
						success: function(res){
							console.log(res);
						    if(res.code==1){
						    	
						       	alert("注册成功");
						       	window.location.href="/html/login.html";
						       	
						    }else{
						    	alert("注册失败");
						    	//flag[3]=false;
					            return false;
						    }
						}
					
					})

				e.preventDefault();
				return false;
			})
        
        new Promise(function(resolve, reject){
				$("footer").load("/html/component/footer.html", function(){
	        	resolve();
	        });
			}).then(function(){
			   
		    })
	})
})
		

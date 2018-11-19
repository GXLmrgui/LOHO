define(["jquery","jquerycookie"], function($){
	function Banner(){}
	
	Banner.prototype.init=function(){
	    var $banner=$("#banner"),
	        $ul = $("#div1 ul"),
		    $imgs = $("#div1 ul li"),
	        $btns = $("#div1 ol li"),
	        $ol= $("#div1 ol");

		var index = 0; //当前播放的图片下标
		var flag = false; //默认没有开始播放
		var timer = null;
		$btns.click(function(){
			if(!flag){
				flag = true;
				$(this).addClass("ac").siblings().removeClass("ac");
				$imgs.eq(index).fadeOut();
				index = $(this).index();
				$imgs.eq(index).fadeIn(function(){
					flag = false;
				});
			}
			
		})
		
		$("#goPrev").click(function(){
			if(!flag){
				flag = true;
				$imgs.eq(index).fadeOut();
				if(--index < 0){
					index = $imgs.length-1;
				}
				$btns.eq(index).addClass("ac").siblings().removeClass("ac");
				$imgs.eq(index).fadeIn(function(){
					flag = false;
				});
			}
			
		
		})
		
		$("#goNext").click(function(){
			if(!flag){
				flag = true;
				$imgs.eq(index).fadeOut();
				if(++index >= $imgs.length){
					index = 0;
				}
				$btns.eq(index).addClass("ac").siblings().removeClass("ac");
				$imgs.eq(index).fadeIn(function(){
					flag = false;
				});
			}
		})
		$banner.mousemove(function(){
			$("#goPrev").css({"display":"block","z-index":11});
			$("#goNext").css({"display":"block","z-index":11});
			$ol.css({"display":"block","z-index":11});;
		});
		$ul.mouseout(function(){
			$("#goPrev").hide();
			$("#goNext").hide();
			$ol.hide();
		});
		
		/*var auto = (function autoPlay(){
			timer = setInterval(function(){
				$("#goNext").trigger("click");
			},2000);
			return autoPlay;
		})()*/
		
		$("#div1").hover(function(){
			clearInterval(timer);
		},(function autoPlay(){
			timer = setInterval(function(){
				$("#goNext").trigger("click");
			},2000);
			return autoPlay;
		})()); 

	   
	}
	return new Banner();
})



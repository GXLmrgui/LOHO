require(["config"],function(){require(["jquery","template","jquerycookie"],function(a,e,t){a.cookie("name")&&(a("#nouser").hide(),a("#username").html("lhsj_"+a.cookie("name")),a("#welcome").show());var n=a.cookie("addid"),r=JSON.parse(n)||[],i=0;for(var l=0;l<r.length;l++){var o=r[l].idName,s=r[l].num,h=r[l].price,p=r[l].a1,v=r[l].img;i+=h*s;[].push({id:o,num:s,price:h,a1:p,img:v})}var c=e("pro-template",{product:r});a(".alls").html(c),a(".alls").on("click",".jian",function(e){e=e||event;var t=parseInt(a(this).next().val());0==t?a(this).next().val(0):a(this).next().val(t-1),t=parseInt(a(this).next().val());var n=parseInt(a(this).parent().prev().html());a(this).parent().next().html(t*n),function(){for(var e=0;e<r.length;e++)console.log(r)}()}),a(".alls").on("click",".jia",function(e){e=e||event;var t=parseInt(a(this).prev().val());a(this).prev().val(t+1),t=parseInt(a(this).prev().val());var n=parseInt(a(this).parent().prev().html());a(this).parent().next().html(t*n)}),a(".alls").on("click",".del",function(e){e=e||event,1==confirm("你确定将此商品移除购物车？")&&a(this).parent().remove()}),a(".allprice").html(i)})});
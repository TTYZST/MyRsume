//	input获取,失去焦点时value是否为空
	var haha=document.getElementById("input");
	haha.onfocus=function(){
		if(haha.value=="you@email"){
			haha.type="text",
			haha.value="";
		}
	}
	haha.onblur=function(){
		if(haha.value==""){
			haha.type="text",
			haha.value="you@email";
		}
	}
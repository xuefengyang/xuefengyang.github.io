function getStyle(obj ,name){
	if(obj.currentStyle){
		console.log("call currentStyle method");
		return obj.currentStyle[name];
	}else{
			console.log("call getComputedStyle method");
		return getComputedStyle(obj,false)[name];
	}
}
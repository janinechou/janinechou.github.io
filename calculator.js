window.onload = function(){
	clickBtn();
}
var i = 1;
var j = 1;
var k = 1;
function clickBtn(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("view")) return false;

	var li = document.getElementsByTagName("li");
		for(var i=0;i<li.length;i++){
		li[i].onclick = function(){
			keyClick(this);
		}
	}
}
var shu = "";
function xianshi(name){
	if(!document.getElementById) return false;

	var view = document.getElementById("view");
	
	shu += name;
	view.value = shu;
	}
function yunsuan(){
	if(!document.getElementById) return false;

	var view = document.getElementById("view");
	var jieguo = eval(view.value);

	view.value = jieguo;
	shu = jieguo;
}
function qingping(){
	if(!document.getElementById) return false;

	var view = document.getElementById("view");
	view.value = "0";
	shu = "";
}

function keyClick(li){
	if(!document.getElementById) return false;

	var view = document.getElementById("view");
	if(li.firstChild.nodeValue=="C"){
		i=1;
		qingping();
	}else if(li.firstChild.nodeValue=="卤"){
		if(isNaN(view.value)){
		
		}else{
		view.value = 0 - view.value;
		}
	}else if(li.firstChild.nodeValue=="0"){
		if(view.value=="0"){
			
		}else{
			xianshi(li.firstChild.nodeValue);
		}
	}else if(li.firstChild.nodeValue==")"){
		if(view.value.charAt(view.value.length-1)=="+"){
			xianshi("0"+li.firstChild.nodeValue);
		}else{
			xianshi(li.firstChild.nodeValue);
		}
	}else if(li.firstChild.nodeValue=="."){
		
		if(i==0){
			
		}else{
			i=0;
			if(view.value == 0||view.value.charAt(view.value.length-1)=="+"||view.value.charAt(view.value.length-1)=="-"||view.value.charAt(view.value.length-1)=="*"||view.value.charAt(view.value.length-1)=="/"){
				xianshi("0.");
			}else{
				xianshi(li.firstChild.nodeValue);
			}
		}
		
	}else if(li.firstChild.nodeValue=="+"||li.firstChild.nodeValue=="-"||li.firstChild.nodeValue=="*"||li.firstChild.nodeValue=="/"){
		if(view.value == 0||view.value.charAt(view.value.length-1)=="("){
			i=1;
		xianshi("0"+li.firstChild.nodeValue);
		}else{
			if(view.value.charAt(view.value.length-1)=="+"||view.value.charAt(view.value.length-1)=="-"||view.value.charAt(view.value.length-1)=="*"||view.value.charAt(view.value.length-1)=="/"){
				
			}else{
				i=1;
				xianshi(li.firstChild.nodeValue);
			}
		}
	}else if(li.firstChild.nodeValue=="="){
		yunsuan();
	}else{
		xianshi(li.firstChild.nodeValue);
	}
}
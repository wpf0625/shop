var oTbody = document.getElementsByTagName('tbody')[0];
var aTr = oTbody.getElementsByTagName('tr');
var oCheckAll = document.getElementById('checkall');
var aCheckBtn = getClass('check-btn',oTbody);

for(var i=0;i<aTr.length;i++){
	aTr[i].onclick = function(){
		var oCheck = this.getElementsByTagName('input')[0];
		if(this.className == 'goods selected'){//已经被选中
			this.className = 'goods';
			oCheck.checked = false;
		}else{
			this.className = 'goods selected';
			oCheck.checked = true;
		}

		//判断是否全被勾上
		var aCheckTr = getClass('selected',oTbody);
		if(aCheckTr.length == aTr.length){
			oCheckAll.checked = true;
		}else{
			oCheckAll.checked = false;
		}
	}
}
//全选按钮点击
/*
oCheckAll.onclick = function(){
	for(var i=0;i<aTr.length;i++){
		if(this.checked == true){
			aTr[i].className = 'goods selected';
		}else{
			aTr[i].className = 'goods';
		}
		aCheckBtn[i].checked = this.checked;
	}
}
*/
var oThead = document.getElementsByTagName('thead')[0];
var oTr = oThead.getElementsByTagName('tr')[0];

oThead.onclick = function(e){
	// if(oCheckAll.checked == true){
	// 	oCheckAll.checked = false;
	// }else{
	// 	oCheckAll.checked = true;
	// }
	var target = e.target || event.srcElement;
	if(target != oCheckAll){
		oCheckAll.checked = !oCheckAll.checked;
	}
	for(var i=0;i<aTr.length;i++){
		if(oCheckAll.checked == true){
			aTr[i].className = 'goods selected';
		}else{
			aTr[i].className = 'goods';
		}
		aCheckBtn[i].checked = oCheckAll.checked;
	}
}
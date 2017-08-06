/*
作者：李斯宁
日期：2017-08-05

列举所有排列 1~4指，1个手指最多出现两次；同一手指不得连续出现；四个手指都出现即不会延长序列。
列举完，按照序列长度排序。
*/
var m = [];
var gen = [];
var id = 0;

function allShown(k){
	var found = {};
	for(var i=0; i<k; i++) {
		found[m[i]] = 1;
	}
	for(var i=1; i<=4; i++) {
		if( found[i] != 1 ) {
			return false;
		}
	}
	return true;
}

function siblingDup(k){
	if( k >=2 && m[k-1] == m[k-2] ) {
		return true;
	}else{
		return false;
	}
}

function threeTimes(k){
	var saw = 0;
	for(var i=0; i<k; i++ ) {
		if( m[i] == m[k-1] ) {
			saw++;
		}
	}
	return (saw >= 3);
}


function addResult(k){
	var s = [];
	for( var j=0; j<k; j++) {
		s.push(m[j]);
	}
	gen.push(s);
	//print(id+": " + s.join(" ") );
	//id++;
}

function permu(k){
	//printResult(k);
	
	//是否有连续出现
	if( siblingDup(k) ) {
		return;
	}
	
	//是否有出现三次
	if( threeTimes(k) ){
		return;
	}
	
	//都已出现
	if( allShown(k) ) {
		addResult(k);
		return;
	}
	for( var i=1; i<=4; i++ ) {
		m[k] = i;
		permu(k+1);
	}
}

permu(0);

gen.sort(function(a,b){
	return a.length - b.length;
});

for(var i=0; i<gen.length; i++) {
	print((i+1) + ": " + gen[i].join(" ") );
}

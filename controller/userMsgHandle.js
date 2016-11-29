var person=require("./model/person");
function userInfo(){
	
	var res={};
	res.uri='test/demo.html'
	return res;
	
}
function userEdit(){
	
	var res={};
	res.data=null;
//	jdbc  sql-lite
	$.post(url,{},function(data){
		
		
		
		person.setSex(data.sex);
		
		res.data=person;
		
	})
	if(!res.data){
		res.data="该用户没有数据"
	}else{
		//有数据
		
	}
	
	res.uri='test/edit.html'
	return res;
	
}
function userAdd(){
	
	var res={};
	res.uri='test/add.html'
	return res;
	
}
exports.userEdit = userEdit;
exports.userAdd = userAdd;
exports.userInfo = userInfo;
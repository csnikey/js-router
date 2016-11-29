function route(pathname, handle){
	//判断
	if(typeof handle[pathname] == 'function'){
		//路径正确（）立即执行
		if(pathname==="/test/userInfo"){
			var user=handle[pathname]();
			return user;
		}
		
	
		
	}else{
		//路径失败
		var errPage="test/404.html"
		return errPage;
	}
	console.log("route pathname = " + pathname);
}
exports.route = route;
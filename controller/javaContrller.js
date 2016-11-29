@import ....jar

@map(/test/user.htm,action="edit")
public static void (request,response){
	var queStr=request.getParameter();
	
	//jdbc 
	
	resonse.write("test/demo.html");
	
	
	
	
}

@map(/test/user.htm,action="info")
public static void (request,response){
	var queStr=request.getParameter();
	
	
	
	resonse.write("test/edit.html");
	
	
	
	
}


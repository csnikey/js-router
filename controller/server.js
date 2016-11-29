//服务器请求的处理 
var http = require('http'),
 url = require('url'),
path = require("path"),
    fs   = require("fs");

function start(route, handle){
	http.createServer(function(request, res){
		var pathname = url.parse(request.url).pathname;
		console.log(pathname);
         //请求地址文件 
         var result=route(pathname, handle);
         if(result.uri){
         	
         	console.log(result.uri);
         	 res.writeHead(200, {"Content-Type": "text/html"});
         	  fs.readFile(result.uri,function(err,data){
         	  	res.end(data);
         	  });
         }else{
         	  //其他资源文件
         switch(path.extname(pathname)){          
                case ".js":
                    res.writeHead(200, {"Content-Type": "text/javascript"});
                    break;
                case ".css":
                    res.writeHead(200, {"Content-Type": "text/css"});
                    break;
                case ".gif":
                    res.writeHead(200, {"Content-Type": "image/gif"});
                    break;
                case ".jpg":
                    res.writeHead(200, {"Content-Type": "image/jpeg"});
                    break;
                case ".png":
                    res.writeHead(200, {"Content-Type": "image/png"});
                    break;
                default:
                    res.writeHead(200, {"Content-Type": "application/octet-stream"});
           }
   
         pathname="."+pathname;
          fs.readFile(pathname,function(err,data){
            console.log(err);
          	res.end(data);
          });
         	
         	
         }
       
	}).listen(8080);
	console.log("server has started");
}
exports.start = start;		
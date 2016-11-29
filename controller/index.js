//主逻辑 
var server = require('./server');
var router = require('./router');
var requestHandle = require('./requestHandle');
var requestHandle = require('./userMsgHandle')

//将所有可能url参数的处理封装
var handle = {};
handle['/start'] = requestHandle.start;			//函数赋值
handle['/upload'] = requestHandle.upload;		//函数赋值
handle['/test/userInfo'] = requestHandle.userInfo;  
handle['/test/userEdit'] = requestHandle.userEdit;//函数赋值
server.start(router.route, handle);
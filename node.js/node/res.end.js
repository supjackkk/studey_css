//得到内置模块
var http = require("http");
//创建服务器，内置createServer方法
//req表示响应，res表示请求
var server= http.createServer(function(req,res){
    //设定字符集
    res.setHeader("Content-Type","text/html;charset=utf8")
    //输出
    //res.end("我今天花了"+(5+5)+"买了本书");
    res.end("<h1>你好你好123123</h1>");
    res.end("我今天花了"+2+"买了本书");
    res.end("我今天花了"+3+"买了本书");
    res.end("我今天花了"+4+"买了本书");
})
//监听
server.listen(3000)
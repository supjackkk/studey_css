//得到内置模块
var http = require("http");
//创建服务器，内置createServer方法
//req表示响应，res表示请求
var server= http.createServer(function(req,res){
    //设定字符集
    res.setHeader("Content-Type","text/html;charset=utf8")
    //输出
    //end不能输出非字符串 识别标签 只输出第一行
    //write不能输出非字符串 识别标签 
    //res.end("我今天花了"+(5+5)+"买了本书");
    res.write("我今天花了"+(5+5)+"买了本书");
    res.end();
})
//监听
server.listen(3000)
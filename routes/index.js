var items = {
  title:'Lightning云实验室实验项目',
  icon:'Lightning云实验室'
};
exports.index = function(req,res) {
  res.render('index',{'items':items});
};
exports.ai = function(req,res) {
  res.render('ai',{'items':items});
};
exports.aifn = function(req,res) {
  var http = require('http');
var querystring = require('querystring');
var util = require('util');
  var postd = '';     //定义了一个post变量，用于暂存请求体的信息

    req.on('data', function(chunk){    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        postd += chunk;
    });

    req.on('end', function(){    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        postd = querystring.parse(postd);
        util = util.inspect(postd);
        (function(){
          var request = require('request');
          request.post('http://lightning-zgc.com/rjm/AI/ai.php',function (error, response, body) {
          if (!error && response.statusCode == 200) {
            console.log(body);
            res.send(body);
          }
        }).form({nr:postd.nr, audio:postd.audio});
        console.log(postd.nr);
        console.log(typeof postd);
        })();
    });


};

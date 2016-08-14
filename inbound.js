var express = require('express'),
bodyParser = require('body-parser'),
app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var twilio = require('twilio'),
    client = twilio('ACd3f25232709e07c7a167fd021c2ca308','92852a216e0164a91c6ef7b0753319e6');

//var textJob = client.sendMessage(( {to: '+17192162897', from:'+12246548725', body:'you sent a message!' }), null, true);
 
//app.get('/', function(req,res) {
//  res.sendfile('./index.html');
//});

app.post('/', function(req, res) {
  var resp = new twilio.TwimlResponse();
  resp.message('Tom\'s still the bomb');
  res.writeHead(200, {
    'Content-Type':'text/xml'
  });
  res.end(resp.toString());
  var text = req.body.Body.trim().toLowerCase();
  if (text == 'test')
    x = addition(5,2);
  console.log(x,text);
  console.log(req.body.From);
});

var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});

function addition(a,b) {
  var result = a+b;
  return result;
};

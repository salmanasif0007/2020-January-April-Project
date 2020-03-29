const express = require ('express')
const app = express()
const fs = require('fs');

 app.use(express.urlencoded());

app.get('/',function (req,res){
  res.sendFile(__dirname+'/result.html');
 console.log(__dirname);
})

app.post('/Welcome',function(req,res){
  var n1 = req.body.name;
  console.log(req.body.name);

  var n2 = req.body.price;
  console.log(req.body.price);

  var n3 = req.body.handcash;
  console.log(req.body.handcash);

  // var n4 = req.body.senitizer;
  // console.log(req.body.senitizer);
  //
  // var n5 = req.body.remainingamount;
  // console.log(req.body.remainingamount);

    //var a= (name);
    //var b= parseInt(price);
    //var c= parseInt(handcash);
    // var d= parseInt(senitizer);
    // var e= parseInt(remainingamount);

var m=n3/n2;
var n=n3%n2;

res.write('<h1>'+ n1 +'</h1>')
res.write('<h1>'+ m +'</h1>')
res.write('<h1>'+ n +'</h1>')

res.send();



})

app.listen(3000);

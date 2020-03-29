const express = require ('express')
const app = express()
const fs = require('fs');

 app.use(express.urlencoded());

app.get('/',function (req,res){
  res.sendFile(__dirname+'/result3.html');
 console.log(__dirname);
})

app.post('/Welcome',function(req,res){
  var n1 = req.body.affectedperson;
  console.log(req.body.affectedperson);

  // var n2 = req.body.num2;
  // console.log(req.body.num2);
  //
  // var n3 = req.body.num3;
  // console.log(req.body.num3);
  //
  // var n4 = req.body.num4;
  // console.log(req.body.num4);
  //
  // var n5 = req.body.num5;
  // console.log(req.body.num5);

    var a= parseInt(n1);
    var day60=1000;
    var day40=800;
    var day20=600;
    var day14=400;

    var netflix2=100;
    var netflix1=50;



    if(a>=100)
    {
      res.write("<h1>Totall day's 60 and all cost:  "+(day60+netflix2)+"</h1>")

    }
     else if(a>=50)
    {
      res.write("<h1> Total day's 40 and all cost: "+(day40+netflix1)+"</h1>")
    }

    else if(a>=10)
    {
      res.write("<h1> Total day's 20 and all cost: "+(day20+netflix1)+"</h1>");
    }
    else if(a>=3)
    {
      res.write("<h1> Total day's 14 and all cost"+(day14+netflix1)+"</h1>");
    }

res.send();

})

app.listen(3000);

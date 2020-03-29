const express= require('express');
const app= express();
app.use (express.urlencoded());
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
    console.log(__dirname);

})

app.post('/',function(req,res){
    var a=req.body.num1;
    console.log(req.body.num1)
    var b=req.body.num2;
    console.log(req.body.num2);
    var sum=0;
    var i=0;
    avg=0;
    //var x=((b-a)+1);

    var m=parseInt(a);
    var n=parseInt(b);
    for(i=m;i<=n;i++){
        sum=sum+i;
        }
        var x=((n-m)+1);
        avg=sum/x;
 res.write("<h1>total sum: "+sum+"</h1>")
 res.write("<h1>Average: "+avg+"</h1>")
 res.write("<h1> Remaining Amount: "+x+"</h1>")
 res.send();
});
app.listen(3000);

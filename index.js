const express=require('express');
const app=express();
const request=require("request");
const bodyParser=require('body-parser');
const mongoose=require("mongoose");
// Connection URL
mongoose.connect("mongodb+srv://admin_suki:Test123@cluster0-wxxnb.mongodb.net/peopledb",{ useNewUrlParser: true ,useUnifiedTopology: true});
app.use((bodyParser.urlencoded({extended:true})));

app.listen(process.env.port||process.env.PORT||3000,function(){
  console.log("server running in port number 3000");
});
app.get("/",function(req,res)
{
  res.sendFile(__dirname+'/app.html');


});
app.post("/",function(req,res){
  console.log("inside post");
  var a =Number(req.body.name);
  var b=Number(req.body.name1);
  const sampleschema=new mongoose.Schema({
    name:Number(),
    rating:Number()

  });

  const Fruit=mongoose.model("fruit",sampleschema);
  const apple=new Fruit({
    name:a,
    rating:b
  });
  Fruit.insertMany(apple,function(err){
    if(err)
    {
      console.log(err);
    }
    else
    {
      console.log("Success");
  }
  });
  res.send("SUccsess");

});

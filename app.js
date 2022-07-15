const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");
let items=["buy food","cook food","eat food"];


const app=express();
app.set("view engine","ejs")
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

app.get("/",function(req,res){

    let week=date.getDate();

    res.render("list",{week:week, newItems:items});
})

app.get("/index",function(req,res){
    res.render("index")
});

app.post("/",function(req,res){
    let item=req.body.newItem;
    items.push(item)
    res.redirect("/");
})


app.listen(3000,function(){
    console.log("server running on port 3000");
})
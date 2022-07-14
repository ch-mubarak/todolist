const express=require("express");
const bodyParser=require("body-parser");

const app=express();
app.set("view engine","ejs")

app.get("/",function(req,res){

    let today=new Date();
    let currentDay=today.getDay();
    
    let option={
        weekday:"long",
        day:"numeric",
        month:"long"
    }


    res.render("list",{week:week})
})


app.listen(3000,function(){
    console.log("server running on port 3000");
})
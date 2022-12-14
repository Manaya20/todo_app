const express = require("express")
const app=express()
const bodyParser =require("body-parser")
const mongoose = require("mongoose")

const port=3000

app.set("view engine","ejs")




app.get("/",(request,response)=>{
    response.render("index")
})

app.listen(port,()=>{
    console.log("server is running on port" +  port)
})
const express = require("express")
const app=express()
const bodyParser =require("body-parser")
const mongoose = require("mongoose")

const port=3000

app.set("view engine","ejs")
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const dburl = "mongodb://localhost:27017/tododb"
mongoose.connect(dburl,{useNewUrlParser: true, useUnifiedTopology: true})

app.get("/",(request,response)=>{
    response.render("index")
})

app.listen(port,()=>{
    console.log("server is running on port" +  port)
})
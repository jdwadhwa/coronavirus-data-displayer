const express = require("express");

var bodyParser = require('body-parser')

const app  = express();


const port = process.env.Port||3000;

app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json());

app.use(express.static(__dirname+"/public"));


app.get("/",(req,res)=>{
    console.log(__dirname);
    res.sendFile(__dirname+"/public/html/index.html");

})

// app.post("/display",(req,res)=>{
    
//     res.sendFile(__dirname+"/public/html/counter.html");
    
// })




app.listen(port,()=>{
    console.log("seerver has been started at port",port);
})

const express = require("express")
const fs=require("fs")
const status=require("express-status-monitor")


const app=express()
const PORT=3000

app.use(status())

// app.get("/",(req,res)=>{
//     fs.readFile("./sample.txt",(err,data)=>{
//         if(err){
//             console.log(err)

//         }else{
//             res.end(data)
//         }
//     })
// }) //bad way to solve this we have concept of streams
app.get("/",(req,res)=>{
    const stream=fs.createReadStream("./sample.txt","utf-8")
    stream.on("data",(chunk)=>{
        res.write(chunk)
    })
    stream.on("end",()=>{
        res.end()
    })
})

app.listen(PORT,()=>{
    console.log(`server has started on the PORT:---->${PORT}`)
})
const express=require("express")
const app=express()

const PORT=8000

app.get("/",(req,res)=>{
    return res.json({msg:`HELLO FROM THE EXPRESS SERVER  ${process.pid}`})
})

app.listen(PORT,()=>{
    console.log(`server has started successfully on the port ${PORT}`)
})
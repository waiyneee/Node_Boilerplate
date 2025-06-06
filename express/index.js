// const http= require("http")

const express= require("express")
const app= express();
const port =8080
//express is just a framework internally http server is working only...
//it is use to write server side code..






app.get('/',(req,res)=>{
    return res.send("hello from home page");
})

app.get("/about",(req,res)=>{
    return res.send("hello from about page")
}) //apne app http ko require kregi app and apne 
//aap sb kuch handle kregi





// const myServer= http.createServer(app);
// myServer.listen(8080,()=>{
//     console.log("server has started");
// })

app.listen(port,()=>{
    console.log(`server has started successfully`)
})
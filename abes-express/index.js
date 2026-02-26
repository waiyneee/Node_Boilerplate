const express=require('express');
const app=express();

const PORT=8000;



app.get("/",(req,res)=>{
    console.log(" I am on home route ");
    res.send(`<h1>hello from server</h1>`)

})

app.get('/about',(req,res)=>{
    res.send("this is my about page ");
})



// <img src="" alt="" />

app.get("/img",(req,res)=>{
    res.send(`<img src="https://plus.unsplash.com/premium_photo-1771922043523-b4dc45135057?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />`)
})

app.listen(PORT,()=>{
    console.log(`server is listening to the port :: ${PORT}`)
})
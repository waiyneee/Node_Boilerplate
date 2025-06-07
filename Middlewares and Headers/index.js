const express = require("express")
const app = express()
const usersData = require("./MOCK_DATA.json")
const users=usersData.users

const PORT = 3000
const file=require("fs")


//when i do post request mein req.body logg then it is undefined so i need  middleware  for that 100percent
app.use(express.urlencoded({extended:false})) //xx-urlencode form data handle 
//middleware ---->assume it as a plugin
//the above middleware give control to next one automatically....

//custom middleware


// app.use((req,res,next)=>{
//     console.log("hello from moddleware 1")
// }) //this middleware is neither return response nor calling next stackked middleware 
//its blocking my whole request 


// 
// app.use((req,res,next)=>{
//     console.log("hi i am middleware 2")
//     next();
// })


// app.use((req,res,next)=>{
//     console.log("hello i am middleware 2")
//     return res.end("hi text on postman")
// })


//make changes to req and res object..../
// 

app.use((req,res,next)=>{
    file.appendFile("./log.txt",`\n${req.method}:${Date.now()}:${req.path}:${req.ip}`,(err,result)=>{
        next();
    });
})

// Routes 
app.get("/users", (req, res) => {
   const html = `
   <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
   </ul>
   `
   res.send(html)
}) 

app.get("/api/users", (req, res) => {
    // console.log(`hello from username `,req.username);
    // res.setHeader("MYNAME","diksh.dev")
     res.setHeader("X-MYNAME","diksh.dev")
    console.log(req.headers);



     return res.json(users)
})

app.post("/api/users",(req,res)=>{
    //creating new user----->
    const body=req.body;

    users.push({...body,id:users.length+1}) 
    
    file.writeFile("./MOCK_DATA.json",JSON.stringify({users}),(err,result)=>{
        return res.status(201).json({status:"successful creation of user",id:users.length}) //1002
    })
    
})



app.route("/api/users/:id").get((req, res) => {
     const id=Number(req.params.id )
     const user=users.find((user)=> user.id===id)
     return res.json(user) 

    

}).patch((req,res)=>{
    
    const id= Number(req.params.id);
    const body=req.body;
    const userIdx= users.findIndex((user) =>user.id===id);
    if(userIdx===-1) return res.json({status:"user does not exist"})
    
    users[userIdx]={...users[userIdx],...body};

    file.writeFile("./MOCK_DATA.json",JSON.stringify({users}),(err,result)=>{
        if(err){
            return res.json({status:"unable to edit the user"})
        }else{
            return res.json({status:"user got edited successfully"});
        }
    })
    


}).delete((req,res)=>{


    const body=req.body;
    const id=Number(req.params.id )
    const userIdx= users.findIndex(((user)=>user.id===id)) 
    if(userIdx===-1) return res.json({status:"user cannot be found"});

    users.splice(userIdx,1); 



    file.writeFile("./MOCK_DATA.json",JSON.stringify({users}),(err,result)=>{
        if(err){
            return res.json({status:"unable to delete the user"})
        }else{
            return res.json({status:"user got delted successfully"})
        }
    })

})



app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`)
})
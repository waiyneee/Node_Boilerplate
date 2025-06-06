const express = require("express")
const app = express()
const usersData = require("./MOCK_DATA.json")
const users=usersData.users

const PORT = 3000
const file=require("fs")


//when i do post request mein req.body logg then it is undefined so i need  middleware  for that 100percent
app.use(express.urlencoded({extended:false})) //xx-urlencode form data handle 
//middleware ---->assume it as a plugin

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
     return res.json(users)
})

// Task 1 - Hybrid server (HTML + JSON endpoints)
// app.get("/api/users/:id", (req, res) => {
//      const id=Number(req.params.id )//grab the id first
//      const user=users.find((user)=> user.id===id)
//      return res.json(user)

// })
// task 2 of id 1 nd 2 is done here


app.post("/api/users",(req,res)=>{
    //creating new user----->
    const body=req.body;

    users.push({...body,id:users.length+1}) //1001
    // console.log("tyhe body is :" ,body);
    file.writeFile("./MOCK_DATA.json",JSON.stringify({users}),(err,result)=>{
        return res.json({status:"successful creation of user",id:users.length}) //1002
    })
    
})


// app.patch("/api/users/:id",(req,res)=>{
//     return res.json({status:"pending"})
// })

// app.delete("/api/users/:id",(req,res)=>{
//     return res.json({status:"pending"})
// })  //this or do it in a single place cause the route is same

app.route("/api/users/:id").get((req, res) => {
     const id=Number(req.params.id )//grab the id first
     const user=users.find((user)=> user.id===id)
     return res.json(user) //2nd wala tak jo tha

     //we are just getting the user here

}).patch((req,res)=>{
    //edit the user
    const id= Number(req.params.id);
    const body=req.body;
    const userIdx= users.findIndex((user) =>user.id===id);
    if(userIdx===-1) return res.json({status:"user does not exist"})
    
    users[userIdx]={...users[userIdx],...body};
    //propogate changes in postman
    file.writeFile("./MOCK_DATA.json",JSON.stringify({users}),(err,result)=>{
        if(err){
            return res.json({status:"unable to edit the user"})
        }else{
            return res.json({status:"user got edited successfully"});
        }
    })
    


}).delete((req,res)=>{
    //delete the user

    const body=req.body;
    const id=Number(req.params.id )
    const userIdx= users.findIndex(((user)=>user.id===id)) 
    if(userIdx===-1) return res.json({status:"user cannot be found"});

    users.splice(userIdx,1); //deleting that guy from array 1 is basicaly count coz ther may be multiple users 



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
const express = require("express")
const app = express()
const users = require("./MOCK_DATA.json")
const PORT = 3000

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
    //creating new user
    return res.json({status:"pending"})
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
    return res.json({status:"pending"});


}).delete((req,res)=>{
    //delete the user
    return res.json({status:"pending"})

})



app.listen(PORT, () => {
    console.log(`Server started successfully on port ${PORT}`)
})
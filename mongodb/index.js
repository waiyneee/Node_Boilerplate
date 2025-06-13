const express = require("express");
const app = express();
const usersData = require("./MOCK_DATA.json");

const  mongoose =require("mongoose")


 //connection 
 mongoose.connect("mongodb://127.0.0.1:27017/crudApp-1")
 .then(()=>{
    console.log("mongo db connected")
 })
 .catch((err)=>{
    console.log("error is there",err)
 })


 const userSchema =mongoose.Schema({
    firstName:{
        type:String,
        required:true,


    },
    lastName:{
        type:String,
        
    },
    email:{
        type:String,
        required:true,
        unique:true,

    },
    jobTitle:{
        type:String,

    },
    gender:{
        type:String,
    }

 },{timestamps:true})  //timestamps tells me about created ta updated at

 const User=mongoose.model("user",userSchema) //name of collections(utomatically mongodb 
 // changes to "users"--->plural form)









const PORT = 3000;
const file = require("fs");

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  file.appendFile(
    "./log.txt",
    `\n${req.method}:${Date.now()}:${req.path}:${req.ip}`,
    (err, result) => {
      next();
    }
  );
});

app.get("/users", async(req, res) => { //get is also working  now...
    const allDbusers = await User.find({}) //pick and tell em all users
  const html = `
   <ul>
      ${allDbusers.map((user) => `<li>${user.firstName}------>${user.email}</li>`).join("")}
   </ul>
   `;
  res.send(html);
});

app.get("/api/users", async(req, res) => {
    const allDbusers= await User.find({})
  res.setHeader("X-MYNAME", "diksh.dev");
  return res.json(allDbusers);
});

app.post("/api/users", async(req, res) => {
  const body = req.body;

  users.push({ ...body, id: users.length + 1 });
  
  const result=await User.create({
    firstName:body.firstName,
    lastName:body.lastName,
    email:body.email,
    gender:body.gender,
    jobTitle:body.jobTitle,

  })
  console.log(result)

  return res.status(201).json({msg:"successfully created"})
});

app
  .route("/api/users/:id")
  .get(async(req, res) => {
   const users= await User.findById(req.params.id)
    return res.json(users);
  })
  .patch(async(req, res) => {
    // const id = Number(req.params.id);
    // const body = req.body;
    // const userIdx = users.findIndex((user) => user.id === id);
    // if (userIdx === -1) return res.json({ status: "user does not exist" });

    // users[userIdx] = { ...users[userIdx], ...body };

    // file.writeFile("./MOCK_DATA.json", JSON.stringify({ users }), (err, result) => {
    //   if (err) {
    //     return res.json({ status: "unable to edit the user" });
    //   } else {
    //     return res.json({ status: "user got edited successfully" });
    //   }
    // });
    const result=await User.findByIdAndUpdate(req.params.id,{lastName:"ducki"})
    console.log(result)
    res.status(203).json({msg:"success in changing"},)
  })
  .delete(async(req, res) => {
    // const id = Number(req.params.id);
    // const userIdx = users.findIndex((user) => user.id === id);
    // if (userIdx === -1) return res.json({ status: "user cannot be found" });

    // users.splice(userIdx, 1);

    // file.writeFile("./MOCK_DATA.json", JSON.stringify({ users }), (err, result) => {
    //   if (err) {
    //     return res.json({ status: "unable to delete the user" });
    //   } else {
    //     return res.json({ status: "user got deleted successfully" });
    //   }
    // });

    await User.findByIdAndDelete(req.params.id)
    return res.status(204).json({msg:"successfully deletd that user"})
  });

app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});

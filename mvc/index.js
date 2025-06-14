const express = require("express");
const app = express();
const file = require("fs");
const usersData = require("./MOCK_DATA.json");
const userRouter = require("./routes/user.routes")
const { logrequestResponse} =require("./middlewares/index")

const  mongoose =require("mongoose")
const {connectMongoDb} = require("./connection")



connectMongoDb("mongodb://127.0.0.1:27017/crudApp2mvc").then(()=>{
  console.log(`mongo db connected`)
})




app.use(express.urlencoded({ extended: false }));
app.use(logrequestResponse("log.txt"));

// app.use((req, res, next) => {
//   file.appendFile(
//     "./log.txt",
//     `\n${req.method}:${Date.now()}:${req.path}:${req.ip}`,
//     (err, result) => {
//       next();
//     }
//   );
// });


//routes
app.use("/users",userRouter) //whenever got request on /user go to userRouter


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started successfully on port ${PORT}`);
});

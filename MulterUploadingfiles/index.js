const express = require("express")
const app = express()
const PORT=3000
const multer=require("multer")


const path=require("path")
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))


app.use(express.json())
app.use(express.urlencoded({extended:false})) //form data

// const upload = multer({ dest: 'uploads/' }) //also a middleware
// //automatically upload folder is genertaed but we get corrupt file 

const storage= multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"./uploads") //create directory bu urself
    },
    filename:function(req,file,cb){
        return cb(null,`${Date.now()}--->${file.originalname}`)
        //no clash if 2 users uploa same file prevents overriding of file
    }
})
const upload= multer({storage:storage})


app.get("/",(req,res)=>{
    res.render("homepage")
})

app.post("/upload",upload.single("avatarImage"),(req,res,next)=>{
    console.log(req.body)
    console.log(req.file)

    return res.redirect("/")

})

app.listen(PORT,()=>{
    console.log(`server started at ${PORT} ....`)

})
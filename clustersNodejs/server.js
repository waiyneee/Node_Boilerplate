const cluster=require("cluster")
const express=require("express")


const os=require("os")
const totalscpus=os.cpus().length


if(cluster.isPrimary){
    for(let i=0;i<totalscpus;i++){
        cluster.fork()
    }
}else{
   const app=express()
   
   const PORT=8000
   
   app.get("/",(req,res)=>{
       return res.json({msg:`HELLO FROM THE EXPRESS SERVER  ${process.pid}`})
   })
   
   app.listen(PORT,()=>{
       console.log(`server has started successfully on the port ${PORT}`)
   })


}

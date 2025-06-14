const mongoose =require("mongoose")
mongoose.set("strictQuery",true)

async function connectMongoDb(url){

    const connectionDb= await mongoose.connect(url)
    return connectionDb

}

module.exports={connectMongoDb}
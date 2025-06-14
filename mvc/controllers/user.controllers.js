const User =require("../models/users.models")


async function getallUsers(req,res){
     const allDbusers= await User.find({})
  res.setHeader("X-MYNAME", "diksh.dev");
  return res.json(allDbusers);

}

async function getusersbyId(req,res){
    const users= await User.findById(req.params.id)
    return res.json(users);
}

async function usersupdatebyId(req,res){
   
    const result=await User.findByIdAndUpdate(req.params.id,{lastName:"ducki"})
    console.log(result)
    res.status(203).json({msg:"success in changing"},)
  
}

async function usersdeletebyId(req,res){
   
    await User.findByIdAndDelete(req.params.id)
    return res.status(204).json({msg:"successfully deletd that user"})
  
}
async function createnewUser(req, res) {
  const body = req.body;
 

  try {
    const result = await User.create({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      gender: body.gender,
      jobTitle: body.jobTitle,
    });

    console.log(result);

    return res.status(201).json({ msg: "Successfully created", id: result._id });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ msg: "Internal server error", error: error.message });
  }
}









module.exports={getallUsers
    ,getusersbyId
    ,usersupdatebyId
    ,usersdeletebyId
    ,createnewUser

}
const express =require("express")
const {getallUsers,
    getusersbyId,
    usersupdatebyId,
     usersdeletebyId,
     createnewUser} = require("../controllers/user.controllers")

const router =express.Router()
//assuming this router is for user only




router.route("/")
.get(getallUsers)
.post(createnewUser)

//everything after routes is handler(controller)--fn name 
router.route("/:id") 
  .get(getusersbyId)
  .patch(usersupdatebyId)
  .delete(usersdeletebyId);


  module.exports = router;
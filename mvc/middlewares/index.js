const file= require("fs")

function logrequestResponse(filename){
    return (req,res,next)=>{
         file.appendFile(
            filename,
            `\n${req.method}:${Date.now()}:${req.path}:${req.ip}`,
            (err, result) => {
              next();
            }
          );
    }

}

module.exports={logrequestResponse}
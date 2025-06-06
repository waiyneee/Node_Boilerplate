const http =require("http") //in-built module
const file=require("fs")
//creted a server and reply hello i am server when a request i seen 

const myServer=http.createServer((req,res)=>{
    // console.log("A new req recieved")
    // console.log(req.headers)
    const log= `${Date.now()}----->${req.url}------>new req recieved\n`
    file.appendFile("./log.txt",log,(err,data)=>{
        // 
        if(!err){
            switch (req.url) {
                case '/': res.end("home page ")
                    
                    break;

                case '/about': res.end("about page ")
                    
                    break;

                case '/contact': res.end("contact page ")
                    
                    break;
            
                default: res.end("404 ERROR ")
                    break;
            }
        }
        
    })
    
    


    // res.end("hola i am server")

})
//is server ko eek port ki requirement hoti h jispe yeh listen krega 
myServer.listen(8080,()=>{
    console.log("server is started")
})
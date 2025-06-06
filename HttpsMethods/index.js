const http =require("http")

const file=require("fs")


const myServer=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end()
    
    const log= `${Date.now()}----->${req.url}------->${req.method}------>new req recieved\n`
    
   
    file.appendFile("./log.txt",log,(err,data)=>{
        
        if(!err){
            switch (req.url) {
                case '/': res.end("home page ")
                    
                    break;

                case '/about': 
                    const username=myurl.query.myname
                
                    res.end(`about page---->hi, ${username} `)
                    
                    break;
                case "/search":
                    const search=myurl.query.search_query

                    res.end(`serach results are ----> ${search}`)

                    break;

                case '/contact': res.end("contact page ")
                    
                    break;

                case "/signup" :
                    if(req.method==="GET") res.end("signup page get requests")
                    else if(req.method==="POST"){
                      //DB query
                      res.end("success")
                }
                     
                        break;
            
                default: res.end("404 ERROR ")
                    break;
            }
        }
        
    })
    
    


    // res.end("hola i am server")

})

myServer.listen(8000,()=>{
    console.log("server is started")
})
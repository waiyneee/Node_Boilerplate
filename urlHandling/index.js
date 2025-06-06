const http =require("http")
const file=require("fs")
const url=require("url")


const myServer=http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end()
    
    const log= `${Date.now()}----->${req.url}------>new req recieved\n`
    const myurl=url.parse(req.url,true)
    console.log(myurl)
    file.appendFile("./log.txt",log,(err,data)=>{
        
        if(!err){
            switch (myurl.pathname) {
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
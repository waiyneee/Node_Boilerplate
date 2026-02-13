const fs= require('fs');

fs.writeFileSync("./log.txt","we are coder in abes army");




fs.readFile("./log.txt","utf-8", (err,result)=>{
    if(err) throw err;
    else console.log(result);
    //an async task typaa thing dont return anything 
    
})






fs.writeFile("./logAsync.txt", "we are coder in abes army (async)", (err) => {
    if (err) throw err;

    console.log("File written successfully");

    // fs.readFile("./logAsync.txt", "utf-8", (err, result) => {
    //     if (err) throw err;
    //     console.log(result);
    // });
});

fs.appendFileSync("./log.txt",`new data inmy abes file`);

fs.appendFile("./log.txt","hello brother",(err)=>{
    if(err) throw err;

    
})


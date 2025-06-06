// console.log("hi")
const file= require('fs')

file.writeFileSync("./test.txt","Hi its a second test");
//this above is a synchronous opertion which helps us to override the file content
//dynamically 
// Hi its a first test
// Hi its a second test


// async....
file.writeFile("./test2.txt","Hi its a first hello secondtest",(err)=>{})
 
//the differnce between these two is blocking and non blocking requests 
//and evnt loop architecture of node js
//konsa kb use hoga would be helpful to understand threads,files and so on....



const result=file.readFileSync("./contacts.txt","utf-8")
console.log(result)

//ye next wala result me store nhi krta eek callback deta h 
file.readFile("./contacts2.txt","utf-8", (err,result)=>{
    if(err) throw err;
    else console.log(result);
    //an async task typaa thing dont return anything 
    
})

file.appendFileSync("./test.txt",`${Date.now()}any new things\n`)  //it doesnt override it just append data

file.cpSync("./test.txt","./copy.txt")

//there is nothing like delte there is unlink()
file.unlinkSync("./copy.txt")

console.log(file.statSync("./test.txt")) //status of my file

//u can even create folders
file.mkdirSync("docs")

const file=require("fs")

//blocking-requests example

// console.log(1)
// console.log(2)
// const result= file.readFileSync("./example.txt","utf-8")
// console.log(result);

// console.log(3)
// console.log("hello")

// 1
// 2
// ghibli 
// art
// 3
// hello

//non-blocking code

// console.log(1)

// console.log(3)

// file.readFile("./example.txt","utf-8",(err,result)=>{
//     if(!err){
//         console.log(result)
//     }else{
//         console.log(err)
//     }
// })

// console.log(7)


// 1
// 3
// 7
// ghibli 
// art



//how many threads max in your cpu can maximize
const os=require("os")
console.log(os.cpus().length)



function add(a,b){
   
    console.log("hello1");
     return a+b;
}

function sub(a,b){

    console.log("hello2");
    return a-b;


}

function mul(a,b){
    console.log("hello3")
    return a*b;

}

module.exports={
    addfn:add,
    subfn:sub,
    mulfn:mul,


}


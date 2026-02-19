//operating system 


const os=require('os');


console.log("the platform is :::",os.platform());


// the platform is ::: linux
console.log("user info ",os.userInfo());


console.log("user info ",os.userInfo().username);

console.log("architecture",os.arch());

console.log("freeman ",os.freemem());

console.log("totoal mem",os.totalmem());


console.log("uptime",os.uptime());

console.log("directory",os.homedir());

console.log("host name",os.hostname());
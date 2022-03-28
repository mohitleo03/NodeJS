const fs = require("fs");     //blocking line
//const { buffer } = require("stream/consumers");
const pathMod = require('path');
const filePath = pathMod.join(__dirname,'one.js');      //blocking line
console.log("i am here before read file call");     //blocking line
function done(err,buffer){
    if(err){
        console.log("error during read",err)
    }
    else{
        console.log(buffer.toString());     //buffer as it is not understandable so we use toString().
    }
}
fs.readFile(filePath,done);  //non blocking line
console.log("i am here after read file call");  //block



const filePath1 = pathMod.join(__dirname,'three.js');      //blocking line
console.log("i am here before read file call");     //blocking line
/*function done1(err,buffer){
    if(err){
        console.log("error during read",err)
    }
    else{
        console.log(buffer.toString());     //buffer as it is not understandable so we use toString().
    }
}*/
fs.readFile(filePath1,(err,buffer)=>{
    if(err)
    {
        console.log("error while reading the file ",err);
    }
    else{
        console.log(buffer.toString());
    }
}); 
console.log("i am here after read file call");  //block



const filePath2 = pathMod.join(__dirname,'extra.txt');      //blocking line
console.log("i am here before read file call");     //blocking line
function done2(err,buffer){
    if(err){
        console.log("error during read",err)
    }
    else{
        console.log(buffer.toString());     //buffer as it is not understandable so we use toString().
    }
}
fs.readFile(filePath2,done2);  //non blocking line
console.log("i am here after read file call");  //block
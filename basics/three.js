console.log("start");  //sync
setTimeout(()=>{
    //async
    console.log("i call after 3 sec")
},3000) /*after 3 sec this window this will be executed*/
console.log("end");     //sync
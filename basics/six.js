//console.log("this is process info",process);
console.log("this is current node verion",process.version);
console.log("these are all library versions",process.versions);
console.log("this is current libuv verion",process.versions.uv);
console.log("CPU architecture ",process.arch);
console.log("Platform ",process.platform);
console.log("Environment ",process.env);
process.on("exit",(code)=>{    //when we call process.on(exit); then when its going to end we can add some functionality
    console.log("process exit",code);        //email(by nodemailer) or SMS(not free) when our process is finsihed
});
// on sucessful code will exit with 0 showing no error
process.on('uncaughtException',err=>{
    console.log("error generated...",err)
});
f++;
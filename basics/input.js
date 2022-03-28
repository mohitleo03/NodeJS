process.stdout.write("enter your name \n");
let name = '';
process.stdin.on('data',chunk=>{
    name+=chunk;
});
process.stdin.on('end',()=>{
    process.stdout.write("your name is ",name);
});
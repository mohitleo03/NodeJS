const util = require('util')
/*console.log("its console.log outcome");
process.stdout.write("its stdout outcome");
const printf = function (message){          //printf is just a variable name it can be any variable
    process.stdout.write(message+"\n");
}
printf("Hey,  its my own customized printing function");
printf("this is the next line which is started from new line");
let name = "Mohit Malik";
const a = util.format("My name is %s",name);
console.log(a);
console.log("My name is %s",name);*/
const obj ={
            obj2:[],
            obj3:{
                    x:10,
                    obj4:{
                            y:20,
                            obj5:{
                                    h:100,
                                    obj6:{
                                            j:1000,
                                            obj7:{
                                                    i:90
                                                 }
                                         }
                                 }
                         }
                 }
            };
//console.dir(obj,{depth:10});
console.log(util.inspect(obj,{depth:10}));
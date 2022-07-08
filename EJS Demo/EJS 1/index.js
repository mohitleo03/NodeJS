let ejs = require('ejs');
// let template = ejs.compile(str);
// template(people);
// console.log("DATA IS ",html);
ejs.renderFile("javascript_template.ejs", {function_name:"hey",function_return_type:"int",function_parameters:[{type:"int",name:"a"},{type:"string",name:"b"}]}, function(err, str){
    // str => Rendered HTML string
    // console.log(str,err);
    console.log(str);
    if(err)
    console.log("err is ",err);
});
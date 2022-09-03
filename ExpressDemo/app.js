//require express
//create app
//use static files
//use express.json
//use express urlencoded
//create a get api
//create a post api
//create a server
const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.get('/dashboard',(req,res)=>{
    const param = req.query.param;
    res.status(200).send({"message":"Its Dashboard"});
});
app.post('/register',(req,res)=>{
    const uname = req.body.uname;
    const pass = req.body.pass;
    //later we will save in database;
    res.status(200).json({"message":"Registration Successful"});
});
const server =  app.listen(1234,(err)=>{
    if(err){
        console.log("Error is ",err);
    }
    else{
        console.log("running server on port number ",server.address().port)
    }
})
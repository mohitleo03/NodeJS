const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv').config;

const fs = require('fs');
const path = require('path');
const {errHandler} = require("./middlewares/errorMiddleware");
const {connectDB} = require("./config/db");

connectDB();
const app = express();

const accessLogStream = fs.createWriteStream(
        path.join(__dirname,"logs","access.log"),
        {flags : "a"}
    );
app.use(morgan("combined",{stream : accessLogStream}));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const origin = {
    origin : "*"
}
app.use(cors(origin));
app.use("./tasks",require("./routes/taskRoutes"));
app.use("./tasks",require("./routes/userRoutes"));

//app.use(errHandler);
const port = process.env.port || 3000;
app.listen(port, ()=>{
    console.log('Server running on port',port);
});
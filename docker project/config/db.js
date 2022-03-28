const mongoose = require('mongoose');

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(
            `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}
            @${process.env.MONGO_IP}:${process.env.MONGO_PORT}
            /task-db?authSource=admin
            `,
            {useNewUrlParse: true, useUnifiedTopology: true}      
        );
        console.log('MongoDB Connected :',conn.connection.host);
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}
module.exports = {
    connectDB
}
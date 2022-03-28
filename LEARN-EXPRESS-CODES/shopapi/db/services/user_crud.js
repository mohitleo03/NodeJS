const UserModel = require('../models/user')
const encryption = require('../../utils/encrypt');
module.exports = {
    register(userObject){
        userObject.password = encryption.generateHash(userObject.password);
        let promise = UserModel.create(userObject);
        return promise;
    },
    async login({emailid,password}){
        //return await UserModel.findOne({"emailid":email,"password":pwd});
        const doc= await UserModel.findOne({"emailid":emailid});
        if(doc){
            if(encryption.comapreHash(doc.password,password)){
                return doc;
            }
            else{
                return null;
            }
        }
        else{
            return null;
        }
    },
}
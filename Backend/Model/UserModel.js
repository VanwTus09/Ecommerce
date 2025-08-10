import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name : {
        type : String, 
        require : true,
        min : 2,
    } ,
    password : {
        type : String,
        require : true,
        min : 6,
    },
    email : {
        type : String,
        require : true,
        unique : true,  
    },
    access_token :{
        type : String,
        unique : true
    },
    refresh_token :{
        type : String,
        unique : true
    }


})
export const UserModel = mongoose.model("User" , schema)
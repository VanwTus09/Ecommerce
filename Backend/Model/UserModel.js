import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name : {
        type : String, 
        required : true,
        min : 2,
    } ,
    password : {
        type : String,
        required : true,
        min : 6,
    },
    email : {
        type : String,
        required : true,
        unique : true,  
    }

})
export const UserModel = mongoose.model("User" , schema)
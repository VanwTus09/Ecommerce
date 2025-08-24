import mongoose from "mongoose"

const schema = new mongoose.Schema({
    username : {
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
})
export const UserModel = mongoose.model("User" , schema, "users")
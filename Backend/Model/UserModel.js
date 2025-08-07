import mongoose from "mongoose"

const schema = new mongoose.Schema({
    username : {
        type : String, 
        required : true
        
    } ,
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        require,
        unique : true,  
    }

})
export const UserModel = mongoose.model("User" , schema)
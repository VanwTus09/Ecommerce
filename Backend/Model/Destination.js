import mongoose  from "mongoose";
const schema = mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    Region : {
        type : "Northern VN" || "Southern VN" || "Central VN"
    },
    description : {
        type : String,
    },
    imageUrl : {
        type : String,
    }
})
export const DestinationModel = mongoose.model("Destination",schema)

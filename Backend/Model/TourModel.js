import mongoose from "mongoose";
const schema = new mongoose.Schema({
    name : {
        type : String ,
        required : true,
    },
    tour_code : {
        type : String ,
        required : true ,
        unique : true,
    },
    time_trip : {
        type : String,
        required : true
    },
    departure_day : {
        type : Date,
        default : Date.now,
    },
    place_starting : {
        type : String,
    },
    cost :{
        type : Number,
    },
    transportation : {
        type : String,
    },
    schedule :{
        type : String,
    },
    Notes : {
        type : String,
    },
    Region : {
        type : "NorthernVN" || "SouthernVN" || "CentralVN"
    },
    slots : {
        type : Number
    }

})
export const TourModel = mongoose.model("Tour",schema)
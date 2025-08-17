import { UserModel } from "../Model/UserModel.js"

export const GetUser = async (req,res) =>{
    try {
        const user = await UserModel.find({})
        res.json(user)
    } catch (error) {
        console.log("Error :", error)
        res.status(500).json({ message: error.message });
    }
}
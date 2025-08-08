import express from 'express'
import  { UserModel }  from "../Model/UserModel.js";
import {registerValidator} from "../middleware/validate.js";
import bcrypt from 'bcrypt';
const router = express.Router();
router.post('/register', async (req, res) =>{
    const {error} = registerValidator(req.body)
    if(error) return res.status(422).send(error.details[0].message)
    // check email
    const checkEmailExist = await UserModel.findOne({email : req.body.email})
    if(checkEmailExist) return res.status(422).send(error.details[0].message)
    // mã hóa pass
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)
    const user = new UserModel({
        name : req.body.name,
        email : req.body.email,
        password : hashPassword,
    })
    try{
        const newUser = await user.save();
        await res.send(newUser);
    }catch(err){
        res.status(400).send(err)
    }
})
// router.post("/login" , async (req,res) =>{

// })
export default router;

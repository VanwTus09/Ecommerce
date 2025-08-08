import express from 'express'
import  { UserModel }  from "../Model/UserModel.js";
import {registerValidator} from "../middleware/validate.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
const router = express.Router();
router.post('/register', async (req, res) =>{
    const {error} = registerValidator(req.body)
    if(error) return res.status(422).send(error.details[0].message)
    // check email
    const checkEmailExist = await UserModel.findOne({email : req.body.email})
    if(checkEmailExist) return res.status(422).send("email already exists")
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
         res.send(newUser);
    }catch(err){
        res.status(400).send(err)
    }
})
router.post('/login' , async (req,res) =>{
    const user = await UserModel.findOne({email : req.body.email })
    if(!user) return res.status(422).send("Email or Password is not correct")
    const checkPassword = await bcrypt.compare(req.body.password , user.password)
    if(!checkPassword) return res.status(422).send("Email or Password is not correct")
    const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "1h" }
    );

    // Set cookie (cần cookie-parser ở server.js)
    res.cookie("token", token, { httpOnly: true, secure: false });
    return res.send(`User ${user.name} has logged in`)
})
export default router;

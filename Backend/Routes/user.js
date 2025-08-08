import express from 'express'
import { UserModel } from '../Model/UserModel.js'
import authenToken from '../middleware/middleware.js';
const router = express.Router();

router.get('/' ,authenToken, async (req,res) => {
    try{
        const users = await UserModel.find({})
        res.json(users)
    }catch(err){
        res.status(500).send(`This error is : ${err}`)
    }
})
export default router;

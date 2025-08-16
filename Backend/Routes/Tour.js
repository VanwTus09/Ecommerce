import express from 'express'
import { TourModel } from '../Model/TourModel.js'
const router = express.Router();
router.get('/', async(req,res) =>{
    try {
        const tour = TourModel.find({})
        res.json(tour)
    } catch (error) {
        res.status(500).send(`This error is : ${err}`)
    }
})
export default router;

import express from "express";
import { getAllTours, createTour } from "../controller/Tour.js"

const router = express.Router();

router.get("/", getAllTours);   // gọi controller getAllTours
router.post("/createTour", createTour);  // gọi controller createTour

export default router;

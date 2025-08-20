import express from "express";
import { getAllTours, createTour ,getTourById} from "../controller/Tour.js"

const router = express.Router();

router.get("/", getAllTours);   // gọi controller getAllTours
router.get("/:id", getTourById); // gọi controller getTourById
router.post("/createTour", createTour);  // gọi controller createTour


export default router;

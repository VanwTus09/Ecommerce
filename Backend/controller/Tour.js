import { TourModel } from "../Model/TourModel.js";

// Lấy tất cả tour
export const getAllTours = async (req, res) => {
  try {
    const tours = await TourModel.find({});
    res.json(tours);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Tạo tour mới
export const createTour = async (req, res) => {
  try {
    const newTour = new TourModel(req.body);
    await newTour.save();
    res.status(201).json(newTour);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

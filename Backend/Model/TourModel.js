import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tour_code: {
    type: String,
    required: true,
    unique: true,
  },
  time_trip: {
    type: String,
    required: true,
  },
  departure_day: {
    type: Date,
    default: Date.now,
  },
  place_starting: {
    type: String,
  },
  cost: {
    type: Number,
  },
  transportation: {
    type: String,
  },
  schedule: {
    type: String,
  },
  notes: {
    type: String,
  },
  region: {
    type: String,
    enum: ["Northern VN", "Central VN", "Southern VN"], // ✅ enum cho vùng miền
    required: true,
  },
  slots: {
    type: Number,
    default: 20, // số chỗ mặc định
  },
  comments: [
    {
      user: String,
      content: String,
      createdAt: { type: Date, default: Date.now },
    },
  ], // ✅ comments cho hợp lý
  imageUrl: {
    type: String,
  },
  description: {
    type: String,
  },
});

// Tạo model
export const TourModel = mongoose.model("Tour", schema);

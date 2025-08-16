// seed.js
import mongoose from "mongoose";
import { TourModel } from "./Model/TourModel.js";

async function seed() {
  await mongoose.connect("mongodb://127.0.0.1:27017/TravelVn");

  await TourModel.deleteMany(); // clear

  await TourModel.insertMany([
    {
      name: "Hạ Long Bay Discovery",
      tour_code: "HLB001",
      time_trip: "3 ngày 2 đêm",
      departure_day: new Date("2025-09-01"),
      place_starting: "Hà Nội",
      cost: 3500000,
      transportation: "Xe + Tàu",
      schedule: "Hà Nội - Hạ Long - Tuần Châu",
      notes: "Mang theo giấy tờ tùy thân",
      region: "Northern VN",
      slots: 25,
      imageUrl: "https://example.com/halong.jpg",
      description: "Khám phá vịnh Hạ Long - di sản thiên nhiên thế giới.",
    },
    {
      name: "Huế - Đà Nẵng - Hội An",
      tour_code: "CDN001",
      time_trip: "4 ngày 3 đêm",
      departure_day: new Date("2025-09-10"),
      place_starting: "Huế",
      cost: 4500000,
      transportation: "Xe + Máy bay",
      schedule: "Huế - Đà Nẵng - Bà Nà - Hội An",
      notes: "Chuẩn bị trang phục thoải mái",
      region: "Central VN",
      slots: 30,
      imageUrl: "https://example.com/hoian.jpg",
      description: "Tham quan phố cổ Hội An, Bà Nà Hills và kinh thành Huế.",  
    },
    {
      name: "Miền Tây Sông Nước",
      tour_code: "ST001",
      time_trip: "2 ngày 1 đêm",
      departure_day: new Date("2025-09-15"),
      place_starting: "TP.HCM",
      cost: 2000000,
      transportation: "Xe + Thuyền",
      schedule: "TP.HCM - Cần Thơ - Chợ nổi Cái Răng",
      notes: "Thưởng thức đặc sản miền Tây",
      region: "Southern VN",
      slots: 20,
      imageUrl: "https://example.com/mientay.jpg",
      description: "Khám phá sông nước, vườn trái cây, chợ nổi đặc trưng miền Tây.",
    },
  ]);

  console.log("✅ Seed data thành công!");
  mongoose.connection.close();
}

seed();

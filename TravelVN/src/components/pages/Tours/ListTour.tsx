import { useTour } from "@/components/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { FilterTour } from "./FilterTour";
import {
  Clock,
  ReceiptText,
  MapPinned,
  Plane,
  CalendarDays,
} from "lucide-react";
import { Navigation } from "@/components/Home";
export const ListTour = () => {
  const navigate = useNavigate();
  const { tour, isLoading } = useTour();
  useEffect(() => {
    if (isLoading) return;
    if (!tour) {
      navigate("/");
    }
  }, [isLoading, tour, navigate]);
  // console.log(tour, "tourrrrr");
  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-muted-foreground animate-pulse">
          Đang tải dữ liệu...
        </p>
      </div>
    );
  }
  return (
    <div className="min-h-screen"> 
    <div className="pb-20 block"><Navigation/></div>
  <div className="flex justify-center items-center h-full px-4">
  <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4 h-full">
    {/* Filter bên trái (ẩn ở mobile) */}
    <div className="hidden md:flex flex-col w-1/4 h-full p-2 bg-gray-100 min-h-[70vh] max-h-[95vh]">
      <FilterTour />
    </div>

    {/* List tour */}
    <div className="flex flex-col gap-4 w-full md:w-3/4">
      <div className="bg-gray-200 p-2 rounded">
        <h1 className="text-sm md:text-base font-medium">Sắp xếp theo :</h1>
      </div>

      {tour?.map((t) => (
        <div
          key={t.id}
          className="flex flex-col md:flex-row border rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
        >
          {/* Ảnh */}
          <div className="w-full md:w-2/5 h-48 md:h-auto">
            <img
              src={t.imageUrl}
              alt="Logo"
              className="bg-cover bg-center md:bg-contain w-full h-full"
            />
          </div>

          {/* Nội dung */}
          <div className="flex flex-col justify-between p-4 w-full md:w-3/5">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">{t.name}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base">
                <p>
                  <ReceiptText className="inline w-5 h-5 mr-1" />
                  Mã tour: <span className="font-bold">{t.tour_code}</span>
                </p>
                <p>
                  <MapPinned className="inline w-5 h-5 mr-1" />
                  Nơi khởi hành:{" "}
                  <span className="text-blue-600">{t.place_starting}</span>
                </p>
                <p>
                  <Clock className="inline w-5 h-5 mr-1" />
                  Thời gian: {t.time_trip}
                </p>
                <p>
                  <Plane className="inline w-5 h-5 mr-1" />
                  Phương tiện:{" "}
                  <span className="text-yellow-600">{t.transportation}</span>
                </p>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <div className="text-sm md:text-base flex items-center">
                  <CalendarDays className="inline-block w-5 h-5 mr-1" />
                  Ngày khởi hành
                </div>
                <div className="bg-red-600 text-white rounded-lg w-16 md:w-20 text-center shadow hover:scale-105 transition">
                  <div className="text-lg font-bold">
                    {dayjs(t.departure_day).format("DD")}
                  </div>
                  <div className="text-xs uppercase">
                    {dayjs(t.departure_day).format("MMM")}
                  </div>
                </div>
              </div>
            </div>

            {/* Giá + Button */}
            <div className="flex items-end justify-between mt-4">
              <p className="text-sm md:text-base">
                Giá từ:
                <span className="text-xl md:text-2xl font-bold text-[#E01600] block">
                  {t.cost.toLocaleString("vi-VN")} đ
                </span>
              </p>
              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg shadow hover:from-sky-600 hover:to-blue-700 hover:scale-105 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>

  );
};

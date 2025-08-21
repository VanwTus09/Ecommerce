import { Footer, Navigation } from "@/components/Home";
import { useParams } from "react-router-dom";
import PaymentStepper from "./payment-step";
import { useTourById } from "@/components/hooks/use-tour-by-id";
import dayjs from "dayjs";
import {
  ReceiptText,
  MapPinned,
  Clock,
  Plane,
  CalendarDays,
} from "lucide-react";

export const PaymentPage = () => {
  const params = useParams<{ id: string }>();
  const { tour, isLoading } = useTourById(params.id);

  if (isLoading) {
    return <div className="text-center py-10">Đang tải dữ liệu...</div>;
  }

  if (!tour) {
    return (
      <div className="text-center py-10 text-red-500">
        Không tìm thấy tour
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="pb-20">
        <Navigation />
      </div>

      {/* Stepper */}
      <div className="w-4/5 mx-auto">
        <PaymentStepper currentStep={1} />
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6 w-4/5 mx-auto my-8">
        {/* Left: Personal info */}
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Thông tin cá nhân</h2>
          <div className="space-y-2 text-sm md:text-base">
            <p>
              <span className="font-semibold">Họ tên:</span> Nguyễn Văn A
            </p>
            <p>
              <span className="font-semibold">Email:</span> user@gmail.com
            </p>
            <p>
              <span className="font-semibold">Số điện thoại:</span> 0123 456 789
            </p>
            <p>
              <span className="font-semibold">Địa chỉ:</span> TP.HCM
            </p>
          </div>
        </div>

        {/* Right: Selected tour */}
        <div className="flex-1 flex flex-col md:flex-row border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-2/5 h-48 md:h-auto">
            <img
              src={tour.imageUrl}
              alt="Tour"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-4 w-full md:w-3/5">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">
                {tour.name}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base">
                <p>
                  <ReceiptText className="inline w-5 h-5 mr-1" />
                  Mã tour: <span className="font-bold">{tour.tour_code}</span>
                </p>
                <p>
                  <MapPinned className="inline w-5 h-5 mr-1" />
                  Nơi khởi hành:{" "}
                  <span className="text-blue-600">{tour.place_starting}</span>
                </p>
                <p>
                  <Clock className="inline w-5 h-5 mr-1" />
                  Thời gian: {tour.time_trip}
                </p>
                <p>
                  <Plane className="inline w-5 h-5 mr-1" />
                  Phương tiện:{" "}
                  <span className="text-yellow-600">
                    {tour.transportation}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-3 mt-3">
                <div className="text-sm md:text-base flex items-center">
                  <CalendarDays className="inline-block w-5 h-5 mr-1" />
                  Ngày khởi hành
                </div>
                <div className="bg-red-600 text-white rounded-lg w-16 md:w-20 text-center shadow hover:scale-105 transition">
                  <div className="text-lg font-bold">
                    {dayjs(tour.departure_day).format("DD")}
                  </div>
                  <div className="text-xs uppercase">
                    {dayjs(tour.departure_day).format("MMM")}
                  </div>
                </div>
              </div>
            </div>

            {/* Price + Button */}
            <div className="flex items-end justify-between mt-4">
              <p className="text-sm md:text-base">
                Giá từ:
                <span className="text-xl md:text-2xl font-bold text-[#E01600] block">
                  {tour.cost.toLocaleString("vi-VN")} đ
                </span>
              </p>
              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-blue-600 rounded-lg shadow hover:from-sky-600 hover:to-blue-700 hover:scale-105 transition">
                Xem chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

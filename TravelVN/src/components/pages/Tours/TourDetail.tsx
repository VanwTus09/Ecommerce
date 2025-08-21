import { Footer, Navigation } from "@/components/Home";
import { useTourById } from "@/components/hooks/use-tour-by-id";
import { Link, useParams } from "react-router-dom";
import {
  Clock,
  ReceiptText,
  MapPinned,
  Plane,
  CalendarDays,
  Armchair,
} from "lucide-react";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import TourInfo from "../../Tour/TourInfo";
import { TourNote } from "../../Tour/TourNote";
import { SimilarTour } from "../../Tour/SimilarTour";
export const TourDetail = () => {
  const params = useParams<{ id: string }>();
  const { tour, isLoading } = useTourById(params.id);
  if (isLoading) return <div>Đang tải ....</div>;
  console.log(tour, "tour detail");

  return (
    <div className="min-h-screen">
      <div className="pb-20 block">
        <Navigation />
      </div>
      <div className="flex flex-col w-[85%] justify-center px-4 mx-auto">
        <div className="w-full font-bold text-3xl items-center my-4">
          {tour?.name}
        </div>
        <div className="flex flex-col md:flex-row gap-3 justify-between">
          <div className="md:w-4/5 flex flex-col gap-20">
            {/* Ảnh tour */}
            <div className="flex">
              <img
                src={tour?.imageUrl}
                alt={tour?.name}
                className="w-full max-w-[1000px] h-[420px] md:h-[540px] object-cover rounded-xl shadow-md "
              />
            </div>
            <div className="rounded-xl shadow-lg bg-[#DAEFFF] p-4 border text-base">
                <h1 className="font-bold text-xl text-blue-700 my-2">Điểm nhấn của hành trình</h1>
                {tour?.description ?? "Lỗi"}
            </div>
            <div className="text-base">
                <TourInfo/>
            </div>
            <div className="text-base">
                <TourNote/>
            </div>
          </div>

          {/* Thông tin chi tiết */}
          <div className="hidden md:flex flex-col bg-white border rounded-xl shadow-lg p-6 sticky top-20 h-fit  max-h-[90vh] md:w-2/5 overflow-y-auto ">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3">
              Thông tin chi tiết chuyến đi
            </h2>

            <div className="flex flex-col gap-6 text-gray-700 text-base">
              {/* Giá */}
              <div>
                <p className="text-lg font-medium">Giá từ:</p>
                <span className="text-3xl font-bold text-[#E01600]">
                  {tour?.cost.toLocaleString("vi-VN")} đ
                </span>
                <span className="text-sm text-gray-600 ml-1">/ khách</span>
              </div>

              {/* Mã tour */}
              <p>
                <ReceiptText className="inline w-5 h-5 mr-2 text-gray-500" />
                <span className="font-medium">Mã tour: </span>
                <span className="text-blue-600">
                  {tour?.tour_code}-{tour?._id.slice(0, 10)}
                </span>
              </p>

              {/* Nơi khởi hành */}
              <p>
                <MapPinned className="inline w-5 h-5 mr-2 text-gray-500" />
                <span className="font-medium">Nơi khởi hành: </span>
                <span className="text-blue-600">{tour?.place_starting}</span>
              </p>

              {/* Thời gian */}
              <p>
                <Clock className="inline w-5 h-5 mr-2 text-gray-500" />
                <span className="font-medium">Thời gian: </span>
                <span className="text-blue-600">{tour?.time_trip}</span>
              </p>

              {/* Phương tiện */}
              <p>
                <Plane className="inline w-5 h-5 mr-2 text-gray-500" />
                <span className="font-medium">Phương tiện: </span>
                <span className="text-blue-600">{tour?.transportation}</span>
              </p>

              {/* Số chỗ */}
              <p>
                <Armchair className="inline w-5 h-5 mr-2 text-gray-500" />
                <span className="font-medium">Số chỗ còn: </span>
                <span className="text-blue-600">{tour?.slots}</span>
              </p>

              {/* Ngày khởi hành */}
              <div className="flex items-center gap-2">
                <CalendarDays className="w-5 h-5 inline text-gray-500" />
                <p className=" font-medium">Ngày khởi hành</p>
                <div className="flex ">
                  <div className="bg-red-600 text-white rounded-lg w-16 md:w-18 text-center pb-2 shadow-md mb-2">
                    <div className="text-lg font-bold">
                      {dayjs(tour?.departure_day).format("DD")}
                    </div>
                    <div className="text-xs uppercase">
                      {dayjs(tour?.departure_day).format("MMM")}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button */}
            <Link to={`/Payment/${tour?._id}`}>
            <Button className="bg-gradient-to-r  from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold text-lg  rounded-lg w-full shadow-md ">
              Đặt ngay
            </Button></Link>
          </div>
        </div>
      </div>
      <div className="py-14">
        <SimilarTour/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

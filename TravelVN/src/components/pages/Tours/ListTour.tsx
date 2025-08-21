import { useTour } from "@/components/hooks";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import {
  Clock,
  ReceiptText,
  MapPinned,
  Plane,
  CalendarDays,
  SearchX,
} from "lucide-react";
import { FeaturesSection, Footer, Navigation } from "@/components/Home";
import { TourIntroduce } from "../../Tour/TourIntroduce";
import { FilterTour, type FilterValues } from "@/components/Tour/FilterTour";
import { Button } from "@/components/ui/button";
function removeVietnameseTones(str: string) {
  return str
    .normalize("NFD") // tách dấu ra khỏi ký tự
    .replace(/[\u0300-\u036f]/g, "") // xóa các dấu
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase(); // đưa hết về chữ thường
}
export const ListTour = () => {
  const navigate = useNavigate();
  const { tour, isLoading } = useTour();
  const [filters, setFilters] = useState<FilterValues>({
    budget: "",
    destination: "",
    departure: "all",
    date: "",
  });
  const onResetFilters = () => {
  setFilters({
    budget: "",
    destination: "",
    departure: "all",
    date: ""
  });
};
  useEffect(() => {
    if (isLoading) return;
    if (!tour) {
      navigate("/");
    }
  }, [isLoading, tour, navigate]);
  const filteredTours = useMemo(() => {
    if (!tour) return [];

    return tour.filter((t) => {
      // lọc theo budget
      if (filters.budget === "under-2m" && t.cost >= 2000000) return false;
      if (filters.budget === "2-5m" && (t.cost < 2000000 || t.cost > 5000000))
        return false;
      if (filters.budget === "over-5m" && t.cost <= 5000000) return false;

      // lọc theo destination (bỏ dấu để so sánh)
      if (
        filters.destination &&
        !removeVietnameseTones(t.name).includes(
          removeVietnameseTones(filters.destination)
        )
      ) {
        return false;
      }

      // lọc theo departure (nơi khởi hành)
      if (filters.departure !== "all" && t.place_starting !== filters.departure)
        return false;

      // lọc theo ngày
      if (filters.date) {
        const tourDate = dayjs(t.departure_day).format("YYYY-MM-DD");
        if (tourDate !== filters.date) return false;
      }

      return true;
    });
  }, [tour, filters]);
  useEffect(() => {
    if (filteredTours.length > 0) {
      // Cuộn về đầu trang
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [filteredTours]);
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
      <div className="pb-20 block">
        <Navigation />
      </div>
      <div className="flex flex-col w-[85%] justify-center px-4 mx-auto">
        <TourIntroduce />
      </div>

      <div className="flex justify-center items-center h-full px-4">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4 h-full">
          {/* Filter bên trái (ẩn ở mobile) */}
          <div className="hidden md:flex flex-col w-1/4  p-2 h-fit max-h-[95vh] bg-gray-100 sticky top-20 translate-y-0.5 ">
            <FilterTour onFilter={setFilters} />
          </div>
          {/* List tour */}
          <div className="flex flex-col gap-4 w-full md:w-3/4">
            <div className="bg-gray-200 p-2 rounded">
              <h1 className="text-sm md:text-base font-medium">
                Sắp xếp theo :
              </h1>
            </div>

            {filteredTours.length > 0 ? (
              filteredTours?.map((t) => (
                <Link
                  to={`/TourDetail/${t._id}`}
                  key={t._id}
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
                      <h2 className="text-xl md:text-2xl font-bold mb-2">
                        {t.name}
                      </h2>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base">
                        <p>
                          <ReceiptText className="inline w-5 h-5 mr-1" />
                          Mã tour:{" "}
                          <span className="font-bold">{t.tour_code}</span>
                        </p>
                        <p>
                          <MapPinned className="inline w-5 h-5 mr-1" />
                          Nơi khởi hành:{" "}
                          <span className="text-blue-600">
                            {t.place_starting}
                          </span>
                        </p>
                        <p>
                          <Clock className="inline w-5 h-5 mr-1" />
                          Thời gian: {t.time_trip}
                        </p>
                        <p>
                          <Plane className="inline w-5 h-5 mr-1" />
                          Phương tiện:{" "}
                          <span className="text-yellow-600">
                            {t.transportation}
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
                </Link>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <SearchX className="w-16 h-16 text-gray-400 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Không tìm thấy tour nào
                </h2>
                <p className="text-gray-500 mb-6 text-center max-w-md">
                  Thử thay đổi tiêu chí tìm kiếm của bạn hoặc đặt lại bộ lọc để
                  tìm tour phù hợp hơn.
                </p>
                <Button onClick={onResetFilters} className="rounded-xl px-6">
                  Tìm kiếm lại
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full pt-4 gap-2">
        <FeaturesSection />
        <Footer />
      </div>
    </div>
  );
};

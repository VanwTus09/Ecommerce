import { useTour } from "@/components/hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
export const ListTour = () => {
  const navigate = useNavigate();
  const { tour, isLoading } = useTour();
  useEffect(() => {
    if (isLoading) return;
    if (!tour) {
      navigate("/");
    }
  }, [isLoading, tour, navigate]);
  console.log(tour, "tourrrrr");
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
    <div className="grid grid-cols-3 gap-4">
      {tour?.map((t) => (
        <div
          key={t.id}
          className="p-4 border rounded-xl shadow hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold">{t.name}</h2>
          <p className="text-sm text-gray-600">Mã tour: {t.tour_code}</p>
          <p className="text-sm">Thời gian: {t.time_trip}</p>
          <p className="text-sm">
            Ngày khởi hành: {dayjs(t.departure_day).format("DD/MM/YYYY")}
          </p>
        </div>
      ))}
    </div>
  );
};

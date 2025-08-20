import { Utensils, Map, Users, Clock, Bus, Percent } from "lucide-react";

export default function TourInfo() {
  const infoList = [
    {
      icon: <Map className="w-12 h-8 text-blue-500" />,
      title: "Điểm tham quan",
      desc: "Khám phá các địa điểm nổi tiếng, văn hóa đặc sắc",
    },
    {
      icon: <Utensils className="w-10 h-8 text-blue-500" />,
      title: "Ẩm thực",
      desc: "Buffet sáng, Theo thực đơn, Đặc sản địa phương",
    },
    {
      icon: <Users className="w-10 h-8 text-blue-500" />,
      title: "Đối tượng thích hợp",
      desc: "Cặp đôi, Gia đình nhiều thế hệ, Thanh niên",
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Thời gian lý tưởng",
      desc: "Quanh năm",
    },
    {
      icon: <Bus className="w-8 h-8 text-blue-500" />,
      title: "Phương tiện",
      desc: "Máy bay, Xe du lịch",
    },
    {
      icon: <Percent className="w-8 h-8 text-blue-500" />,
      title: "Khuyến mãi",
      desc: "Đã ưu đãi trực tiếp vào giá tour",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        THÔNG TIN THÊM VỀ CHUYẾN ĐI
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {infoList.map((item, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            {item.icon}
            <div>
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useTour } from "@/components/hooks";
import { Clock, ReceiptText, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";
export const SimilarTour = () => {
  const { tour, isLoading } = useTour();

  if (isLoading) return <p className="text-center">Đang tải...</p>;
  if (!tour || tour.length === 0)
    return <p className="text-center">Không có tour nào</p>;

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600 underline mb-4">
        CÁC TOUR DU LỊCH KHÁC
      </h1>
      <div className="flex justify-center">
        
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl"
        >
            
          <CarouselContent>
            {tour.map((item, index: number) => (
              
                <CarouselItem
                key={item._id || index}
                className="sm:basis-1/2 lg:basis-1/3"
              >
                <Link 
                to={`/TourDetail/${item?._id}`} 
                className="p-2 hover:scale-105 transition-transform h-[500px]">
                  <Card className="shadow-md hover:shadow-lg  rounded-xl overflow-hidden hover:scale-105 transition-transform ">
                    <CardContent className="p-0">
                      {/* Hình ảnh */}
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-40 object-cover"
                      />
                      {/* Thông tin tour */}
                      <h2 className="text-base md:text-xl font-bold mb-2 text-left line-clamp-2 hover:line-clamp-none p-2">{item.name}</h2>
                      <div className="p-3 gap-2 flex flex-col">
                        {/* Mã tour */}
                        <p>
                          <ReceiptText className="inline w-5 h-5 mr-2 text-gray-500" />
                          <span className="font-medium">Mã tour: </span>
                          <span className="text-blue-600">
                            {item?.tour_code}-{item?._id.slice(0, 10)}
                          </span>
                        </p>

                        {/* Nơi khởi hành */}
                        <p>
                          <MapPinned className="inline w-5 h-5 mr-2 text-gray-500" />
                          <span className="font-medium">Nơi khởi hành: </span>
                          <span className="text-blue-600">
                            {item?.place_starting}
                          </span>
                        </p>

                        {/* Thời gian */}
                        <p>
                          <Clock className="inline w-5 h-5 mr-2 text-gray-500" />
                          <span className="font-medium">Thời gian: </span>
                          <span className="text-blue-600">
                            {item?.time_trip}
                          </span>
                        </p>
                        <p className="text-sm md:text-base ">
                          Giá từ:
                          <span className="text-xl md:text-2xl font-bold text-[#E01600] block">
                            {item?.cost.toLocaleString("vi-VN")} đ
                          </span>
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
              
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
      </div>
    </div>
  );
};

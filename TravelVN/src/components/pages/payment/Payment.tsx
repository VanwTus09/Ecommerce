import { Footer, Navigation } from "@/components/Home";
import { useNavigate, useParams } from "react-router-dom";
import PaymentStepper from "./payment-step";
import { useTourById } from "@/components/hooks/use-tour-by-id";
import dayjs from "dayjs";
import {
  ReceiptText,
  MapPinned,
  Clock,
  Plane,
  CalendarDays,
  Armchair,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaymentNote } from "./payment-note";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { PaymentForm } from "./Payment-form";
import PaymentQRCode from "./payment-qrcode";
const formSchema = z.object({
  phone: z.string(),
  name: z.string().min(6),
  email: z.string().email(),
  address: z.string().min(4),
 adult: z.number().min(1, { message: "Phải có ít nhất 1 người lớn" }),
  child: z.number().min(0),
});
type FormSchema = z.infer<typeof formSchema>;
export const PaymentPage = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      name: "",
      email: "",
      address: "",
      adult: 1,
      child: 0,
    },
  });
  const params = useParams<{ id: string }>();
  const { tour, isLoading } = useTourById(params.id);
 
  
  const navigate = useNavigate();
  if (isLoading) {
    return <div className="text-center py-10">Đang tải dữ liệu...</div>;
  }

  if (!tour) {
    return (
      <div className="text-center py-10 text-red-500">Không tìm thấy tour</div>
    );
  }

  const adult = form.watch("adult") ?? 0;
  const child = form.watch("child") ?? 0;


  
  const adultPrice = Number(tour.cost);
  const childPrice = adultPrice * 0.8;
  const total = adult * adultPrice + child * childPrice;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="pb-20">
        <Navigation />
      </div>

      {/* Stepper */}
      <div className="w-4/5 mx-auto ">
        {/* Quay lại */}
        <div className="flex items-center gap-2 mb-8 ">
        <ChevronLeft className="w-5 h-5" />
        <Button
          onClick={() => navigate(-1)}
          className="text-sm font-medium hover:underline bg-gray-400 "
        >
          Quay lại
        </Button>
        </div>
        <PaymentStepper currentStep={1} />
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-6 w-4/5 mx-auto my-8">
        <div className="flex-1 flex flex-col md:flex-row border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
          {/* Image */}
          <div className="w-full md:w-1/3 h-48 md:h-auto">
            <img
              src={tour.imageUrl}
              alt="Tour"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between p-4 w-full md:w-2/3 border-2">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl md:text-2xl font-bold mb-2 border-b-2 pb-2">
                {tour.name}
              </h2>

              <div className="flex flex-col gap-2 text-sm md:text-base">
                {/* Mã tour */}
                <div className="flex items-center">
                  <ReceiptText className="w-5 h-5 mr-2 shrink-0" />
                  <span className="w-40 font-medium">Mã tour:</span>
                  <span className="font-bold">{tour.tour_code}</span>
                </div>

                {/* Nơi khởi hành */}
                <div className="flex items-center">
                  <MapPinned className="w-5 h-5 mr-2 shrink-0" />
                  <span className="w-40 font-medium">Nơi khởi hành:</span>
                  <span>{tour.place_starting}</span>
                </div>

                {/* Thời gian */}
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 shrink-0" />
                  <span className="w-40 font-medium">Thời gian:</span>
                  <span>{tour.time_trip}</span>
                </div>

                {/* Phương tiện */}
                <div className="flex items-center">
                  <Plane className="w-5 h-5 mr-2 shrink-0" />
                  <span className="w-40 font-medium">Phương tiện:</span>
                  <span>{tour.transportation}</span>
                </div>

                {/* Ngày khởi hành */}
                <div className="flex items-center">
                  <CalendarDays className="w-5 h-5 mr-2 shrink-0" />
                  <span className="w-40 font-medium">Ngày khởi hành:</span>
                  <span>{dayjs(tour.departure_day).format("DD/MM/YYYY")}</span>
                </div>

                {/* Số chỗ */}
                <div className="flex items-center">
                  <Armchair className="w-5 h-5 mr-2 shrink-0" />
                  <span className="w-40 font-medium">Số chỗ còn nhận:</span>
                  <span>{tour.slots}</span>
                </div>
              </div>
            </div>

            {/* Price + Button */}
            <div className="flex items-end justify-between mt-4">
              <p className="text-sm md:text-base">
                Giá tour:
                <span className="text-xl md:text-2xl font-bold text-[#E01600] block">
                  {tour.cost.toLocaleString("vi-VN")} đ
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* Payment Note */}
      <PaymentNote />
        <div className="flex-1 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Thông tin liên hệ</h2>
          <div className="space-y-2 text-sm md:text-base">
            <PaymentForm form={form}/>
            <div className="items-center text-right md:text-base text-lg p-2 mr-4">Tổng giá trị : <span className="text-2xl text-red-400 ml-4">{total.toLocaleString('vi-VN')} đ</span></div>
          </div>
        </div>
      </div>
      
      <PaymentQRCode/>
      {/* Footer */}
      <Footer />
    </div>
  );
};

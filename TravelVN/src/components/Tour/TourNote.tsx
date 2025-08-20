import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const TourNote = () => {
  return (
    <div className="">
      <h1 className="text-2xl md:text-3xl font-bold text-center">
        NHỮNG THÔNG TIN CẦN LƯU Ý
      </h1>
      <div className="flex flex-col gap-6 mt-10 p-6">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="">
            <AccordionTrigger className="bg-gray-100 text-lg font-medium "><span className="ml-2">Giá tour bao gồm</span></AccordionTrigger>
            <AccordionContent className="text-base">
              - Vé máy bay khứ hồi TP.HCM <br />
              – Singapore// Malaysia <br />
              - TP.HCM (bao gồm 7kg hành lý xách tay và 20kg hành lý ký gửi) <br />
              - Phòng khách sạn 3 sao, tiêu chuẩn 2 khách/phòng - Các điểm tham quan theo chương trình <br />
              - Bảo hiểm du lịch đã bao gồm Covid 19 - Hướng dẫn viên VietNamTours nói tiếng Việt và đi theo suốt tuyến.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-gray-100 text-lg font-medium text-center "><span className="ml-2">Giá tour không bao gồm</span></AccordionTrigger>
            <AccordionContent>
              - Vé máy bay khứ hồi TP.HCM <br />
              – Singapore// Malaysia <br />
              - TP.HCM (bao gồm 7kg hành lý xách tay và 20kg hành lý ký gửi) <br />
              - Phòng khách sạn 3 sao, tiêu chuẩn 2 khách/phòng - Các điểm tham quan theo chương trình <br />
              - Bảo hiểm du lịch đã bao gồm Covid 19 - Hướng dẫn viên VietNamTours nói tiếng Việt và đi theo suốt tuyến.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-gray-100 text-lg font-medium text-center "><span className="ml-2">Điều kiện thanh toán</span></AccordionTrigger>
            <AccordionContent>
              - Vé máy bay khứ hồi TP.HCM <br />
              – Singapore// Malaysia <br />
              - TP.HCM (bao gồm 7kg hành lý xách tay và 20kg hành lý ký gửi) <br />
              - Phòng khách sạn 3 sao, tiêu chuẩn 2 khách/phòng - Các điểm tham quan theo chương trình <br />
              - Bảo hiểm du lịch đã bao gồm Covid 19 - Hướng dẫn viên VietNamTours nói tiếng Việt và đi theo suốt tuyến.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-gray-100 text-lg font-medium text-center "><span className="ml-2">Điều kiện đăng ký</span></AccordionTrigger>
            <AccordionContent>
              - Vé máy bay khứ hồi TP.HCM <br />
              – Singapore// Malaysia <br />
              - TP.HCM (bao gồm 7kg hành lý xách tay và 20kg hành lý ký gửi) <br />
              - Phòng khách sạn 3 sao, tiêu chuẩn 2 khách/phòng - Các điểm tham quan theo chương trình <br />
              - Bảo hiểm du lịch đã bao gồm Covid 19 - Hướng dẫn viên VietNamTours nói tiếng Việt và đi theo suốt tuyến.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-gray-100 text-lg font-medium text-center "><span className="ml-2">Lưu ý về chuyển hoặc hủy tour</span></AccordionTrigger>
            <AccordionContent>
              - Vé máy bay khứ hồi TP.HCM <br />
              – Singapore// Malaysia <br />
              - TP.HCM (bao gồm 7kg hành lý xách tay và 20kg hành lý ký gửi) <br />
              - Phòng khách sạn 3 sao, tiêu chuẩn 2 khách/phòng - Các điểm tham quan theo chương trình <br />
              - Bảo hiểm du lịch đã bao gồm Covid 19 - Hướng dẫn viên VietNamTours nói tiếng Việt và đi theo suốt tuyến.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="bg-gray-100 text-lg font-medium text-center "><span className="ml-2">Thông tin về VISA</span></AccordionTrigger>
            <AccordionContent>
              - Vé máy bay khứ hồi TP.HCM <br />
              – Singapore// Malaysia <br />
              - TP.HCM (bao gồm 7kg hành lý xách tay và 20kg hành lý ký gửi) <br />
              - Phòng khách sạn 3 sao, tiêu chuẩn 2 khách/phòng - Các điểm tham quan theo chương trình <br />
              - Bảo hiểm du lịch đã bao gồm Covid 19 - Hướng dẫn viên VietNamTours nói tiếng Việt và đi theo suốt tuyến.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

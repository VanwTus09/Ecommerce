import { ReceiptText } from "lucide-react";

export const PaymentNote = () => {
  return (
    <div>
      {/* Payment Note */}
      <div className="flex items-start gap-3 p-4 mb-6 rounded-xl bg-yellow-50 border border-yellow-300">
        <ReceiptText className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
        <p className="text-sm md:text-base text-gray-700 leading-relaxed">
          Các khoản phí phát sinh (nếu có) bao gồm: phụ thu dành cho khách nước
          ngoài, việt kiều; phụ thu phòng đơn; phụ thu chênh lệch giá tour… Nhân
          viên Du Lịch Việt sẽ liên hệ trực tiếp với quý khách qua điện thoại
          ngay sau khi có phiếu xác nhận booking (trong giờ hành chính).
          <br />
          <br />
          Trong trường hợp quý khách không đồng ý với các khoản phát sinh này,
          phiếu xác nhận booking sẽ{" "}
          <span className="font-semibold text-red-600">không còn hiệu lực</span>
          . Để đảm bảo quyền lợi, quý khách vui lòng kiểm tra kỹ thông tin và
          xác nhận với nhân viên trước khi tiến hành thanh toán.
        </p>
      </div>
    </div>
  );
};

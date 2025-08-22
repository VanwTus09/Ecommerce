import React, { useState } from "react";

const PaymentQRCode: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 phút = 300s
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const openModal = () => {
    setShowModal(true);
    setTimeLeft(300);

    // clear timer cũ trước khi set mới
    if (timerId) clearInterval(timerId);

    const id = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(id);
          setShowModal(false);
          alert("Vui lòng thử lại!");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    setTimerId(id);
  };

  const closeModal = () => {
    if (timerId) clearInterval(timerId);
    setShowModal(false);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <button
        onClick={openModal}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
      >
        Thanh toán
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96 relative">
            <h2 className="text-xl font-bold text-center mb-4">
              Quét mã để thanh toán
            </h2>

            {/* QR code giả demo */}
            <div className="flex justify-center mb-4">
              <img
                src="/QRCODE.png"
                alt="QR Code"
                className="rounded-lg"
              />
            </div>

            {/* Countdown */}
            <p className="text-center text-red-600 font-semibold text-lg mb-4">
              Thời gian còn lại: {formatTime(timeLeft)}
            </p>

            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentQRCode;

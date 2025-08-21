import { CreditCard, FileText, CheckCircle } from "lucide-react";
import type { JSX } from "react";

type Step = {
  id: number;
  title: string;
  icon: JSX.Element;
};

const steps: Step[] = [
  { id: 1, title: "NHẬP THÔNG TIN", icon: <FileText className="w-6 h-6" /> },
  { id: 2, title: "THANH TOÁN", icon: <CreditCard className="w-6 h-6" /> },
  { id: 3, title: "HOÀN TẤT", icon: <CheckCircle className="w-6 h-6" /> },
];

interface PaymentStepperProps {
  currentStep: number; // bước hiện tại (1, 2 hoặc 3)
}

export default function PaymentStepper({ currentStep }: PaymentStepperProps) {
  return (
    <div className="w-full max-w-4xl mx-auto py-6">
      

      {/* Title */}

      <h2 className="text-center text-2xl font-bold text-blue-700 mb-10">
        ĐẶT TOUR
      </h2>

      {/* Steps */}
      <div className="flex items-center justify-between mx-auto">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          return (
            <div key={step.id} className="flex flex-col items-center flex-1">
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full 
                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-500"
                }`}
              >
                {step.icon}
              </div>
              <p
                className={`mt-3 font-semibold text-sm ${
                  isActive ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {step.title}
              </p>
              {/* Dấu mũi tên giữa các step */}
              {index < steps.length - 1 && (
                <div className="absolute right-0 translate-x-full top-1/3 text-gray-400">
                  →
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

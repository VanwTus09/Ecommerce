import React from 'react';
import type { LucideIcon } from 'lucide-react';
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
      <div className="w-16 h-16 bg-[#4741A6] rounded-full flex items-center justify-center mx-auto mb-6">
        <Icon className="text-white" size={28} />
      </div>
      <h3 className="text-xl font-bold text-[#4741A6] mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};


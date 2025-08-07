import React from 'react';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  name: string;
  location: string;
  description: string;
  imageUrl: string;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  name,
  location,
  description,
  imageUrl
}) => {
  return (
    <div className="group cursor-pointer transform hover:scale-105 transition-all duration-300">
      <div 
        className="h-64 rounded-2xl bg-cover bg-center mb-4 relative overflow-hidden shadow-xl"
        style={{
          backgroundImage: `url('${imageUrl}')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#4741A6] via-transparent to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center text-white mb-2">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{location}</span>
          </div>
          <h3 className="text-white font-bold text-xl">{name}</h3>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};


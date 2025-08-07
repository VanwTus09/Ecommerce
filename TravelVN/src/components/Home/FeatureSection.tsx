import React from 'react';
import { Star, MapPin } from 'lucide-react';
import {FeatureCard} from './FeatureCard';

const features = [
  {
    icon: Star,
    title: "Incredible Value",
    description: "Experience luxury at affordable prices with exceptional local cuisine and accommodations"
  },
  {
    icon: MapPin,
    title: "Diverse Landscapes", 
    description: "From pristine beaches to mountain peaks, Vietnam offers incredible natural diversity"
  },
  {
    icon: Star,
    title: "Rich Culture",
    description: "Immerse yourself in centuries-old traditions, festivals, and authentic experiences"
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#D9EFF7] to-[#9BBBFC]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#4741A6] mb-4">
          Why Choose Vietnam?
        </h2>
        <p className="text-xl text-[#4741A6] mb-12 max-w-3xl mx-auto opacity-90">
          Experience the perfect combination of natural beauty, rich history, and warm hospitality
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


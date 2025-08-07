import React from 'react';
import {DestinationCard} from './DestinationCard';

const destinations = [
  {
    name: "Ha Long Bay",
    location: "Northern Vietnam",
    description: "UNESCO World Heritage site featuring emerald waters and limestone pillars",
    imageUrl: "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    name: "Da Nang",
    location: "Central Vietnam", 
    description: "Modern coastal city with pristine beaches and the famous Golden Bridge",
    imageUrl: "https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    name: "Hoi An",
    location: "Central Vietnam",
    description: "Ancient town with lantern-lit streets and traditional architecture",
    imageUrl: "https://images.pexels.com/photos/2291004/pexels-photo-2291004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  },
  {
    name: "Sapa",
    location: "Northern Vietnam",
    description: "Mountainous region with stunning rice terraces and ethnic villages",
    imageUrl: "https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
  }
];

export const DestinationsSection: React.FC = () => {
  return (
    <section id="destinations" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#4741A6] mb-4">
            Iconic Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore Vietnam's most captivating locations, each offering unique experiences and unforgettable memories
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              name={destination.name}
              location={destination.location}
              description={destination.description}
              imageUrl={destination.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};


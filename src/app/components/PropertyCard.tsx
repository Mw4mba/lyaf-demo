import React from 'react';
import { BedDouble, Bath, Car } from 'lucide-react';

export interface Property {
  id: number;
  type: string;
  location: string;
  beds: number;
  baths: number;
  parking: number;
  price: number;
  image: string;
}

interface PropertyCardProps {
  property: Property;
}

const formatPrice = (price: number): string => `R ${new Intl.NumberFormat('en-ZA').format(price)}`;

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => (
  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="relative">
      <img src={property.image} alt={`${property.type} in ${property.location}`} className="w-full h-56 object-cover" />
      <div className="absolute top-4 left-4 bg-slate-800/70 text-white text-sm px-3 py-1 rounded-full">{property.type}</div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-1">{property.location}</h3>
      <p className="text-2xl font-extrabold text-[#1746a3] mb-4">{formatPrice(property.price)}</p>
      <div className="flex items-center text-slate-500 space-x-6 border-t border-slate-100 pt-4">
        <span className="flex items-center"><BedDouble className="w-5 h-5 mr-2 text-slate-400" /> {property.beds}</span>
        <span className="flex items-center"><Bath className="w-5 h-5 mr-2 text-slate-400" /> {property.baths}</span>
        <span className="flex items-center"><Car className="w-5 h-5 mr-2 text-slate-400" /> {property.parking}</span>
      </div>
    </div>
  </div>
);

export default PropertyCard;

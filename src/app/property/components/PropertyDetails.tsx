import React from 'react';
import { MapPin, BedDouble, Bath, Car, Ruler, Banknote } from 'lucide-react';
import { formatPrice } from '../page';

interface PropertyDetailsProps {
  title: string;
  location: string;
  description: string;
  details: {
    bedrooms: number;
    bathrooms: number;
    parking: number;
    size: string;
    erfSize: string;
    levies: number;
    rates: number;
  };
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ title, location, description, details }) => (
  <div className="mt-8">
    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800">{title}</h1>
    <div className="flex items-center text-slate-500 mt-2">
      <MapPin size={18} className="mr-2" />
      <span>{location}</span>
    </div>
    <div id="description" className="mt-8">
      <h2 className="text-2xl font-bold border-b pb-2 mb-4">Property Description</h2>
      <p className="text-slate-600 leading-relaxed whitespace-pre-line">{description}</p>
    </div>
    <div id="details" className="mt-8">
      <h2 className="text-2xl font-bold border-b pb-2 mb-4">Property Details</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-slate-700">
        <div className="flex items-center"><BedDouble className="w-6 h-6 mr-3 text-[#1240a0]"/><div><span className="font-semibold block">{details.bedrooms}</span><span className="text-sm text-slate-500">Bedrooms</span></div></div>
        <div className="flex items-center"><Bath className="w-6 h-6 mr-3 text-[#1240a0]"/><div><span className="font-semibold block">{details.bathrooms}</span><span className="text-sm text-slate-500">Bathrooms</span></div></div>
        <div className="flex items-center"><Car className="w-6 h-6 mr-3 text-[#1240a0]"/><div><span className="font-semibold block">{details.parking}</span><span className="text-sm text-slate-500">Garages</span></div></div>
        <div className="flex items-center"><Ruler className="w-6 h-6 mr-3 text-[#1240a0]"/><div><span className="font-semibold block">{details.size}</span><span className="text-sm text-slate-500">House Size</span></div></div>
        <div className="flex items-center"><Ruler className="w-6 h-6 mr-3 text-[#1240a0]"/><div><span className="font-semibold block">{details.erfSize}</span><span className="text-sm text-slate-500">Erf Size</span></div></div>
        <div className="flex items-center"><Banknote className="w-6 h-6 mr-3 text-[#1240a0]"/><div><span className="font-semibold block">{formatPrice(details.rates + details.levies)}</span><span className="text-sm text-slate-500">Rates & Levies</span></div></div>
      </div>
    </div>
  </div>
);

export default PropertyDetails;

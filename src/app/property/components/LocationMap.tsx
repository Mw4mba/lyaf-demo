import React from 'react';

interface LocationMapProps {
  address: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ address }) => (
  <div className="border rounded-xl mt-6 bg-white shadow-sm overflow-hidden">
    <div className="p-6">
      <h3 className="font-bold text-lg mb-2">Location</h3>
      <p className="text-sm text-slate-500">{address}</p>
    </div>
    <iframe
      src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`}
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default LocationMap;

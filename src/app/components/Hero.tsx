import React from 'react';

interface HeroProps {
  handleFilterChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const Hero: React.FC<HeroProps> = ({ handleFilterChange }) => {
  const [propertyCategory, setPropertyCategory] = React.useState<'Residential' | 'Commercial'>('Residential');

  return (
    <div className='flex flex-row justify-center bg-white'>
      <section className="h-[70vh] w-[98vw] rounded-4xl p-2 flex items-center justify-center text-white" style={{backgroundImage: "linear-gradient(rgba(17, 24, 39, 0.6), rgba(17, 24, 39, 0.6)), url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">Your Key to Modern Living</h1>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">Find your perfect home with  the LYAF familiy.</p>
          <div className="flex justify-center gap-6 mb-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="property-category"
                value="Residential"
                checked={propertyCategory === 'Residential'}
                onChange={() => setPropertyCategory('Residential')}
                className="sr-only"
              />
              <span
                className={`px-4 py-2 rounded-full border-2 font-semibold text-lg transition-colors duration-150 ${propertyCategory === 'Residential' ? 'bg-[#1240a0] text-white border-[#1240a0]' : 'bg-white text-slate-600 border-slate-300'}`}
              >
                Residential
              </span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="property-category"
                value="Commercial"
                checked={propertyCategory === 'Commercial'}
                onChange={() => setPropertyCategory('Commercial')}
                className="sr-only"
              />
              <span
                className={`px-4 py-2 rounded-full border-2 font-semibold text-lg transition-colors duration-150 ${propertyCategory === 'Commercial' ? 'bg-[#1240a0] text-white border-[#1240a0]' : 'bg-white text-slate-600 border-slate-300'}`}
              >
                Commercial
              </span>
            </label>
          </div>
          <div className="relative bottom-0 p-4 md:p-6 rounded-4xl shadow-xl/30 max-w-4xl mx-auto mt-4 text-slate-800 bg-white/90 backdrop-blur-sm">
            {propertyCategory === 'Residential' ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="flex flex-col text-left">
                  <label htmlFor="location" className="text-sm font-medium text-slate-500 mb-1">Location</label>
                  <input type="text" id="location" name="location" placeholder="e.g., Sandton, Cape Town" onChange={handleFilterChange} className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1240a0] focus:outline-none" />
                </div>
                
                <div className="flex flex-col text-left">
                  <label htmlFor="property-type" className="text-sm font-medium text-slate-500 mb-1">Property Type</label>
                  <select id="property-type" name="type" onChange={handleFilterChange} className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1240a0] focus:outline-none bg-white">
                    <option value="all">All Types</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Townhouse">Townhouse</option>
                  </select>
                </div>
                <div className="flex flex-col text-left">
                  <label htmlFor="bedrooms" className="text-sm font-medium text-slate-500 mb-1">Bedrooms</label>
                  <select id="bedrooms" name="beds" onChange={handleFilterChange} className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1240a0] focus:outline-none bg-white">
                    <option value="all">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                  </select>
                </div>
                <button className="bg-[#1240a0] text-white p-3 rounded-lg hover:bg-[#ff9138] transition-colors w-full font-bold flex items-center justify-center">
                  Search
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                <div className="flex flex-col text-left">
                  <label htmlFor="location" className="text-sm font-medium text-slate-500 mb-1">Location</label>
                  <input type="text" id="location" name="location" placeholder="e.g., Sandton, Cape Town" onChange={handleFilterChange} className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1240a0] focus:outline-none" />
                </div>
                <div className="flex flex-col text-left">
                  <label htmlFor="commercial-type" className="text-sm font-medium text-slate-500 mb-1">Commercial Type</label>
                  <select id="commercial-type" name="commercialType" onChange={handleFilterChange} className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1240a0] focus:outline-none bg-white">
                    <option value="all">All Types</option>
                    <option value="Office">Office</option>
                    <option value="Retail">Retail</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                </div>
                <button className="bg-[#1240a0] text-white p-3 rounded-lg hover:bg-[#ff9138] transition-colors w-full font-bold flex items-center justify-center">
                  Search
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

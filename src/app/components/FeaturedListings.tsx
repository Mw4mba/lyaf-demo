import React from 'react';
import { Home as HomeIcon } from 'lucide-react';
//import PropertyCard from './PropertyCard';
import PropertyCard,{Property} from './PropertyCard';
//import { Property } from './PropertyCard';

interface FeaturedListingsProps {
  filteredProperties: Property[];
  visibleProperties: number;
  handleLoadMore: () => void;
}

const FeaturedListings: React.FC<FeaturedListingsProps> = ({ filteredProperties, visibleProperties, handleLoadMore }) => (
  <section id="listings" className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Featured Properties For Sale</h2>
        <p className="text-slate-500  mt-2 max-w-xl mx-auto">Discover our curated selection of premium properties in the most sought-after locations.</p>
      </div>
      {filteredProperties.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.slice(0, visibleProperties).map(prop => <PropertyCard key={prop.id} property={prop} />)}
          </div>
          {visibleProperties < filteredProperties.length && (
            <div className="text-center mt-12">
              <button onClick={handleLoadMore} className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-900 transition-colors font-semibold">Load More</button>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 text-slate-500">
          <HomeIcon className="w-16 h-16 mx-auto text-slate-300 mb-4" />
          <h3 className="text-xl font-semibold">No Properties Found</h3>
          <p>Try adjusting your search criteria to find your perfect home.</p>
        </div>
      )}
    </div>
  </section>
);

export default FeaturedListings;

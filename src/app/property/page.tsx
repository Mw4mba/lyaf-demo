'use client';

import React, { useState } from 'react';
// import { Home as HomeIcon } from 'lucide-react';
import ImageCarousel from './components/ImageCarousel';
import Header from '../components/Header';
import PropertyDetails from './components/PropertyDetails';
import ContactAgent from './components/ContactAgent';
import LocationMap from './components/LocationMap';
import LifestyleIndex from './components/LifestyleIndex';
import MortgageCalculator from './components/MortgageCalculator';
import ScheduleTour from './components/ScheduleTour';
import Footer from '../components/Footer';

// --- MOCK DATA FOR A SINGLE PROPERTY ---
const propertyDetails = {
    id: 1,
    title: 'Modern Family Home in Sandton',
    location: 'Sandton, Johannesburg',
    address: '123 Luxury Lane, Sandton, Johannesburg, 2196',
    price: 4500000,
    description: "Nestled in the heart of Sandton, this stunning modern home offers the perfect blend of luxury and comfort. Featuring an open-plan living area that flows seamlessly onto a covered patio and lush garden, it's an entertainer's dream. The gourmet kitchen is equipped with top-of-the-line appliances and a separate scullery. Upstairs, you'll find four spacious bedrooms, all en-suite, with the master bedroom boasting a private balcony and a walk-in closet. With high-end finishes throughout, staff accommodation, and a double automated garage, this property provides secure, upscale living in one of Johannesburg's most desirable suburbs.",
    details: {
        bedrooms: 4,
        bathrooms: 4.5,
        parking: 2,
        size: '350m²',
        erfSize: '600m²',
        levies: 2500,
        rates: 1800,
    },
    images: [
        'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    ],
    agent: {
        name: 'Jane Doe',
        avatar: 'https://placehold.co/80x80/E2E8F0/475569?text=JD',
    }
};

// --- UTILITY FUNCTIONS ---
export const formatPrice = (price: number, compact: boolean = false): string => {
    const options: Intl.NumberFormatOptions = compact
        ? { notation: 'compact', compactDisplay: 'short', style: 'currency', currency: 'ZAR', minimumFractionDigits: 0, maximumFractionDigits: 0 }
        : { style: 'currency', currency: 'ZAR', minimumFractionDigits: 0, maximumFractionDigits: 0 };
    return new Intl.NumberFormat('en-ZA', options).format(price);
};


// --- STYLES ---
const GlobalStyles = () => (
  <style>{`
    body {
        font-family: 'Inter', sans-serif;
        background-color: #f8fafc; /* slate-50 */
    }
  `}</style>
);



// --- MAIN PAGE COMPONENT ---
export default function PropertyDetailsPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { title, location, price, description, details, images, agent, address } = propertyDetails;

    return (
        <>
            <GlobalStyles />
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            <main className="container mx-auto p-6 my-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Main Content Column */}
                    <div className="w-full lg:w-2/3">
                        <ImageCarousel images={images} />
                        <PropertyDetails
                          title={title}
                          location={location}
                          description={description}
                          details={details}
                        />
                    </div>

                    {/* Sticky Sidebar Column */}
                    <div className="w-full lg:w-1/3">
                        <div className="w-full lg:w-2/3">
                          <div className="sticky top-24">
                            <ContactAgent agent={agent} price={price} formatPrice={formatPrice} />
                            <LocationMap address={address} />
                          </div>
                        </div>
                    </div>
                </div>

                {/* --- NEW SECTIONS --- */}
                <div className="mt-12 space-y-12">
                  <LifestyleIndex />
                  <ScheduleTour />
                  <section id="calculator">
                    <MortgageCalculator propertyPrice={price} />
                  </section>
                </div>
            </main>
            <Footer />
        </>
    );
}


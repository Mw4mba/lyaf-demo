'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Search } from 'lucide-react';
import { CarouselSize } from './components/PropertyCarousel';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedListings from './components/FeaturedListings';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// --- MOCK DATA ---
// In a real application, this would come from a CMS or API
const allProperties = [
    { id: 1, type: 'House', location: 'Sandton', beds: 4, baths: 3, parking: 2, price: 4500000, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop' },
    { id: 2, type: 'Apartment', location: 'Cape Town', beds: 2, baths: 2, parking: 1, price: 3200000, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop' },
    { id: 3, type: 'Townhouse', location: 'Pretoria', beds: 3, baths: 2, parking: 2, price: 2100000, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop' },
    { id: 4, type: 'House', location: 'Durban', beds: 5, baths: 4, parking: 3, price: 6800000, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=800&auto=format&fit=crop' },
    { id: 5, type: 'Apartment', location: 'Sandton', beds: 1, baths: 1, parking: 1, price: 1850000, image: 'https://images.unsplash.com/photo-1493809842344-ab5a42a16a9a?q=80&w=800&auto=format&fit=crop' },
    { id: 6, type: 'House', location: 'Stellenbosch', beds: 3, baths: 2, parking: 2, price: 3950000, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop' },
    { id: 7, type: 'Apartment', location: 'Pretoria', beds: 2, baths: 1, parking: 1, price: 1300000, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop' },
    { id: 8, type: 'Townhouse', location: 'Cape Town', beds: 2, baths: 2, parking: 1, price: 2750000, image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800&auto=format&fit=crop' },
    { id: 9, type: 'House', location: 'Sandton', beds: 6, baths: 5, parking: 4, price: 12500000, image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=800&auto=format&fit=crop' },
    { id: 10, type: 'Apartment', location: 'Durban', beds: 3, baths: 2, parking: 2, price: 2400000, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop' },
    { id: 11, type: 'House', location: 'Constantia', beds: 4, baths: 4, parking: 3, price: 8900000, image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800&auto=format&fit=crop' },
    { id: 12, type: 'Townhouse', location: 'Midrand', beds: 3, baths: 2, parking: 2, price: 1950000, image: 'https://images.unsplash.com/photo-1628744448845-51ae4a434468?q=80&w=800&auto=format&fit=crop' },
];
const PROPERTIES_PER_PAGE = 6;

// --- UTILITY FUNCTIONS ---
const formatPrice = (price: number): string => `R ${new Intl.NumberFormat('en-ZA').format(price)}`;

// --- STYLES ---



// --- REUSABLE COMPONENTS ---



// --- MAIN PAGE COMPONENT ---
export default function HomePage() {
    // --- STATE MANAGEMENT ---
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [filters, setFilters] = useState({
        location: '',
        type: 'all',
        beds: 'all',
    });
    const [visibleProperties, setVisibleProperties] = useState(PROPERTIES_PER_PAGE);
    const [formStatus, setFormStatus] = useState('');

    // --- DERIVED STATE & MEMOIZATION ---
    const filteredProperties = useMemo(() => {
        return allProperties.filter(property => {
            const locationMatch = property.location.toLowerCase().includes(filters.location.toLowerCase());
            const typeMatch = filters.type === 'all' || property.type === filters.type;
            const bedsMatch = filters.beds === 'all' || property.beds >= parseInt(filters.beds, 10);
            return locationMatch && typeMatch && bedsMatch;
        });
    }, [filters]);

    // --- EVENT HANDLERS ---
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
        setVisibleProperties(PROPERTIES_PER_PAGE); // Reset pagination on filter change
    };

    const handleLoadMore = () => {
        setVisibleProperties(prev => prev + PROPERTIES_PER_PAGE);
    };
    
    const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('Sending...');
        // Simulate a network request
        setTimeout(() => {
            setFormStatus('Thank you! Your message has been sent.');
            (e.target as HTMLFormElement).reset();
            setTimeout(() => setFormStatus(''), 5000);
        }, 1500);
    };

    return (
        <div className="text-slate-800">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main>
                <Hero handleFilterChange={handleFilterChange} />
                {/*
                <FeaturedListings
                    filteredProperties={filteredProperties}
                    visibleProperties={visibleProperties}
                    handleLoadMore={handleLoadMore}
                />
                */}
                                <CarouselSize />

                <AboutUs />
                <Testimonials />
                <ContactSection handleContactSubmit={handleContactSubmit} formStatus={formStatus} />
            </main>
            <Footer />
        </div>
    );
  
}


'use client';

import React, { useState } from 'react';
import { Home, Tag, KeyRound } from 'lucide-react';

// Data for the service cards
type Service = {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
};

const services: Service[] = [
    {
        id: 'buy',
        icon: <Home className="w-10 h-10 text-white" />,
        title: 'Buying a Home',
        description: 'Finding your dream home can be a daunting task. We simplify the process by providing access to exclusive listings, expert negotiation, and personalized guidance from the first viewing to the moment you get the keys.'
    },
    {
        id: 'sell',
        icon: <Tag className="w-10 h-10 text-white" />,
        title: 'Selling Your Property',
        description: 'Get the best value for your property with our strategic marketing and extensive network of buyers. We handle everything from professional photography and valuation to managing viewings and closing the deal.'
    },
    {
        id: 'rent',
        icon: <KeyRound className="w-10 h-10 text-white" />,
        title: 'Renting a Property',
        description: 'Whether you\'re a landlord looking for reliable tenants or a tenant searching for the perfect rental, we\'ve got you covered. Our services include tenant screening, lease management, and a portfolio of quality rental homes.'
    }
];

// The main component
export default function HowWeHelpSection() {
    const [activeCard, setActiveCard] = useState<string | null>(null);

    const handleInteraction = (id: string) => {
        setActiveCard(prevId => prevId === id ? null : id);
    };

    return (
        <section
            id="about"

        >
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1240a0]">Your Complete Property Partner</h2>
                    <p className="text-slate-500 mt-2 max-w-xl mx-auto">
                        Whether you're buying, selling, or renting, our dedicated team is here to guide you every step of the way.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const isActive = activeCard === service.id;
                        return (
                            <div
                                key={service.id}
                                className="[perspective:1000px] cursor-pointer group h-72"
                                onMouseEnter={() => setActiveCard(service.id)}
                                onMouseLeave={() => setActiveCard(null)}
                                onClick={() => handleInteraction(service.id)}
                            >
                                <div className={`
                                    relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]
                                    ${isActive ? '[transform:rotateY(180deg)]' : ''}
                                `}>
                                    {/* Front of the card */}
                                    <div className="absolute w-full h-full [backface-visibility:hidden] bg-[#1240a0] rounded-xl border border-[#ff9138] shadow-sm flex flex-col items-center justify-center p-6">
                                        <div className="inline-block bg-[#ff9138] text-white p-4 rounded-full mb-4 group-hover:bg-white group-hover:text-[#1240a0] transition-colors duration-300">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                    </div>
                                    {/* Back of the card */}
                                    <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#1240a0] rounded-xl border border-[#ff9138] shadow-lg flex flex-col items-center justify-center p-6">
                                        <h3 className="text-xl font-bold mb-3 text-[#ff9138]">{service.title}</h3>
                                        <p className="text-white text-center">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


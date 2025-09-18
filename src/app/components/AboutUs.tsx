import React from 'react';
import { Award, KeyRound, MapPin } from 'lucide-react';

const AboutUs: React.FC = () => (
  <section id="about" className="py-16 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1992&auto=format&fit=crop" alt="Modern house exterior" className="rounded-xl shadow-lg w-full" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose US?</h2>
          <p className="text-slate-600 mb-6">We're not just selling properties; we're curating lifestyles. At LYAF, we combine local expertise with a passion for modern architecture and design to connect you with a home that's not just a place to live, but a space to thrive.</p>
          <div className="space-y-4">
            <div className="flex items-start"><div className="bg-[#ff9138] text-white p-3 rounded-full mr-4"><Award className="w-6 h-6" /></div><div><h3 className="font-semibold text-lg">Expert Agents</h3><p className="text-slate-500">Our team consists of experienced professionals dedicated to your success.</p></div></div>
            <div className="flex items-start"><div className="bg-[#ff9138] text-white p-3 rounded-full mr-4"><KeyRound className="w-6 h-6" /></div><div><h3 className="font-semibold text-lg">Tailored Service</h3><p className="text-slate-500">We provide a personalized journey from the first viewing to the final handshake.</p></div></div>
            <div className="flex items-start"><div className="bg-[#ff9138] text-white p-3 rounded-full mr-4"><MapPin className="w-6 h-6" /></div><div><h3 className="font-semibold text-lg">Local Knowledge</h3><p className="text-slate-500">Deep-rooted insights into Gauteng and the Western Cape's finest neighbourhoods.</p></div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;

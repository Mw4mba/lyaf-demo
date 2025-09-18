import React from 'react';

const Testimonials: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">What Our Clients Say</h2>
        <p className="text-slate-500 mt-2">We're proud to have helped so many people find their dream homes.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="border border-slate-200 p-8 rounded-xl text-center bg-white"><img src="https://placehold.co/80x80/E2E8F0/475569?text=JS" alt="John Smit" className="w-20 h-20 rounded-full mx-auto mb-4" /><p className="text-slate-600 italic">"Urban Nest made the entire process seamless and stress-free. Their attention to detail was impeccable. Highly recommended!"</p><h4 className="font-bold mt-4">John Smit</h4><p className="text-sm text-slate-400">Home Buyer in Sandton</p></div>
        <div className="border border-slate-200 p-8 rounded-xl text-center bg-white"><img src="https://placehold.co/80x80/E2E8F0/475569?text=AN" alt="Ayanda Nkosi" className="w-20 h-20 rounded-full mx-auto mb-4" /><p className="text-slate-600 italic">"The team's knowledge of the Cape Town market is unmatched. They found us a home that exceeded all our expectations."</p><h4 className="font-bold mt-4">Ayanda Nkosi</h4><p className="text-sm text-slate-400">Investor in Cape Town</p></div>
        <div className="border border-slate-200 p-8 rounded-xl text-center bg-white"><img src="https://placehold.co/80x80/E2E8F0/475569?text=MV" alt="Megan van der Westhuizen" className="w-20 h-20 rounded-full mx-auto mb-4" /><p className="text-slate-600 italic">"A truly professional and friendly service. They listened to our needs and delivered results. We are so happy in our new Pretoria home."</p><h4 className="font-bold mt-4">The van der Westhuizen Family</h4><p className="text-sm text-slate-400">Family Home in Pretoria</p></div>
      </div>
    </div>
  </section>
);

export default Testimonials;

import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

interface ContactSectionProps {
  handleContactSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formStatus: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({ handleContactSubmit, formStatus }) => (
  <section id="contact" className="py-16 bg-slate-50 text-slate-800">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Let's Find Your Dream Home</h2>
        <p className="text-slate-600 mt-2 max-w-xl mx-auto">Get in touch with us today to start your property journey. We're ready to help.</p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-lg">
        <form onSubmit={handleContactSubmit}>
          <div className="mb-4"><label htmlFor="name" className="block mb-2 font-medium text-slate-800">Full Name</label><input type="text" id="name" name="name" required className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:ring-2 focus:ring-[#ff9138] focus:outline-none" /></div>
          <div className="mb-4"><label htmlFor="email" className="block mb-2 font-medium text-slate-800">Email Address</label><input type="email" id="email" name="email" required className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:ring-2 focus:ring-[#ff9138] focus:outline-none" /></div>
          <div className="mb-4"><label htmlFor="message" className="block mb-2 font-medium text-slate-800">Message</label><textarea id="message" name="message" rows={4} required className="w-full p-3 rounded-lg bg-slate-100 border border-slate-300 focus:ring-2 focus:ring-[#ff9138] focus:outline-none"></textarea></div>
          <button type="submit" className="w-full bg-[#ff9138] text-white p-3 rounded-lg hover:bg-[#1240a0] transition-colors font-bold">Send Message</button>
          {formStatus && <p className="mt-4 text-center text-green-600">{formStatus}</p>}
        </form>
        <div className="flex flex-col justify-center">
          <div className="flex items-start mb-6"><div className="bg-[#ff9138] text-white p-3 rounded-full mr-4"><MapPin className="w-6 h-6" /></div><div><h4 className="font-semibold text-lg">Our Office</h4><p className="text-slate-600">33 Angus rd, Bedfordview 2008</p></div></div>
          <div className="flex items-start mb-6"><div className="bg-[#ff9138] text-white p-3 rounded-full mr-4"><Mail className="w-6 h-6" /></div><div><h4 className="font-semibold text-lg">Email Us</h4><p className="text-slate-600">info@lyaf.co.za</p></div></div>
          <div className="flex items-start"><div className="bg-[#ff9138] text-white p-3 rounded-full mr-4"><Phone className="w-6 h-6" /></div><div><h4 className="font-semibold text-lg">Call Us</h4><p className="text-slate-600">(011) 555 1234</p></div></div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;

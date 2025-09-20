import React from 'react';

interface Agent {
  name: string;
  avatar: string;
}

interface ContactAgentProps {
  agent: Agent;
  price: number;
  formatPrice: (price: number, compact?: boolean) => string;
}

const ContactAgent: React.FC<ContactAgentProps> = ({ agent, price, formatPrice }) => (
  <div className="border rounded-xl p-6 bg-[#1240a0] shadow-sm">
    <p className="text-white text-lg">Asking Price</p>
    <p className="text-4xl font-extrabold text-white mb-6">{formatPrice(price)}</p>
    <div className="border-t border-white/30 pt-6">
      <h3 className="font-bold text-lg mb-4 text-white">Contact Agent</h3>
      <div className="flex items-center mb-4">
        <img src={agent.avatar} alt={agent.name} className="w-16 h-16 rounded-full mr-4 border-2 border-white" />
        <div>
          <p className="font-semibold text-white">{agent.name}</p>
          <p className="text-sm text-white/80">Urban Nest Properties</p>
        </div>
      </div>
      <form>
        <input type="text" placeholder="Your Name" className="w-full p-3 mb-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30" required />
        <input type="email" placeholder="Your Email" className="w-full p-3 mb-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30" required />
        <textarea placeholder="I'm interested in this property..." rows={4} className="w-full p-3 mb-3 rounded-lg bg-white/10 text-white placeholder-white/70 border border-white/30"></textarea>
        <button className="w-full bg-[#ff9138] text-white p-3 rounded-lg hover:bg-white hover:text-[#1240a0] transition-colors font-bold">Send Enquiry</button>
      </form>
    </div>
  </div>
);

export default ContactAgent;

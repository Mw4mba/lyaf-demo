import React from 'react';
import { ShoppingCart, School, TreePine } from 'lucide-react';

const LifestyleIndex: React.FC = () => (
  <section id="lifestyle" className="bg-white p-6 md:p-8 rounded-xl border">
    <h2 className="text-2xl font-bold mb-4 text-center">Living score</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="flex items-center bg-slate-50 p-4 rounded-lg">
        <div className="bg-[#ff9138] text-white p-3 rounded-full mr-4"><ShoppingCart className="w-6 h-6" /></div>
        <div><h4 className="font-semibold">Shopping</h4><p className="text-slate-500 text-sm">Sandton City (5km)</p></div>
      </div>
      <div className="flex items-center bg-slate-50 p-4 rounded-lg">
        <div className="bg-[#ff9138] text-white p-3 rounded-full mr-4"><School className="w-6 h-6" /></div>
        <div><h4 className="font-semibold">Schools</h4><p className="text-slate-500 text-sm">Redhill School (3km)</p></div>
      </div>
      <div className="flex items-center bg-slate-50 p-4 rounded-lg">
        <div className="bg-[#ff9138] text-white p-3 rounded-full mr-4"><TreePine className="w-6 h-6" /></div>
        <div><h4 className="font-semibold">Parks</h4><p className="text-slate-500 text-sm">Mushroom Farm Park (2km)</p></div>
      </div>
    </div>
  </section>
);

export default LifestyleIndex;

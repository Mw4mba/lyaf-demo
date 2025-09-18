import React from 'react';


import NavLink from "./NavLink";

const Footer: React.FC = () => (
  <footer className="bg-[#1240a0] text-slate-400 py-8">
    <div className="container mx-auto px-6 text-center">
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-slate-200 mb-2">Quicklinks</h4>
        <nav className="flex justify-center gap-6 flex-wrap opacity-70 hover:opacity-100">
          <NavLink href="#home" color='white'>Home</NavLink>
          <NavLink href="#about " color='white'>About Us</NavLink>
          <NavLink href="#listings" color='white'>Listings</NavLink>
          <NavLink href="#testimonials" color='white'>Testimonials</NavLink>
          <NavLink href="#contact" color='white'>Contact</NavLink>
        </nav>
      </div>
      <p>&copy; {new Date().getFullYear()} LYAF Properties. All Rights Reserved.</p>
      <p className="text-sm mt-1">Powered by Luboya.dev</p>
    </div>
  </footer>
);

export default Footer;

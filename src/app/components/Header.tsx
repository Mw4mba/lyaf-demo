import React from 'react';
import { Home as HomeIcon, Menu } from 'lucide-react';
import Image from 'next/image';
import { Tools } from 'react-bootstrap-icons';
import NavLink from './NavLink';
interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => (
  <header id="home" className="bg-white  sticky top-0 z-50">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" className="text-2xl font-bold text-slate-800 flex items-center">
        {/*<HomeIcon className="w-7 h-7 mr-2 text-[#1240a0]" />*/}
        <Image src="/image.png" alt="Urban Nest Logo" width={100} height={100} className="z-50"/>
      </a>
      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/" active color='black'>Home</NavLink>
        <NavLink href="#buy" active={false} color='black'>Buy</NavLink>
        <NavLink href="#rent" active={false} color='black'> Rent</NavLink>
        <NavLink href="#sell" active={false} color='black'>Sell</NavLink>
        <NavLink href="#about" active={false} color='black'>About</NavLink>
        <NavLink href="#services" active={false} color='black'>Services</NavLink>

      </div>
      <div className="hidden md:flex items-center space-x-4">
      <a href="#contact" className="hidden md:block bg-[#1240a0] text-white px-4 py-2 rounded-lg hover:bg-[#ff9138] transition-colors">Get in Touch</a>
      </div>

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
    {isMenuOpen && (
      <div className="md:hidden px-6 pt-2 pb-4 space-y-2">
        <div className='flex flex-col items-center'>
        <a href="#home" className="block font-medium text-slate-600 hover:text-[#1240a0] transition-colors">Home</a>
        <a href="#listings" className="block font-medium text-slate-600 hover:text-[#1240a0] transition-colors">Buy</a>
        <a href="#about" className="block font-medium text-slate-600 hover:text-[#1240a0] transition-colors">Rent</a>
        <a href="#contact" className="block font-medium text-slate-600 hover:text-[#1240a0] transition-colors">Sell</a>
        <a href="#contact" className="block font-medium text-slate-600 hover:text-[#1240a0] transition-colors">About</a>
        <a href="#contact" className="block font-medium text-slate-600 hover:text-[#1240a0] transition-colors">Services</a>
        </div>
        <a href="#contact" className="block mt-2 bg-[#1240a0] text-white text-center px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">Get in Touch</a>
        <a href="#contact" className="block mt-2 bg-[#1240a0] text-white text-center px-4 py-2 rounded-lg hover:bg-emerald-600 transition-colors">Our tools <Tools size={16} className='bg-white'/></a>
      </div>
    )}
  </header>
);

export default Header;

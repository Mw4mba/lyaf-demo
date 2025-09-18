import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  color?: string;
}

const NavLink = ({ color,href, children, active = false }: NavLinkProps) => (
  <a
    href={href}
    className={`font-medium text-${color} hover:text-[#ff9138] transition-colors pb-1 border-b-2 ${active ? 'border-[#ff9138] text-[#ff9138]' : 'border-transparent'}`}
  >
    {children}
  </a>
);

export default NavLink;

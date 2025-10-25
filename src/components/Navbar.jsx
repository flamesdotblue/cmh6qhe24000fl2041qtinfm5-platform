import React from 'react';
import { Home, Phone, MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center text-white">
              <Home size={18} />
            </div>
            <div className="leading-tight">
              <div className="font-semibold">Palace Boys Hostel</div>
              <div className="text-xs text-neutral-600">Kottayam</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#amenities" className="hover:text-indigo-600 transition-colors">Amenities</a>
            <a href="#location" className="hover:text-indigo-600 transition-colors flex items-center gap-1"><MapPin size={16}/>Location</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>

          <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-500 transition-colors">
            <Phone size={16} /> Book a Visit
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

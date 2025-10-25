import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="text-lg font-semibold">Palace Boys Hostel</div>
            <div className="text-sm text-neutral-600">Kottayam</div>
            <p className="mt-3 text-neutral-700 text-sm">A contemporary, fully managed living space designed for comfort, safety, and community.
            </p>
          </div>

          <div>
            <div className="font-semibold mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><Phone size={16}/> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail size={16}/> stay@palacehostel.in</li>
              <li className="flex items-start gap-2"><MapPin size={16}/> Near City Center, Kottayam, Kerala 686001</li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-3">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-indigo-600" href="#amenities">Amenities</a></li>
              <li><a className="hover:text-indigo-600" href="#location">Location</a></li>
              <li><a className="hover:text-indigo-600" href="#hero">About</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-3">Get in touch</div>
            <div className="flex items-center gap-3">
              <a aria-label="Instagram" className="h-10 w-10 rounded-full border border-neutral-200 flex items-center justify-center hover:border-indigo-300 hover:text-indigo-600" href="#"><Instagram size={18}/></a>
              <a aria-label="Facebook" className="h-10 w-10 rounded-full border border-neutral-200 flex items-center justify-center hover:border-indigo-300 hover:text-indigo-600" href="#"><Facebook size={18}/></a>
              <a aria-label="WhatsApp" className="h-10 w-10 rounded-full border border-neutral-200 flex items-center justify-center hover:border-indigo-300 hover:text-indigo-600" href="#"><MessageSquare size={18}/></a>
            </div>
            <a href="#" className="mt-4 inline-flex rounded-md bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-500">Chat with us</a>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} Palace Boys Hostel, Kottayam. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

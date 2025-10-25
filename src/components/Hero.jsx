import React from 'react';
import Spline from '@splinetool/react-spline';
import { Star, Shield, Wifi, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-[90vh] pt-16">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center min-h-[90vh]">
        <div className="max-w-3xl bg-white/70 backdrop-blur rounded-xl p-6 sm:p-8 shadow-lg">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900">Palace Boys Hostel, Kottayam</h1>
          <p className="mt-3 sm:mt-4 text-neutral-700 text-sm sm:text-base">
            Modern, secure, and fully managed living for students and professionals in the heart of Kottayam. Enjoy private and shared rooms with premium amenities and community vibes.
          </p>

          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <FeaturePill icon={<Shield size={16} />} label="24x7 Security" />
            <FeaturePill icon={<Wifi size={16} />} label="High-speed Wi‑Fi" />
            <FeaturePill icon={<Users size={16} />} label="Community" />
            <FeaturePill icon={<Star size={16} />} label="Pro Housekeeping" />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#amenities" className="inline-flex justify-center items-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow hover:bg-indigo-500 transition-colors">
              Explore Amenities
            </a>
            <a href="#contact" className="inline-flex justify-center items-center rounded-md px-5 py-3 border border-neutral-300 text-neutral-900 bg-white/80 hover:bg-white transition-colors">
              Check Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturePill = ({ icon, label }) => (
  <div className="flex items-center gap-2 rounded-full bg-white/80 border border-neutral-200 px-3 py-2 text-sm text-neutral-800">
    <span className="text-indigo-600">{icon}</span>
    <span>{label}</span>
  </div>
);

export default Hero;

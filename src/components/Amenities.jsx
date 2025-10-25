import React from 'react';
import { Wifi, Shield, Utensils, Droplet, Sparkles, Bed, Camera, Tv, MapPin, Bus } from 'lucide-react';

const amenities = [
  { icon: Wifi, title: 'High-speed Wi‑Fi', desc: 'Campus-grade internet with reliable coverage across all floors.' },
  { icon: Shield, title: '24/7 Security', desc: 'CCTV surveillance, secure access, and on-site wardens.' },
  { icon: Utensils, title: 'Homely Meals', desc: 'Nutritious breakfast and dinner with rotating menus.' },
  { icon: Droplet, title: 'RO Water & Laundry', desc: 'RO-filtered drinking water and weekly laundry service.' },
  { icon: Sparkles, title: 'Housekeeping', desc: 'Professional cleaning of rooms and common areas.' },
  { icon: Bed, title: 'Furnished Rooms', desc: 'Cozy beds, study tables, wardrobes, and ample storage.' },
  { icon: Camera, title: 'CCTV Coverage', desc: 'Smart monitoring in corridors and common spaces.' },
  { icon: Tv, title: 'Common Lounge', desc: 'TV, games, and chill zones to unwind with friends.' },
];

const nearby = [
  { icon: MapPin, title: 'Central Kottayam', desc: 'Close to colleges, cafes, and bookstores.' },
  { icon: Bus, title: 'Transit Access', desc: 'Easy access to Kottayam Railway Station and Bus Stand.' },
];

const roomTypes = [
  { name: 'Private Room', price: '₹12,999/mo', perks: ['Furnished', 'Attached Washroom', 'AC Options'] },
  { name: 'Double Sharing', price: '₹8,999/mo', perks: ['Budget-friendly', 'Spacious', 'Personal Storage'] },
  { name: 'Triple Sharing', price: '₹7,499/mo', perks: ['Great Value', 'Community Living', 'All Amenities'] },
];

const Amenities = () => {
  return (
    <section id="amenities" className="relative py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Amenities made for modern living</h2>
          <p className="mt-3 text-neutral-700">Everything you need for a comfortable stay, thoughtfully managed and maintained.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {amenities.map((a) => (
            <AmenityCard key={a.title} {...a} />
          ))}
        </div>

        <div id="location" className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-neutral-200 bg-white">
              <img
                src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop"
                alt="Modern interiors"
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">Prime location in Kottayam</h3>
                <p className="mt-2 text-neutral-700">Walkable to key colleges and coaching hubs, with easy connectivity to railway and bus stations. Cafes, supermarkets, and pharmacies are right around the corner.</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {nearby.map((n) => (
                    <div key={n.title} className="flex items-start gap-3">
                      <div className="mt-1 h-9 w-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <n.icon size={18} />
                      </div>
                      <div>
                        <div className="font-medium">{n.title}</div>
                        <p className="text-sm text-neutral-700">{n.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Room options</h3>
            {roomTypes.map((r) => (
              <div key={r.name} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-indigo-600 font-bold">{r.price}</div>
                </div>
                <ul className="mt-3 text-sm text-neutral-700 list-disc list-inside space-y-1">
                  {r.perks.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <a href="#contact" className="mt-4 inline-flex rounded-md bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800">Enquire</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AmenityCard = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
    <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
      <Icon size={20} />
    </div>
    <h3 className="mt-4 font-semibold">{title}</h3>
    <p className="mt-2 text-sm text-neutral-700">{desc}</p>
  </div>
);

export default Amenities;

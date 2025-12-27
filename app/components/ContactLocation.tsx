import React from "react";
import { MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export const ContactLocation = () => {
  return (
    <section className="py-12 px-8 md:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl p-6 md:p-8 flex flex-col lg:flex-row gap-8">
        
        {/* Map Image Placeholder */}
        <div className="w-full lg:w-2/3 bg-gray-200 rounded-2xl min-h-[300px] md:min-h-[400px] overflow-hidden relative">
           {/* In a real app, this would be a Google Maps embed or an actual image */}
           <img 
             src="https://placehold.co/800x600/e2e8f0/94a3b8?text=Map+Location" 
             alt="Map" 
             className="w-full h-full object-cover opacity-80"
           />
           {/* Mock Pin */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#114232] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1">
                 View Maps <MapPin className="w-3 h-3" />
              </div>
           </div>
        </div>

        {/* Location Info */}
        <div className="w-full lg:w-1/3 flex flex-col justify-center py-4">
           <div className="mb-6">
              <span className="text-xs font-bold text-[#114232] uppercase tracking-wide mb-2 block">Our Location</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Locate Us</h2>
           </div>

           <div className="space-y-8 mb-10">
              <div>
                 <h3 className="font-bold text-gray-900 mb-2">Jakarta</h3>
                 <p className="text-gray-500 text-xs leading-relaxed">
                   4517 Washington Ave. Manchester, <br />
                   Kentucky 39495
                 </p>
              </div>
              <div>
                 <h3 className="font-bold text-gray-900 mb-2">Bali</h3>
                 <p className="text-gray-500 text-xs leading-relaxed">
                   4517 Washington Ave. Manchester, <br />
                   Kentucky 39495
                 </p>
                 <p className="text-gray-500 text-xs mt-2">
                    3891 Ranchview Dr. Richardson, <br />
                    California 62639
                 </p>
              </div>
           </div>

           <div>
              <h3 className="font-bold text-gray-900 mb-4">Connect</h3>
              <div className="flex gap-4">
                 <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#114232] hover:text-white transition-colors">
                    <Facebook className="w-4 h-4" />
                 </a>
                 <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#114232] hover:text-white transition-colors">
                    <Twitter className="w-4 h-4" />
                 </a>
                 <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-[#114232] hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                 </a>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

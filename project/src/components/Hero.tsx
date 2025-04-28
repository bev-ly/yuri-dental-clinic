import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4">
            Your Smile, <br />Our Priority
          </h1>
          <p className="text-lg text-blue-200 mb-8 max-w-lg">
            Expert dental care tailored for you in Legazpi City. We're committed to providing the highest quality dental services in a comfortable environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services" className="btn-primary text-center">
              Explore Our Services
            </a>
            <a href="#book" className="btn-outline text-center">
              Book Your Appointment
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl shadow-xl animate-fade-in">
          <img 
            src="https://images.pexels.com/photos/3845766/pexels-photo-3845766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Modern dental clinic with patient" 
            className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="container-custom mt-16 md:mt-24">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card flex items-start p-6 hover:-translate-y-1">
            <MapPin className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-2">Location</h3>
              <p className="text-blue-200 text-sm">
                3rd Floor, Main Building, SM City Legazpi, Imelda Roces Avenue, Zone 9 Brgy. 37 Bitano, Legazpi City 4500, Philippines
              </p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 text-sm font-medium inline-block mt-2 hover:text-blue-200">
                Get Directions
              </a>
            </div>
          </div>

          <div className="card flex items-start p-6 hover:-translate-y-1">
            <Phone className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-2">Phone</h3>
              <p className="text-blue-200 text-sm">+63 123 456 7890</p>
              <p className="text-sm text-blue-200 mt-2">Call us for inquiries or to schedule an appointment</p>
            </div>
          </div>

          <div className="card flex items-start p-6 hover:-translate-y-1">
            <Clock className="w-6 h-6 text-blue-300 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-white mb-2">Hours</h3>
              <p className="text-blue-200 text-sm">
                Monday – Sunday: 10:00 AM – 9:00 PM
              </p>
              <p className="text-sm text-blue-200 mt-2">Open all days including holidays</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
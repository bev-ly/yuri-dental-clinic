import React from 'react';
import { Bluetooth as Tooth, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-blue-900 text-blue-100 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Tooth className="h-8 w-8 text-blue-100 mr-2" />
              <h2 className="text-xl font-bold">Healthy Smile</h2>
            </div>
            <p className="text-blue-200 mb-6">
              Your partner in dental health. Creating beautiful smiles in Legazpi City since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-800 hover:bg-blue-700 p-2 rounded-full transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-blue-100 transition-colors">Home</a></li>
              <li><a href="#services" className="text-blue-200 hover:text-blue-100 transition-colors">Services</a></li>
              <li><a href="#team" className="text-blue-200 hover:text-blue-100 transition-colors">Team</a></li>
              <li><a href="#testimonials" className="text-blue-200 hover:text-blue-100 transition-colors">Testimonials</a></li>
              <li><a href="#book" className="text-blue-200 hover:text-blue-100 transition-colors">Book Appointment</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-blue-100 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-800 pb-2">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-blue-100 transition-colors">General Dentistry</a></li>
              <li><a href="#" className="text-blue-200 hover:text-blue-100 transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="#" className="text-blue-200 hover:text-blue-100 transition-colors">Orthodontics</a></li>
              <li><a href="#" className="text-blue-200 hover:text-blue-100 transition-colors">Restorative Dentistry</a></li>
              <li><a href="#" className="text-blue-200 hover:text-blue-100 transition-colors">Pediatric Dentistry</a></li>
              <li><a href="#" className="text-blue-200 hover:text-blue-100 transition-colors">Emergency Care</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-800 pb-2">Contact Us</h3>
            <address className="not-italic">
              <p className="text-blue-200 mb-2">
                3rd Floor, Main Building, SM City Legazpi, Imelda Roces Avenue, Zone 9 Brgy. 37 Bitano, Legazpi City 4500, Philippines
              </p>
              <p className="text-blue-200 mb-2">+63 123 456 7890</p>
              <p className="text-blue-200 mb-2">info@healthysmilelegazpi.com</p>
              <p className="text-blue-200">
                <span className="font-medium">Hours:</span> Monday – Sunday: 10:00 AM – 9:00 PM
              </p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-blue-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            &copy; 2025 Healthy Smile Dental Center. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-blue-800 hover:bg-blue-700 p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
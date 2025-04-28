import React, { useState, useEffect } from 'react';
import { Menu, X, Bluetooth as Tooth } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-blue-900 shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <Tooth className="h-8 w-8 text-blue-100 mr-2" />
          <div>
            <h1 className="text-xl font-bold text-blue-100">Healthy Smile Dental Center</h1>
            <p className="text-xs text-blue-200 hidden md:block">Creating Smiles, Transforming Lives</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-blue-200 hover:text-blue-100 font-medium">Home</a>
          <a href="#services" className="text-blue-200 hover:text-blue-100 font-medium">Services</a>
          <a href="#team" className="text-blue-200 hover:text-blue-100 font-medium">Team</a>
          <a href="#testimonials" className="text-blue-200 hover:text-blue-100 font-medium">Testimonials</a>
          <a href="#book" className="text-blue-200 hover:text-blue-100 font-medium">Book Appointment</a>
          <a href="#contact" className="text-blue-100 font-semibold">Contact</a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-blue-100" /> : <Menu className="h-6 w-6 text-blue-100" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 w-full shadow-md animate-fade-in">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a href="#home" className="text-blue-200 hover:text-blue-100 font-medium py-2" onClick={toggleMenu}>Home</a>
            <a href="#services" className="text-blue-200 hover:text-blue-100 font-medium py-2" onClick={toggleMenu}>Services</a>
            <a href="#team" className="text-blue-200 hover:text-blue-100 font-medium py-2" onClick={toggleMenu}>Team</a>
            <a href="#testimonials" className="text-blue-200 hover:text-blue-100 font-medium py-2" onClick={toggleMenu}>Testimonials</a>
            <a href="#book" className="text-blue-200 hover:text-blue-100 font-medium py-2" onClick={toggleMenu}>Book Appointment</a>
            <a href="#contact" className="text-blue-100 font-semibold py-2" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
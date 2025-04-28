import React from 'react';
import { Smile, Sparkles, Activity, FilePlus, HeartPulse } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="card group">
      <div className="p-3 bg-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-blue-950">
      <div className="container-custom">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive care for a healthier smile.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="General Dentistry"
            description="Regular check-ups, cleanings, fillings, and preventative care to maintain your oral health."
            icon={<Smile className="w-8 h-8 text-white" />}
          />
          
          <ServiceCard
            title="Cosmetic Dentistry"
            description="Teeth whitening, veneers, and complete smile makeovers to enhance your appearance."
            icon={<Sparkles className="w-8 h-8 text-white" />}
          />
          
          <ServiceCard
            title="Orthodontics"
            description="Traditional braces and Invisalign treatments to straighten teeth for all ages."
            icon={<Activity className="w-8 h-8 text-white" />}
          />
          
          <ServiceCard
            title="Restorative Dentistry"
            description="Crowns, bridges, implants, and dentures to restore functionality and aesthetics."
            icon={<FilePlus className="w-8 h-8 text-white" />}
          />
          
          <ServiceCard
            title="Pediatric Dentistry"
            description="Specialized gentle care for children and teenagers in a comfortable environment."
            icon={<HeartPulse className="w-8 h-8 text-white" />}
          />
          
          <div className="card flex flex-col items-center justify-center bg-blue-600 text-white hover:bg-blue-500">
            <h3 className="text-xl font-semibold mb-4">Need More Information?</h3>
            <p className="text-center mb-6">Contact us to learn about our full range of services.</p>
            <a href="#contact" className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out">
              Contact Us
            </a>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#book" className="btn-primary inline-block">
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services
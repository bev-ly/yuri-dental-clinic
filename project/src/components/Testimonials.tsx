import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  location: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, location, rating }) => {
  return (
    <div className="card group hover:border-blue-700 hover:border">
      <div className="mb-4 flex justify-between items-start">
        <Quote className="w-10 h-10 text-blue-700 group-hover:text-blue-600 transition-colors" />
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-blue-100 italic mb-6">{quote}</p>
      <div className="mt-auto">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-blue-200 text-sm">{location}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      <div className="container-custom">
        <h2 className="section-title">What Our Patients Say</h2>
        <p className="section-subtitle">Real reviews from our satisfied clients.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="I never thought I'd love my smile this much! Dr. Santos did an amazing job with my veneers. The whole process was comfortable and the results are better than I could have imagined. I feel so confident now!"
            name="Maria S."
            location="Legazpi City, Philippines"
            rating={5}
          />
          
          <Testimonial 
            quote="The best dental clinic in Legazpi! Dr. Perez gave me a new smile with Invisalign, and the whole experience was smooth and comfortable. The staff is always friendly and professional."
            name="John L."
            location="Legazpi City, Philippines"
            rating={5}
          />
          
          <Testimonial 
            quote="My kids love coming here. The staff is so friendly, and the clinic is always so clean and welcoming! Nurse Julia is especially great with children and makes them feel comfortable during their visits."
            name="Ana P."
            location="Legazpi City, Philippines"
            rating={5}
          />
        </div>
        
        <div className="mt-16 card bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">Ready to Transform Your Smile?</h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our satisfied patients and experience the Healthy Smile difference. Our team is ready to provide you with exceptional dental care.
          </p>
          <a href="#book" className="bg-white text-blue-700 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition duration-300 ease-in-out inline-block hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Book Your Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
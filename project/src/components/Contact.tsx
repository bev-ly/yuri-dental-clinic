import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [emailSubscription, setEmailSubscription] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email subscribed:', emailSubscription);
    setSubscribed(true);
    setEmailSubscription('');
    
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-blue-950">
      <div className="container-custom">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">We're here to answer your questions and help schedule your visit.</p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="card">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                  <p className="text-blue-100">Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-semibold text-white mb-4">Send Us a Message:</h3>
                  
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-blue-100 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-blue-100 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-blue-100 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="+63 XXX XXX XXXX"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-blue-100 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input-field resize-none"
                      placeholder="Your message or inquiry..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="mt-8 card">
              <h3 className="text-xl font-semibold text-white mb-4">Join Our Newsletter</h3>
              <p className="text-blue-100 mb-4">Stay updated on the latest dental care tips, promotions, and offers.</p>
              
              {subscribed ? (
                <div className="text-center py-2">
                  <p className="text-blue-100 font-medium">Thanks for subscribing!</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={emailSubscription}
                    onChange={(e) => setEmailSubscription(e.target.value)}
                    required
                    className="input-field flex-grow"
                    placeholder="Your email address"
                  />
                  <button type="submit" className="btn-secondary whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          <div>
            <div className="card mb-8">
              <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-300 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-white mb-1">Call Us:</h4>
                    <p className="text-blue-100">+63 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-300 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-white mb-1">Email:</h4>
                    <p className="text-blue-100">info@healthysmilelegazpi.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-300 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-white mb-1">Visit Us:</h4>
                    <p className="text-blue-100">
                      3rd Floor, Main Building, SM City Legazpi, Imelda Roces Avenue, Zone 9 Brgy. 37 Bitano, Legazpi City 4500, Philippines
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div id="book" className="card bg-blue-600">
              <h3 className="text-xl font-semibold text-white mb-4">Book Your Appointment</h3>
              <p className="text-blue-100 mb-6">
                Ready to schedule your visit? Choose a convenient time and date for your appointment.
              </p>
              <a 
                href="#" 
                className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition duration-300 ease-in-out inline-block w-full text-center"
                onClick={(e) => {
                  e.preventDefault();
                  alert('In a real application, this would open an appointment booking system or calendar.');
                }}
              >
                Book Appointment
              </a>
            </div>
            
            <div className="mt-8 card h-64">
              <div className="w-full h-full bg-blue-800 flex items-center justify-center rounded-lg">
                <p className="text-blue-100">Google Maps Embed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact
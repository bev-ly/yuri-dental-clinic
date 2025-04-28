import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Smile Makeover",
    beforeImage: "https://images.pexels.com/photos/4687905/pexels-photo-4687905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    afterImage: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Complete smile transformation with porcelain veneers and whitening."
  },
  {
    id: 2,
    title: "Teeth Whitening",
    beforeImage: "https://images.pexels.com/photos/4344904/pexels-photo-4344904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    afterImage: "https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Professional whitening treatment for a brighter, more confident smile."
  },
  {
    id: 3,
    title: "Invisalign Treatment",
    beforeImage: "https://images.pexels.com/photos/3845675/pexels-photo-3845675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    afterImage: "https://images.pexels.com/photos/3764554/pexels-photo-3764554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Straightened teeth using invisible aligners for a natural-looking process."
  }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const currentItem = galleryItems[currentIndex];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      <div className="container-custom">
        <h2 className="section-title">Smile Transformations</h2>
        <p className="section-subtitle">Before-and-after photos showcasing our dental work.</p>

        <div className="relative">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12">
            <div className="card overflow-hidden shadow-md transition-all hover:shadow-lg p-0">
              <div className="relative pt-[75%]">
                <img 
                  src={currentItem.beforeImage} 
                  alt={`Before ${currentItem.title}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-blue-900/90 text-white py-2 px-4">
                  <p className="font-medium">Before</p>
                </div>
              </div>
            </div>
            
            <div className="card overflow-hidden shadow-md transition-all hover:shadow-lg p-0">
              <div className="relative pt-[75%]">
                <img 
                  src={currentItem.afterImage} 
                  alt={`After ${currentItem.title}`} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-teal-600/90 text-white py-2 px-4">
                  <p className="font-medium">After</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <h3 className="text-xl font-semibold text-white">{currentItem.title}</h3>
            <p className="text-blue-200 mt-2">{currentItem.description}</p>
          </div>
          
          <button 
            onClick={prevSlide} 
            className="absolute top-1/2 left-2 md:-left-4 transform -translate-y-1/2 bg-blue-800/50 p-2 rounded-full shadow-md hover:bg-blue-700/50 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute top-1/2 right-2 md:-right-4 transform -translate-y-1/2 bg-blue-800/50 p-2 rounded-full shadow-md hover:bg-blue-700/50 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          
          <div className="flex justify-center mt-8">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-blue-400' : 'bg-blue-800'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a href="#book" className="btn-secondary inline-block">
            Schedule Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
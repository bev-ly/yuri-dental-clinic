import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageSrc: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, description, imageSrc }) => {
  return (
    <div className="card overflow-hidden group">
      <div className="overflow-hidden rounded-lg mb-4">
        <img 
          src={imageSrc} 
          alt={name} 
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-teal-300 font-medium mb-2">{role}</p>
      <p className="text-blue-200">{description}</p>
    </div>
  );
};

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-24 bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
      <div className="container-custom">
        <h2 className="section-title">Meet Your Experts</h2>
        <p className="section-subtitle">A team of skilled professionals committed to your oral health.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name="Dr. Clara Santos"
            role="Lead Dentist"
            description="Specializing in cosmetic dentistry and smile makeovers with over 15 years of experience."
            imageSrc="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
          <TeamMember 
            name="Dr. Mark Perez"
            role="Orthodontics Specialist"
            description="Creating perfect smiles with braces and Invisalign. Board-certified with special training in modern techniques."
            imageSrc="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          
          <TeamMember 
            name="Nurse Julia Reyes"
            role="Registered Dental Hygienist"
            description="Passionate about preventative care and patient education. Known for her gentle touch and thorough cleanings."
            imageSrc="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        
        <div className="mt-12 card bg-blue-900/50 p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Commitment</h3>
            <p className="text-blue-200 mb-4">
              At Healthy Smile Dental Center, our team is dedicated to providing the highest quality dental care in a comfortable and welcoming environment. We stay current with the latest advancements in dental technology and techniques.
            </p>
            <p className="text-blue-200">
              We believe in treating each patient as an individual, taking the time to understand your concerns and goals for your dental health.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3845749/pexels-photo-3845749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Dental team collaborating" 
              className="rounded-lg shadow-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
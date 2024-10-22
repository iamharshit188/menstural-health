import React from 'react';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-purple-700 mb-8">About Us</h2>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
        <p className="text-gray-600 mb-6">
          We're committed to promoting sustainable menstrual health solutions while educating about the 
          environmental and health impacts of traditional products. Our goal is to make sustainable 
          menstrual products accessible to everyone in India.
        </p>
        <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Partnership with leading Indian healthcare providers</li>
          <li>Quality-certified sustainable products</li>
          <li>Educational resources and support</li>
          <li>Nationwide delivery network</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
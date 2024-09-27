import React from 'react';
import './css/ServiceSection.css';

const ServiceSection = () => {
  return (
    <section className="service">
      <h1>Service in Action</h1>
      <div className="grid">
        <div className="image-container">
          <img className="image fade" src="/workpics/before/hillPorchBefore.png" alt="Before" />
          <img className="image" src="/workpics/after/hillPorchAfter.png" alt="After" />
          <div className="Porches">
            <h2>Porches</h2>
            <p>Our experts can repair and maintain your porch to keep it looking great.</p>
          </div>
          <button>View More</button>
        </div>
        <div>
          <img src="client/public/workpics/20230829_155936.jpg" alt="Bathroom" />
          <div className="Bathroom">
            <h2>Bathroom</h2>
            <p>Our team can help you design and build the perfect bathroom.</p>
          </div>
          <button>View More</button>
        </div>
        <div>
          <img src="client/public/workpics/20231113_162909.jpg" alt="Kitchen" />
          <div className="Kitchen">
            <h2>Kitchen</h2>
            <p>We specialize in kitchen renovations to create a space you'll love.</p>
          </div>
          <button>View More</button>
        </div>
        <div>
          <img src="client/public/workpics/20230330_161944.jpg" alt="Remodel" />
          <div className="Remodel">
            <h2>Remodel</h2>
            <p>From design to construction, we handle every aspect of your remodel.</p>
          </div>
          <button>View More</button>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;  
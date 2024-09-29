import React from 'react';
import './css/ServiceSection.css';

const ServiceSection = () => {
  return (
    <section className="service">
      <h2>Service in Action</h2>
      <div className="grid">
  <div className="image-container">
    <img  src="./workpics/after/hillPorchAfter.png" alt="Porches" />
    <div className="Porches">
      <h3>Porches</h3>
      <p>Our experts can repair and maintain your porch to keep it looking great.</p>
    </div>
    <button>View More</button>
  </div>
        <div>
        <img src="/workpics/20231113_162909.jpg" alt="Bathroom" />
          <div className="Bathroom">
            <h3>Bathroom</h3>
            <p>Our team can help you design and build the perfect bathroom.</p>
          </div>
          <button>View More</button>
        </div>
        <div>
          <img src="./workpics/after/20230920_170812.jpg" alt="Kitchen" />
          <div className="Kitchen">
            <h3>Kitchen</h3>
            <p>We specialize in kitchen renovations to create a space you'll love.</p>
          </div>
          <button>View More</button>
        </div>
        <div>
          <img src="./workpics/after/20230330_161944.jpg" alt="Remodel" />
          <div className="Remodel">
            <h3>Remodel</h3>
            <p>From design to construction, we handle every aspect of your remodel.</p>
          </div>
          <button>View More</button>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;  
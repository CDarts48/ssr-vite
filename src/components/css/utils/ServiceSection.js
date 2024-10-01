import React, { useState } from 'react';
import './css/ServiceSection.css';

const ServiceSection = () => {
  const [porchesIndex, setPorchesIndex] = useState(0);
  const [bathroomIndex, setBathroomIndex] = useState(0);
  const [kitchenIndex, setKitchenIndex] = useState(0);
  const [remodelIndex, setRemodelIndex] = useState(0);

  const porchesPhotos = [
    "./workpics/after/hillPorchAfter.png",
    // Add more photos here
  ];

  const bathroomPhotos = [
    "/workpics/20231113_162909.jpg",
    // Add more photos here
  ];

  const kitchenPhotos = [
    "./workpics/after/20230920_170812.jpg",
    // Add more photos here
  ];

  const remodelPhotos = [
    "./workpics/after/20230330_161944.jpg",
    // Add more photos here
  ];

  return (
    <section className="service">
      <h2>Service in Action</h2>
      <div className="grid">
        <div className="image-container">
          <img src={porchesPhotos[porchesIndex]} alt="Porches" />
          <button onClick={() => setPorchesIndex((porchesIndex + 1) % porchesPhotos.length)}>View More</button>
        </div>
        <div>
          <img src={bathroomPhotos[bathroomIndex]} alt="Bathroom" />
          <button onClick={() => setBathroomIndex((bathroomIndex + 1) % bathroomPhotos.length)}>View More</button>
        </div>
        <div>
          <img src={kitchenPhotos[kitchenIndex]} alt="Kitchen" />
          <button onClick={() => setKitchenIndex((kitchenIndex + 1) % kitchenPhotos.length)}>View More</button>
        </div>
        <div>
          <img src={remodelPhotos[remodelIndex]} alt="Remodel" />
          <button onClick={() => setRemodelIndex((remodelIndex + 1) % remodelPhotos.length)}>View More</button>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import "./plant.css";

const plant = () => {
  const plants = [
    { 
      name: 'Aloe Vera', 
      image: '/aloevera.glb', 
      scientificName: "Aloe barbadensis miller", 
      medicinalUses: [
        "Treats burns and wounds",
        "Improves skin health",
        "Aids digestion"
      ],
      benefits: "Aloe vera gel has anti-inflammatory and antibacterial properties."
    },
    { 
      name: 'Snake Plant', 
      image: '/snakeplant.glb', 
      scientificName: "Sansevieria trifasciata", 
      medicinalUses: [
        "Air purifier",
        "Improves sleep quality"
      ],
      benefits: "It helps remove toxins from the air and is easy to maintain."
    },
  ];

  const PlantModel = ({ modelUrl }) => {
    const { scene } = useGLTF(modelUrl);
    return (
      <Canvas style={{ height: '400px', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Environment preset="sunset" />
        <primitive object={scene} scale={3.0} style={{ margin: "20px" }} />
        <OrbitControls />
      </Canvas>
    );
  };

  return (
    <div style={{ backgroundColor: '#000', padding: '20px', color: '#fff', height: "100vh" }}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
      >
        {plants.map((plant, index) => (
          <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <div style={{ flex: 1, padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', margin: '50px' }}>
              <h2 style={{ marginBottom: '20px', fontSize: '28px' }}>{plant.name}</h2>
              <p style={{ fontSize: '21px', marginBottom: '10px' }}><strong>Scientific Name:</strong> {plant.scientificName}</p>
              <p style={{ fontSize: '21px', marginBottom: '10px' }}><strong>Medicinal Uses:</strong></p>
              <ul style={{ marginBottom: '10px' }}>
                {plant.medicinalUses.map((use, index) => (
                  <li key={index} style={{ fontSize: '21px', marginLeft: "1rem" }}>{use}</li>
                ))}
              </ul>
              <p style={{ fontSize: '21px' }}><strong>Benefits:</strong> {plant.benefits}</p>
            </div>
            <div style={{ flex: 1 }}>
              <PlantModel modelUrl={plant.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default plant;

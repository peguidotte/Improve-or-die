import { useState, useEffect } from "react";
import "./BirdsEasy.css"; 
import BirdEasy from "../../assets/global/flyingbird.gif"; 

const TOTAL_BIRDS = 6;

// eslint-disable-next-line react/prop-types
const BirdsEasy = ({ difficulty }) => {
  const [birds, setBirds] = useState([]);

  // Função para gerar propriedades aleatórias para um pássaro
  const generateRandomProperties = () => {
    const rngWidth = Math.floor(Math.random() * 3) + 1; // 1 a 3
    const rngSpeed = Math.floor(Math.random() * 5) + 10; // 10 a 14 segundos
    const rngPositionY = Math.floor(Math.random() * 35); // 0% a 100%

    return {
      id: Math.random().toString(36).substr(2, 9), // ID único
      width: `${(rngWidth / 12) * 100}%`, // Largura em porcentagem
      speed: rngSpeed, // Tempo de animação em segundos
      bottom: `${rngPositionY}%`, // Posição Y
    };
  };

  useEffect(() => {
    if (difficulty === "Easy") {
      const initialBirds = Array.from({ length: TOTAL_BIRDS }, () =>
        generateRandomProperties()
      );
      setBirds(initialBirds);
    }
  }, [difficulty]);

  // Função para reinicializar um pássaro após a animação
  const handleAnimationEnd = (id) => {
    setBirds((prevBirds) =>
      prevBirds.map((bird) =>
        bird.id === id ? generateRandomProperties() : bird
      )
    );
  };

  return (
    <div className="animation-container">
      {birds.map((bird) => (
        <img
          key={bird.id}
          src={BirdEasy}
          alt="Birds flying"
          className="bird"
          style={{
            width: bird.width,
            bottom: bird.bottom,
            animationDuration: `${bird.speed}s`,
          }}
          onAnimationEnd={() => handleAnimationEnd(bird.id)}
        />
      ))}
    </div>
  );
};

export default BirdsEasy;
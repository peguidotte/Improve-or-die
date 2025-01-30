import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import "./ThumbsUpMedium.css"; // Estilos específicos para a animação
import ThumbsUpImage from "../../assets/global/thumbsup.png"; // Substitua {nome-do-game} pelo nome real

const TOTAL_THUMBS = 8;

const ThumbsUpMedium = ({ difficulty }) => {
  const [thumbs, setThumbs] = useState([]);

  // Função para gerar propriedades aleatórias para um "Thumbs Up"
  const generateRandomProperties = () => {
    const rngSize = Math.floor(Math.random() * 50) + 50; // Tamanho entre 50px e 100px
    const rngSpeed = Math.floor(Math.random() * 5) + 5; // Velocidade de descida entre 5s e 10s
    const rngStartDelay = Math.floor(Math.random() * 5); // Atraso inicial entre 0s e 5s
    const rngLeft = Math.floor(Math.random() * 80) + 10; // Posição horizontal entre 10% e 90%
  
    return {
      id: Math.random().toString(36).substring(2, 9), // ID único
      size: `${rngSize}px`, // Tamanho em pixels
      speed: rngSpeed, // Tempo de animação em segundos
      startDelay: `${rngStartDelay}s`, // Atraso inicial
      left: `${rngLeft}%`, // Posição horizontal
    };
  };

  // Inicializar os "Thumbs Up"
  useEffect(() => {
    if (difficulty === "Medium") {
      const initialThumbs = Array.from({ length: TOTAL_THUMBS }, () =>
        generateRandomProperties()
      );
      setThumbs(initialThumbs);
    }
  }, [difficulty]);

  // Função para reinicializar um "Thumbs Up" após a animação
  const handleAnimationEnd = (id) => {
    setThumbs((prevThumbs) =>
      prevThumbs.map((thumb) =>
        thumb.id === id ? generateRandomProperties() : thumb
      )
    );
  };

  return (
    <div className="thumbs-animation-container">
      {thumbs.map((thumb) => (
        <img
          key={thumb.id}
          src={ThumbsUpImage}
          alt="Thumbs Up"
          className="thumbs-up"
          style={{
            width: thumb.size,
            left: thumb.left,
            animationDuration: `${thumb.speed}s`,
            animationDelay: thumb.startDelay,
          }}
          onAnimationEnd={() => handleAnimationEnd(thumb.id)}
        />
      ))}
    </div>
  );
};

ThumbsUpMedium.propTypes = {
  difficulty: PropTypes.string.isRequired,
};

export default ThumbsUpMedium;
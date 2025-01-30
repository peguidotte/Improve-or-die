import "./SkullsHard.css";
import Skull from "../../assets/global/skull.gif";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

const TOTAL_SKULLS = 10;

const SkullsHard = ({ difficulty }) => {
  const [skulls, setSkulls] = useState([]);

  const generateRandomProperties = () => {
    const rngSize = Math.floor(Math.random() / 2) + 100;
    const rngSpeed = Math.floor(Math.random() * 5) + 5;
    const rngPositionY = Math.floor(Math.random() * 70);
    const rngPositionX = Math.floor(Math.random() * 70);

  return {
    id: Math.random().toString(36).substring(2, 9),
    size: `${rngSize}px`,
    speed: rngSpeed,
    top: `${rngPositionY}%`,
    left: `${rngPositionX}%`,
  };
  };

  useEffect(() => {
    if (difficulty === "Hard") {
      const initialSkulls = Array.from({ length: TOTAL_SKULLS }, () =>
        generateRandomProperties()
      );
      setSkulls(initialSkulls);
    }
  }, [difficulty]);

  const handleAnimationEnd = (id) => {
    setSkulls((prevSkulls) =>
      prevSkulls.map((skull) =>
        skull.id === id ? generateRandomProperties() : skull
      )
    );
  };

  return (
    <div className="skulls-animation-container">
      {skulls.map((skull) => (
        <img
          key={skull.id}
          src={Skull}
          alt="Skull"
          className="skull"
          style={{
            width: skull.size,
            top: skull.top,
            left: skull.left,
            animationDuration: `${skull.speed}s`,
          }}
          onAnimationEnd={() => handleAnimationEnd(skull.id)}
        />
      ))}
    </div>
  );
};
  

SkullsHard.propTypes = {
  difficulty: PropTypes.string
};

export default SkullsHard;

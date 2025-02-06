import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Timer = ({ easyTime, mediumTime, hardTime, diff, onTimeOut }) => {
  const initialTime =
    diff === "Easy" ? easyTime : diff === "Medium" ? mediumTime : hardTime;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeOut();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimeOut]);

  return <p>{timeLeft}s</p>;
};

Timer.propTypes = {
  easyTime: PropTypes.number.isRequired,
  mediumTime: PropTypes.number.isRequired,
  hardTime: PropTypes.number.isRequired,
  diff: PropTypes.string.isRequired,
  onTimeOut: PropTypes.func.isRequired,
};

export default Timer;
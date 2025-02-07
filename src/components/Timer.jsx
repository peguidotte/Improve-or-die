import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Timer = ({ easyTime, mediumTime, hardTime, diff, onTimeOut, paused }) => {
  const initialTime =
    diff === "Easy" ? easyTime : diff === "Medium" ? mediumTime : hardTime;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    setTimeLeft(initialTime);
  }, [initialTime]);

  useEffect(() => {
    if (paused) return;
    if (timeLeft <= 0) {
      onTimeOut();
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, onTimeOut, paused]);

  return <p>{timeLeft}s</p>;
};

Timer.propTypes = {
  easyTime: PropTypes.number.isRequired,
  mediumTime: PropTypes.number.isRequired,
  hardTime: PropTypes.number.isRequired,
  diff: PropTypes.string.isRequired,
  onTimeOut: PropTypes.func.isRequired,
  paused: PropTypes.bool.isRequired,
};

export default Timer;
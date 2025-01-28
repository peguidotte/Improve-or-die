import "./SkullsHard.css";
import Skull from "../../assets/global/skull.gif";
import PropTypes from 'prop-types';

const SkullsHard = ({ difficulty }) => {
  return (
    <div>
      <div className="skulls-hard"></div>
      <img src={Skull} alt="Skull" />
    </div>
  );
};

SkullsHard.propTypes = {
  difficulty: PropTypes.string
};

export default SkullsHard;

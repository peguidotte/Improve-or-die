import BirdsEasy from "./BirdsEasy.jsx"
import PropTypes from 'prop-types';

const AnimationDifficulty = ({ difficulty }) => {
  switch (difficulty) {
    case "Easy":
      return <BirdsEasy difficulty={difficulty}/>;
    case "Medium":
      return <></>;
    case "Hard":
      return <></>;
    default:
      return null;
  }
  
};
AnimationDifficulty.propTypes = {
  difficulty: PropTypes.string.isRequired,
};

export default AnimationDifficulty;

import PropTypes from 'prop-types';
import BirdsEasy from "./BirdsEasy.jsx"
import ThumbsUpMedium from "./ThumbsUpMedium.jsx";
import SkullsHard from './SkullsHard.jsx';

const AnimationDifficulty = ({ difficulty }) => {
  switch (difficulty) {
    case "Easy":
      return <BirdsEasy difficulty={difficulty}/>;
    case "Medium":
      return <ThumbsUpMedium difficulty={difficulty}/>;
    case "Hard":
      return <SkullsHard difficulty={difficulty}/>;
    default:
      return null;
  }
  
};
AnimationDifficulty.propTypes = {
  difficulty: PropTypes.string.isRequired,
};

export default AnimationDifficulty;

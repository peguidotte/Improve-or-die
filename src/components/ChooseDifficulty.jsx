import { useState } from "react";
import PropTypes from "prop-types";
import AnimationDifficulty from "./Animations/AnimationsDifficulty";
import { Link } from "react-router";

const ChooseDifficulty = ({id}) => {
  const [selectedDifficulty, setSelectDifficulty] = useState("Easy");
  const difficulties = [
    { level: "Easy", subtitle: "Not judging... But how old are you?" },
    { level: "Medium", subtitle: "Ok.. you are a normal person. And Boring." },
    {
      level: "Hard",
      subtitle:
        "Uuuh... Be careful guys. You are so dangerous! I’m scared, help meeeee",
    },
  ];

  const handleSelect = (difficulty) => {
    setSelectDifficulty(difficulty);
  };

  return (
    <>
      <h2 className="text-center text-[2.45rem] mt-10">
        Choose your difficulty
      </h2>
      <div className="flex justify-around">
        {difficulties.map((difficulty) => (
          <button
            key={difficulty.level}
            onClick={() => handleSelect(difficulty.level)}
            className={`${
              selectedDifficulty === difficulty.level
                ? "text-2xl border-black border-b-2 duration-300"
                : "text-base"
            }`}
          >
            {difficulty.level}
          </button>
        ))}
      </div>
      <p className="text-center mt-8 ">
        {
          difficulties.find(
            (difficulty) => difficulty.level === selectedDifficulty
          ).subtitle
        }
      </p>
      <div className="flex justify-center">
        <Link
          to={{
            pathname: `/game/${id}/${selectedDifficulty}`,
            state: { id, selectedDifficulty },
          }}
        >
          <button
            className="bg-black text-white px-12 text-6xl mt-8 text-center"
            onClick={() => console.log("Start game")}
          >
            Start
          </button>
        </Link>
      </div>
      <AnimationDifficulty difficulty={selectedDifficulty} />
    </>
  );
};
ChooseDifficulty.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ChooseDifficulty;

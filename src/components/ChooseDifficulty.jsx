import { useState } from "react";
import AnimationDifficulty from "./Animations/AnimationsDifficulty";

const ChooseDifficulty = () => {
  const [selectedDifficulty, setSelectDifficulty] = useState("Easy");
  const difficulties = [
    { level: "Easy", subtitle: "Omg, you are horrible" },
    { level: "Medium", subtitle: "Omg, you are normal" },
    { level: "Hard", subtitle: "Omg, you... you are horrible too" },
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
        <button className="bg-black text-white px-12 text-6xl mt-8 text-center">
          Start
        </button>
      </div>
      <AnimationDifficulty difficulty={selectedDifficulty} />
    </>
  );
};

export default ChooseDifficulty;

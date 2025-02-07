import PropTypes from "prop-types";
import { useState } from "react";
import DynamicJsonLoader from "../components/DynamicJsonLoader";
import BackButton from "../components/BackButton";
import Timer from "../components/Timer";

const WtfIsThis = ({ diff }) => {
  const [questions, setQuestions] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextWord = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
  };

  const wrongQuestion = () => {
    setIsPaused(true);
  }

  const handleClick = (meaning) => {
    if (meaning === questions[currentIndex].true){
      return nextWord;
    }   
    else {
      wrongQuestion();
    }
  }

  if (!questions) {
    return (
      <DynamicJsonLoader folder="wtf-is-this" diff={diff}>
        {(data) => {
          setQuestions(data.sort(() => Math.random() - 0.5));
          return <div>Carregando perguntas...</div>;
        }}
      </DynamicJsonLoader>
    );
  }

  return (
    <div>
      <header className="grid grid-cols-3 gap-4 text-4xl text-center">
        <div className="col-span-1 text-left">
          <BackButton />
        </div>
        <div className="text-5xl">
          <Timer
            key={currentIndex}
            easyTime={30}
            mediumTime={20}
            hardTime={15}
            diff={diff}
            onTimeOut={nextWord}
            paused={isPaused}
          />
        </div>
        <p className="col-span-1 text-right">{diff}</p>
      </header>
      <div className="pt-10">
        <p className="text-7xl text-center">{questions[currentIndex].word}</p>
        <div className="mt-5 flex-col flex items-center justify-center gap-4">
          {questions[currentIndex].meanings
            .sort(() => Math.random() - 0.5)
            .map((meaning, index) => (
              <button key={index} onClick={() => handleClick(meaning)} className="p-2 bg-zinc-900 text-white text-xl text-center w-full">
                {meaning}
              </button>
            ))}
        </div>
        
        <p></p>
      </div>
    </div>
  );
};

WtfIsThis.propTypes = {
  diff: PropTypes.string.isRequired,
};

export default WtfIsThis;

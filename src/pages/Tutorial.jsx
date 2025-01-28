import { Link, useParams } from "react-router";
import ChooseDifficult from "../components/ChooseDifficulty";
import GamesData from "../data/games.json";

const Tutorial = () => {
  let { id } = useParams();
  let activeId = parseInt(id, 10);
  let game = GamesData.find((game) => game.id === activeId);

  return (
    <>
      <div className="h-screen overflow-hidden">
        <section>
          <div className="flex justify-between text-4xl pt-2">
            <Link to="/">&#60;-</Link>
            <h1>{game.title || "Has something wrong!"}</h1>
            <button>c</button>
          </div>
          <p className="text-center mt-2">
            {game.description || "Back to menu and try again. I'm sorry!"}
          </p>
        </section>
        <div className="flex items-center gap-3 mt-2">
          <div className="w-[75%] h-[2px] bg-black"></div>
          <button className="">Star</button>
          <div className="w-[10%] h-[2px] bg-black"></div>
        </div>
        <ChooseDifficult />
      </div>
    </>
  );
};

export default Tutorial;

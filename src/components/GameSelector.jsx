import { useParams } from "react-router";
import WtfIsThis from "../games/WtfIsThis";
import ExampleGame from "../games/ExampleGame";
import NotFound from "../pages/NotFound";

const gameComponents = {
  1: WtfIsThis,
  2: ExampleGame,
};

function GameSelector() {
  const { id } = useParams();
  const SelectedGame = gameComponents[id];

  return SelectedGame ? <SelectedGame /> : <NotFound />;
}

export default GameSelector;
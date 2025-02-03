import { lazy, Suspense } from "react";
import { useParams } from "react-router";
import GamesData from "../data/games.json";
import NotFound from "./NotFound";

const gameComponents = {
  WtfIsThis: lazy(() => import("../games/WtfIsThis")),
  ExampleGame: lazy(() => import("../games/ExampleGame")),
};

const Game = () => {
  let { id, diff } = useParams();
    console.log(diff);
  let gameId = parseInt(id, 10);
  let game = GamesData.find((game) => game.id === gameId);

  if (!game) {
    return <NotFound />;
  }

  let DynamicComponent = gameComponents[game.component];

  if (!DynamicComponent) {
    return <NotFound />;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicComponent diff={diff} />
    </Suspense>
  );
};

export default Game;
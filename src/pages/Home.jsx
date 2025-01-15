import GameCards from '../components/GameCards';
import gamesData from '../data/games.json'
function Home() {
    console.log(gamesData);
    console.log(gamesData.length);

  return (
    <div className="home-container">
      <h1 className="text-[64px]">Improve or die</h1>
      <GameCards />
    </div>
  );
}

export default Home;
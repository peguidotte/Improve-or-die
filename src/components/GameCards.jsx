import gamesData from '../data/games.json'
import GameCard from './GameCard';

const GameCards = () => {

    return (
        <div className='grid grid-cols-2 gap-5'>
            {gamesData.map((game, index) => (
                <GameCard 
                    key={index} 
                    id={game.id}
                    title={game.title} 
                    description={game.description}
                    img_sm={game.img_sm} 
                    img_md={game.img_md || undefined}
                    img_xl={game.img_xl || undefined}
                    alt={game.alt} 
                    cardLeft={index % 2 === 0}
                    isNew={new Date(game.release_date) > new Date(new Date().setDate(new Date().getDate() - 30))} 
                />
            ))}
        </div>
    );
}

export default GameCards;
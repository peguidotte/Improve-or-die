import { Link } from "react-router";

const Home = () => {
    return (
        <>
            <h1 className="text-[64px]">Improve or die</h1>
            <div>
                <p>
                    aqui ficarão os cards dos games
                </p>
                <img src="src\assets\games\wtfisthis\gifs\idle.gif" alt="idle face blinking" />
                <Link to="/tutorial">Quando clicar nos cards abrirá essa página conforme id do jogo</Link>
            </div>
        </>
    );
};

export default Home;
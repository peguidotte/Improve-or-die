import { Link } from "react-router";

const Tutorial = () => {
    return (
        <div>
            <Link to="/">Voltar</Link>
            <p>Tutorial</p>
            <Link to="/wtfisthis">Jogar WtfIsThis</Link>
        </div>
    );
};

export default Tutorial;
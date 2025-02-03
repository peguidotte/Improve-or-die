import PropTypes from "prop-types";
import DynamicJsonLoader from "../components/DynamicJsonLoader";
import BackButton from "../components/BackButton";

const WtfIsThis = ({ diff }) => {
  return (
    <div>
      <header className="flex items-center justify-between text-4xl px-2">
        <BackButton />
        <p>{diff}</p>
      </header>
      <DynamicJsonLoader folder="wtf-is-this" diff={diff}>
        {(data) => (
          <div>
            <h4>Dados Carregados:</h4>
            {data.map((item, index) => (
              <p key={index}>{item.word}</p>
            ))}
          </div>
        )}
      </DynamicJsonLoader>
    </div>
  );
};

WtfIsThis.propTypes = {
  diff: PropTypes.string.isRequired,
};

export default WtfIsThis;

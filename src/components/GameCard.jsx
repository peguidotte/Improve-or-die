import PropTypes from "prop-types";
import { Link } from "react-router";

const GameCard = ({
  id,
  title,
  description,
  img_sm,
  alt,
  cardLeft = false,
  isNew = false,
}) => {
    
  return (
    <Link
      to={{
        pathname: `/Tutorial/${id}`,
        state: { id, description, title },
      }}
      className={`w-[174px] h-[220px] border-t-4 ${
        cardLeft ? "border-l-4 rounded-r-2xl" : "border-r-4 rounded-l-2xl"
      } border-black shadow-md hover:animate-pulse relative flex justify-center`}
    >
      <h1 className="text-[32px] absolute z-10">{title}</h1>
      <img src={img_sm} alt={alt} className="hover:opacity-100" />
      {isNew && (
        <div
          className={`${
            cardLeft
              ? "right-0 rounded-ss-2xl rounded-ee-2xl"
              : "left-0 rounded-se-2xl rounded-es-2xl"
          } absolute bottom-0 bg-black text-white text-xl font-bold px-4 py-1`}
        >
          new
        </div>
      )}
    </Link>
  );
};

GameCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  img_sm: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  cardLeft: PropTypes.bool,
  isNew: PropTypes.bool,
};

export default GameCard;

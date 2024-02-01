import PropTypes from "prop-types";


function Dice({funtionClick}) {
  return (
    <button className="dice" onClick={funtionClick}>
      Lanzar Dado 🎲
    </button>
  );
}

Dice.propTypes = {
    funtionClick: PropTypes.func
}

export default Dice;

import PropTypes from "prop-types";

function GameStatus({gameStatus, name}) {
  return (
    <div className="game-status">{name ? }</div>
  )
}


GameStatus.propTypes = {
    gameStatus: PropTypes.string
}


export default GameStatus
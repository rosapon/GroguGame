import PropTypes from "prop-types";

function GameStatus({gameStatus}) {
  return (
    <div className="game-status">{gameStatus}</div>
  )
}


GameStatus.propTypes = {
    gameStatus: PropTypes.string
}


export default GameStatus
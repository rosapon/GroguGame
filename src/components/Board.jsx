import PropTypes from "prop-types";



function Board({groguPosition}) {
  return (
    <section className="board" >{groguPosition}</section>
  )
}

Board.propTypes = {
    groguPosition: PropTypes.any
}

export default Board




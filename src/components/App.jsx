import "../styles/_App.scss";
import { useState } from "react";

function App() {
  const [grogu, setGrogu] = useState(0);
  const [dice, setDice] = useState(null);
  const [gameStatus, setGameStatus] = useState("en curso");
  const [cookiesContainer, setCookiesContainer] = useState([
    "  🍪 ",
    "  🍪 ",
    "  🍪 ",
  ]);
  const [eggsContainer, setEggsContainer] = useState([
    "  🥚 ",
    "  🥚 ",
    "  🥚 ",
  ]);
  const [frogsContainer, setFrogsContainer] = useState([
    "  🐸 ",
    "  🐸 ",
    "  🐸 ",
  ]);

  const rollDice = () => {
    const number = Math.floor(Math.random() * 4 + 1);
    console.log(number);
    if (number === 4) {
      setGrogu(grogu + 1);
      setGameStatus(" Grogu ha avanzado una casilla");
    } else if (number === 1) {
      setCookiesContainer(cookiesContainer.slice(0, -1));
      setGameStatus("Se ha descargado una coockie");
    } else if (number === 2) {
      setEggsContainer(eggsContainer.slice(0, -1));
      setGameStatus("Se ha descargado un huevo");
    } else {
      setFrogsContainer(frogsContainer.slice(0, -1));
      setGameStatus("Se ha descargado una rana");
    }
  };
  const handleClick = (event) => {
    event.preventDefault();
    rollDice();
  };
  const groguCells = [1, 2, 3, 4, 5, 6, 7].map((cell, index) => {
    return (
      <>
        <div className="cell">
          {index === grogu && <div className="grogu"> 👣</div>}
        </div>
      </>
    );
  });

  return (
    <>
      <div className="page">
        <header>
          <h1>¡Cuidado con Grogu!</h1>
        </header>
        <main className="page">
          <section className="board">{groguCells}</section>
          <section>
            <button className="dice" onClick={handleClick}>
              Lanzar Dado 🎲
            </button>
            <div className="game-status">{gameStatus}</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">{cookiesContainer}</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">{eggsContainer}</div>
          </section>
          <section className="goods-container">
            <div className="goods-item">{frogsContainer}</div>
          </section>
          <section>
            <button className="restart-button">Reiniciar Juego</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

import "../styles/_App.scss";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Dice from "./Dice";
import GameStatus from "./GameStatus";
import Form from "./Form";




function App() {
  const [grogu, setGrogu] = useState(0);
  const [dice, setDice] = useState(null);
  const [gameStatus, setGameStatus] = useState("en curso");

  const [name, setName] = useState("");



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
          {index === grogu && <div key={index} className="grogu"> 👣</div>}
        </div>
      </>
    );
  });

  const handleReset = () => {
    setGrogu(0)
    setDice(null);
    setGameStatus("en curso")
    setCookiesContainer([
      "  🍪 ",
      "  🍪 ",
      "  🍪 ",
    ]);
    setEggsContainer([
      "  🥚 ",
      "  🥚 ",
      "  🥚 ",
    ]);
    setFrogsContainer([
      "  🐸 ",
      "  🐸 ",
      "  🐸 ",
    ]);

    setName("");

  }

  const handleName = (value) => {
    setName(value)

  }

  return (
    <>
      <div className="page">
        <Header />
        <main className="page">
          <Board groguPosition = {groguCells} />
          <section>
            <Form handleName={handleName} name={name}/>
            <Dice funtionClick= {handleClick}/>
            <GameStatus gameStatus={gameStatus} name={name}/>
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
            <button className="restart-button" onClick={handleReset}>Reiniciar Juego</button>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;

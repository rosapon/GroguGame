import "../styles/_App.scss";
import { useState } from "react";

function App() {
 
  const [grogu, setGrogu] = useState(0)
  const [dice, setDice] = useState(null)
  const [gameStatus, setGameStatus] = useState("en curso");
  const [cookiesContainer, setCookiesContainer] = useState(["🍪", "🍪", "🍪"])
  const [eggsContainer, setEggsContainer] = useState(["🥚", "🥚", "🥚"])
  const [frogsContainer, setFrogsContainer] = useState(["🐸", "🐸", "🐸"])


  


  const rollDice = () => {
    const number = Math.floor(Math.random() * 4 + 1)
    console.log(number);
    if (number === 4) {
      setGrogu(+1);
    } else if (number === 1) {
      setCookiesContainer (cookiesContainer.slice(0, -1));
    } else if (number === 2) {
      setEggsContainer (eggsContainer.slice(0, -1));
    } else {
      setFrogsContainer (frogsContainer.slice(0, -1));
    }
    
  }



  const handleClick = (event) => {
    event.preventDefault();
    rollDice()
   
  }



  
  


 






  return <>
   <div className="page">
    <header>
      <h1>¡Cuidado con Grogu!</h1>
    </header>
    <main className="page">
      <section className="board">
        <div className="cell"><div className="grogu">👣</div></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell"></div>
      </section>
      <section>
        <button className="dice" onClick={handleClick}>Lanzar Dado 🎲</button>
        <div className="game-status">En curso</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
        <div className="goods-item">🍪</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
        <div className="goods-item">🥚</div>
      </section>
      <section className="goods-container">
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
        <div className="goods-item">🐸</div>
      </section>
      <section>
        <button className="restart-button">Reiniciar Juego</button>
      </section>
    </main>
  </div>
  </>
}

export default App

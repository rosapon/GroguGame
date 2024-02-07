import { NavLink } from "react-router-dom";
import Options from "./Options";
import Instructions from "./Instructions";


function Footer() {
  return (
<footer className="footer">
  <nav>

    <ul>
      <li className="footer__menu-item"><NavLink to="/" className="footer__menu-link"> Jugar </NavLink></li>
      <li className="footer__menu-item"><NavLink to="/Instructions" className="footer__menu-link"> Instrucciones </NavLink></li>
      <li className="footer__menu-item"><NavLink to="/Options" className="footer__menu-link"> Más opciones </NavLink></li>
  </ul>
   
  </nav>
  <small className="footer__copy">© Adalab</small>
</footer>
  )
}

export default Footer
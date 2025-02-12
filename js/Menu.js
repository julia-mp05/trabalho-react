import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/historia">História</Link></li>
        <li><Link to="/galeria">Galeria</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
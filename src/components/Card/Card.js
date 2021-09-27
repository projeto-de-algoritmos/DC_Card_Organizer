import "./styles.scss";

import asEspadas from "../../assets/as_espadas.jpeg";
import coringa from "../../assets/coringa.jpeg";
import doisPaus from "../../assets/dois_paus.jpeg";
import quatroPaus from "../../assets/quatro_paus.jpeg";
import reiPaus from "../../assets/rei_paus.jpeg";
import seteCopas from "../../assets/sete_copas.jpeg";

function chooseCard(cardName) {
  switch (cardName) {
    case "as_espadas":
      return asEspadas;
    case "coringa":
      return coringa;
    case "dois_paus":
      return doisPaus;
    case "quatro_paus":
      return quatroPaus;
    case "rei_paus":
      return reiPaus;
    case "sete_copas":
      return seteCopas;
    default:
      break;
  }
}

export default function Card({ cardName }) {
  return (
    <div className="card">
      <div className="cardcontent">
        <img src={chooseCard(cardName)} alt="projeto algoritmos" />
      </div>
    </div>
  );
}

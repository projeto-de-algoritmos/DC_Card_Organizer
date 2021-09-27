import { useState } from "react";
import "./App.scss";

import Card from "./components/Card/Card";

function mergeSort(cardsOrder) {
  const arr = cardsOrder;

  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle, arr.length);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    sortedArr.push(
      left[0].value < right[0].value ? left.shift() : right.shift()
    );
  }

  while (left.length) {
    sortedArr.push(left.shift());
  }
  while (right.length) {
    sortedArr.push(right.shift());
  }

  return sortedArr;
}

function App() {
  const [cardsOrder, setCardsOrder] = useState([
    { component: <Card cardName="quatro_paus" key={1} />, value: 4 },
    { component: <Card cardName="rei_paus" key={2} />, value: 13 },
    { component: <Card cardName="sete_copas" key={3} />, value: 7 },
    { component: <Card cardName="as_espadas" key={4} />, value: 1 },
    { component: <Card cardName="dois_paus" key={5} />, value: 2 },
  ]);

  return (
    <div className="container">
      <div className="cardcontainer">
        {cardsOrder.map((item) => item.component)}
      </div>

      <div className="flex-row">
        <button
          onClick={() => {
            setCardsOrder(mergeSort(cardsOrder));
          }}
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}

export default App;

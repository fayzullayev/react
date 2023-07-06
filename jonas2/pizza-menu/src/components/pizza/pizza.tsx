import { PizzaTypes } from "../types/pizza.ts";

function Pizza({ ingredients, photoName, name, price, soldOut }: PizzaTypes) {
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="Menu Spinaci" />
      <div>
        <h3>{name}</h3>
        <h4>{ingredients}</h4>

        <span>{soldOut ? "SOLD OUT" : price}</span>
      </div>
    </li>
  );
}

export default Pizza;

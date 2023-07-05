import { PizzaTypes } from "../types/pizza.ts";

function Pizza({ ingredients, photoName, name, price }: PizzaTypes) {
  return (
    <div className="pizza">
      <img src={photoName} alt="Menu Spinaci" />
      <div>
        <h3>{name}</h3>
        <h4>{ingredients}</h4>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default Pizza;

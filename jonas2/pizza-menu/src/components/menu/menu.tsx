import Pizza from "../pizza";
import { PizzaTypes } from "../types/pizza.ts";
import { ReactElement } from "react";

const pizzaData: PizzaTypes[] = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Menu Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Menu Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Menu Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Menu Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Menu Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Menu(): ReactElement {
  let pizzas: ReactElement[] | null = null;

  if (pizzaData.length > 0) {
    pizzas = pizzaData.map((pizza: PizzaTypes) => {
      return <Pizza key={pizza.name} {...pizza} />;
    });
  }

  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizzas ? <ul className="pizzas">{pizzas}</ul> : <h1>No Pizza</h1>}
    </main>
  );
}

export default Menu;

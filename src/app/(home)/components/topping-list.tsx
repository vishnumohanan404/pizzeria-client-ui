"use client";

import { useState } from "react";
import ToppingCard, { Topping } from "./topping-card";

const toppings = [
  {
    id: "1",
    name: "Chicken",
    image: "/pizza-main.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "2",
    name: "Jelapeno",
    image: "/pizza-main.png",
    price: 50,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Cheese",
    image: "/pizza-main.png",
    price: 50,
    isAvailable: true,
  },
];
const ToppingList = () => {
  const [selectedToppings, setSelectedToppings] = useState([toppings[0]]);
  const handleCheckBoxCheck = (topping: Topping) => {
    const isAlreadyExists = selectedToppings.some(
      (element) => element.id === topping.id
    );
    if (isAlreadyExists) {
      setSelectedToppings((prev) =>
        prev.filter((elm) => elm.id !== topping.id)
      );
      return;
    }
    setSelectedToppings((prev) => [...prev, topping]);
  };
  return (
    <section className="mt-6">
      <h3>Extra Toppings</h3>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {toppings.map((topping) => {
          return (
            <ToppingCard
              key={topping.id}
              topping={topping}
              selectedToppings={selectedToppings}
              handleCheckBoxCheck={handleCheckBoxCheck}
            ></ToppingCard>
          );
        })}
      </div>
    </section>
  );
};

export default ToppingList;

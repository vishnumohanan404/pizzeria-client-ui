"use client";

import { startTransition, useEffect, useState } from "react";
import ToppingCard from "./topping-card";
import { Topping } from "@/lib/types";

const ToppingList = () => {
  const [toppings, setToppings] = useState<Topping[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      // todo: make tenantId dynamic
      const toppingResponse = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/catalog/toppings?tenantId=1`
      );
      const toppings = await toppingResponse.json();
      setToppings(toppings);
    };

    fetchData();
  }, []);

  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const handleCheckBoxCheck = (topping: Topping) => {
    const isAlreadyExists = selectedToppings.some(
      (element) => element.id === topping.id
    );
    startTransition(() => {
      if (isAlreadyExists) {
        setSelectedToppings((prev) =>
          prev.filter((elm) => elm.id !== topping.id)
        );
        return;
      }
      setSelectedToppings((prev) => [...prev, topping]);
    });
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

import { useState, useEffect } from "react";
import products from "../data/products";

function ItemCount({ stock, initial = 1 }) {
  const [count, setCount] = useState(1);

  function handleSubtract() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  function handleAdd() {
    console.log("Add clicked - count:", count, "stock:", stock); // Debug
    if (count < stock) {
      setCount(count + 1);
    } else {
      console.log("Can't add more - at stock limit");
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleSubtract}>-</button>
        <span>{count}</span>
        <button onClick={handleAdd}>+</button>
      </div>
      <button>Añadir al carro</button>
    </div>
  );
}

export default ItemCount;

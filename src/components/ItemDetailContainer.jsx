import { useParams } from "react-router";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
import { getData, getItemData } from "../data/mockService";
import "../App.css";

function ItemDetailContainer() {
  const { itemid } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getItemData(itemid).then((response) => setProduct(response));
  }, []);

  return (
    <section>
      <h2>{product.name}</h2>
      <hr />
      <img src={product.image} alt={product.name} />
      <h4>Precio: ${product.price}</h4>
      <p>Cantidad disponible: {product.stock} </p>
      <ItemCount stock={product.stock} />
    </section>
  );
}

export default ItemDetailContainer;

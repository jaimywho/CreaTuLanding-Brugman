import products from "../data/products";
import Item from "./Item";
import { getCategoryData, getData, getItemData } from "../data/mockService";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryID } = useParams();
  console.log(categoryID);

  useEffect(() => {
    if (categoryID) {
      getCategoryData(categoryID).then((respuesta) => setProducts(respuesta));
    } else {
      getData().then((respuesta) => setProducts(respuesta));
    }
  }, [categoryID]);

  return (
    <div className="list">
      {products.map((item) => {
        return (
          <Item
            key={item.itemid}
            itemid={item.itemid}
            name={item.name}
            image={item.image}
            price={item.price}
            stock={item.stock}
          />
        );
      })}
    </div>
  );
}

export default ItemListContainer;

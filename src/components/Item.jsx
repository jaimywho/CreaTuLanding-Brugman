import { Link } from "react-router";

function Item({ name, image, price, itemid, stock }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <h3>$ {price}</h3>

      <Link to={`/product/${itemid}`}>
        <button>Ver producto</button>
      </Link>
    </div>
  );
}

export default Item;

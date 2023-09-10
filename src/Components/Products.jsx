/* eslint-disable react/jsx-key */
import "./Products.css";
const productsArray = [
  {
    id: 1,
    name: "Baseball Cap",
    price: 15.99,
    description: "A baseball cap",
  },
  {
    id: 2,
    name: "Jacket",
    price: 139.99,
    description: "A jacket",
  },
  {
    id: 3,
    name: "Jeans",
    price: 55.99,
    description: "A pair of jeans",
  },
  {
    id: 4,
    name: "Scarf",
    price: 10.0,
    description: "A scarf",
  },
  {
    id: 5,
    name: "T-shirt",
    price: 14.99,
    description: "A t-shirt",
  },
];

const items = productsArray.map((item) => {
  return (
    <div className="item">
      <h2>{item.price}</h2>
      <h2>{item.description}</h2>
    </div>
  );
});

const Products = () => {
  return <div className="container">{items}</div>;
};

export default Products;

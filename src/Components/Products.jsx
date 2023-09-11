/* eslint-disable react/jsx-key */
import "./Products.css";
import hat from "../assets/baseball-hat.jpg";

const productsArray = [
  {
    id: 1,
    title: "Baseball Cap",
    image: hat,
    price: 15.99,
    description: "A baseball cap",
  },
  {
    id: 2,
    title: "Jacket",
    price: 139.99,
    description: "A jacket",
  },
  {
    id: 3,
    title: "Jeans",
    price: 55.99,
    description: "A pair of jeans",
  },
  {
    id: 4,
    title: "Scarf",
    price: 10.0,
    description: "A scarf",
  },
  {
    id: 5,
    title: "T-shirt",
    price: 14.99,
    description: "A t-shirt",
  },
];

const items = productsArray.map((item) => {
  return (
    <div className="card">
      <img src={item.image} alt="" />
      <div className="card__content">
        <h2 className="card__title">{item.title}</h2>
        <p className="card__price">{item.price}</p>
        <p className="card__description">{item.description}</p>
      </div>
    </div>
  );
});

const Products = () => {
  return (
    <div className="container">
      <div className="product-grid">{items}</div>
    </div>
  );
};

export default Products;

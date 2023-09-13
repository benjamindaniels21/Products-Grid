/* eslint-disable react/jsx-key */
import "./Products.css";
import hat from "../assets/baseball-hat.jpg";
import jacket from "../assets/jacket.jpg";
import jeans from "../assets/jeans.jpg";
import scarf from "../assets/scarf.jpg";
import tShirt from "../assets/t-shirt.jpg";

const productsArray = [
  {
    id: 1,
    title: "Baseball Cap",
    image: hat,
    price: 15.99,
    description: "A baseball cap",
    featured: "featured",
  },
  {
    id: 2,
    title: "Jacket",
    image: jacket,
    price: 139.99,
    description: "A jacket",
  },
  {
    id: 3,
    title: "Jeans",
    image: jeans,
    price: 55.99,
    description: "A pair of jeans",
  },
  {
    id: 4,
    title: "Scarf",
    image: scarf,
    price: 10.0,
    description: "A scarf",
  },
  {
    id: 5,
    title: "T-shirt",
    image: tShirt,
    price: 14.99,
    description: "A t-shirt",
  },
];

const items = productsArray.map((item) => {
  return (
    <div className={`card stacked ${item.featured}`}>
      <img src={item.image} alt="" />
      <div className="card__content">
        <h2 className="card__title">{item.title}</h2>
        <p className="card__price">${item.price}</p>
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

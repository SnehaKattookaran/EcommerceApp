import "./App.css";
import React, { useState } from "react";

function App() {
  let products = [
    {
      name: "Coffee Table",
      price: 4599,
      description: "Space Furniture",
      image: "https://m.media-amazon.com/images/I/71d82J7MiKL._AC_UL400_.jpg",
    },
    {
      name: "Coffee Mug",
      price: 199,
      description: "Eha Naturals Mugs",
      image: "https://m.media-amazon.com/images/I/71uMlSoE1ZL._SX466_.jpg",
    },
    {
      name: "Coffee",
      price: 329,
      description: "Nescafe Classic Coffee",
      image: "https://m.media-amazon.com/images/I/71wak8fI+BL._SX679_.jpg",
    },
    {
      name: "Coffee Maker",
      price: 999,
      description: "Pigeon Coffee Maker",
      image: "https://m.media-amazon.com/images/I/61bbrTavcrL._AC_UY218_.jpg",
    },
    {
      name: "Coffee Flask",
      price: 629,
      description: "Milton Mug Flask",
      image:
        "https://m.media-amazon.com/images/I/31nb-dsS2cL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      name: "Coffee Filter",
      price: 679,
      description: "Sowbagya Coffee Filter",
      image: "https://m.media-amazon.com/images/I/31F-KoUOgML.jpg",
    },
    {
      name: "Coffee Mug",
      price: 229,
      description: "Ohio Ceramic Mugs",
      image: "https://m.media-amazon.com/images/I/712u63FeD1L._AC_UL400_.jpg",
    },
    {
      name: "Coffee",
      price: 170,
      description: "Bru Pure Coffee Beans",
      image: "https://m.media-amazon.com/images/I/41+HCHvvUyL.jpg",
    },
    {
      name: "Coffee Maker",
      price: 1499,
      description: "Cafe Coffee Maker",
      image: "https://m.media-amazon.com/images/I/61rfpsbKrdL._AC_UL400_.jpg",
    },
    {
      name: "Coffee Flask",
      price: 799,
      description: "Destino Small Flask",
      image:
        "https://m.media-amazon.com/images/I/71vD3-QodIL._AC_UL640_QL65_.jpg",
    }
  ];
  const [search, setSearch] = useState("");
  if (search.length > 0) {
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase())
    );
  }

  const cards = products.map((cells) => (
    <div className="box">
      <div className="text">
        <img className="img" alt={cells.name} src={cells.image}></img>
        <text className="product-name">{cells.name}</text>
        <br />
        <b className="price">{cells.price} Rs</b>
        <br />
        <i className="description">{cells.description}</i>
      </div>
    </div>
  ));
  return (
    <body>
      <header className="app-header">
        <div className="logosection">
          <img
            src="https://thumbs.dreamstime.com/b/coffee-cup-icon-red-background-flat-style-vector-illustration-179116628.jpg"
            className="logo"
            alt="logo"
          ></img>
          <div className="appname">Coffee Shoppee</div>
        </div>
        <div className="searchbar">
          <div className="searchbtn">
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
              className="icn srchicn"
              alt="search-icon"
            ></img>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>
      <div className="main-container">
        <div className="main">
          <div className="box-container">{cards}</div>
        </div>
      </div>
    </body>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import { Products } from "../src/Components/Products";
import { Footer } from "../src/Components/Footer";


//APP---------------------------------------------------------------------------
function App() {

  return (
    <div className="App">
      <div>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

//Product List---------------------------------------------------------------------------
function ProductList() {
  const [count, setCount] = useState(0);
  let prod = [
    {
      name: "Adidas",
      rating: "⭐⭐⭐⭐",
      previousPrice: "$20.00 ",
      price: "$18.00",
      img: 'https://m.media-amazon.com/images/I/61JYu4FWsJL._UY625_.jpg',
    },
    {
      name: "Nike",
      rating: "⭐⭐⭐⭐⭐",
      price: "$20.00",
      img: 'https://m.media-amazon.com/images/I/71-Gr1ulJhL._AC_UL320_.jpg',
    },
    {
      name: "Reebok",
      rating: "⭐⭐⭐",
      previousPrice: "$60.00 ",
      price: "$50.00",
      img: 'https://m.media-amazon.com/images/I/51whOYJlR8L._AC_UL320_.jpg',
    },
    {
      name: "Puma",
      rating: "⭐⭐⭐⭐⭐",
      price: "$40.00",
      img: 'https://m.media-amazon.com/images/I/61TBaAixk6L._AC_UL320_.jpg',
    },
    {
      name: "Gucci",
      rating: "⭐⭐⭐⭐",
      previousPrice: "$70.00",
      price: "$50.00",
      img: 'https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg',
    },
    {
      name: "Wooodland",
      rating: "⭐⭐",
      previousPrice: "$220.00 ",
      price: "$120.00",
      img: 'https://m.media-amazon.com/images/I/71u2XOFXAIL._AC_UL320_.jpg',
    },
    {
      name: "Sparx",
      rating: "⭐⭐⭐⭐⭐",
      price: "$20.00",
      img: 'https://m.media-amazon.com/images/I/71pMZv9Gp2L._AC_UL320_.jpg',
    },
    {
      name: "Lee Cooper",
      rating: "⭐⭐⭐⭐⭐",
      previousPrice: "$60.00 ",
      price: "$40.00",
      img: 'https://m.media-amazon.com/images/I/61++1-R25gL._AC_UL320_.jpg',
    },
  ];
  const [show, setShow] = useState(false)
  function display() {
    setShow(!show)
  }
  return (
    <div>
      {/* NAVBAR --------------------------------------------------------------------*/}
      <div className="nav-bar1">
        <div className="nav-bar">
          <h3 className="start">Start Bootstrap</h3>
          <button className="navbtn">Home</button>
          <button className="navbtn">About</button>
          <div className="parent">
            <button className="navbtn" onClick={display} >Shop🔽</button>
            {show && <div className="dropdown">
              <p>All Items</p>
              <hr />
              <p>New Arrivals</p>
              <p>Popular Items</p>
            </div>}
          </div>
        </div>

        <div className="cart">
          🛒 Cart {count}
        </div>
      </div>

      <div className="sub-topic">
        <h1 className="heading">Shop in Style</h1>
        <span>with this home page template</span>
      </div>
      <div className="boxes">
        {prod.map((pro, index) => (
          <Products
            product={pro}
            key={index}
            count={count}
            setCount={setCount}
          />
        ))}
      </div>
    </div>
  );
}

export default App;


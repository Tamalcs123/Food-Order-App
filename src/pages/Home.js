import React from "react";
import food from "../images/food.jpeg";
import "../styles/Home.css";


function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${food})`}}>
    
      <div className="headerContainer">
        <h1>Food Corner</h1>
        <p>INDIAN FOOD AT A CLICK</p>
        <button>Order Now</button>;
        
        
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./Home.css";
import Watch from "./image/Watch.png";
import  {Product}  from "./Product";
export default function Home() {
  
  return (
    <div className="container">
        
        {Product.map((items,index)=>(
            <div className="card">
        <div className="card-image">
          <img src={items.image} alt="Watch" />
        </div>
        <div className="card-content">
          <h2>{items.product_name}</h2>
          <p>
            {items.desc.length > 90 ? items.desc.slice(0, 90)+'...' : items}
          </p>
          <div className="price">${items.price}</div>
        </div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
        ))}
     
    </div>
  );
}

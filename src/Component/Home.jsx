import React from "react";
import "./Home.css";
import Watch from "./image/Watch.png";
import  {Product}  from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart,UpdateCart} from "./Redux/Action";

export default function Home() {
  const cart = useSelector(state=>state.cart)
  const dispatch=useDispatch()

  const HandleCart=(items)=>{
    const existing=cart.find((i)=>i.id==items.id)
    if(existing){
      dispatch(UpdateCart(items.id,existing.quantity+1))
    }else{

      dispatch(AddToCart(items))
    }
  }
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
        <button className="add-to-cart" onClick={()=>HandleCart(items)}>Add to Cart</button>
      </div>
        ))}
     
    </div>
  );
}

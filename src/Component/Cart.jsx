import React from "react";
import logo from "./image/Watch.png";
import "./Cart.css";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { RemoveCart, Incriment, Decriment } from "./Redux/Action";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const add =cart.map((i)=>i.quantity*i.price);
const a=add.reduce((ab,cu)=>ab+cu,0)

console.log(a,'a')
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius veritatis deserunt enim quos qui ipsa vitae earum, saepe amet explicabo illo expedita quidem esse officia? Modi repudiandae odio at.";
  return (
    <div className="container-cart">
      <div className="card1">
        {cart.map((items, index) => (
          <div className="main-cart">
            <div className="inner-cart">
              <div className="sub-cart">
                <div className="cart-image">
                  <img src={items.image} alt="" />
                </div>
                <div className="detail-cart">
                  <h4>{items.product_name}</h4>
                  <p>
                    {items.desc.length > 90 ? desc.slice(0, 90) + "..." : desc}
                  </p>
                  <div className="price">${items.price}</div>
                </div>
              </div>
              <div className="cart-qty">
                <div className="qty-icon">
                  <div className="quantity">
                    <button
                      className="dicrement"
                      onClick={() =>
                        dispatch(Decriment(items.id, items.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <input type="text" value={items.quantity} />
                    <button
                      className="increment"
                      onClick={() =>
                        dispatch(Incriment(items.id, items.quantity + 1))
                      }
                    >
                      +
                    </button>
                  </div>
                  <div className="icon">
                    <IconButton onClick={() => dispatch(RemoveCart(items.id))}>
                      <DeleteOutlineTwoToneIcon />
                    </IconButton>
                  </div>
                </div>
                <div className="total-amt">Total: $ {items.price * items.quantity}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="main-payment">
        <h5>Payment Details</h5>
        <div className="discount">
          <h4>Discount</h4>
          <h4>$100</h4>
        </div>
        <div className="shipping">
          <h4>Shipping</h4>
          <h4>$50</h4>
        </div>
        <div className="divider"></div>
        <div className="total-payment">
          <h3>Total</h3>
          <h3>${a}</h3>
        </div>
        <div className="check-out-button">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import logo from './image/Watch.png'
import './Cart.css'
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
export default function Cart() {
    const desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eius veritatis deserunt enim quos qui ipsa vitae earum, saepe amet explicabo illo expedita quidem esse officia? Modi repudiandae odio at."
  return (
    <div className="container-cart">
        <div className="main-cart">
           <div className="inner-cart">
          <div className='sub-cart'>
          <div className="cart-image">
                <img src={logo} alt="" />
            </div>
           <div className="detail-cart">
           <h4>Nike</h4>
            <p>{desc.length>90?desc.slice(0,90)+"...":desc}</p>
            <div className="price">$4000</div>
           </div>
          </div>
            <div className="cart-qty">
                <div className="quantity">
                    <button className='dicrement'>-</button>
                    <input type="text" value={1} />
                    <button className='increment'>+</button>
                </div>
                <div className='icon'><DeleteOutlineTwoToneIcon /></div>
            </div>
           </div>
        </div>
        <div className="main-payment">
            <h5>Payment Details</h5>
            <div className="discount">
                <h4>Discount</h4>
                <h4>$500</h4>
            </div>
            <div className="shipping">
                <h4>Shipping</h4>
                <h4>$400</h4>
            </div>
            <div className='divider'>
                
            </div>
            <div className="total-payment">
                <h3>Total</h3>
                <h3>$6000</h3>
            </div>
            <div className="check-out-button">
                <button>Checkout</button>
            </div>
        </div>
    </div>
  )
}

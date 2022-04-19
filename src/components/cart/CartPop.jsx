import React from "react"
import { Link } from "react-router-dom"

import CartProduct from "./CartProduct"
function CartPop(props) {
  return (
    <div className='inner-section-drop cart-inner'>
      <div className='cart-inner-section-container'>
        <div>
          <h3>Your Bag</h3>
          <hr />
        </div>
        <div className='single-bag-holder'>
          <CartProduct />
          <CartProduct />
        </div>
        <div className='popupcart-total-container'>
          <hr />
          <div className='total-cart-pop'>
            <h3>Total:</h3>
            <h3>0,000Rs</h3>
          </div>
          <div className='cartpop-btn'>
            <Link to='/yourbag' className='secondaryBtn LinkBtn'>
              View Cart
            </Link>
            <Link className='primaryBtn LinkBtn primBtnLink' to=''>
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPop

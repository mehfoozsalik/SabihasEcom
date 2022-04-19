import React from "react"
import del from "../../assests/icons/deleteIcon.svg"
import image from "../../assests/images/mainImage.jpg"
function CartProduct(props) {
  return (
    <div className='cart-product-container'>
      <img className='cart-product-img' src={image} alt='' />
      <div className='cart-product-text'>
        <h4>product Name here...</h4>
        <div className='flexDiv'>
          <p>XS</p>
          <p className='cart-color'>Black</p>
        </div>
        <div className='flexDiv'>
          <p>x 1</p>
          <h4>0,000Rs</h4>
        </div>
      </div>
      <div className='del-icon-con'>
        <img src={del} alt='' />
      </div>
    </div>
  )
}

export default CartProduct

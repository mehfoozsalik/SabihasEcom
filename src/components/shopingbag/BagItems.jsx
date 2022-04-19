import React from "react"
import imag from "../../assests/images/mainImage.jpg"
import del from "../../assests/icons/deleteIcon.svg"
function BagItems(props) {
  return (
    <div className='single-bag-item'>
      <img src={imag} alt='' />
      <div className='single-details'>
        <h3>Product Name here..</h3>
        <div className='further-bag-single-item'>
          <div className='single-bag-items-detail'>
            <h5>QUANTITY</h5>
            <div className='bag-quantity-span-container'>
              <span className='bag-quantity bag-q-span bag-span-width-qs'>
                9
              </span>
              <div>
                <span className='bag-quantity bag-q-btn'>+</span>
                <span className='bag-quantity bag-q-btn'>-</span>
              </div>
            </div>
          </div>
          <div className='single-bag-items-detail'>
            <h5>SIZE</h5>
            <div className='bag-quantity-span-container'>
              <span className='bag-quantity bag-q-span bag-span-width-qs'>
                XS
              </span>
              <div>
                <span className='bag-quantity bag-q-btn'>+</span>
                <span className='bag-quantity bag-q-btn'>-</span>
              </div>
            </div>
          </div>
          <div className='single-bag-items-detail'>
            <h5>PRICE</h5>
            <span className='bag-quantity bag-q-span bag-span-width-pp'>
              9,999
            </span>
          </div>
        </div>
      </div>
      <div className='del-icon'>
        <img src={del} alt='' />
      </div>
    </div>
  )
}

export default BagItems

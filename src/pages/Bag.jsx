import React from "react"
import InputTexts from "../components/local/InputTexts"

import BagItems from "../components/shopingbag/BagItems"

function Bag(props) {
  return (
    <div className='container'>
      <div className='form'>
        <h1>Your Shopping Bag</h1>
        <div className='bag-list-container'>
          <div className='bag-list-front'>
            <h2 className='subHeading'>Products Detail</h2>
            <div className='bag-list'>
              <BagItems />
              <BagItems />
              <BagItems />
              <BagItems />
              <BagItems />
              <BagItems />
            </div>
          </div>
          <div className='bag-list-detail'>
            <h2 className='subHeading'>Checkout Process</h2>
            <div className='inputTop'>
              <InputTexts
                label='Do you have any Coupon Code?'
                placeholder='Enter your Coupon Code...'
                hFor='couponcode'
                type='text'
              />
            </div>
            <div className='inputTop'>
              <h3>Estimate SHIPPING AND TAXES</h3>
              <div className='inputField'>
                <label htmlFor='cntry'>
                  <h3>Country</h3>
                </label>
                <select name='cntry' id='cntry'>
                  <option value='Pakistan'>Pakistan</option>
                  <option value='Turkey'>Turkey</option>
                  <option value='Omen'>Omen</option>
                  <option value='America'>America</option>
                </select>
              </div>
              <div className='inputField'>
                <label htmlFor='cntry'>
                  <h3>Region Or State</h3>
                </label>
                <select name='cntry' id='cntry'>
                  <option value='Pakistan'>Pakistan</option>
                  <option value='Turkey'>Turkey</option>
                  <option value='Omen'>Omen</option>
                  <option value='America'>America</option>
                </select>
              </div>
              <div className='flexCenter'>
                <h4>No Shipping Charges available</h4>
              </div>
              <div className='flexCenter columCen'>
                <h3>Subtotal: 9,9999</h3>
                <hr />
                <h2>Total: 9,9999</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bag
;<h1>Hello from Bag</h1>

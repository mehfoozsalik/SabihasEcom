import React from "react"
import facebook from "../../assests/socials/facebook.svg"
import instagram from "../../assests/socials/instagram.svg"
import call from "../../assests/icons/call.svg"
import dairy from "../../assests/socials/dairy.svg"

function Ticker(props) {
  return (
    <div className='top'>
      <div className='top-info'>
        <h5>FREE DELIVERY ON ORDERS OVER RS. 1500/= FOR KARACHI ONLY</h5>
      </div>
      <hr />
      <div className='social-links'>
        <div className='social-icons'>
          <img src={facebook} alt='' />
        </div>
        <div className='social-icons'>
          <img src={instagram} alt='' />
        </div>
        <div className='social-icons'>
          <img src={call} alt='' />
        </div>
        <div className='social-icons dairy'>
          <img src={dairy} alt='' />
          <span className='caption-title'>Sabiha's Dairy</span>
        </div>
      </div>
    </div>
  )
}

export default Ticker

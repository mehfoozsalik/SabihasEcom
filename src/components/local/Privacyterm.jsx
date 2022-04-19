import React from "react"
import InboxCheckout from "../footer/inputs/InboxCheckout"
import { Link } from "react-router-dom"

function Privacyterm(props) {
  return (
    <div className='agreed-checkBox'>
      <InboxCheckout />
      <h5>
        I have read and agree to the{" "}
        <Link className='special-Link' to=''>
          Privacy Policy
        </Link>
      </h5>
    </div>
  )
}

export default Privacyterm

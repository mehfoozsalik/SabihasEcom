import React from "react"

function HamburgerIcon({ toggle }) {
  return (
    <div className={`${toggle ? "hamBurger open" : "hamBurger"}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default HamburgerIcon

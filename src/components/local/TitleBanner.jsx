import React from "react"
import filter from "../../assests/icons/filter.svg"
function TitleBanner({ title }) {
  return (
    <div className='category-banner'>
      <div className='filter-icon'>
        <img src={filter} alt='' />
      </div>
      <div className='category-title'>
        <h2>{title && title}</h2>
      </div>
    </div>
  )
}

export default TitleBanner

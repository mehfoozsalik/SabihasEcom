import React from "react"
import "./subsearch.css"

function SubSearch({ search, check, checking }) {
  return (
    <div className='searchBox'>
      <input
        className={`${check ? "searchInput setON" : "searchInput"}`}
        type='text'
        name=''
        placeholder='Search'
      />
      <button
        className={`${check ? "searchButton searchActive" : "searchButton"}`}
        onClick={checking}>
        <svg
          width='14'
          height='14'
          viewBox='0 0 14 14'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            id='search'
            d='M13.8096 12.1039L11.0832 9.37799C10.9602 9.25496 10.7934 9.1866 10.6184 9.1866H10.1726C10.9274 8.22146 11.3758 7.00752 11.3758 5.68694C11.3758 2.54545 8.82994 0 5.68792 0C2.54589 0 0 2.54545 0 5.68694C0 8.82843 2.54589 11.3739 5.68792 11.3739C7.00872 11.3739 8.22287 10.9255 9.18817 10.1709V10.6165C9.18817 10.7915 9.25654 10.9583 9.37959 11.0813L12.106 13.8072C12.363 14.0643 12.7787 14.0643 13.033 13.8072L13.8069 13.0335C14.0639 12.7765 14.0639 12.3609 13.8096 12.1039ZM5.68792 9.1866C3.75457 9.1866 2.18766 7.62269 2.18766 5.68694C2.18766 3.75393 3.75184 2.18729 5.68792 2.18729C7.62126 2.18729 9.18817 3.7512 9.18817 5.68694C9.18817 7.61996 7.624 9.1866 5.68792 9.1866Z'
            fill='#27274D'
          />
        </svg>
      </button>
    </div>
  )
}

export default SubSearch

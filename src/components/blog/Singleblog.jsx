import React from "react"
import { Link } from "react-router-dom"

function Singleblog({ list }) {
  let counter
  const day = list.date.slice(0, 2)
  const month = list.date.slice(3, 5)
  let word = ""
  if (month === 1) {
    word = "jan"
  } else if (month === 2) {
    word = "feb"
  } else if (month === 3) {
    word = "mar"
  } else if (month === 4) {
    word = "apr"
  } else if (month === 5) {
    word = "may"
  } else if (month === 6) {
    word = "jun"
  } else if (month === 7) {
    word = "jul"
  } else if (month === 8) {
    word = "aug"
  } else if (month === 9) {
    word = "sep"
  } else if (month === 10) {
    word = "oct"
  } else if (month === 11) {
    word = "nov"
  } else {
    word = "dec"
  }
  const checkCounter = (id) => {}
  return (
    <div className='single-blog'>
      <div className='single-blog-image'>
        <img src={list.image} alt='' />
        <Link to={`${list.id}`}>
          <button
            onClick={() => {
              checkCounter(list.id)
            }}
            className='secondaryBtn swapInBtn'>
            read more{" "}
            <svg
              width='32'
              height='9'
              viewBox='0 0 32 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M28.1716 0.464562L31.3536 3.64654C31.5488 3.8418 31.5488 4.15839 31.3536 4.35365L28.1716 7.53563C27.9763 7.73089 27.6597 7.73089 27.4645 7.53563C27.2692 7.34037 27.2692 7.02378 27.4645 6.82852L29.7929 4.5001H0V3.5001H29.7929L27.4645 1.17167C27.2692 0.976407 27.2692 0.659824 27.4645 0.464562C27.6597 0.2693 27.9763 0.2693 28.1716 0.464562Z'
                fill='#fefefe'
              />
            </svg>
          </button>
        </Link>
      </div>
      <div className='bottom-tag'>
        <h3 className='article-Name'>{list.name}</h3>
      </div>
      <div className='blog-date'>
        <h4 className='blog-date-four'>{day}</h4>
        <h5 className='blog-date-five'>{word}</h5>
      </div>
    </div>
  )
}

export default Singleblog

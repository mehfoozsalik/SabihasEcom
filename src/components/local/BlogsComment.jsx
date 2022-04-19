import React from "react"

function BlogsComment({ items }) {
  return (
    <div className='blog-coment-section'>
      <div>
        <svg
          width='53'
          height='52'
          viewBox='0 0 53 52'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <ellipse cx='26.3343' cy='26' rx='26.1887' ry='26' fill='#EBEBEB' />
          <path
            d='M26.3341 28.1985C31.8357 28.1985 36.2993 23.7671 36.2993 18.3051C36.2993 12.8432 31.8357 8.41174 26.3341 8.41174C20.8325 8.41174 16.3689 12.8432 16.3689 18.3051C16.3689 23.7671 20.8325 28.1985 26.3341 28.1985ZM35.192 30.397H31.379C29.8427 31.0978 28.1334 31.4963 26.3341 31.4963C24.5348 31.4963 22.8324 31.0978 21.2892 30.397H17.4761C12.5835 30.397 8.61816 34.3338 8.61816 39.1912V40.2904C8.61816 42.1111 10.106 43.5882 11.9399 43.5882H40.7283C42.5621 43.5882 44.05 42.1111 44.05 40.2904V39.1912C44.05 34.3338 40.0847 30.397 35.192 30.397Z'
            fill='#231F20'
            fill-opacity='0.3'
          />
        </svg>
      </div>
      <div className='main-comment-section'>
        <div className='comment-section'>
          <h3>{items.user_name}</h3>
          <h4>{items.date}</h4>
        </div>
        <p>{items.comment}</p>
      </div>
    </div>
  )
}

export default BlogsComment

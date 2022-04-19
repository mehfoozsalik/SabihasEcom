import React from "react"
import Singleblog from "./Singleblog"

function BlogList({ allBlog }) {
  return (
    <div className='blog-list'>
      {allBlog.map((list) => {
        return <Singleblog list={list} />
      })}
    </div>
  )
}

export default BlogList

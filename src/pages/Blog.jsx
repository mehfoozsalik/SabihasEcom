import React from "react"
import BlogList from "../components/blog/BlogList"
import TitleBanner from "../components/local/TitleBanner"
import blogs from "../JSON/blogs.json"

function Blog(props) {
  const { blogImage, allBlog } = blogs
  return (
    <div className='container'>
      <div className='main-cate-banner'>
        <img src={blogImage} alt='' />
      </div>
      <TitleBanner title='Blogs' />
      <BlogList allBlog={allBlog} />
    </div>
  )
}

export default Blog

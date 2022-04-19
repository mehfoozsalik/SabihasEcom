import React from "react"
import { useParams } from "react-router-dom"
import Breadcrumb from "../components/local/Breadcrumb"

import TitleBanner from "../components/local/TitleBanner"
import ProductList from "../components/product/ProductList"
import data from "../JSON/category.json"
import products from "../JSON/products.json"
function Category(props) {
  let { cate, subcate, subsubcate } = useParams()
  let titleCat
  if (cate) {
    titleCat = cate
    if (subcate) {
      titleCat = subcate
      if (subsubcate) {
        titleCat = subsubcate
      }
    }
  }
  const { winter_tale } = products
  const { category } = data
  const currentCat = category.filter((i) => {
    return i.category_name === cate
  })
  return (
    <div className='container'>
      <div className='main-cate-banner'>
        <img src={currentCat[0].thumbs} alt='' />
      </div>
      <Breadcrumb main={cate} sub={subcate} subsub={subsubcate} />
      <TitleBanner title={titleCat} />
      <ProductList products={winter_tale.products} titleCat={titleCat} />
    </div>
  )
}

export default Category

import React from "react"
import QuickViewPopup from "../global/QuickViewPopup"

import SingleProduct from "./SingleProduct"
function ProductList({ products, titleCat }) {
  const [quickView, setQuickView] = React.useState(false)
  const viewPopUpHandler = () => {
    setQuickView(!quickView)
  }
  return (
    <>
      <QuickViewPopup
        quickView={quickView}
        viewPopUpHandler={viewPopUpHandler}
      />
      <div className='products-list'>
        {products.map((product_list) => {
          return (
            <SingleProduct
              list={product_list}
              viewPopUpHandler={viewPopUpHandler}
            />
          )
        })}
      </div>
    </>
  )
}

export default ProductList

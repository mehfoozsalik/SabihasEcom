import React from "react"
import { NavLink } from "react-router-dom"
import data from "../../JSON/category.json"
import SubCategoryPopUp from "../global/SubCategoryPopUp"
function AsideNav() {
  const [subCat, setSubCat] = React.useState()
  const [clist, setCList] = React.useState([])
  const { category } = data
  const catHandler = (id) => {
    const [newdata] = category.filter((item) => {
      return item.Id === id
    })
    if (newdata.sub_category) {
      setSubCat("sub-category-container")
      setCList(newdata)
    } else {
      setSubCat()
    }
  }
  return (
    <div className='aside-container'>
      <nav className='nav-items'>
        <ul className='unorder-aside'>
          {category.map((i) => {
            return (
              <li id={i.Id}>
                <NavLink
                  onMouseEnter={() => {
                    catHandler(i.Id)
                  }}
                  className={({ isActive }) =>
                    isActive ? "active-link" : "nav-link"
                  }
                  to={i.category_name}>
                  {i.category_name}
                </NavLink>
              </li>
            )
          })}
        </ul>

        <div
          className={`sub-category-ON ${subCat}`}
          onMouseLeave={() => {
            setSubCat("sub-category-none")
          }}>
          <div className='sub-relative'>
            <img
              className='sub-cat-image'
              src={clist ? clist.thumbs : " "}
              alt=''
            />
            <h1>{clist.category_name ? clist.category_name : ""}</h1>
          </div>
          <SubCategoryPopUp
            subcategory={clist.sub_category}
            subCateName={clist.category_name}
          />
        </div>
      </nav>
    </div>
  )
}

export default AsideNav

import React from "react"
import { NavLink } from "react-router-dom"

function SubCategoryPopUp({ subcategory, subCateName }) {
  const [addfr, setAddfr] = React.useState("1fr")
  const [openSub, setOpenSub] = React.useState()

  const [subCat, setSubCat] = React.useState([])
  const subClickHandler = (Uid) => {
    const [newdata] = subcategory.filter((items) => {
      return items.id === Uid
    })
    if (newdata.sub_sub_category) {
      setAddfr("1fr 1fr")
      setOpenSub("nav-sub-sub-links")
      setSubCat(newdata)
    } else {
      setAddfr("1fr")
      setOpenSub()
    }
  }
  return (
    <div
      className='nav-sub-links'
      onMouseLeave={() => {
        setOpenSub()
        setAddfr("1fr")
      }}
      style={{ gridTemplateColumns: `${addfr}` }}>
      <ul>
        {subcategory
          ? subcategory.map((i) => {
              return (
                <NavLink
                  to={`${subCateName}/${i.sub_name}`}
                  onMouseEnter={() => {
                    subClickHandler(i.id)
                  }}>
                  <li>{i.sub_name}</li>
                  {i.sub_sub_category && (
                    <span>
                      <svg
                        width='9'
                        height='12'
                        viewBox='0 0 9 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          d='M9 6L-4.89399e-07 11.1962L-3.51373e-08 0.803847L9 6Z'
                          fill='#262525'
                        />
                      </svg>
                    </span>
                  )}
                </NavLink>
              )
            })
          : ""}
      </ul>
      {openSub && (
        <div className={openSub}>
          <ul>
            {subCat.sub_sub_category.map((ss_items) => (
              <NavLink
                to={`${subCateName}/${subCat.sub_name}/${ss_items.sub_name}`}
                id={ss_items.id}>
                <li>{ss_items.sub_name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SubCategoryPopUp

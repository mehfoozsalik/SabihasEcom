import React from "react"
import { Link } from "react-router-dom"
import data from "../../JSON/category.json"

function SlideBar({ handleToggle }) {
  const { category } = data
  const [clist, setCList] = React.useState([])
  const [sclist, setScList] = React.useState([])

  const [subcate, setSubcate] = React.useState("subcateSliderOff")
  const [subsubcate, setSubsubcate] = React.useState("subsubcateSliderOff")
  const handleCHover = (id) => {
    const [newdata] = category.filter((item) => {
      return item.Id === id
    })
    if (newdata.sub_category) {
      setSubcate("slideBar-subCate")
      setCList(newdata)
    } else {
      setSubcate("subcateSliderOff")
    }
  }
  const handleSCHover = (id) => {
    const [newdata] = clist.sub_category.filter((item) => {
      return item.id === id
    })

    if (newdata.sub_sub_category) {
      setSubsubcate("sub-slideBar-subCate")
      setScList(newdata)
    } else {
      setSubsubcate("subsubcateSliderOff")
    }
  }

  return (
    <div className='slide-container'>
      <nav className='slide-nav-items'>
        <ul className='unorder-SideBar'>
          {category.map((i) => {
            return (
              <div
                onMouseLeave={() => {
                  setSubcate("subcateSliderOff")
                }}
                onMouseEnter={() => {
                  handleCHover(i.Id)
                }}
                className='cat-check-hover'>
                <Link to={i.category_name} onClick={handleToggle}>
                  <li className='slide-nav-link' key={i.Id}>
                    {i.category_name}
                    {i.sub_category ? (
                      <svg
                        className='slide-item-svg'
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
                    ) : (
                      " "
                    )}
                  </li>
                </Link>
                {clist.Id === i.Id ? (
                  <div className={subcate}>
                    {clist.sub_category &&
                      clist.sub_category.map((j) => {
                        return (
                          <div className='sub-cat-check-hover'>
                            <Link
                              onClick={handleToggle}
                              to={`/${clist.category_name}/${j.sub_name}`}>
                              <li
                                onMouseEnter={() => {
                                  handleSCHover(j.id)
                                }}
                                className='sub-slide-nav-link'>
                                {j.sub_name}
                                {j.sub_sub_category ? (
                                  <svg
                                    className='sub-slide-item-svg'
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
                                ) : (
                                  " "
                                )}
                              </li>
                            </Link>
                            {sclist.id === j.id ? (
                              <div className={subsubcate}>
                                {sclist.sub_sub_category &&
                                  sclist.sub_sub_category.map((k) => {
                                    return (
                                      <Link
                                        onClick={handleToggle}
                                        key={k.id}
                                        to={`/${clist.category_name}/${sclist.sub_name}/${k.sub_name}`}>
                                        <li className='sub-sub-slide-nav-link'>
                                          {k.sub_name}
                                        </li>
                                      </Link>
                                    )
                                  })}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        )
                      })}
                  </div>
                ) : (
                  " "
                )}
              </div>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default SlideBar

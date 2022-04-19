import React from "react"
import { Link } from "react-router-dom"
import logo from "../../assests/icons/Sabihas.svg"
import Extraicons from "./IconMenu/Extraicons"
import HamburgerIcon from "./IconMenu/HamburgerIcon"
import SlideBar from "./SlideBar"

function Header(props) {
  const [toggle, setToggle] = React.useState(false)
  const [check, setCheck] = React.useState(false)
  const [width, setWidth] = React.useState(window.innerWidth)
  let element = document.body
  const checking = () => {
    setCheck(!check)
  }
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const handleWidthSize = () => {
    setWidth(window.innerWidth)
  }
  React.useEffect(() => {
    if (!toggle) {
      return
    }
    element.style.overflowY = toggle ? "hidden" : "scroll"
    return () => {
      element.style.overflowY = "scroll"
    }
  }, [toggle])
  React.useEffect(() => {
    if (width >= 992) {
      setToggle(false)
    }
    window.addEventListener("resize", handleWidthSize)
    return () => {
      window.removeEventListener("resize", handleWidthSize)
    }
  }, [width])
  return (
    <header className='header-container'>
      <div className='header'>
        <div
          className='slide-ham'
          onClick={() => {
            setToggle(!toggle)
          }}>
          <HamburgerIcon toggle={toggle} />
        </div>
        <div
          className={`${
            check ? "logo-container  logoDisable" : "logo-container"
          }`}>
          <Link to='/'>
            <img src={logo} alt='' />
          </Link>
        </div>
        <Extraicons check={check} checking={checking} />
      </div>
      <div className={`${toggle ? "back-drop" : "back-drop back-drop-off"}`}>
        <SlideBar handleToggle={handleToggle} />
      </div>
    </header>
  )
}

export default Header

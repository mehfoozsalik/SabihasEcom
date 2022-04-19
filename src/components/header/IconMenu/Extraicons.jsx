import React from "react"
import dairy from "../../../assests/socials/dairy.svg"
import search from "../../../assests/icons/search.svg"
import bag from "../../../assests/icons/bag.svg"
import profile from "../../../assests/icons/profile.svg"
import SubSearch from "./SubSearch"
import { Link } from "react-router-dom"
import CartPop from "../../cart/CartPop"
function Extraicons(props) {
  const [profilePop, setProfilePop] = React.useState("drop-down-off")
  const [cartPop, setCartPop] = React.useState("cart-inner-section-off")
  return (
    <div className='icons-holder'>
      <div className='header-icons'>
        <SubSearch search={search} {...props} />
      </div>
      <Link className='header-icons forsmall' to='/sabihasdairy'>
        <div>
          <svg
            width='13'
            height='15'
            viewBox='0 0 13 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              id='dairy'
              d='M13 10.5469V0.703125C13 0.313477 12.6895 0 12.3036 0H2.78571C1.24777 0 0 1.25977 0 2.8125V12.1875C0 13.7402 1.24777 15 2.78571 15H12.3036C12.6895 15 13 14.6865 13 14.2969V13.8281C13 13.6084 12.8984 13.4092 12.7417 13.2803C12.6199 12.8291 12.6199 11.543 12.7417 11.0918C12.8984 10.9658 13 10.7666 13 10.5469ZM3.71429 3.92578C3.71429 3.8291 3.79263 3.75 3.88839 3.75H10.0402C10.1359 3.75 10.2143 3.8291 10.2143 3.92578V4.51172C10.2143 4.6084 10.1359 4.6875 10.0402 4.6875H3.88839C3.79263 4.6875 3.71429 4.6084 3.71429 4.51172V3.92578ZM3.71429 5.80078C3.71429 5.7041 3.79263 5.625 3.88839 5.625H10.0402C10.1359 5.625 10.2143 5.7041 10.2143 5.80078V6.38672C10.2143 6.4834 10.1359 6.5625 10.0402 6.5625H3.88839C3.79263 6.5625 3.71429 6.4834 3.71429 6.38672V5.80078ZM11.0674 13.125H2.78571C2.2721 13.125 1.85714 12.7061 1.85714 12.1875C1.85714 11.6719 2.275 11.25 2.78571 11.25H11.0674C11.0123 11.751 11.0123 12.624 11.0674 13.125Z'
              fill='#27274D'
            />
          </svg>
        </div>
      </Link>
      <div
        className='profile-relative forsmall'
        onMouseEnter={() => {
          setProfilePop("drop-down")
        }}
        onMouseLeave={() => {
          setProfilePop("drop-down-off")
        }}>
        <Link to='/login'>
          <div className='header-icons'>
            <svg
              width='14'
              height='14'
              viewBox='0 0 14 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                id='profile'
                d='M7 7.875C9.17383 7.875 10.9375 6.11133 10.9375 3.9375C10.9375 1.76367 9.17383 0 7 0C4.82617 0 3.0625 1.76367 3.0625 3.9375C3.0625 6.11133 4.82617 7.875 7 7.875ZM10.5 8.75H8.99336C8.38633 9.02891 7.71094 9.1875 7 9.1875C6.28906 9.1875 5.61641 9.02891 5.00664 8.75H3.5C1.5668 8.75 0 10.3168 0 12.25V12.6875C0 13.4121 0.587891 14 1.3125 14H12.6875C13.4121 14 14 13.4121 14 12.6875V12.25C14 10.3168 12.4332 8.75 10.5 8.75Z'
                fill='#27274D'
              />
            </svg>
          </div>
        </Link>
        <div className={profilePop}>
          <div className='tri-upper'></div>
          <div className='drop-down-profile'>
            <div className='inner-section-drop profile-inner'>
              <Link className='sub-down' to='/login'>
                LOGIN
              </Link>
              <hr />
              <Link className='sub-down' to='/register'>
                REGISTRATION
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className='cart-relative'
        onMouseEnter={() => {
          setCartPop("cart-inner-section")
        }}
        onMouseLeave={() => {
          setCartPop("cart-inner-section-off")
        }}>
        <Link to='/yourbag'>
          <div className='header-icons'>
            <div className='adding-bag-counter'>
              <h5>99</h5>
            </div>
            <svg
              width='12'
              height='14'
              viewBox='0 0 12 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                id='bag'
                d='M9.42857 4.375V3.5C9.42857 1.57008 7.89051 0 6 0C4.10946 0 2.57143 1.57008 2.57143 3.5V4.375H0V11.8125C0 13.0206 0.959384 14 2.14286 14H9.85714C11.0406 14 12 13.0206 12 11.8125V4.375H9.42857ZM4.28571 3.5C4.28571 2.53504 5.05473 1.75 6 1.75C6.94527 1.75 7.71429 2.53504 7.71429 3.5V4.375H4.28571V3.5ZM8.57143 6.78125C8.21638 6.78125 7.92857 6.48744 7.92857 6.125C7.92857 5.76256 8.21638 5.46875 8.57143 5.46875C8.92647 5.46875 9.21429 5.76256 9.21429 6.125C9.21429 6.48744 8.92647 6.78125 8.57143 6.78125ZM3.42857 6.78125C3.07353 6.78125 2.78571 6.48744 2.78571 6.125C2.78571 5.76256 3.07353 5.46875 3.42857 5.46875C3.78362 5.46875 4.07143 5.76256 4.07143 6.125C4.07143 6.48744 3.78362 6.78125 3.42857 6.78125Z'
                fill='#27274D'
              />
            </svg>
          </div>
        </Link>
        <div className={cartPop}>
          <div className='tri-cart'></div>
          <CartPop />
        </div>
      </div>
    </div>
  )
}

export default Extraicons

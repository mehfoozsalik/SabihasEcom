import React from "react"
import { Link } from "react-router-dom"
import NewsLetter from "./inputs/NewsLetter"
import Ticker from "../global/Ticker"

function Footer(props) {
  return (
    <footer className='footer-container'>
      <Ticker />
      <div className='footer-mid'>
        <div className='flex first-table'>
          <h3 className='footer-head'>Information</h3>
          <Link className='footer-link' to='aboutus'>
            About Us
          </Link>
          <Link className='footer-link' to='contactus'>
            Contact Us
          </Link>
          <Link className='footer-link' to='trackorder'>
            Track Your Order
          </Link>
          <Link className='footer-link' to='/storelocator'>
            Store Locator
          </Link>
          <Link className='footer-link' to='/sabihasdairy'>
            Sabiha's Dairy
          </Link>
        </div>
        <div className='flex second-table'>
          <h3 className='footer-head'>Help</h3>
          <Link className='footer-link' to=''>
            Privacy Policy
          </Link>
          <Link className='footer-link' to=''>
            Exchange Policy
          </Link>
          <Link className='footer-link' to=''>
            FAQ’s
          </Link>

          <a className='icons-text' href='tel:+05123456789'>
            <svg
              className='footer-svg'
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M4.95 8.1C6 10.2 7.8 11.925 9.9 13.05L11.55 11.4C11.775 11.175 12.075 11.1 12.3 11.25C13.125 11.55 14.025 11.7 15 11.7C15.45 11.7 15.75 12 15.75 12.45V15C15.75 15.45 15.45 15.75 15 15.75C7.95 15.75 2.25 10.05 2.25 3C2.25 2.55 2.625 2.25 3 2.25H5.625C6.075 2.25 6.375 2.55 6.375 3C6.375 3.9 6.525 4.8 6.825 5.7C6.9 5.925 6.825 6.225 6.675 6.45L4.95 8.1ZM10.5 2.25C10.05 2.25 9.75 2.55 9.75 3C9.75 3.45 10.05 3.75 10.5 3.75C10.95 3.75 11.25 3.45 11.25 3C11.25 2.55 10.95 2.25 10.5 2.25ZM12.75 2.25C12.3 2.25 12 2.55 12 3C12 3.45 12.3 3.75 12.75 3.75C13.2 3.75 13.5 3.45 13.5 3C13.5 2.55 13.2 2.25 12.75 2.25ZM15 2.25C14.55 2.25 14.25 2.55 14.25 3C14.25 3.45 14.55 3.75 15 3.75C15.45 3.75 15.75 3.45 15.75 3C15.75 2.55 15.45 2.25 15 2.25ZM10.5 4.5C10.05 4.5 9.75 4.8 9.75 5.25C9.75 5.7 10.05 6 10.5 6C10.95 6 11.25 5.7 11.25 5.25C11.25 4.8 10.95 4.5 10.5 4.5ZM12.75 4.5C12.3 4.5 12 4.8 12 5.25C12 5.7 12.3 6 12.75 6C13.2 6 13.5 5.7 13.5 5.25C13.5 4.8 13.2 4.5 12.75 4.5ZM15 4.5C14.55 4.5 14.25 4.8 14.25 5.25C14.25 5.7 14.55 6 15 6C15.45 6 15.75 5.7 15.75 5.25C15.75 4.8 15.45 4.5 15 4.5ZM10.5 6.75C10.05 6.75 9.75 7.05 9.75 7.5C9.75 7.95 10.05 8.25 10.5 8.25C10.95 8.25 11.25 7.95 11.25 7.5C11.25 7.05 10.95 6.75 10.5 6.75ZM12.75 6.75C12.3 6.75 12 7.05 12 7.5C12 7.95 12.3 8.25 12.75 8.25C13.2 8.25 13.5 7.95 13.5 7.5C13.5 7.05 13.2 6.75 12.75 6.75ZM15 6.75C14.55 6.75 14.25 7.05 14.25 7.5C14.25 7.95 14.55 8.25 15 8.25C15.45 8.25 15.75 7.95 15.75 7.5C15.75 7.05 15.45 6.75 15 6.75Z'
                fill='#27274D'
              />
            </svg>

            <span className='footer-link'>Call us: +05123456789</span>
          </a>

          <a className='icons-text' href='mail:Contact@sabihasbyimtiaz.com'>
            <svg
              className='footer-svg'
              width='18'
              height='17'
              viewBox='0 0 18 17'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M17 12.625V4.375C17 3.61417 16.4092 3 15.6772 3H3.32275C2.59083 3 2 3.61417 2 4.375V12.625C2 13.3858 2.59083 14 3.32275 14H15.6772C16.4092 14 17 13.3858 17 12.625ZM15.8448 4.27417C16.1358 4.57667 15.9771 4.88833 15.8183 5.04417L12.2381 8.45417L15.6772 12.1758C15.7831 12.3042 15.8536 12.5058 15.7302 12.6433C15.6155 12.79 15.351 12.7808 15.2363 12.6892L11.3827 9.27L9.49559 11.0575L7.61728 9.27L3.76367 12.6892C3.64903 12.7808 3.38448 12.79 3.26984 12.6433C3.14638 12.5058 3.21693 12.3042 3.32275 12.1758L6.7619 8.45417L3.18166 5.04417C3.02293 4.88833 2.8642 4.57667 3.1552 4.27417C3.44621 3.97167 3.74603 4.11833 3.99295 4.33833L9.49559 8.95833L15.0071 4.33833C15.254 4.11833 15.5538 3.97167 15.8448 4.27417Z'
                fill='#27274D'
              />
            </svg>

            <span className='footer-link'>Contact@sabihasbyimtiaz.com</span>
          </a>
        </div>
        <div className='flex third-table'>
          <h3 className='footer-head'>Connect with us</h3>
          <NewsLetter />
        </div>
      </div>
      <div className='footer-copyrights'>
        <h5>Copyright © 2021, Sabiha's By Imtiaz, All Rights Reserved</h5>
      </div>
    </footer>
  )
}

export default Footer

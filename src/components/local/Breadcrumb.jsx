import React from "react"
import { Link } from "react-router-dom"

function Breadcrumb({ main, sub, subsub }) {
  return (
    <div className='breadcrumb'>
      <Link to='/'>
        <svg
          className='svgbreadcrumb'
          width='26'
          height='20'
          viewBox='0 0 26 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M12.1695 5.04384L4.16732 11.6345V18.7478C4.16732 18.932 4.24048 19.1086 4.37072 19.2389C4.50095 19.3691 4.67758 19.4423 4.86176 19.4423L9.72548 19.4297C9.90905 19.4288 10.0848 19.3552 10.2143 19.2251C10.3438 19.0949 10.4165 18.9188 10.4164 18.7352V14.5812C10.4164 14.397 10.4896 14.2203 10.6198 14.0901C10.7501 13.9599 10.9267 13.8867 11.1109 13.8867H13.8887C14.0728 13.8867 14.2495 13.9599 14.3797 14.0901C14.51 14.2203 14.5831 14.397 14.5831 14.5812V18.7322C14.5828 18.8236 14.6006 18.9141 14.6354 18.9986C14.6701 19.0831 14.7212 19.1599 14.7857 19.2247C14.8503 19.2894 14.9269 19.3407 15.0113 19.3758C15.0957 19.4108 15.1862 19.4288 15.2776 19.4288L20.1395 19.4423C20.3237 19.4423 20.5004 19.3691 20.6306 19.2389C20.7608 19.1086 20.834 18.932 20.834 18.7478V11.6298L12.8335 5.04384C12.7395 4.96802 12.6223 4.92668 12.5015 4.92668C12.3807 4.92668 12.2635 4.96802 12.1695 5.04384V5.04384ZM24.8097 9.52344L21.1812 6.53255V0.520833C21.1812 0.3827 21.1263 0.250224 21.0287 0.152549C20.931 0.0548735 20.7985 0 20.6604 0H18.2298C18.0917 0 17.9592 0.0548735 17.8615 0.152549C17.7639 0.250224 17.709 0.3827 17.709 0.520833V3.67231L13.8231 0.47526C13.4502 0.168394 12.9823 0.000613431 12.4993 0.000613431C12.0164 0.000613431 11.5485 0.168394 11.1756 0.47526L0.189019 9.52344C0.136279 9.56703 0.0926449 9.62058 0.0606102 9.68104C0.0285755 9.7415 0.00876769 9.80768 0.00231864 9.8758C-0.0041304 9.94392 0.00290567 10.0126 0.0230248 10.078C0.043144 10.1434 0.075952 10.2042 0.119574 10.2569L1.22634 11.6024C1.26985 11.6553 1.32336 11.6991 1.38381 11.7313C1.44426 11.7635 1.51047 11.7835 1.57864 11.79C1.64681 11.7966 1.71561 11.7897 1.7811 11.7696C1.84659 11.7496 1.90748 11.7168 1.96029 11.6732L12.1695 3.26432C12.2635 3.18851 12.3807 3.14717 12.5015 3.14717C12.6223 3.14717 12.7395 3.18851 12.8335 3.26432L23.0432 11.6732C23.0959 11.7168 23.1567 11.7496 23.2221 11.7697C23.2875 11.7898 23.3562 11.7969 23.4243 11.7904C23.4924 11.784 23.5586 11.7642 23.6191 11.7321C23.6795 11.7001 23.7331 11.6565 23.7767 11.6037L24.8835 10.2582C24.927 10.2052 24.9597 10.1441 24.9796 10.0784C24.9995 10.0128 25.0062 9.94379 24.9993 9.8755C24.9925 9.80722 24.9722 9.74096 24.9396 9.68054C24.9071 9.62012 24.8629 9.56673 24.8097 9.52344V9.52344Z'
            fill='black'
          />
        </svg>
      </Link>
      {main ? (
        <h5 className='breadcrumbHeading'>
          <span className='breadspanarrow'>→</span>
          <Link to={`/${main}`}>{main}</Link>
        </h5>
      ) : (
        ""
      )}
      {sub ? (
        <h5 className='breadcrumbHeading'>
          <span className='breadspanarrow'>→</span>
          <Link to={`/${main}/${sub}`}>{sub}</Link>
        </h5>
      ) : (
        ""
      )}
      {subsub ? (
        <h5 className='breadcrumbHeading'>
          <span className='breadspanarrow'>→</span>
          <Link to={`/${main}/${sub}/${subsub}`}>{subsub}</Link>
        </h5>
      ) : (
        ""
      )}
    </div>
  )
}

export default Breadcrumb
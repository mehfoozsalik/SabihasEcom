import React, { useState } from "react"
import arrowUp from "../../assests/icons/arrow-up.svg"
import arrowDown from "../../assests/icons/arrow-down.svg"
import { Navigation, Scrollbar, Thumbs, FreeMode } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

function QuickViewPopup({ quickView, viewPopUpHandler }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  return (
    <div
      className={
        quickView ? "backdrop-popup" : "backdrop-popup backdrop-popupOff"
      }>
      <div
        className={
          quickView ? "popUpContainer" : "popUpContainer popUpContainerOff"
        }>
        <div className='quick-view-header'>
          <h3>Quick View</h3>
          <div onClick={viewPopUpHandler} className='quick-view-cross'>
            <svg
              width='12'
              height='13'
              viewBox='0 0 12 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <g id='cross'>
                <g id='Rectangle 27'>
                  <rect
                    width='15.2826'
                    height='1.27355'
                    rx='0.636777'
                    transform='matrix(0.707105 -0.707109 0.707105 0.707109 0.292969 11.791)'
                    fill='#333333'
                  />
                  <rect
                    width='15.2826'
                    height='1.27355'
                    rx='0.636777'
                    transform='matrix(0.707105 -0.707109 0.707105 0.707109 0.292969 11.791)'
                    fill='#333333'
                  />
                </g>
                <g id='Rectangle 28'>
                  <rect
                    width='15.2826'
                    height='1.27355'
                    rx='0.636777'
                    transform='matrix(0.707105 0.707109 -0.707105 0.707109 0.929688 0.984467)'
                    fill='#333333'
                  />
                  <rect
                    width='15.2826'
                    height='1.27355'
                    rx='0.636777'
                    transform='matrix(0.707105 0.707109 -0.707105 0.707109 0.929688 0.984467)'
                    fill='#333333'
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div className='quick-view-inner-grid'>
          <div className='images-cluster'>
            <div className='quick-main-image'>
              <div className='prev-btn-Carousels'>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M22.8749 21.6125C22.9908 21.4969 23.0827 21.3595 23.1455 21.2083C23.2082 21.0571 23.2405 20.895 23.2405 20.7312C23.2405 20.5675 23.2082 20.4054 23.1455 20.2542C23.0827 20.103 22.9908 19.9656 22.8749 19.85L18.0249 15L22.8749 10.15C22.9907 10.0343 23.0825 9.89688 23.1451 9.74567C23.2077 9.59447 23.2399 9.43241 23.2399 9.26875C23.2399 9.10508 23.2077 8.94302 23.1451 8.79182C23.0825 8.64061 22.9907 8.50322 22.8749 8.3875C22.7592 8.27177 22.6218 8.17997 22.4706 8.11734C22.3194 8.05471 22.1573 8.02247 21.9937 8.02247C21.83 8.02247 21.6679 8.05471 21.5167 8.11734C21.3655 8.17997 21.2281 8.27177 21.1124 8.3875L15.3749 14.125C15.259 14.2406 15.1671 14.378 15.1044 14.5292C15.0417 14.6804 15.0094 14.8425 15.0094 15.0062C15.0094 15.17 15.0417 15.3321 15.1044 15.4833C15.1671 15.6345 15.259 15.7719 15.3749 15.8875L21.0999 21.6125C21.5874 22.1 22.3874 22.1 22.8749 21.6125Z'
                    fill='#1C1C1C'
                  />
                  <path
                    d='M14.6376 21.6125C14.7535 21.4969 14.8454 21.3595 14.9082 21.2083C14.9709 21.0571 15.0032 20.895 15.0032 20.7313C15.0032 20.5675 14.9709 20.4054 14.9082 20.2542C14.8454 20.103 14.7535 19.9656 14.6376 19.85L9.78762 15L14.6376 10.15C14.8713 9.91628 15.0026 9.59929 15.0026 9.26875C15.0026 8.93822 14.8713 8.62122 14.6376 8.3875C14.4039 8.15378 14.0869 8.02248 13.7564 8.02248C13.4258 8.02248 13.1088 8.15378 12.8751 8.3875L7.13762 14.125C7.02174 14.2406 6.9298 14.378 6.86708 14.5292C6.80435 14.6804 6.77206 14.8425 6.77206 15.0063C6.77206 15.17 6.80435 15.3321 6.86708 15.4833C6.9298 15.6345 7.02174 15.7719 7.13762 15.8875L12.8751 21.625C13.3501 22.1 14.1501 22.1 14.6376 21.6125Z'
                    fill='#1C1C1C'
                  />
                </svg>
              </div>
              <Swiper
                className='mainSwiper-quickView'
                navigation={{
                  prevEl: ".prev-btn-Carousels",
                  nextEl: ".next-btn-Carousels",
                }}
                spaceBetween={10}
                modules={[Navigation, Scrollbar, FreeMode, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}>
                <SwiperSlide>
                  <img
                    className='quickView-image'
                    src="https://sabihasbyimtiaz.com/image/cache/catalog/00Sabiha'sUploads/LPR-41011-1-1000x1000h.jpg.webp"
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className='quickView-image'
                    src="https://sabihasbyimtiaz.com/image/cache/catalog/00Sabiha'sUploads/LPR-41011-1-1000x1000h.jpg.webp"
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className='quickView-image'
                    src="https://sabihasbyimtiaz.com/image/cache/catalog/00Sabiha'sUploads/LPR-41011-1-1000x1000h.jpg.webp"
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className='quickView-image'
                    src="https://sabihasbyimtiaz.com/image/cache/catalog/00Sabiha'sUploads/LPR-41011-1-1000x1000h.jpg.webp"
                    alt=''
                  />
                </SwiperSlide>
              </Swiper>
              <div className='next-btn-Carousels'>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M7.12483 8.38751C7.00895 8.50315 6.91702 8.64051 6.85429 8.79173C6.79156 8.94294 6.75928 9.10505 6.75928 9.26876C6.75928 9.43247 6.79156 9.59457 6.85429 9.74579C6.91702 9.897 7.00895 10.0344 7.12483 10.15L11.9748 15L7.12483 19.85C7.0091 19.9657 6.9173 20.1031 6.85467 20.2543C6.79204 20.4055 6.75981 20.5676 6.75981 20.7313C6.75981 20.8949 6.79204 21.057 6.85467 21.2082C6.9173 21.3594 7.0091 21.4968 7.12483 21.6125C7.24056 21.7282 7.37795 21.82 7.52915 21.8827C7.68036 21.9453 7.84242 21.9775 8.00608 21.9775C8.16975 21.9775 8.33181 21.9453 8.48301 21.8827C8.63422 21.82 8.77161 21.7282 8.88733 21.6125L14.6248 15.875C14.7407 15.7594 14.8326 15.622 14.8954 15.4708C14.9581 15.3196 14.9904 15.1575 14.9904 14.9938C14.9904 14.83 14.9581 14.6679 14.8954 14.5167C14.8326 14.3655 14.7407 14.2281 14.6248 14.1125L8.89983 8.38751C8.41233 7.90001 7.61233 7.90001 7.12483 8.38751Z'
                    fill='#1C1C1C'
                  />
                  <path
                    d='M15.3626 8.3875C15.2467 8.50314 15.1548 8.6405 15.0921 8.79172C15.0294 8.94293 14.9971 9.10504 14.9971 9.26875C14.9971 9.43246 15.0294 9.59456 15.0921 9.74578C15.1548 9.89699 15.2467 10.0344 15.3626 10.15L20.2126 15L15.3626 19.85C15.1289 20.0837 14.9976 20.4007 14.9976 20.7312C14.9976 21.0618 15.1289 21.3788 15.3626 21.6125C15.5963 21.8462 15.9133 21.9775 16.2439 21.9775C16.5744 21.9775 16.8914 21.8462 17.1251 21.6125L22.8626 15.875C22.9785 15.7594 23.0704 15.622 23.1332 15.4708C23.1959 15.3196 23.2282 15.1575 23.2282 14.9937C23.2282 14.83 23.1959 14.6679 23.1332 14.5167C23.0704 14.3655 22.9785 14.2281 22.8626 14.1125L17.1251 8.375C16.6501 7.9 15.8501 7.9 15.3626 8.3875Z'
                    fill='#1C1C1C'
                  />
                </svg>
              </div>
            </div>
            <div className='quickView-multi-image'>
              <Swiper
                onSwiper={setThumbsSwiper}
                direction={"vertical"}
                spaceBetween={10}
                slidesPerView={2.2}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className='quickView-multiSlide'>
                <SwiperSlide>
                  <img
                    src="https://sabihasbyimtiaz.com/image/cache/catalog/00Sabiha'sUploads/LPR-41011-1-1000x1000h.jpg.webp"
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://sabihasbyimtiaz.com/image/cache/catalog/00Sabiha'sUploads/LPR-41011-1-1000x1000h.jpg.webp"
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://sabihasbyimtiaz.com/image/cache/catalog/00Sabiha'sUploads/LPR-41011-1-1000x1000h.jpg.webp"
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://sabihasbyimtiaz.com/image/cache/catalog/00Sabiha'sUploads/LPR-41011-1-1000x1000h.jpg.webp"
                    alt=''
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className='information-cluster'>
            <h2>Product name</h2>
            <div>
              <div className='inside-code'>
                <h4>Item Code</h4>
                <h5>LPR-99999</h5>
              </div>
              <div className='inside-code'>
                <h4>Design No</h4>
                <h5>SWPK-99999</h5>
              </div>
            </div>
            <div>
              <h4 className='inside-stock'>
                IN STOCK <span className='inside-quantity'>1</span>
              </h4>
              <div className='inside-avalable-sizes'>
                <h4>Available Sizes</h4>
                <div className='inside-grid'>
                  <div className='inner-boxes'>
                    <h4>XS</h4>
                  </div>
                  <div className='inner-boxes'>
                    <h4>X</h4>
                  </div>
                  <div className='inner-boxes'>
                    <h4>M</h4>
                  </div>
                  <div className='inner-boxes'>
                    <h4>L</h4>
                  </div>
                  <div className='inner-boxes'>
                    <h4>XL</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='inside-flex alignEnd'>
              <h5>
                Add <br /> Quantity
              </h5>
              <div className='inside-flex marginleft'>
                <input type='text' value={0} />
                <div className='inside-arrow-grid'>
                  <img src={arrowUp} alt='' />
                  <img src={arrowDown} alt='' />
                </div>
              </div>
              <div className='inside-flex alignEnd marginleft'>
                <h4>Rs:</h4>
                <h2>99999</h2>
              </div>
            </div>
          </div>
          <div className='quick-view-inner-grid-last-div'>
            <div className='moreinformation'>
              <h4>Description:</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                lorem mi pharetra ultricies. Aliquet nunc in scelerisque in nunc
              </p>
              <div className='linkOverlay'>
                <a href='#'>SEE MORE</a>
              </div>
            </div>
            <div className='inside-flex flexEnd'>
              <button className='quickBag'>
                <svg
                  className='spacingsvg'
                  width='12'
                  height='14'
                  viewBox='0 0 12 14'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    id='bag'
                    d='M9.42857 4.375V3.5C9.42857 1.57008 7.89051 0 6 0C4.10946 0 2.57143 1.57008 2.57143 3.5V4.375H0V11.8125C0 13.0206 0.959384 14 2.14286 14H9.85714C11.0406 14 12 13.0206 12 11.8125V4.375H9.42857ZM4.28571 3.5C4.28571 2.53504 5.05473 1.75 6 1.75C6.94527 1.75 7.71429 2.53504 7.71429 3.5V4.375H4.28571V3.5ZM8.57143 6.78125C8.21638 6.78125 7.92857 6.48744 7.92857 6.125C7.92857 5.76256 8.21638 5.46875 8.57143 5.46875C8.92647 5.46875 9.21429 5.76256 9.21429 6.125C9.21429 6.48744 8.92647 6.78125 8.57143 6.78125ZM3.42857 6.78125C3.07353 6.78125 2.78571 6.48744 2.78571 6.125C2.78571 5.76256 3.07353 5.46875 3.42857 5.46875C3.78362 5.46875 4.07143 5.76256 4.07143 6.125C4.07143 6.48744 3.78362 6.78125 3.42857 6.78125Z'
                    fill='#f8f8f8'
                  />
                </svg>
                ADD TO BAG
              </button>
              <button className='quickBag marginleft'>
                <svg
                  className='spacingsvg'
                  width='17'
                  height='17'
                  viewBox='0 0 17 17'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M16.6882 7.74695L9.25305 0.311777C8.83734 -0.103926 8.16299 -0.103926 7.74695 0.311777L0.311777 7.74695C-0.103926 8.16299 -0.103926 8.83701 0.311777 9.25305L7.74695 16.6882C8.16266 17.1043 8.83701 17.1043 9.25305 16.6882L16.6882 9.25305C17.1039 8.83701 17.1039 8.16299 16.6882 7.74695ZM13.3354 8.16398L10.5393 10.7449C10.3693 10.9019 10.0934 10.7814 10.0934 10.5496V8.76562H6.90592V10.8906C6.90592 11.0374 6.78705 11.1562 6.64029 11.1562H5.57779C5.43104 11.1562 5.31217 11.0374 5.31217 10.8906V8.23438C5.31217 7.64768 5.78797 7.17188 6.37467 7.17188H10.0934V5.38787C10.0934 5.15645 10.369 5.03559 10.5393 5.19264L13.3354 7.77352C13.4493 7.87877 13.4493 8.05873 13.3354 8.16398Z'
                    fill='#FEFEFE'
                  />
                </svg>
                CHECK OUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickViewPopup

import React from "react"
import mainImage from "../assests/images/mainImage.jpg"
import data from "../JSON/category.json"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
function Home(props) {
  const { category, mainbanner } = data
  return (
    <div className='home-container'>
      <div className='main-banner'>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          className='mySwiper'>
          {mainbanner.map((i) => {
            return (
              <SwiperSlide key={i.id}>
                <img
                  loading='lazy'
                  className='main-banner-image'
                  src={i.image}
                  alt='mainImage'
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className='home-category'>
        {category.map((i) => {
          return (
            <div
              key={i.id}
              className='home-cat-image'
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(2, 30, 80, 0.6)), url(${i.thumbs})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}>
              <h1>{i.category_name}</h1>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home

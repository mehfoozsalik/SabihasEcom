import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import App from "./App"
import { ScrollProvider } from "./contexts/ScrollContext"

ReactDOM.render(
  <ScrollProvider>
    <App />
  </ScrollProvider>,
  document.getElementById("root"),
)

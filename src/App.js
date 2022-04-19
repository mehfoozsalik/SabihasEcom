import React, { Suspense, lazy, Fragment } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import AsideNav from "./components/header/AsideNav"
import Header from "./components/header/Header"
import ScrollTop from "./helper/ScrollTop"
import OnlyProduct from "./pages/OnlyProduct"

const Home = lazy(() => import("./pages/Home"))
const Blog = lazy(() => import("./pages/Blog"))
const Category = lazy(() => import("./pages/Category"))
const Login = lazy(() => import("./pages/Login"))
const Register = lazy(() => import("./pages/Register"))
const Bag = lazy(() => import("./pages/Bag"))
const OnlyBlog = lazy(() => import("./pages/OnlyBlog"))
const Aboutus = lazy(() => import("./pages/Aboutus"))
const Contactus = lazy(() => import("./pages/Contactus"))
const TrackOrder = lazy(() => import("./pages/TrackOrder"))
const Storelocator = lazy(() => import("./pages/Storelocator"))

function App() {
  return (
    <Router>
      <ScrollTop />
      <Fragment>
        <div className='application-layout'>
          <Header />
          <AsideNav />
          <Suspense fallback={<h1 className='center'>Loading...</h1>}>
            <Routes>
              <Route path='' element={<Home />} />
              <Route path='article/:productId' element={<OnlyProduct />} />
              <Route path='/sabihasdairy/*' element={<Blog />} />
              <Route path='/sabihasdairy/:blogId' element={<OnlyBlog />} />
              <Route path='/login' element={<Login />} />
              <Route path='/aboutus' element={<Aboutus />} />
              <Route path='/contactus' element={<Contactus />} />
              <Route path='/trackorder' element={<TrackOrder />} />
              <Route path='/storelocator' element={<Storelocator />} />
              <Route path='/register' element={<Register />} />
              <Route path='/yourbag' element={<Bag />} />
              <Route path='/:cate/*' element={<Category />} />
              <Route path='/:cate/:subcate' element={<Category />} />
              <Route
                path='/:cate/:subcate/:subsubcate'
                element={<Category />}
              />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Fragment>
    </Router>
  )
}

export default App

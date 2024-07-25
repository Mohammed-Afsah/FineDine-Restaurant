import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Home from '../Pages/Home/Home'
import Booking from '../Pages/Booking/Booking'
import Dishes from '../Pages/Dishes/Dishes'
import About from '../Pages/About/About'
import PageNotFound from '../Pages/PageNotFound/PageNotFound'
function LayoutR(){
  return (
    <Router>
        <Header/>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/dishes' element={<Dishes/>}></Route>
    <Route path='/services' element={<Booking/>}></Route>
    <Route path='/aboutus' element={<About/>}></Route>
    <Route path='/*' element={<PageNotFound/>}></Route>
    </Routes>
    <Footer/>
    </Router>
  )
}

export default LayoutR
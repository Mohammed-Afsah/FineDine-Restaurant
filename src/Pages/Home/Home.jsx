import React from 'react'
import Welcome from '../Welcome/Welcome'
import Partner from '../Welcome/Partner/Partner'
import Booking from '../Booking/Booking'
import Dishes from '../Dishes/Dishes'
import Am from '../Am/Am'
import Delivery from '../Delivery/Delivery'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <>
    <Welcome/>
    <Partner/>
    <Booking/>
    <Dishes/>
    <Am/>
    <Delivery/>
    
    </>
  )
}

export default Home
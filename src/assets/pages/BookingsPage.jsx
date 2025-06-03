import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingsList from '../components/BookingsList'

const Bookings = () => {
  return (
    <div className='portal-wrapper'>
      <Nav />
      <Header />
      <main className='bookings-wrapper'>
        {/* <h1>Bookings</h1> */}
        <BookingsList />
      </main>
      <Footer />
    </div>
  )
}

export default Bookings
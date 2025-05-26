import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import EventList from '../components/EventList'

const EventPage = () => {
  return (
    <div className='portal-wrapper'>
      <Nav />
      <Header />
      <main>
        <EventList />
      </main>
      <Footer />
    </div>
  )
}

export default EventPage
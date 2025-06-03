import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <div className='portal-wrapper'>
      <Nav />
      <Header />
      <main>
        {/* <h1>Dashboard</h1> */}
        <p>Welcome to your dashboard!</p>
        {/* Add more dashboard components or content here */}
      </main>
      <Footer />
    </div>
  )
}

export default Dashboard
import React from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

const EventDetailsPage = () => {
    const { id } = useParams()

    return (
        <div className='portal-wrapper'>
            <Nav />
            <Header />
            <main>
                <div>{id}</div>
            </main>
            <Footer />
        </div>
    )
}

export default EventDetailsPage
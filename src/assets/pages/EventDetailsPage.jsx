import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

const EventDetailsPage = () => {
    const { id } = useParams()

    const [event, setEvent] = useState([])
        
        const getEvent = async () => {
            try {
                const res = await fetch(`https://ventixe-assignment-slisk-eventservice-hffwabf5hvc7dah7.swedencentral-01.azurewebsites.net/api/Events/${id}`)
                if (res.ok) {
                    const response = await res.json()
                    setEvent(response.result)
                }
                
            } catch (error) {
                console.error('Error fetching events:', error)
            }
        }
        useEffect(() => {
            getEvent()
        }, [])
    
    return (
        <div className='portal-wrapper'>
            <Nav />
            <Header />
            <main className='event-details-wrapper'>
                <div className='event-details'>
                    <div className='event-image'>
                        <img src={event.image} alt={event.title} />
                        <div className='position-right position-bottom'>
                            <Link to={`/events/booking/${id}`} className='btn'>Book Event</Link>
                        </div>
                    </div>
                    <div className='event-info'>
                        <h1>{event.title}</h1>
                        <div className='event-info-details'>
                            <div>
                                <div className='event-info-date'>
                                    <i class="bi bi-calendar4-event"></i>
                                    <p>{new Date(event.eventDate).toLocaleDateString()}</p>
                                    <p>{new Date(event.eventDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }).replace(/am|pm/, match => match.toUpperCase())}</p>
                                </div>
                                <div className='event-info-location'>
                                    <i class="bi bi-geo-alt"></i>
                                    <p>{event.location}</p>
                                </div>
                            </div>
                            <div className='event-info-numbers'>
                                <div>
                                    <div className='event-info-tickets'>
                                        <p>Tickets Sold</p>
                                        <p><span>21,000</span>/30,000</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='event-info-price'>
                                        <p>Starts from</p>
                                        <span className='event-price'>$60</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='divider' />
                        <div className='event-description'>
                            <p>About Event</p>
                            <span>{event.description}</span>
                        </div>
                        
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default EventDetailsPage
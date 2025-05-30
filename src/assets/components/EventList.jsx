import React, { useEffect, useState } from 'react'
import EventItem from './EventItem'

const EventList = () => {
    const [events, setEvents] = useState([])
    
    const getEvents = async () => {
        try {
            const res = await fetch('https://ventixe-assignment-slisk-eventservice-hffwabf5hvc7dah7.swedencentral-01.azurewebsites.net/api/Events')
            if (res.ok) {
                const response = await res.json()
                setEvents(response.result)
            }
            
        } catch (error) {
            console.error('Error fetching events:', error)
        }
    }
    useEffect(() => {
        getEvents()
    }, [])

    return (
        <section id="events" className="event-list">
            {events.length > 0 ? (
                events.map(event => <EventItem key={event.id} item={event} />)
            ) : (
                <p>No events available. Please wait...</p>
            )}
        </section>
    )
}

export default EventList
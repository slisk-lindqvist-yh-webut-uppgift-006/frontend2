import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookingEvent = () => {
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
    <div>
        <h1>Book Event - { event.title }</h1>
        
    </div>
  )
}

export default BookingEvent
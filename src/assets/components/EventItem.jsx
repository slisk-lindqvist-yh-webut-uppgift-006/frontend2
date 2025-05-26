import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({item}) => {
  return (
    <Link to={`/events/${item.id}`} className="event-item">
      <div className='event-card'>
        <div>{item.id}</div>
        <div>{item.image}</div>
        <div>{item.title}</div><br />
        <div>{item.location}</div>
        <div>{item.eventDate}</div><br />
        <div>{item.description}</div>
      </div> 
    </Link>
  )
}

export default EventItem
import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({item}) => {
  return (
    <Link to={`/events/${item.id}`} className="event-item">
      <div className='event-card'>
        <div className="event-card-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="event-card-tag">
          <span>tag</span>
        </div>
        <div className="event-card-title">
          <h1>{item.title}</h1>
        </div>
        <div className="event-card-description">
          <div>{item.description}</div>
        </div>
        <div className="event-card-location">
          <i class="bi bi-geo-alt"></i>
          <div>{item.location}</div>
        </div>
        <div className="event-card-date">
          <i class="bi bi-calendar4-event"></i>
          <p>{new Date(item.eventDate).toLocaleDateString()}</p>
          <p>{new Date(item.eventDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} PM</p>
        </div>
        <div className='event-card-price'>
          <span className='event-price'>$60</span>
        </div>
      </div> 
    </Link>
  )
}

export default EventItem
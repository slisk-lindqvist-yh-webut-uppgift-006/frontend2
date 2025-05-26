import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({item}) => {
  return (
    <Link to={`/portal/events/${item.id}`} className="event-item">
      <div className='event-card'>
        <div>{item.title}</div>
      </div> 
    </Link>
  )
}

export default EventItem
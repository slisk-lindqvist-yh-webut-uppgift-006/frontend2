import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetailsPage = () => {
    const {id} = useParams()

    return (
        <div>{id}</div>
    )
}

export default EventDetailsPage
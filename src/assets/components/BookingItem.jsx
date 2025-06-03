import React from 'react';

const BookingItem = ({ item, eventName, eventDate }) => {
    const { ticketQuantity, owner } = item;
    const { firstName, lastName, email, address } = owner || {};
    const { streetName, postalCode, city, country } = address || {};

    const formattedDate = eventDate
        ? new Date(eventDate).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
        : 'Unknown Date';

    const formattedTime = eventDate
        ? new Date(eventDate)
            .toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
            })
            .replace(/am|pm/, match => match.toUpperCase())
        : 'Unknown Time';

    return (
        <div className="booking-card">
            <div className="booking-header">
                <h2>{firstName} {lastName}</h2>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Address:</strong> {streetName}, {postalCode} {city}, {country}</p>
            </div>

            <div className="booking-details">
                <p><strong>Event:</strong> {eventName}</p>
                <div className="booking-date-time">
                    <p><strong>Date:</strong> {formattedDate}</p>
                    <p><strong>Time:</strong> {formattedTime}</p>
                </div>
                <p><strong>Tickets:</strong> {ticketQuantity}</p>
            </div>
        </div>
    );
};

export default BookingItem;

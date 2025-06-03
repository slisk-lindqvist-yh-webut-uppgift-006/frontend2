import React, { useEffect, useState } from 'react';
import BookingItem from './BookingItem';

const BookingsList = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBookings = async () => {
        const res = await fetch(
            'https://ventixe-assignment-slisk-bookingservice-ddcjbkfbe7hwhecn.swedencentral-01.azurewebsites.net/api/Bookings'
        );
        if (!res.ok) throw new Error('Failed to fetch bookings');
        const json = await res.json();
        return Array.isArray(json) ? json : json.result || [];
    };

    const fetchEventById = async (eventId) => {
        try {
            const res = await fetch(
                `https://ventixe-assignment-slisk-eventservice-hffwabf5hvc7dah7.swedencentral-01.azurewebsites.net/api/Events/${eventId}`
            );
            if (!res.ok) throw new Error('Failed to fetch event');
            const json = await res.json();
            return {
                title: json.result?.title || 'Unknown Event',
                eventDate: json.result?.eventDate || null
            };
        } catch (err) {
            console.error(`Error fetching event ${eventId}:`, err);
            return { title: 'Unknown Event', eventDate: null };
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookingsData = await fetchBookings();

                const bookingsWithEventDetails = await Promise.all(
                    bookingsData.map(async (booking) => {
                        const event = await fetchEventById(booking.eventId);
                        return { ...booking, eventTitle: event.title, eventDate: event.eventDate };
                    })
                );

                setBookings(bookingsWithEventDetails);
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading bookings...</p>;

    return (
        <section className="booking-list">
            {bookings.length > 0 ? (
                bookings.map((booking) => (
                    <BookingItem
                        key={booking.id}
                        item={booking}
                        eventName={booking.eventTitle}
                        eventDate={booking.eventDate}
                    />
                ))
            ) : (
                <p>No bookings found.</p>
            )}
        </section>
    );
};

export default BookingsList;

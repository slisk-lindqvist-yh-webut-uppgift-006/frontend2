// import React, { useEffect, useState } from 'react'
// import EventItem from './EventItem'

// const EventList = () => {
//     const [events, setEvents] = useState([])
    
//     const getEvents = async () => {
//         try {
//             const res = await fetch('https://ventixe-assignment-slisk-eventservice-hffwabf5hvc7dah7.swedencentral-01.azurewebsites.net/api/Events')
//             if (res.ok) {
//                 const response = await res.json()
//                 setEvents(response.result)
//             }
            
//         } catch (error) {
//             console.error('Error fetching events:', error)
//         }
//     }
//     useEffect(() => {
//         getEvents()
//     }, [])

//     return (
//         <section id="events" className="event-list">
//             {events.length > 0 ? (
//                 events.map(event => <EventItem key={event.id} item={event} />)
//             ) : (
//                 <p>No events available. Please wait...</p>
//             )}
//         </section>
//     )
// }

// export default EventList

import React, { useEffect, useState } from 'react'
import EventItem from './EventItem'

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    const getEvents = async () => {
        try {
            const res = await fetch(
                'https://ventixe-assignment-slisk-eventservice-hffwabf5hvc7dah7.swedencentral-01.azurewebsites.net/api/Events'
            );
            if (res.ok) {
                const response = await res.json();
                setEvents(response.result || []);
            } else {
                console.error('Event fetch failed with status:', res.status);
            }
        } catch (error) {
            console.error('Error fetching events:', error);
        } finally {
            setLoading(false); // Always stop loading, even if fetch fails
        }
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <section id="events" className="event-list">
            {loading ? (
                <p>Loading events...</p>
            ) : events.length > 0 ? (
                events.map(event => <EventItem key={event.id} item={event} />)
            ) : (
                <p>No events available.</p>
            )}
        </section>
    );
};

export default EventList;

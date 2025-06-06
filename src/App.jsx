import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './assets/pages/Dashboard';
import EventPage from './assets/pages/EventPage';
import EventDetailsPage from './assets/pages/EventDetailsPage';
import BookingEventPage from './assets/pages/BookingEventPage';
import BookingsPage from './assets/pages/BookingsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/events/booking/:id" element={<BookingEventPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
      </Routes>
    </>
  )
}

export default App;
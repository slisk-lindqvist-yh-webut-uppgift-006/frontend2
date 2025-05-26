import { Route, Routes } from 'react-router-dom';
import './App.css';
import EventPage from './assets/pages/EventPage';
import EventDetailsPage from './assets/pages/EventDetailsPage';
import Dashboard from './assets/pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
      </Routes>
    </>
  )
}

export default App;
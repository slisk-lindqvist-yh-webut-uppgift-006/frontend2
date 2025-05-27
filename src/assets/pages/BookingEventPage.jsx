import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BookingEventPage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [event, setEvent] = useState();
    const [countries, setCountries] = useState([]);
    const [formData, setFormData] = useState({
        eventId: id,
        firstName: '',
        lastName: '',
        email: '',
        streetName: '',
        postalCode: '',
        city: '',
        country: '',
        ticketQuantity: 1,
    });

    const getEvent = async () => {
        try {
            const res = await fetch(`https://ventixe-assignment-slisk-eventservice-hffwabf5hvc7dah7.swedencentral-01.azurewebsites.net/api/Events/${id}`);
            if (!res.ok) throw new Error("Failed to fetch event details");

            const data = await res.json();
            setEvent(data.result);
        } catch (err) {
            console.error(err);
        }
    };

    const postBooking = async () => {
        try {
        const res = await fetch(`https://ventixe-assignment-slisk-bookingservice-hffwabf5hvc7dah7.swedencentral-01.azurewebsites.net/api/Bookings`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(formData),
        });
        
        if (!res.ok) {
            console.error("Booking failed")
        } else {
            console.log("Booking successful");
            navigate('/bookings');
        }
        } catch (err) {
            console.error('Error submitting booking', err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postBooking();        
    };

    useEffect(() => {
        getEvent();
        fetchCountries();
    }, [id]);

    const fetchCountries = async () => {
        try {
            const res = await fetch('/countries.json');
            const data = await res.json();
            setCountries(data);
        } catch (err) {
            console.error('Error loading countries:', err);
        }
    };


    return (
        <div className="portal-wrapper">
        <Nav />
        <Header />
        <main className="event-bookings-wrapper">
            <h1>Book Event - {event ? event.title : 'Loading...'}</h1>
            <div>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                                    onChange={handleChange}
                                    required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="streetName">Street Name</label>
                        <input
                            type="text"
                            name="streetName"
                            placeholder="Enter your street name"
                            value={formData.streetName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="postalCode">Postal Code</label>
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Enter your postal code"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Enter your city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="country">Country</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        >
                            <option value="">-- Select your country --</option>
                            {countries.map(country => (
                                <option key={country.Code} value={country.Name}>
                                    {country.Name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group ticket-quantity">
                        <label htmlFor="ticketQuantity">Ticket Quantity</label>
                        <div className="quantity-controls">
                            <button
                                type="button"
                                className="btn"
                                onClick={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        ticketQuantity: Math.max(1, prev.ticketQuantity - 1),
                                    }))
                                }
                                
                                // CHANGE: Disable button if quantity is 1
                                disabled={formData.ticketQuantity === 1}
                            >
                                –
                            </button>
                            <span className="quantity-value">{formData.ticketQuantity}</span>
                            <button
                                type="button"
                                className="btn"
                                onClick={() =>
                                    setFormData(prev => ({
                                        ...prev,
                                        ticketQuantity: prev.ticketQuantity + 1,
                                    }))
                                }
                                
                                // CHANGE: Disable button if quantity reaches 100
                                disabled={formData.ticketQuantity === 100}
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="btn">
                        Book Event
                    </button>
                </form>
            </div>
        </main>
        <Footer />
    </div>
    );
};

export default BookingEventPage;
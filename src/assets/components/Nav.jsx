import React from 'react';
import { NavLink } from 'react-router-dom';
import VentixeLogo from './VentixeLogo';

const Nav = () => {
  return (
    <nav>
      <VentixeLogo />

      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        <i className="bi bi-grid"></i>
        <span className='strangle'>Dashboard</span>
      </NavLink>
      
      <NavLink to="/bookings" className={({ isActive }) => (isActive ? 'active' : '')}>
        <i className="bi bi-check-square"></i>
        <span className='strangle'>Bookings</span>
      </NavLink>

      <NavLink to="/events" className={({ isActive }) => (isActive ? 'active' : '')}>
        <i className="bi bi-ticket-perforated"></i>
        <span className='strangle'>Events</span>
      </NavLink>
    </nav>
  );
};

export default Nav;
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/dashboard" className="ventixe-logo-link">
        <img src="/ventixe.svg" alt="Ventixe logo" className="ventixe-logo" />
        <p className='strangle'>Ventixe</p>
      </NavLink>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        <i className="bi bi-grid"></i>
        <span className='strangle'>Dashboard</span>
      </NavLink>
      <NavLink to="/events" className={({ isActive }) => (isActive ? 'active' : '')}>
        <i className="bi bi-ticket-perforated"></i>
        <span className='strangle'>Events</span>
      </NavLink>
      
    </nav>
  );
};

export default Nav;
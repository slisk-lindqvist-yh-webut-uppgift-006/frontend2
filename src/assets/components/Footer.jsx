import React from 'react'

const Footer = () => {
  return (
    <footer className='footer-box'>
      <p>Copyright &copy; {new Date().getFullYear()} Peterdraw</p>
      <p className='footer-text-links'>
        <a href="#" target='_blank'>Privacy Policy</a>
        <a href="#" target='_blank'>Terms and Conditions</a>
        <a href="#" target='_blank'>Contact</a>
      </p>
    </footer>
  )
}

export default Footer
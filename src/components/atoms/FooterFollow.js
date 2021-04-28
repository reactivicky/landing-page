import React from 'react'
import { FaFacebookSquare, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const FooterFollow = () => {
  return (
    <div className="Footer__links">
      <p>Follow us on:</p>
      <a href="/"><FaFacebookSquare /></a>
      <a href="/"><FaLinkedin /></a>
      <a href="/"><FaTwitter /></a>
    </div>

  )
}

export default FooterFollow

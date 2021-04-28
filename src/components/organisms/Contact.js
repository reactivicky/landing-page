import React from 'react'
import ContactForm from '../molecules/ContactForm'

export const Contact = () => {
  return (
    <div className="Contact">
      <h2 className="Contact__heading">Convinced to work with us?</h2>
      <p className="Contact__description">Company has helped agencies keep their promises to clients since 2005.</p>
      <ContactForm />
    </div>
  )
}

export default Contact

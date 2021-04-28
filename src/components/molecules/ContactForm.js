import React from 'react'
import SubmitBtn from '../atoms/SubmitBtn'

const ContactForm = () => {
  return (
    <form className="Contact__form">
      <input
        placeholder="Fullname"
        className="Contact__form__name formInput"
        type="text"
      />
      <input
        placeholder="Email Address"
        className="Contact__form__email formInput"
        type="text"
      />
      <input
        placeholder="Phone Number"
        className="Contact__form__phone formInput"
        type="text"
      />
      <textarea
        placeholder="Message in brief"
        className="Contact__form__textarea formInput"
        rows="10"
      />
      <SubmitBtn />

    </form>
  )
}

export default ContactForm

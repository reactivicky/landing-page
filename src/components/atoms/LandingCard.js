import React from 'react'

const LandingCard = ({ location, alt }) => {
  return (
    <div className="Landing__card-container__card">
      <img
        className="Landing__card-container__card__icon"
        src={location}
        alt={alt}
      />
      <p
        className="Landing__card-container__card__body"
      >Service Name</p>
    </div>
  )
}

export default LandingCard

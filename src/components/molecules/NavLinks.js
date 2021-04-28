import React from 'react'
import NavLink from '../atoms/NavLink'
import GetInTouchBtn from '../atoms/GetInTouchBtn'

const NavLinks = () => {
  return (
    <div className="Nav__links__container">
      <ul className="Nav__links">
        <NavLink link='About' active />
        <NavLink link='Services' active={false} />
        <NavLink link='Solutions' active={false} />
        <NavLink link='Blog' active={false} />
      </ul>
      <GetInTouchBtn />
    </div>
  )
}

export default NavLinks

import React from 'react'

export const NavLink = ({ link, active }) => {
  return (
    <li className="Nav__link">
      <a className={`Nav__link__a ${active && 'active'}`} href="/">
        {link}
      </a>
    </li>
  )
}

export default NavLink

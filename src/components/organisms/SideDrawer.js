import React from 'react'
import Logo from '../atoms/Logo'
import Navlinks from '../molecules/NavLinks'
import Backdrop from '../atoms/Backdrop'

const SideDrawer = (props) => {
  let attachedClasses = ['SideDrawer', 'Close']
  if (props.open) {
    attachedClasses = ['SideDrawer', 'Open']
  }
  return (
    <>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <nav>
          <Logo />
          <Navlinks />
        </nav>
      </div>
    </>
  )
}

export default SideDrawer

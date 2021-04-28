import React from "react";
import Logo from '../atoms/Logo'
import NavLinks from '../molecules/NavLinks'
import ToggleButton from '../atoms/ToggleButton'
import { MdChatBubbleOutline } from 'react-icons/md';

const Header = props => {
  return (
    <nav className="Nav">
      <div className="Nav__DesktopOnly">
        <Logo />
        <NavLinks />
      </div>
      <div className="Nav__MobileOnly">
        <ToggleButton clicked={props.clicked} />
        <Logo />
        <MdChatBubbleOutline 
          size={25} 
          className="Nav__MobileOnly__link"
        />
      </div>
    </nav>
  );
};

export default Header;

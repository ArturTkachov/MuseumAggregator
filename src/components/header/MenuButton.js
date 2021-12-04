import React from 'react';
import IconButton from '../IconButton';

import menuIcon from '../../assets/icons/red/menuRed.svg';
import '../css/header/MenuButton.css'

class MenuButton extends React.PureComponent{
  constructor() {
    super();
  }

  render() {
    return(
      <IconButton submit={false}
                  iconClass="menu-button-icon"
                  iconSrc={menuIcon}
      />
    );
  }
}

export default MenuButton;

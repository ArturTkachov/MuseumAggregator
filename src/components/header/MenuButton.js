import React from 'react';
import IconButton from '../IconButton';

import menuIcon from '../../assets/icons/red/menuRed.svg';
import menuWhiteIcon from '../../assets/icons/white/menuWhite.svg'
import '../css/header/MenuButton.css'

class MenuButton extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state= {
      iconClass: "menu-button-icon",
      iconSrc: menuIcon,
    };

    this.handlePointerOver = this.handlePointerOver.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);
  }

  handlePointerOver(){
    this.setState({
      iconClass: "menu-button-icon-hover",
      iconSrc: menuWhiteIcon,
    });
  }

  handlePointerLeave(){
    this.setState({
      iconClass: "menu-button-icon",
      iconSrc: menuIcon,
    });
  }

  render() {
    return(
      <IconButton submit={false}
                  handlePointerOver={this.handlePointerOver}
                  handlePointerLeave={this.handlePointerLeave}
                  iconClass={this.state.iconClass}
                  iconSrc={this.state.iconSrc}
      />
    );
  }
}

export default MenuButton;

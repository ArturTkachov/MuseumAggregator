import React from 'react';

import IconButton from '../IconButton';
import Menu from "./Menu";
import {MenuCloseButton, MenuList} from './MenuContents';

import menuIcon from '../../assets/icons/red/menuRed.svg';
import menuWhiteIcon from '../../assets/icons/white/menuWhite.svg'

import '../css/header/MenuButton.css'

class MenuButton extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state= {
      isOpen: false,
      iconClass: "menu-button-icon",
      iconSrc: menuIcon,
    };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handlePointerOver = this.handlePointerOver.bind(this);
    this.handlePointerLeave = this.handlePointerLeave.bind(this);
  }

  handleOutsideClick(){
    this.setState({
      isOpen: false
    });
  }

  handleClick(){
    this.setState({
      isOpen: !this.state.isOpen
    });
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
    const isOpen = this.state.isOpen;
    return(
      <>
        <IconButton submit={false}
                    handleClick={this.handleClick}
                    handlePointerOver={this.handlePointerOver}
                    handlePointerLeave={this.handlePointerLeave}
                    iconClass={this.state.iconClass}
                    iconSrc={this.state.iconSrc}
        />
        {isOpen &&
        <Menu handleOutsideClick={this.handleOutsideClick}>
          <MenuCloseButton handleClick={this.handleClick}/>
          <MenuList/>
        </Menu>}
      </>
    );
  }
}

export default MenuButton;

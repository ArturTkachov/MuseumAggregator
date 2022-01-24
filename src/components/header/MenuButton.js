import React from 'react';
import IconButton from '../IconButton';
import {ColorName} from '../../types/ColorName';
import iconSrc from '../../assets/icons/red/menuRed.svg';
import Menu from './Menu';
import {MenuCloseButton, MenuList} from './MenuContents';

class MenuButton extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state= {
      isOpen: false
    };

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  render() {
    const isOpen = this.state.isOpen;
    return(
      <>
        <IconButton size="normal" src={iconSrc}
                    hoverIconColor={ColorName.White}
                    hoverBackgroundColor={ColorName.Red}
                    handleClick={this.handleClick}/>

        <Menu isOpen={isOpen} handleOutsideClick={this.handleOutsideClick}>
          <MenuCloseButton handleClick={this.handleClick}/>
          <MenuList/>
        </Menu>
      </>
    );
  }
}

export default MenuButton;

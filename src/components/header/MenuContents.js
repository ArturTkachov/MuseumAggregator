import React from 'react';
import useIconHover from '../../hooks/useIconHover';

import IconButton from '../IconButton';

import closeMenuIcon from '../../assets/icons/white/xWhite.svg';
import closeMenuHover from '../../assets/icons/yellow/xYellow.svg';

import '../css/header/MenuCloseButton.css';

const MenuCloseButton = (props) => {
  const [iconSrc, iconClass, handlePointerOver, handlePointerLeave] =
        useIconHover(closeMenuIcon, "menu-close-icon", closeMenuHover, "menu-close-icon");

  return (
    <div>
      <IconButton submit={false} iconSrc={iconSrc} iconClass={iconClass}
                  handleClick={props.handleClick}
                  handlePointerOver={handlePointerOver}
                  handlePointerLeave={handlePointerLeave}/>
    </div>
  );
};

const MenuItem = (props) => {
  return (<li className="menu-item">{props.children}</li>);
};

const MenuList = (props) => {
  const itemTexts = ["Home", "Collections", "Random", "Favourites", "Attribution"];
  const menuItems = itemTexts.map(
    text => <MenuItem key={text}>{text}</MenuItem>
  );

  return (
    <nav>
      <ul>{menuItems}</ul>
    </nav>
  );
};

export {MenuCloseButton, MenuList};

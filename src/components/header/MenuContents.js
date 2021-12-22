import React from 'react';

import IconButton from '../IconButton';

import '../css/header/MenuCloseButton.css';

const MenuCloseButton = (props) => {
  return (
    <div>
      <IconButton submit={false} className="menu-close-button" handleClick={props.handleClick}/>
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

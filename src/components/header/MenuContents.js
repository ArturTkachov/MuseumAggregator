import React from 'react';
import {Link} from 'react-router-dom';
import IconButton from '../IconButton';

import '../css/header/MenuCloseButton.css';

const MenuCloseButton = (props) => {
  return (
    <IconButton submit={false} className="menu-close-button" handleClick={props.handleClick}/>
  );
};

const MenuItem = (props) => {
  const text = props.text;

  return (
    <li className="menu-item">
      <Link to={`${text.toLowerCase()}`}>{text}</Link>
    </li>);
};

const MenuList = React.memo(() => {
  const itemTexts = ["Home", "Collections", "Random", "Favourites", "Attribution"];
  const menuItems = itemTexts.map(
    text => <MenuItem key={text} text={text}/>
  );

  return (
    <nav>
      <ul>{menuItems}</ul>
    </nav>
  );
});

export {MenuCloseButton, MenuList};

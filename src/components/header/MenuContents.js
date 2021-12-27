import React from 'react';
import {useNavigate} from 'react-router-dom';
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
  const text = props.text;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${text.toLowerCase()}`);
  };

  return (<li className="menu-item" onClick={handleClick}>{text}</li>);
};

const MenuList = () => {
  const itemTexts = ["Home", "Collections", "Random", "Favourites", "Attribution"];
  const menuItems = itemTexts.map(
    text => <MenuItem key={text} text={text}/>
  );

  return (
    <nav>
      <ul>{menuItems}</ul>
    </nav>
  );
};

export {MenuCloseButton, MenuList};

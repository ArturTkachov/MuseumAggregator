import React from 'react';
import {Link} from 'react-router-dom';
import IconButton from '../IconButton';
import {ColorName} from '../../types/ColorName';
import iconSrc from '../../assets/icons/white/xWhite.svg';

const MenuCloseButton = (props) =>
    <IconButton size="normal" src={iconSrc}
                hoverIconColor={ColorName.Yellow}
                handleClick={props.handleClick}/>;

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

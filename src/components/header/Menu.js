import {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';

import "../css/header/Menu.css";

const menuRoot = document.getElementById("menu-root");

const Menu = (props) => {
  const menuRef = useRef(null);
  useEffect(()=>{
    const handleOutsideClick = (e) => {
      if(!e.target.contains(menuRef.current)) props.handleOutsideClick();
    };
    window.addEventListener('click', handleOutsideClick);

    return () => window.removeEventListener('click', handleOutsideClick);
  });

  return ReactDOM.createPortal(
    <div id="menu" ref={menuRef}>
      {props.children}
    </div>,
    menuRoot
  );
};

export default Menu;

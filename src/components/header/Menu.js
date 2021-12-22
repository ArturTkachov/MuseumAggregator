import React, {useRef, useEffect} from 'react';
import ReactDOM from 'react-dom';

import "../css/header/Menu.css";

const menuRoot = document.getElementById("menu-root");

const Menu = (props) => {
  const isOpen = props.isOpen;

  const menuRef = useRef(null);
  useEffect(()=>{
    const handleOutsideClick = (e) => {
      if(isOpen && !menuRef.current.contains(e.target)) props.handleOutsideClick();
    };
    window.addEventListener('click', handleOutsideClick);

    return () => window.removeEventListener('click', handleOutsideClick);
  });

  const isInitialMount = useRef(true);
  useEffect(()=>{
    if(isInitialMount.current){
      isInitialMount.current = false;
    }else{
      const menu = menuRef.current;

      if(isOpen) {
        menu.style.opacity = "1";
        menu.style.transform = "translate(0, 0)";
      }else{
        menu.style.opacity = "0.7";
        menu.style.transform = "translate(100%, 0)";
      }
    }
  },[isOpen]);

  return ReactDOM.createPortal(
    <div id="menu" ref={menuRef}>
      {props.children}
    </div>,
    menuRoot
  );
};

export default Menu;

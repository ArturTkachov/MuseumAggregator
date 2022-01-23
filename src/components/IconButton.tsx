import React from 'react';
import { ColorName } from '../types/ColorName';
import './css/IconButton.css';

interface Props{
  size: "small" | "normal" | "big",
  src: string,
  hoverIconColor?: ColorName,
  hoverBackgroundColor?: ColorName,
  handleClick: () => void;
}

const IconButton = React.memo<Props>((props) => {
  const iconColor = props.hoverIconColor;
  const bgColor = props.hoverBackgroundColor;

  const iconClass = (iconColor) ? `icon-${iconColor}` : "";
  const bgClass = (bgColor) ? `bg-${bgColor}` : "";
  const className = `icon-button ${props.size} ${iconClass} ${bgClass}`;

  return (
    <button className={className}  onClick={props.handleClick}>
      <img src={props.src} alt="icon-button"/>
    </button>
  );
});

export default IconButton;

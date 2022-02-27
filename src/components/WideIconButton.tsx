import React, { FC } from 'react';
import { ColorName } from '../types/ColorName';
import './css/WideIconButton.css';

interface Props {
  src: string;
  backgroundColor: ColorName;
  hoverBackgroundColor: ColorName;
  handleClick: () => void;
}

const WideIconButton: FC<Props> = (props) => (
  <button
    className={`wide-icon-button bg-${props.backgroundColor} bg-hover-${props.hoverBackgroundColor}`}
    onClick={props.handleClick}
  >
    <img src={props.src} alt="icon-button" />
  </button>
);

export default WideIconButton;

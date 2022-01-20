import { FC } from 'react';
import './css/RedButton.css';

interface Props{
  text: string;
  size: "small" | "normal" | "big";
  handleClick: () => void;
}

const RedButton:FC<Props> = (props) => {
  const className = `red-button ${props.size}`;

  return (
    <button className={className} onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

export default RedButton;

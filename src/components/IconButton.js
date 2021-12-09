import React from 'react';
import './css/IconButton.css';

const IconButton = React.memo(
  function (props) {
    return (props.submit) ?
      (
        <button className="icon-button" onPointerOver={props.handlePointerOver}
                type="submit" onPointerLeave={props.handlePointerLeave}>
          <img className={props.iconClass || ""} src={props.iconSrc} alt="submit button"/>
        </button>
      )
      :
      (
        <button className="icon-button" onClick={props.handleClick}
                onPointerOver={props.handlePointerOver} onPointerLeave={props.handlePointerLeave}>
          <img className={props.iconClass || ""} src={props.iconSrc} alt="button"/>
        </button>
      );
  }
);

export default IconButton;

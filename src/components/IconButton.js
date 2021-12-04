import React from 'react';
import './css/IconButton.css';

const IconButton = React.memo(
  function (props) {
    return (props.submit) ?
      (
        <button className="icon-button" type="submit">
          <img className={props.iconClass || ""} src={props.iconSrc} alt="submit button"/>
        </button>
      )
      :
      (
        <button className="icon-button" onClick={props.handleClick}>
          <img className={props.iconClass || ""} src={props.iconSrc} alt="button"/>
        </button>
      );

  }
);

export default IconButton;

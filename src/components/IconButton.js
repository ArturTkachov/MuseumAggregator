import React from 'react';
import './css/IconButton.css';

const IconButton = React.memo((props) => {
    const className = `icon-button ${props.className}`;
    return (props.submit) ?
      (<button className={className} type="submit"/>)
      :
      (<button className={className} onClick={props.handleClick}/>);
  }
);

export default IconButton;

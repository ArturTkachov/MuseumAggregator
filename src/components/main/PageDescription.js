import React from 'react';

import '../css/main/PageDescription.css'

const PageDescription = React.memo( (props) => {
    return (
      <section  id="page-description">
        <h1>{props.heading}</h1>

        <p>{props.children}</p>
      </section>
    );
  }
);

export default PageDescription;

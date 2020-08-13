import React from 'react';

const ButtonLink = (props) => (
  <>
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  </>
);

export default ButtonLink;

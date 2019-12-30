import React from 'react';

const ButtonComponent = ({ tag, children, ...props }) => {
  const Element = `${tag}`;

  return <Element {...props}>{children}</Element>;
};

export default ButtonComponent;

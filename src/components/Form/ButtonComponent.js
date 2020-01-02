import React from 'react';
import PropTypes from 'prop-types';

const ButtonComponent = ({ tag, children, ...props }) => {
  const Element = `${tag}`;

  return <Element {...props}>{children}</Element>;
};

ButtonComponent.propTypes = {
  tag: PropTypes.oneOf(['button', 'a'])
};

ButtonComponent.defaultProps = {
  tag: 'button'
};

export default ButtonComponent;

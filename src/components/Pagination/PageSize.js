import React from 'react';
import PropTypes from 'prop-types';

const PageSize = ({ sizes, setSize }) => {
  return (
    <select onChange={e => setSize(parseInt(e.target.value))}>
      {sizes.map(size => (
        <option key={size}>{size}</option>
      ))}
    </select>
  );
};

PageSize.propTypes = {
  sizes: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  setSize: PropTypes.func.isRequired
};

export default PageSize;

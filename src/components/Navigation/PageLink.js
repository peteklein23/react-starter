import React from 'react';
import PropTypes from 'prop-types';

import './PageLink.css';

const PaginationLink = ({
  setCurrentPage,
  pageNumber,
  isSelected,
  children
}) => {
  const defaultClass = 'page-link';
  const className = isSelected
    ? `${defaultClass} ${defaultClass}--selected`
    : defaultClass;

  return (
    <button className={className} onClick={() => setCurrentPage(pageNumber)}>
      {children}
    </button>
  );
};

PaginationLink.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
  pageNumber: PropTypes.number.isRequired,
  isSelected: PropTypes.bool
};

PaginationLink.defaultProps = {
  isSelected: false
};

export default PaginationLink;

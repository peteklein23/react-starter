import React from 'react';
import PropTypes from 'prop-types';

import PageLink from './PageLink';
import { range } from '../../Utils/arrayUtils';

// TODO: previous and next links

const Pagination = ({
  currentPage,
  rowCount,
  pageSize,
  pageRange,
  setCurrentPage
}) => {
  const pageCount = rowCount / pageSize;
  const visiblePageMin = currentPage - pageRange;
  const visiblePageMax = currentPage + pageRange;
  const visiblePageLinks = range(visiblePageMin, visiblePageMax);

  const shouldRenderFirstLink = !visiblePageLinks.some(
    pageNumber => pageNumber === 1
  );

  const shouldRenderFirstDivider =
    shouldRenderFirstLink &&
    !visiblePageLinks.some(pageNumber => pageNumber === 2);

  const shouldRenderLastLink = !visiblePageLinks.some(
    pageNumber => pageNumber === pageCount
  );

  const shouldRenderLastDivider =
    shouldRenderLastLink &&
    !visiblePageLinks.some(pageNumber => pageNumber === pageCount - 1);

  return (
    <div className="pagination">
      {shouldRenderFirstLink && (
        <PageLink setCurrentPage={setCurrentPage} pageNumber={1}>
          1
        </PageLink>
      )}

      {shouldRenderFirstDivider && (
        <span className="pagination__divider">&hellip;</span>
      )}

      {visiblePageLinks.map(pageNumber => {
        const shouldRender = pageNumber > 0 && pageNumber <= pageCount;

        return (
          shouldRender && (
            <PageLink
              key={pageNumber}
              setCurrentPage={setCurrentPage}
              pageNumber={pageNumber}
              isSelected={currentPage === pageNumber}
            >
              {pageNumber}
            </PageLink>
          )
        );
      })}

      {shouldRenderLastDivider && (
        <span className="pagination__divider">&hellip;</span>
      )}

      {shouldRenderLastLink && (
        <PageLink setCurrentPage={setCurrentPage} pageNumber={pageCount}>
          {pageCount}
        </PageLink>
      )}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  rowCount: PropTypes.number.isRequired,
  pageRange: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default Pagination;

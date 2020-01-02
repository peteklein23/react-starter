import React, { useState, useEffect } from 'react';

import './UserList.css';
import Pagination from '../Pagination/Pagination';
import PageSize from '../Pagination/PageSize';

const pageSizes = [10, 20, 50];

const UserList = () => {
  const defaultPageSize = pageSizes[0];
  const defaultPage = 1;
  const pageRange = 3;

  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [users, setUsers] = useState([]);

  const pageStart = (currentPage - 1) * pageSize;
  const pageEnd = currentPage * pageSize;
  const pagedUsers = users.slice(pageStart, pageEnd);

  useEffect(() => {
    fetch('http://localhost:3000/data/users.json')
      .then(response => response.json())
      .then(users => {
        setUsers(users);
      });
  }, []);

  const changePageSize = size => {
    setPageSize(size);
    setCurrentPage(defaultPage);
  };

  return (
    <div className="user-list">
      {pagedUsers.map(user => (
        <div className="user-list__user" key={user.id}>
          <div className="user-list__column">{user.firstName}</div>
          <div className="user-list__column">{user.lastName}</div>
          <div className="user-list__column">{user.email}</div>
        </div>
      ))}

      <PageSize
        sizes={pageSizes}
        selectedSize={pageSize}
        setSize={changePageSize}
      />

      <Pagination
        currentPage={currentPage}
        pageSize={pageSize}
        rowCount={users.length}
        setCurrentPage={setCurrentPage}
        pageRange={pageRange}
      />
    </div>
  );
};

export default UserList;

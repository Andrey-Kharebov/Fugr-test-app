import { chunk, orderBy } from 'lodash';
import React, { useEffect, useState } from 'react'
import Pagination from '../Pagination/Pagination';
import classes from './DataTableComponent.module.css';

function DataTableComponent({ data, setData, isReady, setActiveEntry }) {
  const maxPageSize = 50;
  
  const [currentPage, setCurrentPage] = useState(0);
  const [currentData, setCurrentData] = useState(null);
  const [sortedColumn, setSortedColumn] = useState(null);
  const [currentSort, setCurrentSort] = useState(null);

  useEffect(() => {
    let currentData = (chunk(data, maxPageSize)[currentPage]);
    setCurrentData(currentData);
  }, [data, currentPage]);

  // console.log(sortBy(data, 'id').reverse());
  const sortRows = (column) => {  
    if (sortedColumn === column && currentSort === 'asc') {
      setData(orderBy(data, column, 'desc'));
      setSortedColumn(column);
      setCurrentSort('desc');
    } else {
      setData(orderBy(data, column, 'asc'));
      setSortedColumn(column);
      setCurrentSort('asc');
    }
  }
  
  if (!isReady) {
    return null;
  }


  return (
    <div className={ classes.tableComponent }>
      <table>
        <thead>
          <tr>
              <th onClick={ () => { sortRows('id') } }>Id <i className="Tiny material-icons">{sortedColumn === 'id' && currentSort === 'asc' ? 'arrow_drop_up' : 'arrow_drop_down'}</i></th>
              <th onClick={ () => { sortRows('firstName') } }>First Name <i className="Tiny material-icons">{sortedColumn === 'firstName' && currentSort === 'asc' ? 'arrow_drop_up' : 'arrow_drop_down'}</i></th>
              <th onClick={ () => { sortRows('lastName') } }>Last Name <i className="Tiny material-icons">{sortedColumn === 'lastName' && currentSort === 'asc' ? 'arrow_drop_up' : 'arrow_drop_down'}</i></th>
              <th onClick={ () => { sortRows('email') } }>Email <i className="Tiny material-icons">{sortedColumn === 'email' && currentSort === 'asc' ? 'arrow_drop_up' : 'arrow_drop_down'}</i></th>
              <th onClick={ () => { sortRows('phone') } }>Phone <i className="Tiny material-icons">{sortedColumn === 'phone' && currentSort === 'asc' ? 'arrow_drop_up' : 'arrow_drop_down'}</i></th>
          </tr>
        </thead>

        <tbody>
          { currentData && currentData.map((item, index) => {
              return (
                <tr key={ `${item.id}${item.id * index}` } onClick={ () => { setActiveEntry(item) }}>
                  <td>{ item.id }</td>
                  <td>{ item.firstName }</td>
                  <td>{ item.lastName }</td>
                  <td>{ item.email }</td>
                  <td>{ item.phone }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      { (data && data.length) > maxPageSize ? <Pagination dataLength={ data.length } maxPageSize={ maxPageSize } setCurrentPage={ setCurrentPage } /> : null }
    </div>
  )
        
}

export default DataTableComponent;
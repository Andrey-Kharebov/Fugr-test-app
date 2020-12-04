import React from 'react';
import classes from './UserCardComponent.module.css';

function UserCardComponent({ activeEntry }) {
  return (
    <>
      { (activeEntry && activeEntry.address) &&
        <div className={ classes.userCard }>
          <p>Выбран пользователь <b>{activeEntry.firstName} {activeEntry.lastName}</b></p>
          <p>Описание: <textarea defaultValue={activeEntry.description}/></p>
          <p>Адрес проживания: <b>{activeEntry.address.streetAddress}</b></p>
          <p>Город: <b>{activeEntry.address.city}</b></p>
          <p>Провинция/штат: <b>{activeEntry.address.state}</b></p>
          <p>Индекс: <b>{activeEntry.address.zip}</b></p>
        </div>     
      }
    </>
  )
}

export default UserCardComponent

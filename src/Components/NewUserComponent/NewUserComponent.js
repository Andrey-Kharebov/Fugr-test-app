import React, { useState } from 'react';
import classes from './NewUserComponent.module.css';
import UserForm from './UserForm/UserForm';

function NewUserComponent({ isReady, data, setData }) {
  const [formMode, setFormMode] = useState(false);
  const [form, setForm] = useState({
    id: '', firstName: '', lastName: '', email: '', phone: ''
  })

  const changeHandler = (event) => {
    if (event.target.name === 'id') {
      setForm({ ...form, [event.target.name]: +event.target.value })
    } else {
      setForm({ ...form, [event.target.name]: event.target.value })
    }
  }

  const handleSubmit = (event) => {
    let newUser = form;
    data.unshift(newUser);
    setData(data => [...data]);
    setFormMode(false);
    clearForm();
    event.preventDefault()
  }

  const clearForm = () => {
    setForm({id: '', firstName: '', lastName: '', email: '', phone: ''})
  }

  if (!isReady) {
    return null;
  }

  return (
    <div className={ classes.newUserComponent} >
      <button 
        className={ !formMode ? "btn red lighten-2" : "btn btn-primary disabled"}
        onClick={ () => { setFormMode(true) } }
      >Create User</button>
      { formMode 
        ? <UserForm 
            form={ form }
            changeHandler={ changeHandler }
            handleSubmit={ handleSubmit } 
          />
        : null }
    </div>
  )
}

export default NewUserComponent;

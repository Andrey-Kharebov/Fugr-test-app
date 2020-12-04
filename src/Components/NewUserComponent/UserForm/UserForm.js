import React from 'react';

const UserForm = ({ form, changeHandler, handleSubmit, }) => {
  return (
    <form onSubmit={ handleSubmit } className="col s12" style={{ marginTop: '15px' }}>
      <div className="row">
        <div className="input-field col s3">
          <input id="id" type="text" name="id" placeholder="Id" onChange={ changeHandler } />
          <label htmlFor="id"></label>
        </div>
        <div className="input-field col s3">
          <input id="firstName" placeholder="First Name" type="text" name="firstName" onChange={ changeHandler } />
          <label htmlFor="first_name"></label>
        </div>
        <div className="input-field col s3">
          <input id="lastName" type="text" placeholder="Last Name" name="lastName" onChange={ changeHandler } />
          <label htmlFor="first_name"></label>
        </div>
        <div className="input-field col s3">
          <input id="email" type="text" name="email" placeholder="Email" onChange={ changeHandler } />
          <label htmlFor="first_name"></label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s3">
          <input id="phone" type="text" name="phone" placeholder="Phone" onChange={ changeHandler } />
          <label htmlFor="first_name"></label>
        </div>
        { (form.id && form.firstName && form.lastName && form.email && form.phone) ? <button className="btn red lighten-2 col s6 right" style={{ marginTop: '15px'}}>Confirm</button> : null }
      </div>
    </form>
  )
}

export default UserForm;
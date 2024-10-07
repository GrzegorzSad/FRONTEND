import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const LoginForm = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    numberOfMonths: 0,
    insurence: false,
    // receiveNewsletter: false,
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type == 'checkbox' ? e.target.checked : e.target.value

    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  };

  const handleSubmit = (event) => {
    // console.log(`Login by user ${form.email}.`);
    console.log('form state on submit', form)
    setMessage(`You have logged in as ${form.username}`)
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <label>
          <input name='receiveNewsletter' type='checkbox' checked={form.receiveNewsletter} onChange={handleChange}/>
        </label> */}
        <div>
          <label>
            Username:
            <input name='username' type="text" value={form.username} onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input name='email' type="text" value={form.email} onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            Number of Months:
            <input name='numberOfMonths' type="number" value={form.numberOfMonths} onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            Insurence:
            <input name='insurence' type="checkbox" value={form.insurence} onChange={handleChange} />
          </label>
        </div>

        <input type="submit" value="Submit" />
      </form >
      {/* {form.receiveNewsletter} */}

      <div>
        <h1>{message}</h1>
      </div>

    </>
  );
}

export default LoginForm;
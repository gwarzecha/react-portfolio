import React, { useState } from 'react';
import { validateEmail } from '../assets/utils/helpers'

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    // uses setFormState to updated the formState value for the name property;
    // assigns the value taken from the input field with e.target.value, assigns
    //this value to the property e.target.name. The [] create dynamic property names.
    //The spread operator is used to 
    //retain the other key-value pairs in the obj; without ... , the formState
    //obj would be overwritten to only contain name: value
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }

  }

  return (
    <section className="container d-flex contactCont justify-content-center" >
      <div className='row'>
        <div className='col-12 p-4'>
          <h1 className='d-flex justify-content-center mainFont'>Get in Touch!</h1>
          <h3 className='d-flex justify-content-center secondaryFont'>480.321.7571</h3>
        </div>
        <form className='col-12 justify-content-center' onSubmit={handleSubmit}>
          <div className='container'>
            <div>
              <label htmlFor="name" className='col-12 secondaryFont'>Name:</label>
              <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
          </div>
          <div className='container'>
            <div>
              <label htmlFor="email" className='col-12 secondaryFont'>Email address:</label>
              <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
          </div>
          <div className='container'>
            <div>
              <label htmlFor="message" className='col-12 secondaryFont'>Message:</label>
              <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
          </div>
          {errorMessage && (
            <div className='container'>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
          <div className='container'>
            <button id='contactBtn' className='glow-on-hover m-2' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );

}

export default ContactForm;
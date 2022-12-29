import React, { useState } from 'react';


import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };
  //test

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
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1 className='contactMe'>Contact Me</h1>
      <form id='contact-form' action="https://formsubmit.co/lovejared91@yahoo.com" method="POST">
      <input className='name' type="text" name="name" placeholder='Enter Name' required></input>
     <input className='email' type="email" name="email" placeholder='Enter Email' required></input>
     <input className='message' type="test" name="message" placeholder='Enter Message' required ></input>
     <button type="submit">Send</button>
</form>
    </section>
  );
}

export default ContactForm;

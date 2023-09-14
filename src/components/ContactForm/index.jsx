import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;


    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  
  
   
  

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="text" name="email" value={email} onChange={handleChange} />

        <label htmlFor="message">Message:</label>
        <input type="text" name="message" value={message} onChange={handleChange} />
      </form>
      

     
      <div>
        <strong>Name:</strong> {name}
      </div>
      <div>
        <strong>Email:</strong> {email}
      </div>
      <div>
        <strong>Message:</strong> {message}
      </div>
    </div>
  );
};

export default Form;

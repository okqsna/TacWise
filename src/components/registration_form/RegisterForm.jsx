import React, { useState } from 'react';
import './RegisterForm.scss';
import { registerUser } from '../../services/userServices.js';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ // initial state for form data
        fname: '',
        lname: '',
        email: '',
        about: '',
        password: ''
  });
  
  const handleChange = (e) => { // function to handle input changes
    e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
  };

  const handleSubmit = (e) => {
        e.preventDefault();
        registerUser(formData)
    }

  return (
    <div className="register-form">
      <h1>Створіть акаунт і хутчіш навчатись!</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ім'я" 
          name='fname'
          value={formData.fname}
          id='fname'
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder="Прізвище" 
          name='lname'
          value={formData.lname}
          id='lname'
          onChange={handleChange}
        />
        <input 
          type="email" 
          placeholder="Електронна пошта" 
          value={formData.email} 
          name='email'
          id='email'
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder="Про вас" 
          name='about'
          value={formData.about}
          id='about'
          onChange={handleChange}
        />
        <input 
          type="password" 
          placeholder="Пароль" 
          value={formData.password} 
          name='password'
          id='password'
          onChange={handleChange}
        />
        <p>Або <a href="/login">увійдіть</a>, якщо вже маєте акаунт.</p>
        <button type="submit">Доєднатись</button>
      </form>
    </div>
  );
};

export default RegisterForm;

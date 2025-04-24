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
  const [inputErrors, setInputErrors] = useState(null);
  
  const handleChange = (e) => { // function to handle input changes
    e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
  };

 
  const handleSubmit = (e) => {
      e.preventDefault();
      const allInputsFilled = Object.values(formData).every(val => val.trim() !== '');
    
      if (!allInputsFilled) {
        setInputErrors('Будь ласка, заповніть усі поля');
        return;
      }

      setInputErrors(null);
      registerUser(formData);
    };
    

  return (
    <div className="registerForm">
      <h1 className='registerForm_cap'>Створіть акаунт і хутчіш навчатись!</h1>
      <form onSubmit={handleSubmit} className='registerForm_form'>
        <input 
          type="text" 
          placeholder="Ім'я" 
          name='fname'
          value={formData.fname}
          id='fname'
          onChange={handleChange}
          className='registerForm_form_input'
        />
        <input 
          type="text" 
          placeholder="Прізвище" 
          name='lname'
          value={formData.lname}
          id='lname'
          className='registerForm_form_input'
          onChange={handleChange}
        />
        <input 
          type="email" 
          placeholder="Електронна пошта" 
          value={formData.email} 
          name='email'
          className='registerForm_form_input'
          id='email'
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder="Про вас" 
          name='about'
          value={formData.about}
          className='registerForm_form_input'
          id='about'
          onChange={handleChange}
        />
        <input 
          type="password" 
          placeholder="Пароль" 
          value={formData.password} 
          className='registerForm_form_input'
          name='password'
          id='password'
          onChange={handleChange}
        />
        <p className='registerForm_form_link'>Або <a href="/login" className='registerForm_form_link_a'>увійдіть</a>, якщо вже маєте акаунт.</p>
        <button type="submit" className='registerForm_form_btn'>Доєднатись</button>
        <p className='registerForm_form_error'>{inputErrors}</p>
      </form>
    </div>
  );
};

export default RegisterForm;

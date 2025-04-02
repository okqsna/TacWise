import React, { useState } from 'react';
import './RegisterForm.scss';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // обробка форми
  };

  return (
    <div className="register-form">
      <h1>Створіть акаунт і хутчіш навчатись!</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ім'я користувача" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Електронна пошта" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Пароль" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Підтвердити пароль" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        />
        <button type="submit">Доєднатись</button>
      </form>
      <p>Або <a href="/login">увійдіть</a>, якщо вже маєте акаунт.</p>
    </div>
  );
};

export default RegisterForm;

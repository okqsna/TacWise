import React from 'react';
import './RegisterForm.scss';
import RegisterForm from '../../components/registartion_form/RegisterForm';

function RegistrationForm() {
  return (
    <div className="App">
      <header>
        <div className="logo">TacWise</div>
        <div className="nav-links">
          <a href="/about">Про нас</a>
          <a href="/login">Увійти</a>
        </div>
      </header>
      <main>
        <RegisterForm />
      </main>
    </div>
  );
}

export default RegistrationForm;

import React from 'react';
import './RegisterPage.scss';
import RegisterForm from '../../components/registration_form/RegisterForm';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function RegistrationForm() {
  return (
    <div className="RegistrationForm">
      <div className="RegistrationForm_Header">
        <Header aboutLink={false}/>
      </div>
      <main>
        <RegisterForm />
      </main>
      <Footer/>
    </div>
  );
}

export default RegistrationForm;

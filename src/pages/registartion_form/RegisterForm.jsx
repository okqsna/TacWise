import React from 'react';
import './RegisterForm.scss';
import RegisterForm from '../../components/registration_form/RegisterForm';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function RegistrationForm() {
  return (
    <div className="App">
      <Header />
      <main>
        <RegisterForm />
      </main>
      <Footer />
    </div>
  );
}

export default RegistrationForm;

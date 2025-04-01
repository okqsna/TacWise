import React from 'react';
import './App.scss';
import RegisterForm from './components/RegisterForm';

function App() {
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

export default App;

import React from 'react';
import './login.scss'

function Login() {
  return (
    <div className="login-container">
      <h1>Увійдіть, і нумо навчатись!</h1>
      <form>
        <label>Електронна пошта</label>
        <input type="email" />
        <label>Пароль</label>
        <input type="password" />
        <a href="#">Або створіть акаунт</a>
        <button>Увійти</button>
      </form>
    </div>
  );
}
export default Login;

// cringe

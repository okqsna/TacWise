import React, {useState} from 'react';
import './login.scss'

import { loginUser } from '../../services/userServices.js'; 

function Login() {
  const [formData, setFormData] = useState({ // initial state for form data
         email: '',
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
       console.log(formData);
         loginUser(formData)
     }
  return (
    <div className="login-container">
      <h1>Увійдіть, і нумо навчатись!</h1>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Електронна пошта</label>
        <input type="email" name='email' id='email'/>
        <label>Пароль</label>
        <input type="password" name='password' id='password'/>
        <a href="/registration">Або створіть акаунт</a>
        <button type='submit'>Увійти</button>
      </form>
    </div>
  );
}
export default Login;

// cringe

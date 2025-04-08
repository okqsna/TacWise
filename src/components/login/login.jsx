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
        <input type="email" placeholder='Електронна пошта' name='email' id='email'/>
        <input type="password" placeholder='Пароль' name='password' id='password'/>
        <a href="/registration">Або створіть акаунт</a>
        <button type='submit'>Увійти</button>
      </form>
    </div>
  );
}
export default Login;

// cringe

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
    <div className="loginContainer">
      <h1 className='loginContainer_cap'>Увійдіть, і нумо навчатись!</h1>
      <form onChange={handleChange} onSubmit={handleSubmit} className='loginContainer_form'>
        <input type="email" placeholder='Електронна пошта' name='email' id='email' className='loginContainer_form_input' />
        <input type="password" placeholder='Пароль' name='password' id='password' className='loginContainer_form_input'/>
        <a href="/registration" className='loginContainer_link'>Або створіть акаунт</a>
        <button type='submit' className='loginContainer_btn'>Увійти</button>
      </form>
    </div>
  );
}
export default Login;


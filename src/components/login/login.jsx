import React, {useState} from 'react';
import './login.scss'

import { loginUser } from '../../services/userServices.js'; 

function Login() {
    const [formData, setFormData] = useState({ // initial state for form data
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);
 
     const handleChange = (e) => { // function to handle input changes
       e.preventDefault();
       setFormData({
         ...formData,
         [e.target.name]: e.target.value
        });
     };
 
     const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await loginUser(formData);
    
        if (response.error) {
          let errorMessage = response.error;

          if (errorMessage === 'User does not exist') {
            errorMessage = 'Користувача не існує 🙉';
          } else if (errorMessage === 'Invalid password') {
            errorMessage = 'Неправильний пароль ⚒️';
          }
        
          setError(errorMessage);
          return;
        }
    
        setError(null);
        console.log('Login success:', response);
      } catch (err) {
        console.error('Login failed:', err);
        setError('Щось пішло не так. Спробуйте ще раз.');
      }
    };
    
  return (
    <div className="loginContainer">
      <h1 className='loginContainer_cap'>Увійдіть, і нумо навчатись!</h1>
      <form onChange={handleChange} onSubmit={handleSubmit} className='loginContainer_form'>
        <input type="email" placeholder='Електронна пошта' name='email' id='email' className='loginContainer_form_input' />
        <input type="password" placeholder='Пароль' name='password' id='password' className='loginContainer_form_input'/>
        <a href="/registration" className='loginContainer_link'>Або створіть акаунт</a>
        <button type='submit' className='loginContainer_btn'>Увійти</button>
        <p className='loginContainer_error'>{error}</p>
      </form>
    </div>
  );
}
export default Login;


import {useNavigate} from 'react-router-dom';
import brand from "../images/logo.png"
import axios from 'axios'
import React, { useState } from 'react';
import validator from 'validator';


export const Login = () => {
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const navigate = useNavigate()

    const handleSubmit = async (event) => {
      /*event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        username: data.get('username'),
        password: data.get('password'),
      });
    

    await axios.post(`http://localhost:9000/login`, {
      username: data.get('username'),
      password: data.get('password')
    })
    .then(function(response){
      if (response == Error) {
        alert(response.data)
      } else { 

        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user_id', response.data.user_id)
        localStorage.setItem('username', response.data.username)
        
        navigate('/dasboard')

      }
    }).catch(function(error){console.log(error)})*/
    navigate('/dashboard')
    };

    const validatePassword = (value) => {
      if (
        validator.isStrongPassword(value, {
          minLength: 8,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
        })
      ) {
        setPasswordErrorMessage('');
      } else {
        setPasswordErrorMessage('Password Tidak Valid');
      }
    };

    const togglePasswordVisibility = (field) => {
      if (field === 'password') {
        setShowPassword(!showPassword);
      } else if (field === 'confirmPassword') {
        setShowConfirmPassword(!showConfirmPassword);
      }
    };  


    return (
      <div className='container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100 back'>
        <div class="container py-5">
          <div class="row d-flex justify-content-center align-items-center ">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="logo d-flex justify-content-center align-items-center">
                <img src={brand} alt="logo-depan" className="brand w-50" />
              </div>
              <div class="cards log text-white mt-3 w-80">
                <div class="cards-body p-4 text-center rounded-5">
                  <form onSubmit={handleSubmit}>
                    <div class="form-outline form-white mb-4 mt-4">
                      <input
                        type="text"
                        name='username'
                        id='username'
                        class="form-control form-control-lg"
                        placeholder='username'
                      />
                    </div>
  



                    <div class="form-outline form-white mb-4">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        id='password'
                        class="form-control form-control-lg"
                        placeholder='Password'
                        onChange={(e) => {
                          validatePassword(e.target.value);
                        }}
                      />

                      <div className="d-flex">
                      <span
                            style={{
                              fontWeight: 'bold',
                              fontSize: '15px',
                              color: 'red',
                              marginLeft: '1px'
                            }}
                          >
                            {passwordErrorMessage}
                      </span>
                      </div>
        
                      <div className="d-flex">
                        <span>
                          <label class="form-check-label"
                          style={{fontSize: '15px'}}>
                            <input
                              type="checkbox"
                              class="form-check-input"
                              checked={showPassword}
                              onClick={() => togglePasswordVisibility('password')}
                            />
                            Show Password
                          </label>
                        </span>
                      </div>
                    </div>
  
                    <button class="btn btn-warning btn-lg px-5 text-white" type="submit">masuk</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Login;
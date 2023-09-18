import {useNavigate} from 'react-router-dom';
import brand from "../images/logo.png"
import axios from 'axios'


export const Login = () => {
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
  }



    return(
      <div className='container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100 back'>
      <div class="container py-5">
        <div class="row d-flex justify-content-center align-items-center ">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="logo d-flex justify-content-center align-items-center">
              <img src={brand} alt="logo-depan" className="brand w-50" />
            </div>
            <div class="cards log text-white mt-3">
              <div class="cards-body p-4 text-center rounded-5">
                <form onSubmit={handleSubmit}>
                  <div class="form-outline form-white mb-4 mt-4">
                    <input
                      type="text"
                      name='username'
                      id='username'
                      class="form-control form-control-lg"
                      placeholder='Username'
                    />
                  </div>
                  <div class="form-outline form-white mb-4">
                    <input
                      type="password"
                      name='password'
                      id='password'
                      class="form-control form-control-lg"
                      placeholder='Password'
                    />
                  </div>
                  <button
                    class="btn btn-warning btn-lg px-5 text-white"
                    type="submit"
                  >
                    Masuk
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Login;
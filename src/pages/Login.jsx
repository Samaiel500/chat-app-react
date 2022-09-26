import React from 'react'

const Login = () => {
  return (
      <div className='form__container'>
          <div className="form__wrapper">
              <span className="logo">Lama Chat</span>
              <span className="title">Register</span>
              <form action="">
                  <input type="email" placeholder='Email'/>
                  <input type="password" placeholder='Password'/>
                  <button>Sign In</button>
              </form>
              <p>You don't have an account? Register</p>
          </div>
    </div>
  )
}

export default Login
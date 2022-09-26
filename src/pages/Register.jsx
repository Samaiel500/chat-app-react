import React from 'react'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
      <div className='form__container'>
          <div className="form__wrapper">
              <span className="logo">Lama Chat</span>
              <span className="title">Register</span>
              <form action="">
                  <input type="text" placeholder='Display name'/>
                  <input type="email" placeholder='Email'/>
                  <input type="password" placeholder='Password'/>
                  <input style={{display: 'none'}} type="file" id='file'/>
                  <label htmlFor="file">
                      <img src={Add} alt="" />
                      <span>Add an avatar</span>
                  </label>
                  <button>Sign Up</button>
              </form>
              <p>You do have an account? Login</p>
          </div>
    </div>
  )
}

export default Register
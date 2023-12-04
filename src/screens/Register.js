import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
const Register = () => {
  window.scrollTo(0,0)
  const submitHandler = (e) => {
    e.preventDefault();
    
  }
  return (
    <>
    <Header/>
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <form className="Login col-md-8 col-lg-4 col-11
      " onSubmit={submitHandler}>
      <input type="text" placeholder='Name'/>
        <input type="text" placeholder='username'/>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Phone number'/>
        <input type="password" placeholder='Password'/>
        <input type="text" placeholder='Address'/>
        <input type="text" placeholder='City'/>

        <button type='submit'>register</button>
        <p>
          <Link to = {'/login'}>I have an account <strong> Login</strong></Link>
        </p>
      </form>
    </div>
    </>
  )
}

export default Register
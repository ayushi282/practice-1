import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'

const Login = () => {
  return (
    <div className='basic'>Login 
        <div>Enter Your Account Login Details.</div>
        <form>
            <input type='username' ></input>
           <div>
           <input type='password' ></input></div> 
           <div>
           <Link  to={'Dashboard'}> <button >Sign in</button></Link>
           </div>
           <div>Don't you have an account?<Link  to={'Register'}>Sign Up</Link></div>
        </form>
    </div>

  )
}

export default Login
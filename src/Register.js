import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='basic'>Register
       <div>Create Your Company Accounts</div> 
       <form>
       <div> <input type='name' title='full name'></input></div>
       <div>  <input type='name' title='user name'></input></div>
       <div> <input type='country' title='full name'></input></div>
       <div> <input type='number' title='mobile number' value={Number}></input></div>
       <div>  <input type='name' title='full name'></input></div>
       <div>  <input type='name' title='full name'></input></div>
       <div> <input type='name' title='full name'></input></div>
       <div>  <a href='/Dashboard'><button>Register</button></a>  </div>
       <div>Have an account?<a href='/'>Sign In here</a> </div>
       </form>
    </div>
  )
}

export default Register
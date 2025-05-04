import React from 'react'
import { AuthLayout } from '../components/AuthLayout'
import { TextInput } from '../components/TextInput'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../components/PrimaryButton'

export const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()  
  }
  return (
    <AuthLayout>
      <div>
        <h1 className="heading">Log in to E-Mart</h1>
        <p className="title">Enter your details below</p>
        <form>
          <TextInput placeholder='Email' type='email'></TextInput>
          <TextInput placeholder='Password' type='password'></TextInput>
          <span><Link style={{color: '#DB4444',fontSize:'12px'}} to='/'>Forgot Password ?</Link></span>
          <PrimaryButton loading={false} onClick={handleSubmit}>Log In</PrimaryButton>
        </form>
        <span>Don't have an account? <Link style={{color: 'black'}} to='/signup'>Sign Up</Link></span>
      </div>
    </AuthLayout>
  )
}

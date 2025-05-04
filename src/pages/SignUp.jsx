import React from 'react'
import { AuthLayout } from '../components/AuthLayout'
import { TextInput } from '../components/TextInput'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../components/PrimaryButton'

export const SignUp = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault()  
  }

  return (
    <AuthLayout>
      <div>
        <h1 className="heading">Create an Account</h1>
        <p className="title">Enter your details below</p>
        <form>
          <TextInput placeholder='Name' type='text'></TextInput>
          <TextInput placeholder='Email' type='email'></TextInput>
          <TextInput placeholder='Password' type='password'></TextInput>
          <PrimaryButton loading={false} onClick={handleSubmit}>Create Account</PrimaryButton>
        </form>
        <span>Already have an account? <Link style={{color: 'black'}} to='/login'>Log In</Link></span>
      </div>
    </AuthLayout>
  )
}

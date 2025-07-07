import React, { useState } from 'react'
import { AuthLayout } from '../components/AuthLayout'
import { TextInput } from '../components/TextInput'
import { Link, useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../components/PrimaryButton'
import { helpers } from '../services/helpers'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/features/user-slice'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({email: '', password: ''})
  const [loader, setLoader] = useState(false)
  const [authError, setAuthError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    let emailError,passwordError = ''
    if(!helpers.validateEmail(email)){
      emailError = 'Invalid email'
    }
    if(!helpers.validatePassword(password)){
      passwordError = 'Password must be at least 8 characters long'
    }
    if(emailError || passwordError){
      setErrors({email: emailError, password: passwordError})
    } else {
      setErrors({email: '', password: ''})
      setLoader(true)
      try {
        const payload = {
          email,
          password
        }
        const response = await axios.post('/api/user/login', payload)
        console.log('Login successful:', response.data.data)
        dispatch(addUser(response.data.data))
        setLoader(false)
        navigate('/')
      } catch (error) {
        setLoader(false)
        console.error(error.response)
        setAuthError(error?.response?.data?.message)
    }
  }
}
  return (
    <AuthLayout>
      <div>
        <h1 className="heading">Log in to E-Mart</h1>
        <p className="title">Enter your details below</p>
        <form>
          <TextInput placeholder='Email' value={email} type='email' onChange={setEmail} required err_msg={errors.email}></TextInput>
          <TextInput placeholder='Password' value={password} type='password' onChange={setPassword} required err_msg={errors.password}></TextInput>
          <span><Link style={{color: '#DB4444',fontSize:'12px'}} to='/'>Forgot Password ?</Link></span>
          <PrimaryButton loading={loader} onClick={handleSubmit}>Log In</PrimaryButton>
          {authError && <div className="text-end text-danger"><small>{authError}</small></div>}
        </form>
        <span>Don't have an account? <Link style={{color: 'black'}} to='/signup'>Sign Up</Link></span>
      </div>
    </AuthLayout>
  )
}

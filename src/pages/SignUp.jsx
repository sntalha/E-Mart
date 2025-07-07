import React, { useState } from 'react'
import { AuthLayout } from '../components/AuthLayout'
import { TextInput } from '../components/TextInput'
import { Link, useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../components/PrimaryButton'
import { helpers } from '../services/helpers'
import { useDispatch } from 'react-redux'
import { addUser } from '../redux/features/user-slice'
import axios from 'axios'

export const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({ name: '', email: '', password: '' })
  const [loader, setLoader] = useState(false)
  const [authError, setAuthError] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    let emailError, passwordError, nameError = ''
    if (!helpers.validateEmail(email)) {
      emailError = 'Invalid email'
    }
    if (!helpers.validatePassword(password)) {
      passwordError = 'Password must be at least 8 characters long'
    }
    if (!helpers.validateName(name)) {
      nameError = 'Name must be at least 2 characters long'
    }
    if (emailError || passwordError || nameError) {
      setErrors({ email: emailError, password: passwordError, name: nameError })
    } else {
      setErrors({ email: '', password: '', name: '' })
      setLoader(true)
      try {
        const payload = {
          name,
          email,
          password
        }
        const response = await axios.post('/api/user/signup', payload)
        console.log('Signup successful:', response.data.data)
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
        <h1 className="heading">Create an Account</h1>
        <p className="title">Enter your details below</p>
        <form>
          <TextInput value={name} onChange={setName} placeholder='Name' type='text' required err_msg={errors.name}></TextInput>
          <TextInput value={email} onChange={setEmail} placeholder='Email' type='email' required err_msg={errors.email}></TextInput>
          <TextInput value={password} onChange={setPassword} placeholder='Password' type='password' required err_msg={errors.password}></TextInput>
          <PrimaryButton loading={loader} onClick={handleSubmit}>Create Account</PrimaryButton>
          {authError && <div className="text-end text-danger"><small>{authError}</small></div>}
        </form>
        <span>Already have an account? <Link style={{ color: 'black' }} to='/login'>Log In</Link></span>
      </div>
    </AuthLayout>
  )
}

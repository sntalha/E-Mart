import React from 'react'
import { HashLoader } from 'react-spinners'

export const Loader = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <HashLoader size={80} color='#DB4444' />
    </div>
  )
}

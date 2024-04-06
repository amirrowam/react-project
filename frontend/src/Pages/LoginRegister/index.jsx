import React, { useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function LoginRegister() {
  const [pageType, setPageType] = useState('Login')
  const handlePage = () => {
    setPageType(pageType === 'Login' ? 'Register' : 'Login')
  }
  return (
    <>
      {pageType === 'Login' ? <Login handlePage={handlePage} /> : <Register handlePage={handlePage}/>}
    </>
  )
}

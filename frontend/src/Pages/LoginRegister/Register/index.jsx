import React from 'react'
import { Link } from 'react-router-dom'
import useFormFields from '../../../Utils/useFormFields'
import fetchApi from '../../../Utils/fetchApi'
import axios from 'axios'

export default function Register({ handlePage }) {
  const [fields, handleChange] = useFormFields()
  const handleSubmit = (e) => {
    e.preventDefault()
      axios.post('http://localhost:1337/api/auth/local/register',fields)
      .then(response=>{
        alert('login successfully')
        handleChangePageType()
      })
      .catch(err=>{
        alert(err.response.data.error.message)
      })
  };

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
              <div className="mt-2">
                <input onChange={handleChange} id="username" name="username" type="text" required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
              </div>
              <div className="mt-2">
                <input onChange={handleChange} id="email" name="email" type="email" required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input onChange={handleChange} id="password" name="password" type="password" required className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            Are you a member?
            <button onClick={handlePage} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign in</button>
          </p>
        </div>
      </div>
    </>
  )
}

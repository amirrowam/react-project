import React from 'react'
import { Link } from 'react-router-dom'
import useFormFields from '../../../Utils/useFormFields'
import login from '../../../Store/Slices/Auth'
import { useDispatch } from 'react-redux';

export default function Login({ handlePage }) {
    const [fields, handleChange] = useFormFields()
    const dispatch=useDispatch()
    const handleSubmit = (e) => {
  e.preventDefault();
  fetch('http://localhost:1337/api/auth/local/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: fields.username,
      email: fields.email,
      password: fields.password
    })
  })
 .then(res => res.json())
 .then(data => {
    console.log(data);
    dispatch(login({
      user: data.user,
      token: data.jwt
    }));
  })
 .catch(error => {
    console.log(error)
  });
};
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6" action="#"  method="POST">
                        <div>
                            <label htmlFor="Username or Email" className="block text-sm font-medium leading-6 text-gray-900">User Name</label>
                            <div className="mt-2">
                                <input onChange={handleChange} id="Username or Email" name="Username or Email" type="text" className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            </div>
                            <div className="mt-2">
                                <input onChange={handleChange} id="password" name="password" type="password" className="pl-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <button onClick={handlePage} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign up</button>
                    </p>
                </div>
            </div>

        </>
    )
}

import React, { useState } from 'react'
import { useAppContext } from 'AppContext'

import { useHistory } from 'react-router-dom';

const Login = () => {
  const [errorMessage, setErrorMesssage] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();

  const { setUserData } = useAppContext()

  const validateEmail = (elementValue) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const valid = validateEmail(email);
    if (!valid) {
      setErrorMesssage('Please insert a valid email')
      return
    }

    const username = email.split('@')[0]
    setUserData({ username, email })
    history.push('/map')
  }

  return (
    <div className="flex justify-center">
      <div className="lg:w-1/2">
        <div className="py-12 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div className="cursor-pointer flex items-center">
            <div>
            </div>
            <div className="text-2xl text-indigo-800 tracking-wide ml-2 font-semibold">Democraffic</div>
          </div>
        </div>
        <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2 className="text-center text-4xl text-indigo-900 font-display font-semibold lg:text-left xl:text-5xl xl:text-bold">Log in to make <strong>Munich transport better.</strong></h2>
          <div className="mt-12">
            <form>
              <div>
                <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                <input className="w-full text-lg py-2 border-b  text-gray-800 border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="mike@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <div className="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  <div>
                    <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer">
                      Forgot Password?
                  </a>
                  </div>
                </div>
                <input className="w-full text-lg py-2 text-gray-800 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="password" placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)} />
              </div>


              <p className="text-red-500 text-center mt-4">{errorMessage}</p>

              <div className="mt-10">
                <button className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"

                  onClick={onSubmit}>
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account ? <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

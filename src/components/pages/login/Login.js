import React, { useState } from 'react';
import loginImg from '../../../img/login.png'
import useAuth from '../../../hooks/useAuth'
import { Link, useLocation, useHistory } from 'react-router-dom'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { signInWithGoogle, userSignIn, isLoading, user, authError } = useAuth()
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    // google sign-in
    const handleGoogleLogin = () => {
        signInWithGoogle(history, redirect_uri);
    }

    const handleOnChange = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    const handleLoginSubmi = e => {
        userSignIn(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    return (
        <div className="container mx-auto">
            <div className='grid grid-cols-2 bg-b   lue-50'>
                <div>
                    <div>
                        <h2 className="text-green-500 text-5xl text-center font-bold mt-10">{"< Login >"}</h2>
                        <form className='flex flex-col' onSubmit={handleLoginSubmi}>
                            <label className='text-left mt-8 inline-block text-xl text-lightBlue'>Email</label>
                            <input
                                className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                                type="email"
                                name='email'
                                onChange={handleOnChange}
                                placeholder="Enter Your Email"
                            />
                            <label className='text-left mt-8 inline-block text-xl text-lightBlue'>Password</label>
                            <input
                                className='rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600'
                                type="password"
                                name='password'
                                onChange={handleOnChange}
                                placeholder="Enter Your Password"
                            />
                            <button className="h-10 my-3 items-center justify-center rounded-md bg-green-500 text-white" type='submit' >Login</button>

                            {user?.email && <h2>Login Successfully...</h2>}

                            {authError && <h2>{authError}</h2>}
                        </form>
                    </div>
                    <div className='flex flex-col'>
                        <button className="h-10 my-3 items-center justify-center rounded-md text-grey-600 hover:bg-green-500 hover:text-white">
                            <Link to='/registration'> NEW USER? Please Register</Link>
                        </button>
                        <p className='mx-auto'>-------------------- OR  --------------------</p>
                        <button onClick={handleGoogleLogin} className="h-10 my-3 items-center justify-center rounded-md bg-green-500 text-white">
                            Login with Google
                        </button>



                    </div>
                </div>
                <div className="p-5">
                    <img src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
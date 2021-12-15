import React, { useState} from 'react';
import login from '../../../img/login.png'
import { NavLink, useHistory, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import useAuth from '../../../hooks/useAuth'

const Register = () => {
    const [ loginData, setLoginData ] = useState({})
    const history = useHistory()
    const { user, userRegistration, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
    }

    const onSubmit = e => {
        if ( loginData.password !== loginData.password2) {
            alert('Your Password did not match')
            return
        }
        userRegistration(loginData.email, loginData.password, loginData.name, history)
        
        e.preventDefault();
    }



    return (
        <div className="container mx-auto my-11">
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                <form 
                            className="flex flex-col"
                            onSubmit={onSubmit}
                        >
                                    <h2 className="text-green-500 text-5xl text-center font-bold my-5">{"< Registration >"}</h2> 
                        <label className='text-left mt-8 inline-block text-xl text-lightBlue'>
                            Your Name
                        </label>
                        <input 
                            className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            type="text"
                            name="name"
                            placeholder="Enter Your Full Name"
                            onBlur={handleOnBlur}
                         />
                        <label className='text-left mt-8 inline-block text-xl text-lightBlue'>
                            Your Email
                        </label>
                        <input 
                            className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            type="email" 
                            name="email"
                            placeholder="Enter Your Email"
                            onBlur={handleOnBlur}
                        />
                        <label className='text-left mt-8 inline-block text-xl text-lightBlue'>
                            Password
                        </label>
                        <input 
                            className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            type="password" 
                            name="password"
                            placeholder="Enter Your Most Secure Pass Ever"
                            onBlur={handleOnBlur}    
                        />
                        <label className='text-left mt-8 inline-block text-xl text-lightBlue'>
                            Confirm Password
                        </label>
                        <input 
                            className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            type="password" 
                            name="password2"
                            placeholder="Are you sure it's a most secure pass ?"
                            onBlur={handleOnBlur} 
                        />
                        <button className="h-10 my-5 items-center justify-center rounded-md bg-green-500 text-white"  type="submit">Registration</button>

                        <p className='mx-auto'>-------------------- OR  --------------------</p>

                        <button className="h-10 my-3 items-center justify-center rounded-md text-grey-600 hover:bg-green-500 hover:text-white">
                            <Link to='/login'> ALREADY USER? Please Login</Link>
                        </button>
                        </form>
                    {authError && <h2 className='text-2xl'>{authError}</h2>}
                </div>
                <div className="p-5">
                    <img src={login} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [ email, setEmail ] = useState('')
    const [ success, setSuccess ] = useState(false)

    const handleOnChange = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/users/makeadmin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setEmail('')
                    setSuccess(true)
                }
            })
        e.preventDefault()
    }

    return (
        <div className="container mx-auto">
            <h2 className="text-green-500 text-5xl text-center font-bold mt-10">{"< Make Admin >"}</h2>
            <form onSubmit={handleAdminSubmit}>
                <label className='text-left mt-8 inline-block text-xl text-lightBlue'>Email</label>
                <input
                    className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                    type="email"
                    name='email'
                    onChange={handleOnChange}
                    placeholder="Enter Your Email"
                />
                <button className="h-10 my-3 items-center justify-center rounded-md bg-green-500 text-white" type='submit' >Make Admin</button>
            </form>
            {
                success && alert("Make Admin Successful - check it out!")
            }
        </div>
    );
};

export default MakeAdmin;
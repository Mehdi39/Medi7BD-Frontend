import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'
import useAuth from '../../../hooks/useAuth'

const Review = () => {
    // initial values
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    console.log(user)

    // saving review to database
    const onSubmit = (data) => {
        axios.post('https://floating-peak-99575.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data Added Successfully')
                    reset()
                }
            })
    };

    return (
        <>
            <div className="container mx-auto bg-blue-50 py-5">
                <div className="my-container py-20">
                    <form
                        className="lg:-mt-24 w-full md:w-1/2 lg:w-1/3 mx-auto flex flex-col  justify-center space-y-2"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <h2 className="text-green-500 text-5xl text-center font-bold my-5">{"< Review >"}</h2>
                        <label
                            className="text-left mt-8 inline-block text-xl text-lightBlue"
                            htmlFor="title"
                        >
                            User Name
                        </label>
                        <input
                            id="userName"
                            type="text"
                            className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            defaultValue={user.displayName}
                            {...register("userName")}
                            readOnly
                        />

                        <label
                            className="text-left mt-8 inline-block text-xl text-lightBlue"
                            htmlFor="img"
                        >
                            Profile Image
                        </label>
                        <input
                            id="img"
                            type="text"
                            className="rounded-full w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            defaultValue={user.photoURL}
                            {...register("img")}
                            readOnly
                        />
                        <label
                            className="text-left mt-8 inline-block text-xl text-lightBlue"
                            htmlFor="description"
                        >
                            Review Details
                        </label>
                        <textarea
                            id="description"
                            className="rounded-lg w-full px-4 py-1 border-2 border-blue-400 focus:outline-none focus:border-blue-600"
                            defaultValue="Medi7BD is Aweasome !"
                            {...register("description")}
                        />

                        <input
                            className="bg-blue-400 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-offset-2 hover:bg-blue-600 hover:shadow-lg cursor-pointer py-2 rounded-full text-lg"
                            value="Add Medicine"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Review;
import React, { useEffect, useState } from 'react'
import useAuth from '../../../hooks/useAuth'
import { GiWaterRecycling } from "react-icons/gi";
import { ImCheckmark } from "react-icons/im";
import { MdCancel } from "react-icons/md";
import useMethods from '../../../hooks/useMethods'

const MyOrders = () => {

    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    const { cancelOrder, updateUI } = useMethods()

    // getting order data by user email
    useEffect(() => {

        const uri = `https://floating-peak-99575.herokuapp.com/purchase?email=${user.email}`

        fetch(uri)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email, updateUI])

    return (
        <div>

            <div className="my-container py-20">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl text-lightBlue">
                        Hello, <span className="text-orange">{user.displayName}!</span>
                    </h2>
                    <p className="text-lg text-lightBlue">
                        Your are Sign in as , {user.email}
                    </p>
                </div>

                <div className=" w-2/3 mx-auto text-gray-800">
                    <h3 className="text-2xl md:text-3xl mb-4 mt-8">
                        Your All Booked Items
                    </h3>
                    <div className="flex flex-col space-y-4">
                        {orders.length > 0 ? (
                            orders.map((order, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-center justify-between space-x-2 shadow-md hover:shadow-lg rounded-md py-6 px-10 ${order.status === "pending"
                                        ? "bg-red-50"
                                        : "bg-green-100"
                                        } text-2xl`}
                                >
                                    <img
                                        src={order.img}
                                        alt=""
                                        className="w-20 h-20 rounded-full"
                                    />

                                    <div className="">
                                        <h4>{order?.title}</h4>
                                        <p
                                            className={`${order.status === "pending"
                                                ? "text-yellow-600"
                                                : "text-green-600"
                                                } text-base`}
                                        >
                                            Status: <span>{order?.status}</span>
                                            {order.status === "pending" ? (
                                                <GiWaterRecycling className="inline-block ml-1" />
                                            ) : (
                                                <ImCheckmark className="inline-block ml-1 " />
                                            )}
                                        </p>
                                    </div>

                                    <div
                                        onClick={() => cancelOrder(order._id)}
                                        className="flex  flex-col md:flex-row space-x-3 items-center bg-orange text-white px-4 py-1 rounded-full text-base"
                                    >
                                        <MdCancel className="text-red-300 text-2xl md:text-base" />
                                        <span className="hidden md:block">
                                            <button className="text-white bg-red-700 rounded-md px-5 py-3 hover:bg-red-500 ">Cancel Order</button>
                                        </span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <h2 className="text-center text-orange text-4xl">
                                Your Cart is empty!!
                            </h2>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;
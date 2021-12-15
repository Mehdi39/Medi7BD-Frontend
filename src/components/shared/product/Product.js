import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Buy from '../../pages/purchase/Buy';
import Purchase from '../../pages/purchase/Purchase';

const Product = ({ m, setPurchaseSuccess}) => {
    const { _id, product_name, type, company_name, price, in_stock, generic, mg, img } = m
    const [ open, setOpen ] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)


    return (
        <div className="flex m-2 px-3 bg-blue-100 rounded-md">
            <div className="flex-none w-48 relative">
                <img src={img} alt="" className="rounded-xl p-5 inset-0 w-full h-full object-cover" />
            </div>
            <form className="flex-auto p-6">
                <div className="flex flex-wrap">
                    <h1 className="flex-auto text-xl font-semibold">
                        {product_name}
                    </h1>
                    <div className="text-xl font-semibold text-gray-500">
                        tk {price}
                    </div>
                    <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
                        {in_stock > 0 ? <p className="text-blue-600">In Stock</p> : <p className="text-red-600">Out of Stock</p>}
                    </div>
                </div>
                <div className="flex items-baseline mt-4 mb-6">
                    <div className="space-x-2 flex">
                        <label>
                            <input className="w-9 h-9 flex items-center justify-center bg-gray-100 rounded-lg" name="size" type="radio" value="xs" checked></input>
                            {mg} mg
                        </label>
                    </div>
                    <div className="ml-auto text-sm text-gray-500 underline"><Link to='/'>Medicine Guide</Link></div>
                </div>
                <div className="flex space-x-3 mb-4 text-sm font-medium">
                    <div className="flex-auto flex space-x-3">
                        <Link to={"/details/" + _id} className="w-1/2 flex items-center justify-center rounded-md bg-green-500 text-white"><button>Details</button></Link>

                        <button className="w-1/2 flex items-center justify-center rounded-md bg-blue-300 text-white" type="button">Add to bag</button>
                    </div>
                    <button className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
                        <svg width="20" height="20" fill="currentColor">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                    </button>
                </div>
                <p className="text-sm text-gray-500">
                    Free shipping on all over the world.
                </p>
            </form>
            {/* <Buy
                m={m}
                open={open}
                handleClose={handleClose}
                setPurchaseSuccess={setPurchaseSuccess}
            ></Buy> */}
            {/* <Purchase
                
            ></Purchase> */}
        </div>
    );
};

export default Product;
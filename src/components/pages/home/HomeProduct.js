import React, { useState, useEffect } from 'react';
import Product from '../../shared/product/Product';

const HomeProduct = () => {
    // initial values
    const [medicines, setMedicines] = useState([])

    // getting exact 6 medicine data
    const uri = 'https://floating-peak-99575.herokuapp.com/medicine'
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, [])

    return (
        <div className="my-5">
            <h2 className="text-green-500 text-5xl text-center font-bold">{"< Only Paracetamol is Real >"}</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3 my-6">
                {
                    medicines.map(m => <Product key={m._id} m={m} ></Product>)
                }
            </div>
        </div>

    );
};

export default HomeProduct;
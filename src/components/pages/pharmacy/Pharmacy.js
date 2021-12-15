import React, { useState, useEffect } from 'react';
import Product from '../../shared/product/Product';
import Banner from '../../shared/banner/Banner';

const Pharmacy = () => {
    const [ medicines, setMedicines ] = useState([])

    useEffect(() => {
        fetch(`https://floating-peak-99575.herokuapp.com/pharmachy`)
            .then(res => res.json())
            .then(data => setMedicines(data))
    }, [])

    return (
        <div className="container mx-auto">
            <Banner />
            <h2 className="text-green-500 text-5xl text-center font-bold my-5">{"< Only Paracetamol is Real >"}</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 my-6">
                {
                    medicines.map(m => <Product key={m._id} m={m}></Product>)
                }
            </div>
        </div>
    );
};

export default Pharmacy;
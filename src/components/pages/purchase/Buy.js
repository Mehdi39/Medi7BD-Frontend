import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth'

const Buy = ({ m, open, handleClose, setPurchaseSuccess }) => {
//     const { product_name, price} = m
//     const { user } = useAuth()

//     const initialInfo = { clientName: user.displayName, email: user.email, phone: '', address: ''}
//     const [ purchaseInfo, setPurchaseInfo ] = useState(initialInfo)

//     const handleOnBlur = e => {
//         const field = e.target.name
//         const value = e.target.value
//         const newInfo = { ...purchaseInfo}
//         newInfo[field] = value
//         setPurchaseInfo(newInfo)
//     }

//    const handleBookSubmit = e => {
//         const purchased = {

//             ...purchaseInfo,
//             price,
//             medicineName: name
//         }

//         fetch('http://localhost:5000/purchase', {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(purchased)
//         }).then(res => res.json()).then(data => {
//             if (data.insertedId) {
//                 setPurchaseSuccess(true);
//                 handleClose();
//             }
//         })
//         e.preventDefault();
//     }

    return (
        <div>
            buy
        </div>
    );
};

export default Buy;
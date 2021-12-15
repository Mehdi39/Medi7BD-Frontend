import React from 'react';
import Banner from '../../shared/banner/Banner';
import MedicalServices from '../../shared/medicalServices/MedicalServices';
import Review from '../../shared/review/Review';
import HomeProduct from './HomeProduct';

const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner/>
            <HomeProduct />
            <MedicalServices />
            <Review />
        </div>
    );
};

export default Home;
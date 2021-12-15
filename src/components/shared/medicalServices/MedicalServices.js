import React from 'react';
import heartbeat from '../../../img/heartbeat.png'
import doctor from '../../../img/doctor.jpg'
import professionalDoctors from '../../../img/01_professional_doctors.png'
import emergencyCare from '../../../img/02_emergency_care.png'
import exclusiveBloocBank from '../../../img/03_exclusive_blood_bank.png'
import hoursService from '../../../img/04_24_hours_service.png'
import medicalCounseling from '../../../img/05_medical_counseling.png'
import RehabilitionCenter from '../../../img/05_rehabilition_center.png'
import specialCareUnit from '../../../img/07_special_care_unit.png'
import inhousePharmecy from '../../../img/08_inhouse_pharmecy.png'

const MedicalServices = () => {
    return (
        <div>
            <div>
            <h2 className="text-green-500 text-5xl text-center font-bold">{"< Medical Services >"}</h2>

                <img className="mx-auto w-10" src={heartbeat} alt="" />
            </div>
            <div className=' my-8 grid grid-cols-3 justify-items-center'>
                <div className="pt-8 flex flex-col text-right">
                    <div className='flex my-2'>
                        <div className='pt-5'>
                            <h4 className="font-bold text-gray-600 text-xl text-right">Professional Doctors</h4>
                        </div>
                        <div className=''>
                            <span className='block w-20 h-20 mx-4 shadow-lg rounded-full'>
                            <img src={professionalDoctors} alt="" className='p-6'/>
                            </span>
                        </div>
                    </div>
                    <div className='flex my-2'>
                        <div className='pt-5'>
                            <h4 className="font-bold text-gray-600 text-xl">Emergency Care</h4>
                        </div>
                        <div className=''>
                            <span className='block w-20 h-20 mx-4 shadow-lg rounded-full'>
                            <img src={emergencyCare} alt="" className='p-6'/>
                            </span>
                        </div>
                    </div>
                    <div className='flex my-2'>
                        <div className='pt-5'>
                            <h4 className="font-bold text-gray-600 text-xl">24 Hours Service</h4>
                        </div>
                        <div className=''>
                            <span className='block w-20 h-20 mx-4 shadow-lg rounded-full'>
                            <img src={hoursService} alt="" className='p-6'/>
                            </span>
                        </div>
                    </div>
                    <div className='flex my-2'>
                        <div className='pt-5'>
                            <h4 className="font-bold text-gray-600 text-xl">Exclusive Blood Bank</h4>
                        </div>
                        <div className=''>
                            <span className='block w-20 h-20 mx-4 shadow-lg rounded-full'>
                            <img src={exclusiveBloocBank} alt="" className='p-6'/>
                            </span>
                        </div>
                    </div>

                </div>
                {/* Doctor imag */}
                <div className='p-6 '>
                    <img src={doctor} alt="doctor_img" className='w-72'/>
                </div>
                <div className="pt-8 flex flex-col text-right">
                    <div className='flex my-2'>
                        <div className=''>
                            <span className='block w-20 h-20 mx-4 shadow-lg rounded-full'>
                            <img src={medicalCounseling} alt="" className='p-6'/>
                            </span>
                        </div>
                        <div className='pt-5'>
                            <h4 className="font-bold text-gray-600 text-xl">Medical Counseling</h4>
                        </div>
                    </div>
                    <div className='flex my-2'>
                        <div className=''>
                            <span className='block w-20 h-20 mx-4 shadow-lg rounded-full'>
                            <img src={RehabilitionCenter} alt="" className='p-6'/>
                            </span>
                        </div>
                        <div className='pt-5'>
                            <h4 className="font-bold text-gray-600 text-xl">Rehabilition Center</h4>
                        </div>
                    </div>
                    <div className='flex my-2'>
                        <div className=''>
                            <span className='block w-20 h-20 mx-4 shadow-lg rounded-full'>
                            <img src={specialCareUnit} alt="" className='p-6'/>
                            </span>
                        </div>
                        <div className='pt-5'>
                            <h4 className="font-bold text-gray-600 text-xl text-right">Spacial Care Unit</h4>
                        </div>
                    </div>
                    <div className='flex my-2 text-right'>
                        <div className=''>
                            <span className='block w-20 h-20 mx-4 shadow-lg rounded-full'>
                            <img src={inhousePharmecy} alt="" className='p-6'/>
                            </span>
                        </div>
                        <div className='pt-5'>
                            <h4 className="font-bold text-gray-600 text-xl ">Inhouse Pharmecy</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedicalServices;
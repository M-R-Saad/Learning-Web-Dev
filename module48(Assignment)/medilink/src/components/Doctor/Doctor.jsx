import React from 'react';
import { PiTrademarkRegistered } from "react-icons/pi";
import { Link } from 'react-router';

const Doctor = ({ doctor }) => {
    return (
        <div className='bg-white p-8 rounded-2xl flex flex-col justify-center gap-4'>
            <img className='h-[455px] w-auto rounded-2xl object-cover' src={doctor.DoctorImage} alt={doctor.Name} />
            <div>
                <button className='btn rounded-full text-green-500 border-green-300 bg-green-50 hover:bg-green-100 mr-4'>
                    Available
                </button>
                <button className='btn rounded-full text-blue-500 border-blue-300 bg-blue-50 hover:bg-blue-100'>
                    {doctor.Experience}+ Years Experience
                </button>
            </div>
            <h3 className='font-extrabold text-2xl'>
                {doctor.Name}
            </h3>
            <div>
                <p className='text-lg font-medium text-[#0F0F0F75]'>
                    {doctor.Education}
                </p>
                <p className='text-lg font-medium text-[#0F0F0F75]'>
                    {doctor.Specialty}
                </p>
            </div>
            <div className='flex flex-col gap-4 pt-4 border-t-2 border-dashed border-[#0F0F0F30]'>
                <p className='text-lg font-medium text-[#0F0F0F99] flex items-center gap-2'>
                    <PiTrademarkRegistered size={24} />
                    Reg No: {doctor.RegistrationNumber}
                </p>
                <Link to={`/doctors/${doctor.id}`} className='block'>
                    <button className='btn rounded-full w-full text-lg py-5 text-blue-500 border-blue-300 bg-white hover:bg-blue-100'>
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Doctor;
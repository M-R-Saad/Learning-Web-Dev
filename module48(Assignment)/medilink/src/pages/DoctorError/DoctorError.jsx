import React from 'react';
import { useParams, Link } from 'react-router';
import { FiPlusCircle } from "react-icons/fi";
import { Helmet } from "react-helmet";
import { useLocation } from 'react-router';


const DoctorError = () => {

    let location = useLocation()

    const { id } = useParams();

    return (
        <div className='container mx-auto bg-white p-12 my-20 flex flex-col justify-center items-center gap-8 rounded-3xl'>
            <Helmet>
                <title>MediLink | {location.pathname.split('/').pop().toUpperCase()}</title>
            </Helmet>
            <h2 className='text-5xl font-extrabold text-red-600'>
                No Doctor Found!
            </h2>
            <p className='text-lg text-center text-[#0F0F0F99]'>
                The doctor with the specified registration number does not exist. Please check the registration number and try again.
            </p>

            <div className='flex justify-center items-center gap-2'>
                <FiPlusCircle size={24} />
                <p className='text-xl font-medium'>
                    {id}
                </p>
            </div>
            <Link to='/'>
                <button className={`btn btn-info text-white rounded-full border-none text-lg py-6 w-48`}>
                    View All Doctors
                </button>
            </Link>
        </div>
    );
};

export default DoctorError;
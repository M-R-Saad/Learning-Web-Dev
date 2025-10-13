import React from 'react';

const Statistics = () => {
    return (
        <div className='max-w-7xl mx-auto flex flex-col justify-center items-center gap-6 mb-20'>
            <h2 className='text-3xl font-extrabold'>
                We Provide Best Medical Services
            </h2>
            <p className='font-medium w-3/4 text-center'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. 
            </p>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                <div className='bg-white px-16 py-10 rounded-2xl'>
                    <img className='w-16' src="success-doctor.png" alt="Success Doctor" />
                    <h2 className='text-5xl font-extrabold my-4'>
                        199+
                    </h2>
                    <p className='font-semibold text-[#0F0F0F99]'>
                        Total Doctors
                    </p>
                </div>
                <div className='bg-white px-16 py-10 rounded-2xl'>
                    <img className='w-16' src="success-review.png" alt="Success Review" />
                    <h2 className='text-5xl font-extrabold my-4'>
                        467+
                    </h2>
                    <p className='font-semibold text-[#0F0F0F99]'>
                        Total Reviews
                    </p>
                </div>
                <div className='bg-white px-16 py-10 rounded-2xl'>
                    <img className='w-16' src="success-patients.png" alt="Success Patient" />
                    <h2 className='text-5xl font-extrabold my-4'>
                        1900+
                    </h2>
                    <p className='font-semibold text-[#0F0F0F99]'>
                        Total Patients
                    </p>
                </div>
                <div className='bg-white px-16 py-10 rounded-2xl'>
                    <img className='w-16' src="success-staffs.png" alt="Success Staff" />
                    <h2 className='text-5xl font-extrabold my-4'>
                        300+
                    </h2>
                    <p className='font-semibold text-[#0F0F0F99]'>
                        Total Staffs
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
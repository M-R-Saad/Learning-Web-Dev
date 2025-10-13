import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {

    const doctorData = useLoaderData();
    // console.log(doctorData);

    const [visibleDoctors, setVisibleDoctors] = useState(6);

    const showMoreDoctors = () => {
        setVisibleDoctors(visibleDoctors + 6);
    }

    // const showLessDoctors = () => {
    //     setVisibleDoctors(6);
    // }

    return (
        <div className='max-w-7xl mx-auto flex flex-col justify-center items-center gap-8 mb-20'>
            <h2 className='text-4xl font-extrabold'>
                Our Best Doctors
            </h2>
            <p className='font-medium w-3/4 text-center'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    doctorData.slice(0, visibleDoctors).map(doctor => <Doctor key={doctor.id} doctor={doctor} />)
                }
            </div>
            <div className={`${visibleDoctors >= doctorData.length ? "hidden" : "block"}`}>
                <button onClick={showMoreDoctors}
                className='btn btn-info text-lg text-white rounded-full border-none px-8 py-6'>
                    See More +
                </button>
            </div>
        </div>
    );
};

export default Doctors;
import React from 'react';
import { Link } from 'react-router';
import Appointment from '../Appointment/Appointment';

const Appointments = ({ bookedDoctors, handleCancelAppointment }) => {

    return (
        <div>
            {
                bookedDoctors.length > 0 ?
                    <div className='container mx-auto my-20'>
                        <h2 className='text-4xl font-extrabold text-center mb-4'>
                            My Appointments
                        </h2>
                        <p className='text-center text-lg text-gray-600 mb-8'>
                            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                        </p>
                        {
                            bookedDoctors.map(doctor => <Appointment 
                                                            key={doctor.RegistrationNumber}
                                                            doctor={doctor}
                                                            handleCancelAppointment={handleCancelAppointment}
                                                        />
                                                        
                            )
                        }
                    </div>
                :
                    <div className='container mx-auto my-20 p-12  flex flex-col items-center gap-8'>
                        <h2 className='text-4xl font-extrabold text-center'>
                            You Have not Booked any Appointment Yet.
                        </h2>
                        <p className='text-center text-lg text-gray-600'>
                            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
                        </p>
                        <Link to="/">
                            <button className='btn btn-info text-white rounded-full border-none text-lg py-6'>
                                Book an Appointment
                            </button>
                        </Link>  
                    </div>
            }
        </div>
    );
};

export default Appointments;
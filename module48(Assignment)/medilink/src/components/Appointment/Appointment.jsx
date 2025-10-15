import React from 'react';

const Appointment = ({ doctor, handleCancelAppointment }) => {
    return (
        <div className='bg-white p-8 rounded-2xl flex flex-col justify-center gap-8 mb-8'>
            <div className='flex justify-between items-center pb-6 border-b-2 border-dashed border-[#0F0F0F30]'>
                <div className='flex flex-col gap-2'>
                    <h3 className='font-extrabold text-2xl'>
                        {doctor.Name}
                    </h3>
                    <p className='text-lg font-medium text-[#0F0F0F75]'>
                        {doctor.Specialty} | {doctor.Education}
                    </p>
                </div>
                <div>
                    <p className='text-lg font-medium text-[#0F0F0F75]'>
                        Appointment Fee: {doctor.ConsultationFee} Taka + VAT
                    </p>
                </div>
            </div>
            <button onClick={() => handleCancelAppointment(doctor.RegistrationNumber)}
                className='btn btn-outline btn-error rounded-full hover:text-white text-lg py-6'>
                Cancel Appointment
            </button>
        </div>
    );
};

export default Appointment;
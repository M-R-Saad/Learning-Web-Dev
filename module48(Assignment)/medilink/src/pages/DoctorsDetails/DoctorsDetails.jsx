import React, { useContext } from 'react';
import { Link, useLoaderData, useLocation } from 'react-router';
import { useParams } from 'react-router';
import { PiTrademarkRegistered } from "react-icons/pi";
import { TbAlertHexagon } from "react-icons/tb";
import { getBookingsLS } from '../../utilities/addBooking';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import { BookedContext } from '../../Context/Context';
import { Helmet } from "react-helmet";

const DoctorsDetails = () => {

    let location = useLocation()

    const doctorsData = useLoaderData();
    const { id } = useParams();
    const doctor = doctorsData.find(doc => doc.RegistrationNumber === id);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();
    const todayName = days[today];

    const { addBooking, isDoctorBooked } = useContext(BookedContext);
    const isBooked = isDoctorBooked(doctor.RegistrationNumber);

    const handleBookAppointment = (registrationNumber) => {
        const bookings = getBookingsLS();

        if (bookings.includes(registrationNumber)) {
            toast.error(`You have already booked an appointment with ${doctor.Name}.`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                style: {
                    fontFamily: getComputedStyle(document.documentElement).getPropertyValue('--toast-font') || 'inherit',
                    fontWeight: '500',
                    fontSize: '16px'
                },
            });
        }
        else {
            addBooking(registrationNumber);

            toast.success(`Appointment booked with ${doctor.Name} Successfully!`, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                style: {
                    fontFamily: getComputedStyle(document.documentElement).getPropertyValue('--toast-font') || 'inherit',
                    fontWeight: '500',
                    fontSize: '16px'
                },
            });
        }
    }

    return (
        <div className='max-w-7xl mx-auto flex flex-col gap-8 my-20'>
            <Helmet>
                <title>MediLink | {location.pathname.split('/').pop().toUpperCase()}</title>
            </Helmet>
            <div className='bg-white rounded-3xl px-40 py-18 text-center'>
                <h3 className='text-3xl font-extrabold mb-4'>
                    Doctor’s Profile Details
                </h3>
                <p className='text-[#0F0F0F99]'>
                    Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet mattis donec dignissim volutpat.
                </p>
            </div>
            <div className='bg-white p-12 rounded-3xl flex gap-12 items-center'>
                <div>
                    <img className='h-[455px] w-auto rounded-2xl object-cover' src={doctor.DoctorImage} alt={doctor.Name} />
                </div>
                <div className='flex-1'>
                    <h2 className='font-extrabold text-4xl'>
                        {doctor.Name}
                    </h2>
                    <p className='text-lg font-medium text-[#0F0F0F75] mt-4'>
                        {doctor.Education}
                    </p>
                    <p className='text-lg font-medium text-[#0F0F0F75] my-2'>
                        {doctor.Specialty}
                    </p>
                    <p className='text-lg font-medium text-[#0F0F0F75] my-4'>
                        Working at: <br />
                        <span className='font-semibold text-black'>
                            {doctor.WorkingAt}
                        </span>
                    </p>
                    <div className='border-y-2 border-dashed border-[#0F0F0F30] py-4 mt-8'>
                        <p className='text-lg font-medium text-[#0F0F0F99] flex items-center gap-2'>
                            <PiTrademarkRegistered size={24} />
                            Reg No: {doctor.RegistrationNumber}
                        </p>
                    </div>
                    <div className='flex items-center gap-4 my-4'>
                        <span className='font-bold'>Availability:</span>
                        {
                            doctor.Availability.map((slot, index) => (
                                <div key={index} className='inline-block'>
                                    <button className='btn rounded-full text-sm text-yellow-500 border-yellow-300 bg-yellow-50 hover:bg-yellow-100'>
                                        {slot}
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                    <div>
                        <span className='font-bold mr-4'>Consultation Fee:</span>
                        <span className='font-bold text-blue-500'>Taka: {doctor.ConsultationFee}</span>
                        <span className='text-[#0F0F0F75] font-semibold mx-2'>(incl. VAT)</span>
                        <span className='text-blue-500'>Per Consultation</span>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-2xl p-8 flex flex-col justify-center'>
                <h2 className='text-3xl text-center font-extrabold border-b-2 border-dashed border-[#0F0F0F30] w-full pb-4'>
                    Book an Appointment
                </h2>
                <div className='flex justify-between items-center border-b-2 border-[#0F0F0F30] py-4 mb-6'>
                    <h3 className='font-bold'>
                        Availability
                    </h3>
                    {
                        doctor.Availability.includes(todayName) ?
                            <button className='btn rounded-full text-green-500 border-none bg-green-50 hover:bg-green-100'>
                                Doctor Available Today
                            </button>
                            :
                            <button className='btn rounded-full text-red-500 border-none bg-red-50 hover:bg-red-100'>
                                Doctor Not Available Today
                            </button>
                    }
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex gap-2 items-center justify-center rounded-full text-yellow-500 border-yellow-300 bg-yellow-50 py-2 font-medium'>
                        <TbAlertHexagon size={22} />
                        <p>
                            Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                        </p>
                    </div>
                    {
                        doctor.Availability.includes(todayName) ? (
                            !isBooked ?
                                <Link to='/myBookings'>
                                    <button onClick={() => handleBookAppointment(doctor.RegistrationNumber)}
                                        className={`${doctor.Availability.includes(todayName) ? 'btn-info' : 'btn-disabled'} btn text-white rounded-full border-none text-lg py-6 w-full`}>
                                        Book Appointment Now
                                    </button>
                                </Link>
                            :
                                <button onClick={() => handleBookAppointment(doctor.RegistrationNumber)}
                                    className={`${doctor.Availability.includes(todayName) ? 'btn-info' : 'btn-disabled'} btn text-white rounded-full border-none text-lg py-6 w-full`}>
                                    Book Appointment Now
                                </button>
                        ) 
                        : 
                        (
                            <button
                                disabled
                                className="btn-disabled btn text-white rounded-full border-none text-lg py-6 w-full"
                            >
                                Book Appointment Now
                            </button>
                        )
                    }
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default DoctorsDetails;
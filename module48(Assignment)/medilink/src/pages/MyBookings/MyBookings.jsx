import React, { useState, useContext } from 'react';
import { getBookingsLS } from '../../utilities/addBooking';
import { Link, useLoaderData, useLocation } from 'react-router';
import Appointments from './../../components/Appointments/Appointments';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { ToastContainer, Bounce, toast } from 'react-toastify';
import { BookedContext } from '../../Context/Context';
import { Helmet } from "react-helmet";


const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const MyBookings = () => {

    let location = useLocation()

    const doctorsData = useLoaderData();
    const bookings = getBookingsLS();
    const { removeBooking } = useContext(BookedContext);

    const [bookedDoctors, setBookedDoctors] = useState(doctorsData.filter(doctor => bookings.includes(doctor.RegistrationNumber)));

    const handleCancelAppointment = (registrationNumber) => {

        removeBooking(registrationNumber);
        setBookedDoctors(prevDoctors => prevDoctors.filter(doctor => doctor.RegistrationNumber !== registrationNumber));
        
        toast.info('Appointment cancelled successfully.', {
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

    return (
        <div >
            <Helmet>
                <title>MediLink | {location.pathname.split('/').pop().toUpperCase()}</title>
            </Helmet>
            <div className={`${bookedDoctors.length > 0 ? 'flex' : 'hidden'} container mx-auto bg-white py-12 rounded-3xl my-20 justify-center`}>
                <BarChart
                    width={1260}
                    height={630}
                    data={bookedDoctors}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 60,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="Name"
                        interval={0}
                        tick={({ x, y, payload }) => {
                            // Split long book names into max 2 lines
                            const words = payload.value.split(' ');
                            const lines = [];
                            let line = '';
                            words.forEach(word => {
                                if ((line + word).length > 16) {
                                    lines.push(line);
                                    line = word + ' ';
                                } else {
                                    line += word + ' ';
                                }
                            });
                            lines.push(line);

                            // Limit to 2 lines, join remaining words in the last line
                            if (lines.length > 2) {
                                const first = lines[0];
                                const rest = lines.slice(1).join(' ').trim();
                                lines.length = 0;
                                lines.push(first, rest);
                            }

                            return (
                                <g transform={`translate(${x},${y + 10})`}>
                                    {lines.map((text, i) => (
                                        <text
                                            key={i}
                                            x={0}
                                            y={i * 14}
                                            textAnchor="middle"
                                            fill="#666"
                                            fontSize={12}
                                        >
                                            {text.trim()}
                                        </text>
                                    ))}
                                </g>
                            );
                        }}
                    />
                    <YAxis />
                    <Bar dataKey="ConsultationFee" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {bookedDoctors.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={getRandomColor()} />
                        ))}
                    </Bar>
                </BarChart>
            </div>

            <Appointments bookedDoctors={bookedDoctors} handleCancelAppointment={handleCancelAppointment} />
            <ToastContainer />
        </div>
    );
};

export default MyBookings;
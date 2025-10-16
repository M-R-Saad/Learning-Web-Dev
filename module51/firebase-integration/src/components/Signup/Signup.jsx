import React from 'react';
import { Link } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { auth } from '../../utilities/firebase_init';
import AuthContext from '../../contexts/AuthContext';

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const { createUser } = React.useContext(AuthContext);

    const handleFormSubmit = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const fullname = event.target.fullname.value;
        const photo = event.target.photo.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;

        console.log(email, password);

        setErrorMsg('');
        setSuccessMsg(false);

        if (!terms) {
            setErrorMsg('You must accept the terms and conditions!');
            return;
        }

        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         console.log(result.user);
        //         // event.target.reset();

        //         sendEmailVerification(result.user)
        //             .then(() => {
        //                 setSuccessMsg(true);
        //                 alert('Verification email sent. Please check your inbox (and spam).');
        //                 //event.target.reset();
        //             })
        //             .catch(err => {
        //                 console.error('sendEmailVerification error:', err);
        //                 setErrorMsg(err.message || 'Failed to send verification email.');
        //             });

        //         updateProfile(auth.currentUser, {
        //             displayName: fullname,
        //             photoURL: photo
        //         }).then(() => {
        //             console.log('Profile updated successfully.');
        //         }).catch(err => {
        //             console.error('updateProfile error:', err);
        //             setErrorMsg(err.message || 'Failed to update profile.');
        //         });

        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //         setErrorMsg(error.message);
        //     });
        
        createUser(email, password)
            .then(result => {
                // console.log(result.user);
                // event.target.reset();
                sendEmailVerification(result.user)
                    .then(() => {
                        setSuccessMsg(true);
                        alert('Verification email sent. Please check your inbox (and spam).');
                        //event.target.reset();
                    })
                    .catch(err => {
                        console.error('sendEmailVerification error:', err);
                        setErrorMsg(err.message || 'Failed to send verification email.');
                    });

                updateProfile(auth.currentUser, {
                    displayName: fullname,
                    photoURL: photo
                }).then(() => {
                    console.log('Profile updated successfully.');
                }).catch(err => {
                    console.error('updateProfile error:', err);
                    setErrorMsg(err.message || 'Failed to update profile.');
                });
            })
            .catch(error => {
                console.error('Error:', error);
                setErrorMsg(error.message);
            });
    }

    return (
        <form onSubmit={handleFormSubmit} className='flex flex-col justify-between items-center gap-8 max-w-md mx-auto border px-16 py-16 my-20 rounded-xl'>
            <div className='text-center space-y-2'>
                <h2 className='text-3xl font-semibold'>Register</h2>
                <p className='text-gray-300'>Create your new account</p>
            </div>

            <div className='w-full'>
                {successMsg && <p className='text-green-400 text-center py-2 rounded'>User has been created successfully.</p>}
                {errorMsg && <p className='text-red-400 text-center py-2 rounded'>{errorMsg}</p>}
            </div>

            <div className='w-full'>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </g>
                    </svg>
                    <input type="email" name='email' placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">Enter valid email address</div>
            </div>

            <div className='w-full'>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="12" cy="7" r="4"></circle>
                            <path d="M5.5 21a8.38 8.38 0 0 1 13 0"></path>
                        </g>
                    </svg>
                    <input type="text" name='fullname' placeholder="John Doe" required />
                </label>
                <div className="validator-hint hidden">Enter valid full name</div>
            </div>

            <div className='w-full'>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path d="M21 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11z"></path>
                            <polyline points="17 21 17 13 7 13 7 21"></polyline>
                            <polyline points="7 3 7 8 15 8"></polyline>
                        </g>
                    </svg>
                    <input type="text" name='photo' placeholder="https://example.com/photo.jpg" required />
                </label>
                <div className="validator-hint hidden">Enter valid photo URL</div>
            </div>

            <div className='w-full'>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <path
                                d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                            ></path>
                            <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                        </g>
                    </svg>
                    <div className='relative'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            required
                            placeholder="Password"
                            minLength="8"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                        />
                        <button onClick={() => setShowPassword(!showPassword)} className='absolute top-1/2 -translate-y-1/2 -right-29 cursor-pointer btn btn-ghost btn-sm border-none opacity-60'>
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </button>
                    </div>
                </label>
                <p className="validator-hint hidden">
                    Must be more than 8 characters, including
                    <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
                </p>
            </div>

            <label className="label cursor-pointer">
                <input type="checkbox" name='terms' className="checkbox checkbox-success" />
                Accept <span className='font-semibold'>Terms and Conditions.</span>
            </label>

            <button className="btn bg-white text-black border-[#e5e5e5] w-full">
                <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                Sign Up with Email
            </button>

            <div>
                <p>
                    Already have an account? <Link to="/login" className='font-semibold text-blue-500 hover:underline'>Login</Link>
                </p>
            </div>

            <div className='flex flex-col gap-4 w-full'>
                <p className='text-center text-gray-300'>
                    Or continue with
                </p>
                <button className="btn bg-white text-black border-[#e5e5e5] w-full">
                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Sign Up with Google
                </button>

                <button className="btn bg-black text-white border-black w-full">
                    <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
                    Sign Up with GitHub
                </button>
            </div>
        </form>
    );
};

export default Signup;
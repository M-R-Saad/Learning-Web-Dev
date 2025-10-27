import React from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { createUser, setUser } = React.use(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, photo, email, password);

        createUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);

            setUser(user);

            // Update user profile
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            }).then(() => {
                console.log('User profile updated successfully');
            }).catch((error) => {
                console.error('Error updating user profile:', error);
            });
        })
        .catch((error) => {
            console.error(error);
        });
    }

    return (
        <div className='bg-white max-w-xl mx-auto mt-22 py-20 rounded-md shadow-lg'>
            <h2 className='text-2xl font-semibold text-center text-[#403F3F]'>
                Register your Account
            </h2>
            <hr className='mx-10 my-12 text-base-300' />
            <form onSubmit={handleRegister} className='max-w-md mx-auto flex flex-col gap-6'>
                <fieldset className="fieldset">
                    <label className="text-sm font-semibold text-[#403F3F] mb-2">Your Name</label>
                    <input name='name' type="text" className="input border-none bg-base-200 text-sm text-accent w-full px-4 py-6 mb-4" placeholder="Enter your name" />

                    <label className="text-sm font-semibold text-[#403F3F] mb-2">Photo URL</label>
                    <input name='photo' type="text" className="input border-none bg-base-200 text-sm text-accent w-full px-4 py-6 mb-4" placeholder="Enter your photo url" />

                    <label className="text-sm font-semibold text-[#403F3F] mb-2">Email Address</label>
                    <input name='email' type="email" className="input border-none bg-base-200 text-sm text-accent w-full px-4 py-6 mb-4" placeholder="Enter your email address" />

                    <label className="text-sm font-semibold text-[#403F3F] mb-2">Password</label>
                    <input name='password' type="password" className="input border-none bg-base-200 text-sm text-accent w-full px-4 py-6 mb-4" placeholder="Enter your password" />

                    <label className="flex items-center">
                        <input type="checkbox" defaultChecked className="checkbox checkbox-primary rounded-sm" />
                        <p className="ml-2 text-sm text-accent">Accept <span className="font-semibold">Terms and Conditions</span></p>
                    </label>

                    <button type='submit' className="btn btn-primary btn-lg mt-6">Register</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;
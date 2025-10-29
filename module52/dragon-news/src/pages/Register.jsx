import React from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const [nameError, setNameError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [checkboxError, setCheckboxError] = React.useState('');

    const { createUser, setUser, updateUser } = React.use(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        setNameError('');
        setPasswordError('');
        setEmailError('');
        setCheckboxError('');
        
        const name = event.target.name.value;
        if(name.length < 4){
            setNameError('Name must be at least 4 characters long.');
            return;
        }

        const photo = event.target.photo.value;

        const email = event.target.email.value;
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            setEmailError('Please provide a valid email address.');
            return;
        }

        const password = event.target.password.value;
        if(password.length < 6){
            setPasswordError('Password must be at least 6 characters.');
            return;
        }

        const checkbox = event.target.checkbox.checked;
        if(checkbox !== true){
            setCheckboxError('You must accept the terms and conditions');
            return;
        }

        // console.log(name, photo, email, password);

        createUser(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // console.log(user);

            // Update user profile
            updateUser({
                displayName: name,
                photoURL: photo
            }).then(() => {
                setUser({ ...user, displayName: name, photoURL: photo });
                console.log('User profile updated successfully.');
                
                navigate('/');
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
                    <label className="text-sm font-semibold text-[#403F3F] mb-1">Your Name</label>
                    <input name='name' type="text" className="input border-none bg-base-200 text-sm text-accent w-full px-4 py-6" placeholder="Enter your name" required />
                    <p className='text-red-500 text-sm mb-3'>{nameError}</p>

                    <label className="text-sm font-semibold text-[#403F3F] mb-1">Photo URL</label>
                    <input name='photo' type="text" className="input border-none bg-base-200 text-sm text-accent w-full px-4 py-6 mb-4" placeholder="Enter your photo url" required />

                    <label className="text-sm font-semibold text-[#403F3F] mb-1">Email Address</label>
                    <input name='email' type="text" className="input border-none bg-base-200 text-sm text-accent w-full px-4 py-6" placeholder="Enter your email address" required />
                    <p className='text-red-500 text-sm mb-3'>{emailError}</p>

                    <label className="text-sm font-semibold text-[#403F3F] mb-1">Password</label>
                    <input name='password' type="text" className="input border-none bg-base-200 text-sm text-accent w-full px-4 py-6" placeholder="Enter your password" required />
                    <p className='text-red-500 text-sm mb-3'>{passwordError}</p>

                    <label className="flex items-center">
                        <input name='checkbox' type="checkbox" defaultChecked className="checkbox checkbox-primary rounded-sm" />
                        <p className="ml-2 text-sm text-accent">Accept <span className="font-semibold">Terms and Conditions</span></p>
                    </label>

                    {checkboxError && <p className='text-red-500 text-sm mt-4 text-center'>{checkboxError}</p>}

                    <button type='submit' className="btn btn-primary btn-lg mt-6">Register</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Register;